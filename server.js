const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const QRCode = require('qrcode');

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure directories exist
const dataDir = path.join(__dirname, 'data');
const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const noCacheStatic = {
  etag: false,
  setHeaders: (res) => {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
};
app.use('/js', express.static(path.join(__dirname, 'js'), noCacheStatic));
app.use('/css', express.static(path.join(__dirname, 'css'), noCacheStatic));
app.use(express.static(path.join(__dirname, 'public'), noCacheStatic));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// Multer Storage for Payment Screenshots
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '.jpg';
    const cleanName = `payment_${Date.now()}_${Math.round(Math.random() * 1e5)}${ext}`;
    cb(null, cleanName);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files are allowed!'), false);
  }
});

// JSON Helper Functions
const getFilePath = (file) => path.join(dataDir, file);

function readJson(file, fallback = []) {
  try {
    const data = fs.readFileSync(getFilePath(file), 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return fallback;
  }
}

function writeJson(file, data) {
  fs.writeFileSync(getFilePath(file), JSON.stringify(data, null, 2), 'utf8');
}

// -------------------------------------------------------------
// PUBLIC & SETTINGS APIS
// -------------------------------------------------------------

// Get Store Settings
app.get('/api/settings', (req, res) => {
  const settings = readJson('settings.json', {});
  res.json({ success: true, settings });
});

// -------------------------------------------------------------
// PRODUCTS APIS
// -------------------------------------------------------------

// List Products
app.get('/api/products', (req, res) => {
  const products = readJson('products.json', []);
  res.json({ success: true, products });
});

// -------------------------------------------------------------
// ORDER & PAYMENT APIS
// -------------------------------------------------------------

// Create New Order
app.post('/api/orders', async (req, res) => {
  try {
    const { customer, items } = req.body;

    if (!customer || !customer.name || !customer.phone || !customer.address) {
      return res.status(400).json({ success: false, message: 'Please provide full name, phone number, and delivery address.' });
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, message: 'Your cart is empty. Please select at least one item.' });
    }

    const settings = readJson('settings.json', {});
    const products = readJson('products.json', []);

    // Verify products and calculate safe total on server
    const productMap = new Map(products.map(p => [p.id, p]));
    let subtotal = 0;
    const verifiedItems = [];

    for (const item of items) {
      const prod = productMap.get(item.id);
      if (prod && prod.stock) {
        const qty = Math.max(1, parseInt(item.quantity) || 1);
        const itemTotal = prod.price * qty;
        subtotal += itemTotal;
        verifiedItems.push({
          id: prod.id,
          name: prod.name,
          category: prod.category,
          price: prod.price,
          mrp: prod.mrp,
          quantity: qty,
          total: itemTotal,
          image: prod.image
        });
      }
    }

    if (verifiedItems.length === 0) {
      return res.status(400).json({ success: false, message: 'Selected items are currently out of stock.' });
    }

    const minOrder = settings.minOrderAmount || 0;
    if (subtotal < minOrder) {
      return res.status(400).json({
        success: false,
        message: `Minimum order value is ₹${minOrder}. Your current subtotal is ₹${subtotal}. Please add more items.`
      });
    }

    const deliveryFee = settings.deliveryFee || 0;
    const finalAmount = subtotal + deliveryFee;

    // Generate Order ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `ORD-${Date.now().toString().slice(-6)}-${randomSuffix}`;

    // Generate Standard NPCI UPI Intent String
    // upi://pay?pa=...&pn=...&am=...&cu=INR&tn=...
    const merchantUpi = settings.merchantUpi || 'client@upi';
    const merchantName = settings.merchantName || 'Crackers Store';
    const upiNote = `Order ${orderId}`;

    const upiUrl = `upi://pay?pa=${encodeURIComponent(merchantUpi)}&pn=${encodeURIComponent(merchantName)}&am=${finalAmount.toFixed(2)}&cu=INR&tn=${encodeURIComponent(upiNote)}`;

    // Generate dynamic QR code as Data URI
    const qrCodeDataUrl = await QRCode.toDataURL(upiUrl, {
      width: 320,
      margin: 2,
      color: {
        dark: '#111827',
        light: '#FFFFFF'
      }
    });

    const paymentMethod = req.body.paymentMethod || 'UPI_QR';

    const newOrder = {
      id: orderId,
      createdAt: new Date().toISOString(),
      status: paymentMethod === 'COD' ? 'CONFIRMED' : 'PAYMENT_PENDING',
      customer: {
        name: customer.name.trim(),
        phone: customer.phone.trim(),
        whatsapp: customer.whatsapp ? customer.whatsapp.trim() : customer.phone.trim(),
        address: customer.address.trim(),
        city: customer.city ? customer.city.trim() : '',
        pincode: customer.pincode ? customer.pincode.trim() : '',
        notes: customer.notes ? customer.notes.trim() : ''
      },
      items: verifiedItems,
      subtotal,
      deliveryFee,
      totalAmount: finalAmount,
      payment: {
        method: paymentMethod,
        merchantUpi,
        upiUrl: paymentMethod === 'UPI_QR' ? upiUrl : null,
        utrNumber: null,
        screenshotUrl: null,
        paidAt: null
      }
    };

    const orders = readJson('orders.json', []);
    orders.unshift(newOrder); // newest first
    writeJson('orders.json', orders);

    res.json({
      success: true,
      orderId,
      order: newOrder,
      isCod: paymentMethod === 'COD',
      upiUrl,
      qrCodeDataUrl,
      message: paymentMethod === 'COD' ? 'Order confirmed via Cash on Delivery!' : 'Order created. Please pay with UPI.'
    });
  } catch (err) {
    console.error('Order creation error:', err);
    res.status(500).json({ success: false, message: 'Error processing order: ' + err.message });
  }
});

// Track Orders without Login (by 10-digit Phone Number or Order ID)
app.get('/api/orders/track', (req, res) => {
  const query = (req.query.query || '').trim();
  if (!query) {
    return res.status(400).json({ success: false, message: 'Please provide a Phone Number or Order ID.' });
  }

  const cleanQuery = query.toLowerCase();
  const digitsOnly = query.replace(/\D/g, '');
  const orders = readJson('orders.json', []);

  const matched = orders.filter(o => {
    const matchId = o.id.toLowerCase() === cleanQuery;
    const matchPhone = digitsOnly.length >= 6 && o.customer?.phone && o.customer.phone.replace(/\D/g, '').includes(digitsOnly);
    return matchId || matchPhone;
  });

  if (matched.length === 0) {
    return res.status(404).json({ success: false, message: 'No orders found for this Phone Number or Order ID.' });
  }

  res.json({ success: true, count: matched.length, orders: matched });
});

// Get Single Order Details (for invoice / status tracking)
app.get('/api/orders/:id', (req, res) => {
  const orders = readJson('orders.json', []);
  const order = orders.find(o => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found.' });
  }
  res.json({ success: true, order });
});

// Submit Payment Proof (UTR Number + Screenshot)
app.post('/api/orders/:id/payment', upload.single('screenshot'), (req, res) => {
  try {
    const { id } = req.params;
    const { utrNumber } = req.body;

    if (!utrNumber || utrNumber.trim().length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid 12-digit UTR / Transaction Reference ID from Google Pay or PhonePe.'
      });
    }

    const orders = readJson('orders.json', []);
    const orderIndex = orders.findIndex(o => o.id === id);

    if (orderIndex === -1) {
      return res.status(404).json({ success: false, message: 'Order not found.' });
    }

    const order = orders[orderIndex];
    order.status = 'VERIFICATION_PENDING';
    order.payment.utrNumber = utrNumber.trim();
    order.payment.paidAt = new Date().toISOString();

    if (req.file) {
      order.payment.screenshotUrl = `/uploads/${req.file.filename}`;
    }

    orders[orderIndex] = order;
    writeJson('orders.json', orders);

    res.json({
      success: true,
      message: 'Payment details submitted successfully! The admin will verify and confirm your order.',
      order
    });
  } catch (err) {
    console.error('Payment submit error:', err);
    res.status(500).json({ success: false, message: 'Error updating payment: ' + err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`✨ Crackers E-Commerce Store is LIVE on port ${PORT}`);
  console.log(`👉 Storefront: http://localhost:${PORT}`);
  console.log(`===============================================`);
});
