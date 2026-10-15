// Checkout Logic for POORNIKA CRACKERS
let cart = JSON.parse(localStorage.getItem('crackers_cart') || '[]');
let storeSettings = {};
let generatedOnlineOrder = null;

// DOM Elements
const checkoutBrandTitle = document.getElementById('checkoutBrandTitle');
const checkoutItemsList = document.getElementById('checkoutItemsList');
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const checkoutTotal = document.getElementById('checkoutTotal');
const checkoutValidationAlert = document.getElementById('checkoutValidationAlert');

const btnPlaceCod = document.getElementById('btnPlaceCod');
const btnPayOnline = document.getElementById('btnPayOnline');

const onlineUpiDrawer = document.getElementById('onlineUpiDrawer');
const displayQrAmount = document.getElementById('displayQrAmount');
const displayMerchantInfo = document.getElementById('displayMerchantInfo');
const qrCodeImage = document.getElementById('qrCodeImage');
const mobileUpiLink = document.getElementById('mobileUpiLink');
const gpayDirectLink = document.getElementById('gpayDirectLink');

const paymentVerifyForm = document.getElementById('paymentVerifyForm');
const createdOrderIdInput = document.getElementById('createdOrderId');
const btnSubmitVerification = document.getElementById('btnSubmitVerification');

document.addEventListener('DOMContentLoaded', async () => {
  if (!cart || cart.length === 0) {
    alert('Your cart is empty. Please select a Diwali package first.');
    window.location.href = '/';
    return;
  }

  await loadSettings();
  renderOrderSummary();
  loadSavedProfile();
  setupButtonHandlers();
});

// Load Settings from Server
async function loadSettings() {
  try {
    const res = await fetch('/api/settings');
    const data = await res.json();
    if (data.success && data.settings) {
      storeSettings = data.settings;
      if (checkoutBrandTitle && storeSettings.storeName) {
        checkoutBrandTitle.textContent = storeSettings.storeName;
      }
      if (displayMerchantInfo) {
        displayMerchantInfo.textContent = `Merchant: ${storeSettings.merchantName || 'POORNIKA CRACKERS'} (${storeSettings.merchantUpi || ''})`;
      }
    }
  } catch (err) {
    console.error('Settings load error:', err);
  }
}

// Render Order Summary
function renderOrderSummary() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (checkoutItemsList) {
    checkoutItemsList.innerHTML = cart.map(item => `
      <div class="checkout-item-line">
        <div>
          <div class="checkout-item-title">${item.name}</div>
          <div class="checkout-item-sub">₹${item.price.toLocaleString('en-IN')} × ${item.quantity} Package${item.quantity > 1 ? 's' : ''}</div>
        </div>
        <div class="checkout-item-price">
          ₹${(item.price * item.quantity).toLocaleString('en-IN')}
        </div>
      </div>
    `).join('');
  }

  if (checkoutSubtotal) checkoutSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (checkoutTotal) checkoutTotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
}

// Load Saved Customer Profile (returning guest)
function loadSavedProfile() {
  try {
    const profile = JSON.parse(localStorage.getItem('saved_customer_profile') || 'null');
    if (profile) {
      if (document.getElementById('custName') && profile.name) document.getElementById('custName').value = profile.name;
      if (document.getElementById('custPhone') && profile.phone) document.getElementById('custPhone').value = profile.phone;
      if (document.getElementById('custAddress') && profile.address) document.getElementById('custAddress').value = profile.address;
      if (document.getElementById('custCity') && profile.city) document.getElementById('custCity').value = profile.city;
      if (document.getElementById('custPincode') && profile.pincode) document.getElementById('custPincode').value = profile.pincode;

      const noticeEl = document.getElementById('savedProfileNotice');
      if (noticeEl) {
        noticeEl.style.display = 'block';
        noticeEl.innerHTML = `
          <div style="background: #ecfdf5; border: 1.5px solid #a7f3d0; color: #065f46; padding: 12px 16px; border-radius: 12px; font-size: 0.88rem; font-weight: 600; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap;">
            <span>✨ <strong>Welcome back, ${profile.name}!</strong> Delivery details have been auto-filled from your previous order.</span>
            <button type="button" onclick="clearSavedProfile()" style="background: white; border: 1px solid #10b981; color: #047857; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 0.8rem; font-weight: 700;">Change Details</button>
          </div>
        `;
      }
    }
  } catch (err) {
    console.error('Error loading saved profile:', err);
  }
}

// Clear Saved Profile form
window.clearSavedProfile = function() {
  ['custName', 'custPhone', 'custAddress', 'custCity', 'custPincode'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const noticeEl = document.getElementById('savedProfileNotice');
  if (noticeEl) noticeEl.style.display = 'none';
  document.getElementById('custName')?.focus();
};

// Validate Shipping Inputs
function validateShippingForm() {
  // Clear previous error styles
  document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
  if (checkoutValidationAlert) checkoutValidationAlert.style.display = 'none';

  const nameInput = document.getElementById('custName');
  const phoneInput = document.getElementById('custPhone');
  const addressInput = document.getElementById('custAddress');
  const cityInput = document.getElementById('custCity');
  const pincodeInput = document.getElementById('custPincode');

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const address = addressInput.value.trim();
  const city = cityInput.value.trim();
  const pincode = pincodeInput.value.trim();

  let firstErrorEl = null;
  let errorMsg = '';

  if (!name || name.length < 2) {
    nameInput.classList.add('input-error');
    if (!firstErrorEl) firstErrorEl = nameInput;
    errorMsg = 'Please enter your full name.';
  } else if (!phone || !/^[0-9]{10}$/.test(phone)) {
    phoneInput.classList.add('input-error');
    if (!firstErrorEl) firstErrorEl = phoneInput;
    errorMsg = 'Please enter a valid 10-digit mobile number.';
  } else if (!address || address.length < 5) {
    addressInput.classList.add('input-error');
    if (!firstErrorEl) firstErrorEl = addressInput;
    errorMsg = 'Please enter your complete street delivery address.';
  } else if (!city || city.length < 2) {
    cityInput.classList.add('input-error');
    if (!firstErrorEl) firstErrorEl = cityInput;
    errorMsg = 'Please enter your city / town.';
  } else if (!pincode || !/^[0-9]{6}$/.test(pincode)) {
    pincodeInput.classList.add('input-error');
    if (!firstErrorEl) firstErrorEl = pincodeInput;
    errorMsg = 'Please enter a valid 6-digit postal pincode.';
  }

  if (firstErrorEl) {
    if (checkoutValidationAlert) {
      checkoutValidationAlert.textContent = `⚠️ ${errorMsg}`;
      checkoutValidationAlert.style.display = 'block';
    }
    firstErrorEl.focus();
    firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return null;
  }

  return { name, phone, whatsapp: phone, address, city, pincode };
}

// Lock Address Inputs (after order generation)
function lockAddressInputs() {
  ['custName', 'custPhone', 'custAddress', 'custCity', 'custPincode'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = true;
  });
}

// Setup Event Handlers
function setupButtonHandlers() {

  // BUTTON 1: Cash on Delivery (COD)
  if (btnPlaceCod) {
    btnPlaceCod.addEventListener('click', async () => {
      const customer = validateShippingForm();
      if (!customer) return;

      const confirmCod = confirm(`Confirm Cash on Delivery Order?\n\nName: ${customer.name}\nPhone: ${customer.phone}\nAddress: ${customer.address}, ${customer.city} - ${customer.pincode}\n\nYou will pay cash upon delivery.`);
      if (!confirmCod) return;

      btnPlaceCod.disabled = true;
      btnPayOnline.disabled = true;
      btnPlaceCod.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 4px 0;">
          <span style="font-size: 1.2rem;">⏳</span>
          <span style="font-weight: 800; font-size: 1.05rem;">Booking Cash on Delivery Order...</span>
        </div>
      `;

      try {
        const res = await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customer,
            items: cart,
            paymentMethod: 'COD'
          })
        });

        const data = await res.json();

        if (!data.success) {
          alert('Error placing order: ' + data.message);
          btnPlaceCod.disabled = false;
          btnPayOnline.disabled = false;
          btnPlaceCod.innerHTML = `
            <div class="btn-pay-icon-col"><span class="pay-icon">🚚</span></div>
            <div class="btn-pay-content">
              <div class="btn-pay-header-row"><span class="btn-pay-name">Cash on Delivery</span><span class="badge-cod">Pay at Doorstep</span></div>
              <p class="btn-pay-desc">Pay cash when fireworks are delivered to your home.</p>
            </div>
            <div class="btn-pay-action-arrow">&rarr;</div>
          `;
          return;
        }

        // Save profile & order
        try {
          localStorage.setItem('saved_customer_profile', JSON.stringify(customer));
          const list = JSON.parse(localStorage.getItem('my_orders') || '[]');
          if (!list.includes(data.orderId)) {
            list.unshift(data.orderId);
            localStorage.setItem('my_orders', JSON.stringify(list));
          }
        } catch (e) {}

        // Clear Cart & Redirect to success invoice
        localStorage.removeItem('crackers_cart');
        window.location.href = `/order-success.html?orderId=${data.orderId}`;

      } catch (err) {
        console.error('COD Order Error:', err);
        alert('Failed to place Cash on Delivery order. Please try again.');
        btnPlaceCod.disabled = false;
        btnPayOnline.disabled = false;
        btnPlaceCod.innerHTML = `
          <div class="btn-pay-icon-col"><span class="pay-icon">🚚</span></div>
          <div class="btn-pay-content">
            <div class="btn-pay-header-row"><span class="btn-pay-name">Cash on Delivery</span><span class="badge-cod">Pay at Doorstep</span></div>
            <p class="btn-pay-desc">Pay cash when fireworks are delivered to your home.</p>
          </div>
          <div class="btn-pay-action-arrow">&rarr;</div>
        `;
      }
    });
  }

  // BUTTON 2: Pay Online with UPI / QR Code
  if (btnPayOnline) {
    btnPayOnline.addEventListener('click', async () => {
      // If order already generated, just scroll to the drawer
      if (generatedOnlineOrder) {
        onlineUpiDrawer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      const customer = validateShippingForm();
      if (!customer) return;

      btnPayOnline.disabled = true;
      btnPayOnline.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 4px 0;">
          <span style="font-size: 1.2rem;">⏳</span>
          <span style="font-weight: 800; font-size: 1.05rem;">Generating Dynamic UPI QR & Link...</span>
        </div>
      `;

      try {
        const res = await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customer,
            items: cart,
            paymentMethod: 'UPI_QR'
          })
        });

        const data = await res.json();

        if (!data.success) {
          alert('Error: ' + data.message);
          btnPayOnline.disabled = false;
          btnPayOnline.innerHTML = `
            <div class="btn-pay-icon-col"><span class="pay-icon">⚡</span></div>
            <div class="btn-pay-content">
              <div class="btn-pay-header-row"><span class="btn-pay-name">Pay Online (UPI / QR Code)</span><span class="badge-online">GPay / PhonePe / Paytm</span></div>
              <p class="btn-pay-desc">Instant payment via Dynamic QR Code or direct UPI app link.</p>
            </div>
            <div class="btn-pay-action-arrow">&rarr;</div>
          `;
          return;
        }

        generatedOnlineOrder = data.order;
        createdOrderIdInput.value = data.orderId;

        // Save profile & order ID
        try {
          localStorage.setItem('saved_customer_profile', JSON.stringify(customer));
          const list = JSON.parse(localStorage.getItem('my_orders') || '[]');
          if (!list.includes(data.orderId)) {
            list.unshift(data.orderId);
            localStorage.setItem('my_orders', JSON.stringify(list));
          }
        } catch (e) {}

        // Populate UPI Details
        qrCodeImage.src = data.qrCodeDataUrl;
        if (mobileUpiLink) mobileUpiLink.href = data.upiUrl;
        
        // Direct Google Pay Intent URL (tez://)
        if (gpayDirectLink) {
          const gpayIntent = data.upiUrl.replace(/^upi:\/\//, 'tez://');
          gpayDirectLink.href = gpayIntent;
        }

        displayQrAmount.textContent = `₹${data.order.totalAmount.toLocaleString('en-IN')}`;
        displayMerchantInfo.textContent = `Pay to: ${storeSettings.merchantName || 'POORNIKA CRACKERS'} (${storeSettings.merchantUpi || ''})`;

        // Lock shipping fields
        lockAddressInputs();

        // Reveal Online UPI Drawer
        onlineUpiDrawer.style.display = 'block';

        // Update button state to show UPI active
        btnPayOnline.disabled = false;
        btnPayOnline.style.background = '#fef3c7';
        btnPayOnline.style.borderColor = '#d97706';
        btnPayOnline.innerHTML = `
          <div class="btn-pay-icon-col" style="background: #fde68a;"><span class="pay-icon">✅</span></div>
          <div class="btn-pay-content">
            <div class="btn-pay-header-row"><span class="btn-pay-name">UPI QR Generated!</span><span class="badge-online">Step 2: Pay Below</span></div>
            <p class="btn-pay-desc">Scroll down, complete payment, and submit your 12-digit UTR.</p>
          </div>
          <div class="btn-pay-action-arrow">&darr;</div>
        `;

        // Scroll smoothly to drawer
        setTimeout(() => {
          onlineUpiDrawer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);

      } catch (err) {
        console.error('Online UPI Generation Error:', err);
        alert('Failed to generate UPI payment. Please try again or choose Cash on Delivery.');
        btnPayOnline.disabled = false;
        btnPayOnline.innerHTML = `
          <div class="btn-pay-icon-col"><span class="pay-icon">⚡</span></div>
          <div class="btn-pay-content">
            <div class="btn-pay-header-row"><span class="btn-pay-name">Pay Online (UPI / QR Code)</span><span class="badge-online">GPay / PhonePe / Paytm</span></div>
            <p class="btn-pay-desc">Instant payment via Dynamic QR Code or direct UPI app link.</p>
          </div>
          <div class="btn-pay-action-arrow">&rarr;</div>
        `;
      }
    });
  }

  // STEP 2 FOR ONLINE: Verify UTR and Complete Order
  if (paymentVerifyForm) {
    paymentVerifyForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const orderId = createdOrderIdInput.value;
      const utrNumber = document.getElementById('utrNumber').value.trim();
      const screenshotFile = document.getElementById('paymentScreenshot').files[0];

      if (!utrNumber || utrNumber.length < 6) {
        alert('Please enter a valid 12-digit UTR / Transaction Reference ID.');
        document.getElementById('utrNumber').focus();
        return;
      }

      btnSubmitVerification.disabled = true;
      btnSubmitVerification.innerHTML = '<span>⏳ Submitting Payment Details & Confirming...</span>';

      const formData = new FormData();
      formData.append('utrNumber', utrNumber);
      if (screenshotFile) {
        formData.append('screenshot', screenshotFile);
      }

      try {
        const res = await fetch(`/api/orders/${orderId}/payment`, {
          method: 'POST',
          body: formData
        });

        const data = await res.json();

        if (!data.success) {
          alert('Error: ' + data.message);
          btnSubmitVerification.disabled = false;
          btnSubmitVerification.innerHTML = '<span>✅ Confirm Payment & Place Order</span>';
          return;
        }

        // Clear Cart
        localStorage.removeItem('crackers_cart');

        // Redirect to success invoice page
        window.location.href = `/order-success.html?orderId=${orderId}`;

      } catch (err) {
        console.error('Payment verification error:', err);
        alert('Failed to submit payment details. Please check your network and try again.');
        btnSubmitVerification.disabled = false;
        btnSubmitVerification.innerHTML = '<span>✅ Confirm Payment & Place Order</span>';
      }
    });
  }
}
