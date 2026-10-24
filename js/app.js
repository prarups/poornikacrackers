// ==============================================================
// POORNIKA CRACKERS - FULLY STATIC APPLICATION
// 100% Client-side. Direct WhatsApp Order Integration.
// ==============================================================

const STORE_SETTINGS = {
  storeName: "POORNIKA CRACKERS",
  storeTagline: "Quality Crackers • Best Packages • Doorstep Delivery",
  whatsappPhone: "919361154329",
  contactPhone: "9361154329",
  minOrderAmount: 3000,
  bannerNotice: "💥 POORNIKA CRACKERS: BOOKING CLOSES OCTOBER 31! Doorstep Delivery in Chennai, Chengalpattu, Thiruvallur & Kanchipuram! Cash on Delivery Available."
};

const PRODUCTS_DATA = [
  // --- EXCLUSIVE COMBO PACKAGES (Poornika Combo Packs) ---
  {
    "id": "CRK-PKG-3000",
    "name": "POORNIKA CRACKERS - GOLD COMBO PACK",
    "category": "Diwali Packages",
    "type": "combo",
    "pieces": "51 Items + 30 Crackling Shots FREE",
    "mrp": 6500,
    "price": 3000,
    "discount": "54% OFF",
    "badge": "💥 30 CRACKLING SHOT FREE!",
    "stock": true,
    "image": "images/pic1.webp",
    "description": "51 Festival Varieties + 1 Box 30 Crackling Shots Free with Doorstep Delivery.",
    "freeBonus": "30 Crackling Shot (FREE) - 1 Box",
    "itemsIncluded": [
  "25 Multicolour Shot Good Day - 1 Box",
  "2 1/2 Fancy (3 Pieces) - 1 Box",
  "2 3/4\" Kuruvi - 5 Box",
  "3 1/2\" Lakshmi - 2 Box",
  "4\" Lakshmi - 1 Box",
  "5\" Deluxe Lion - 1 Box",
  "1/4 KG Paper Bomb - 1 Box",
  "28 Chorsa - 1 Box",
  "28 Digital Watts - 2 Box",
  "Olai Vedi Big - 1 Box",
  "Striped Bijili 100 PCS - 1 Box",
  "Bullet Bomb - 1 Box",
  "Flower Pot Small - 1 Box",
  "Flower Pot Special - 1 Box",
  "Ground Chakkar Big - 1 Box",
  "Disco Wheel - 1 Box",
  "1 1/2\" Feet Twinkling Star - 1 Box",
  "Selfie Stick - 1 Box",
  "Emerald Fountain - 1 Box",
  "Tin Fountain - 1 Box",
  "Elephant Falls - 1 Box",
  "Mega Peacock Feather - 1 Box",
  "Mega Colour Peacock - 1 Box",
  "Dancing Butterfly - 1 Box",
  "Helicopter - 1 Box",
  "Bambaram - 1 Box",
  "Cartoon - 1 Box",
  "Kit Kat - 1 Box",
  "Stone - 2 Box",
  "Zee Boom Baa - 1 Box",
  "Magic Pops - 1 Box",
  "Snake Serpent Egg - 1 Box",
  "Photo Flash - 1 Box",
  "Top Gun - 1 Box",
  "8\" Match Box - 1 Box",
  "Baby Rocket - 1 Box",
  "Chotta Fancy - 1 Box",
  "Five Falls Skyshot - 1 Box",
  "7 Shot - 1 Box",
  "7 CM Electric Sparkles - 1 Box",
  "7 CM Colour Sparkles - 1 Box",
  "7 CM Red Sparkles - 1 Box",
  "7 CM Green Sparkles - 1 Box",
  "10 CM Red Sparkles - 1 Box",
  "10 CM Green Sparkles - 1 Box",
  "10 CM Electric Sparkles - 1 Box",
  "10 CM Colour Sparkles - 1 Box",
  "12 CM Electric Sparkles - 1 Box",
  "12 CM Colour Sparkles - 1 Box",
  "1000 Wala - 1 Box",
  "💥 30 Crackling Shots (FREE BONUS)"
]
  },
  {
    "id": "CRK-PKG-5000",
    "name": "POORNIKA CRACKERS - PLATINUM COMBO PACK",
    "category": "Diwali Packages",
    "type": "combo",
    "pieces": "61 Items + 60 Shots FREE",
    "mrp": 11000,
    "price": 5000,
    "discount": "55% OFF",
    "badge": "⭐ MOST POPULAR • 60 SHOTS FREE!",
    "stock": true,
    "image": "images/pic2.webp",
    "description": "61 Festival Varieties + 1 Box 60 Multi-Colour Sky King Shots Free with Doorstep Delivery.",
    "freeBonus": "60 Multi-Colour Sky King Shots (FREE) - 1 Box",
    "itemsIncluded": [
  "Butterfly - 1 Box",
  "Pambaram - 1 Box",
  "Helicopter - 1 Box",
  "Sky Shot - 1 Box",
  "Tin Beer - 1 Pc",
  "Magic Pops - 1 Box",
  "Zee Boom Baa - 1 Box",
  "Electric Stone - 1 Box",
  "Photo Flash - 1 Box",
  "Selfie Stick - 1 Box",
  "1/4 KG Paper Bomb - 1 Box",
  "28 Chorsa - 1 Box",
  "1 1/2 Twinkling Star - 1 Box",
  "4 Twinkling Star - 1 Box",
  "PUB G Gun - 1 Box",
  "Snake Cartoon - 1 Box",
  "Assorted Cartoon - 1 Packet",
  "Red Bijili - 1 Packet",
  "Striped Bijili - 1 Packet",
  "Bullet Bomb - 1 Packet",
  "Gold Bijili - 1 Packet",
  "4 Inch Gold Lion - 1 Packet",
  "4 Inch Deluxe Lakshmi - 1 Packet",
  "4 Inch 6 Ply Lakshmi - 1 Packet",
  "3 1/2 Lakshmi - 1 Packet",
  "2 3/4 Kuruvi - 1 Packet",
  "Military Bomb 5 Pcs - 1 Packet",
  "28 Giant - 1 Packet",
  "24 Deluxe - 1 Packet",
  "100 Wala - 1 Packet",
  "25 Shot Multicolour - 1 Box",
  "1000 Wala - 1 Box",
  "Colour Rain - 1 Box",
  "Golden Glouble - 1 Box",
  "Magic Peacock - 1 Box",
  "Chota Fancy - 1 Box",
  "2 Inch Fancy - 1 Box",
  "Kit Kat - 1 Box",
  "10 Inch Pencil - 1 Box",
  "Matchs - 1 Box",
  "Colour Crush/Rocket Bomb - 1 Box",
  "Old Is Gold - 1 Box",
  "Flower Pot Small - 1 Box",
  "Flower Pot Big - 1 Box",
  "Flower Pot Special - 1 Box",
  "Ground Chakkar Big - 1 Box",
  "Ground Chakkar Special - 1 Box",
  "Chin Chan - 1 Box",
  "12 Shot - 1 Box",
  "Hydro Bomb - 1 Box",
  "Smoke Stick - 1 Box",
  "7 CM Electric - 1 Box",
  "7 CM Red - 1 Box",
  "10 CM Electric - 1 Box",
  "10 CM Colour - 1 Box",
  "12 CM Electric - 1 Box",
  "12 CM Green - 1 Box",
  "15 CM Electric - 1 Box",
  "15 CM Colour - 1 Box",
  "30 CM Electric - 1 Box",
  "30 CM Colour - 1 Box",
  "💥 60 Shots (FREE BONUS) - 1 Box"
]
  },
  {
    "id": "CRK-PKG-8000",
    "name": "POORNIKA CRACKERS - ROYAL VIP COMBO PACK",
    "category": "Diwali Packages",
    "type": "combo",
    "pieces": "75 Items + 120 Shots FREE",
    "mrp": 18000,
    "price": 8000,
    "discount": "56% OFF",
    "badge": "👑 VIP LUXURY • 120 SHOTS FREE!",
    "stock": true,
    "image": "images/pic3.webp",
    "description": "75 Luxury Grand Celebration Varieties + 120 Multi-Colour Grand VIP Sky Show Free.",
    "freeBonus": "120 Multi-Colour Grand VIP Sky Show (FREE) - 1 Box",
    "itemsIncluded": [
  "4 Inch Gold Lakshmi - 1 Packet",
  "2 3/4 Inch Kuruvi - 5 Packets",
  "3 1/2 Inch Lakshmi - 10 Packets",
  "4 Inch Lakshmi - 10 Packets",
  "4 Inch Lakshmi Super Dix - 1 Packet",
  "5 Inch Lakshmi / Parrot - 1 Packet",
  "2 Sound Crackers - 1 Packet",
  "Flower Pots Big - 1 Box",
  "Flower Pots Special - 1 Box",
  "Flower Pots Ashoka - 1 Box",
  "Flower Pots Color Kool - 1 Box",
  "Tri Color Kudi Deluxe - 1 Box",
  "Ground Chakkar Big (10 Pcs) - 1 Box",
  "Ground Chakkar Ashoka - 1 Box",
  "Ground Chakkar Special Spinner - 1 Box",
  "Ground Chakkar Deluxe Spinner - 1 Box",
  "Classic Wheel, Sonic Wheel Top 5 in 1 - 1 Box",
  "Whisfing Wheel/Wizz Chakkar - 1 Box",
  "1 1/2 Inch Twinkling Star - 1 Box",
  "4 Inch Twinkling Star - 1 Box",
  "Jil Jil - 1 Box",
  "10 Inch Coronation Candie - 1 Box",
  "Magic Light Flash Light - 1 Box",
  "Lunik Express - 1 Box",
  "Musical Rocket - 1 Box",
  "Assorted Cartoons - 1 Box",
  "Photo Flash - 1 Box",
  "Electric Stone - 1 Box",
  "Kit Kat - 1 Box",
  "Emerald - 1 Box",
  "Bam Baram (Spinning Top) - 10 Pcs",
  "Helicopter / Top 5 in 1 - 1 Box",
  "Butterfly - 10 Pcs",
  "Mega Musical Siren - 1 Box",
  "Shin Chan - 1 Box",
  "Shot Gun/Top Gun - 1 Box",
  "Money in the Bank - 1 Pc",
  "Colour Rain - 5 Pcs",
  "Golden Shower - 5 Pcs",
  "Peacock Feather - 5 Pcs",
  "Tom & Jerry Fountain - 5 Pcs",
  "Scooby Doo Green - 1 Box",
  "Kulfi - 1 Box",
  "Star Drum - 1 Box",
  "Peacock (Multi Colour) - 1 Pc",
  "1 Inch Red Bijili Crackers 50's - 1 Packet",
  "1 Inch Striped Bijili Crackers 50's - 1 Packet",
  "Hydro Bomb - 1 Box",
  "Classic Bomb - 1 Box",
  "7 Up Seven Shot/Penta Fancy - 1 Box",
  "1 Inch Chotta Fancy - 1 Pc",
  "12 Shots Multicolour - 1 Box",
  "12 Shots Crackling Raider - 1 Box",
  "2 Inch Fancy (3 Pcs) - 1 Box",
  "2 Inch Fancy - 1 Box",
  "3 Inch Fancy - 1 Pc",
  "4 Inch Fancy - 1 Pc",
  "5 Inch Fancy - 1 Pc",
  "12 CM Electrics - 1 Pc",
  "12 CM Crackling - 1 Box",
  "12 CM Green - 1 Box",
  "12 CM Red - 1 Box",
  "15 CM Electric - 1 Box",
  "15 CM Crackling - 1 Box",
  "15 CM Red - 1 Box",
  "15 CM Green - 1 Box",
  "30 CM Electric - 1 Box",
  "30 CM Crackling - 1 Box",
  "30 CM Green - 1 Box",
  "30 CM Red - 1 Box",
  "1000 Wala - 1 Tube",
  "2000 Wala - 1 Box",
  "Serpent Egg Big - 1 Bundle",
  "King Cobra / Magic Wand - 1 Box",
  "25 Shot Multicolour - 1 Box",
  "💥 120 Shots (FREE BONUS) - 1 Box"
]
  },

  // --- GIFT BOXES ---
  {
    id: "CRK-GBX-01",
    name: "20 ITEMS GIFTBOX",
    category: "Gift Boxes",
    type: "single",
    pieces: "1 Box",
    mrp: 400,
    price: 400,
    discount: "NET RATE",
    badge: "BEST VALUE",
    stock: true,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&auto=format&fit=crop&q=80",
    description: "Assorted family festival gift box with 20 items."
  },
  {
    id: "CRK-GBX-02",
    name: "30 ITEMS GIFTBOX",
    category: "Gift Boxes",
    type: "single",
    pieces: "1 Box",
    mrp: 550,
    price: 550,
    discount: "NET RATE",
    badge: "POPULAR",
    stock: true,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&auto=format&fit=crop&q=80",
    description: "Assorted festival gift box with 30 items."
  },
  {
    id: "CRK-GBX-03",
    name: "40 ITEMS GIFTBOX",
    category: "Gift Boxes",
    type: "single",
    pieces: "1 Box",
    mrp: 700,
    price: 700,
    discount: "NET RATE",
    badge: "FAMILY PACK",
    stock: true,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&auto=format&fit=crop&q=80",
    description: "Mega family gift box with 40 items."
  },
  {
    id: "CRK-GBX-04",
    name: "50 ITEMS GIFTBOX",
    category: "Gift Boxes",
    type: "single",
    pieces: "1 Box",
    mrp: 900,
    price: 900,
    discount: "NET RATE",
    badge: "MEGA PACK",
    stock: true,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&auto=format&fit=crop&q=80",
    description: "Super grand festival gift box with 50 items."
  },

  // --- ONE SOUND CRACKERS (80% Discount) ---
  {
    id: "CRK-SND-01",
    name: "2.75 Kuruvi Crackers",
    category: "One Sound Crackers",
    type: "single",
    pieces: "1 Pkt",
    mrp: 40,
    price: 8,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SND-02",
    name: "3.5 Lakshmi Crackers",
    category: "One Sound Crackers",
    type: "single",
    pieces: "1 Pkt",
    mrp: 65,
    price: 13,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SND-03",
    name: "4 Lakshmi Crackers",
    category: "One Sound Crackers",
    type: "single",
    pieces: "1 Pkt",
    mrp: 90,
    price: 18,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SND-04",
    name: "4 Delux Lakshmi Crackers",
    category: "One Sound Crackers",
    type: "single",
    pieces: "1 Pkt",
    mrp: 130,
    price: 26,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SND-05",
    name: "5 Lakshmi Crackers",
    category: "One Sound Crackers",
    type: "single",
    pieces: "1 Pkt",
    mrp: 300,
    price: 60,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SND-06",
    name: "Gold Lakshmi Crackers",
    category: "One Sound Crackers",
    type: "single",
    pieces: "1 Pkt",
    mrp: 150,
    price: 30,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SND-07",
    name: "Two Sound Crackers",
    category: "One Sound Crackers",
    type: "single",
    pieces: "1 Pkt",
    mrp: 160,
    price: 32,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SND-08",
    name: "SKS Delux",
    category: "One Sound Crackers",
    type: "single",
    pieces: "1 Pkt",
    mrp: 450,
    price: 90,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- GROUND CHAKKARS (80% Discount) ---
  {
    id: "CRK-CHK-01",
    name: "Ground Chakkar Big (10 Pcs) Small",
    category: "Ground Chakkars",
    type: "single",
    pieces: "1 Box",
    mrp: 180,
    price: 36,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CHK-02",
    name: "Ground Chakkar Special",
    category: "Ground Chakkars",
    type: "single",
    pieces: "1 Box",
    mrp: 400,
    price: 80,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CHK-03",
    name: "Ground Chakkar Deluxe",
    category: "Ground Chakkars",
    type: "single",
    pieces: "1 Box",
    mrp: 675,
    price: 135,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CHK-04",
    name: "Wire Chakkar",
    category: "Ground Chakkars",
    type: "single",
    pieces: "1 Box",
    mrp: 800,
    price: 160,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CHK-05",
    name: "Spinner Mix Vanitha brand",
    category: "Ground Chakkars",
    type: "single",
    pieces: "1 Box",
    mrp: 1000,
    price: 200,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- SPECIAL WHEEL CHAKKAR (80% Discount) ---
  {
    id: "CRK-WHL-01",
    name: "Whistling Wheel",
    category: "Special Wheel Chakkar",
    type: "single",
    pieces: "1 Box",
    mrp: 650,
    price: 130,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-WHL-02",
    name: "Colourful Wheel",
    category: "Special Wheel Chakkar",
    type: "single",
    pieces: "1 Box",
    mrp: 725,
    price: 145,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- TWINKLING STAR (80% Discount) ---
  {
    id: "CRK-TWS-01",
    name: "1.5 Twinkling Stars",
    category: "Twinkling Star",
    type: "single",
    pieces: "1 Box",
    mrp: 120,
    price: 24,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-TWS-02",
    name: "4 Twinkling Stars",
    category: "Twinkling Star",
    type: "single",
    pieces: "1 Box",
    mrp: 330,
    price: 66,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-TWS-03",
    name: "Rope Colour",
    category: "Twinkling Star",
    type: "single",
    pieces: "1 Box",
    mrp: 975,
    price: 195,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- PENCIL STARS (80% Discount) ---
  {
    id: "CRK-PNC-01",
    name: "Mercury Torch",
    category: "Pencil Stars",
    type: "single",
    pieces: "1 Box",
    mrp: 400,
    price: 80,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-PNC-02",
    name: "Ultra Pencil",
    category: "Pencil Stars",
    type: "single",
    pieces: "1 Box",
    mrp: 425,
    price: 85,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-PNC-03",
    name: "Lorex pencil",
    category: "Pencil Stars",
    type: "single",
    pieces: "1 Box",
    mrp: 450,
    price: 90,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-PNC-04",
    name: "Coloue Smoke",
    category: "Pencil Stars",
    type: "single",
    pieces: "1 Box",
    mrp: 800,
    price: 160,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- BIJILI CRACKERS (80% Discount) ---
  {
    id: "CRK-BJL-01",
    name: "Gold Bijili Crackers(100 Pcs)",
    category: "Bijili Crackers",
    type: "single",
    pieces: "1 Pkt",
    mrp: 170,
    price: 34,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-BJL-02",
    name: "Stripped Bijili Crackers(100 Pcs)",
    category: "Bijili Crackers",
    type: "single",
    pieces: "1 Pkt",
    mrp: 180,
    price: 36,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- CHORSA & GAINT & DELUX (80% Discount) ---
  {
    id: "CRK-CGD-01",
    name: "28 Chorsa",
    category: "Chorsa & Gaint & Delux",
    type: "single",
    pieces: "1 Pkt",
    mrp: 75,
    price: 15,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CGD-02",
    name: "28 Gaint",
    category: "Chorsa & Gaint & Delux",
    type: "single",
    pieces: "1 Pkt",
    mrp: 125,
    price: 25,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CGD-03",
    name: "24 Delux",
    category: "Chorsa & Gaint & Delux",
    type: "single",
    pieces: "1 Pkt",
    mrp: 250,
    price: 50,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CGD-04",
    name: "50 Delux",
    category: "Chorsa & Gaint & Delux",
    type: "single",
    pieces: "1 Pkt",
    mrp: 500,
    price: 100,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CGD-05",
    name: "100 Delux",
    category: "Chorsa & Gaint & Delux",
    type: "single",
    pieces: "1 Pkt",
    mrp: 1000,
    price: 200,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- FLOWER POTS (80% Discount) ---
  {
    id: "CRK-POT-01",
    name: "Flower Pots Big",
    category: "Flower Pots",
    type: "single",
    pieces: "1 Box",
    mrp: 370,
    price: 74,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-POT-02",
    name: "Flower Pots Special",
    category: "Flower Pots",
    type: "single",
    pieces: "1 Box",
    mrp: 400,
    price: 80,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-POT-03",
    name: "Flower Pots Asoka",
    category: "Flower Pots",
    type: "single",
    pieces: "1 Box",
    mrp: 550,
    price: 110,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-POT-04",
    name: "Colour Koti",
    category: "Flower Pots",
    type: "single",
    pieces: "1 Box",
    mrp: 975,
    price: 195,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-POT-05",
    name: "Flower Pots Deluex (5 Pcs)",
    category: "Flower Pots",
    type: "single",
    pieces: "1 Box",
    mrp: 850,
    price: 170,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-POT-06",
    name: "Tri Colour Funtain",
    category: "Flower Pots",
    type: "single",
    pieces: "1 Box",
    mrp: 1500,
    price: 300,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-POT-07",
    name: "Ganga Jamuna (4Pcs)",
    category: "Flower Pots",
    type: "single",
    pieces: "1 Box",
    mrp: 425,
    price: 85,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-POT-08",
    name: "Colour Koti Jumbo Delex(10 pcs)",
    category: "Flower Pots",
    type: "single",
    pieces: "1 Box",
    mrp: 2500,
    price: 500,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-POT-09",
    name: "Colour Cone",
    category: "Flower Pots",
    type: "single",
    pieces: "1 Box",
    mrp: 3250,
    price: 650,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- SPARKLERS (80% Discount) ---
  {
    id: "CRK-SPK-01",
    name: "10 cm Electric Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 80,
    price: 16,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-02",
    name: "10 cm Colour Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 90,
    price: 18,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-03",
    name: "10 cm Green Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 100,
    price: 20,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-04",
    name: "10 cm Red Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 110,
    price: 22,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-05",
    name: "12 cm Electric Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 130,
    price: 26,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-06",
    name: "12 cm Colour Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 140,
    price: 28,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-07",
    name: "12 cm Green Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 150,
    price: 30,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-08",
    name: "12 cm Red Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 160,
    price: 32,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-09",
    name: "15 cm Electric Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 200,
    price: 40,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-10",
    name: "15 cm Colour Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 210,
    price: 42,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-11",
    name: "15 cm Green Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 220,
    price: 44,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-12",
    name: "15 cm Red Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 230,
    price: 46,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-13",
    name: "30 cm Electric Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 200,
    price: 40,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-14",
    name: "30 cm Colour Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 210,
    price: 42,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-15",
    name: "30 cm Green Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 220,
    price: 44,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-16",
    name: "30 cm Red Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 230,
    price: 46,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-17",
    name: "50 cm Electric Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 800,
    price: 160,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-18",
    name: "50 cm Colour Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 900,
    price: 180,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SPK-19",
    name: "Rotating Sparklers",
    category: "Sparklers",
    type: "single",
    pieces: "1 Box",
    mrp: 1000,
    price: 200,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- ROCKETS (80% Discount) ---
  {
    id: "CRK-RCK-01",
    name: "Rocket Bomb",
    category: "Rockets",
    type: "single",
    pieces: "1 Box",
    mrp: 325,
    price: 65,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-RCK-02",
    name: "Wisiling rocket",
    category: "Rockets",
    type: "single",
    pieces: "1 Box",
    mrp: 825,
    price: 165,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- PEACOCK FOUNTAIN (80% Discount) ---
  {
    id: "CRK-PCK-01",
    name: "DancingPeacock (5 Face)",
    category: "Peacock Fountain",
    type: "single",
    pieces: "1 Box",
    mrp: 725,
    price: 145,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-PCK-02",
    name: "Magical Peacock",
    category: "Peacock Fountain",
    type: "single",
    pieces: "1 Box",
    mrp: 1000,
    price: 200,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-PCK-03",
    name: "Bada peacock",
    category: "Peacock Fountain",
    type: "single",
    pieces: "1 Box",
    mrp: 1850,
    price: 370,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- CHIP MIX (VANITHA BRAND) (80% Discount) ---
  {
    id: "CRK-CHP-01",
    name: "Chip mix Red",
    category: "Chip Mix (Vanitha brand)",
    type: "single",
    pieces: "1 Box",
    mrp: 675,
    price: 135,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CHP-02",
    name: "Chio Mix Green",
    category: "Chip Mix (Vanitha brand)",
    type: "single",
    pieces: "1 Box",
    mrp: 675,
    price: 135,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CHP-03",
    name: "Chip Mix Yellow",
    category: "Chip Mix (Vanitha brand)",
    type: "single",
    pieces: "1 Box",
    mrp: 675,
    price: 135,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CHP-04",
    name: "Chip Mix White",
    category: "Chip Mix (Vanitha brand)",
    type: "single",
    pieces: "1 Box",
    mrp: 675,
    price: 135,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CHP-05",
    name: "Chip Mix Pink",
    category: "Chip Mix (Vanitha brand)",
    type: "single",
    pieces: "1 Box",
    mrp: 675,
    price: 135,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CHP-06",
    name: "Photo Flash",
    category: "Chip Mix (Vanitha brand)",
    type: "single",
    pieces: "1 Box",
    mrp: 350,
    price: 70,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- ATOM BOMB (80% Discount) ---
  {
    id: "CRK-BMB-01",
    name: "Hydro Bomb",
    category: "Atom Bomb",
    type: "single",
    pieces: "1 Box",
    mrp: 375,
    price: 75,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-BMB-02",
    name: "King Of King Green",
    category: "Atom Bomb",
    type: "single",
    pieces: "1 Box",
    mrp: 475,
    price: 95,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-BMB-03",
    name: "Classic Bomb Green",
    category: "Atom Bomb",
    type: "single",
    pieces: "1 Box",
    mrp: 675,
    price: 135,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-BMB-04",
    name: "AGNI Bomb",
    category: "Atom Bomb",
    type: "single",
    pieces: "1 Box",
    mrp: 1000,
    price: 200,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-BMB-05",
    name: "DIGITAL Bomb",
    category: "Atom Bomb",
    type: "single",
    pieces: "1 Box",
    mrp: 1100,
    price: 220,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- PAINT THE SKY (80% Discount) ---
  {
    id: "CRK-SKY-01",
    name: "Sky Shots",
    category: "Paint The Sky",
    type: "single",
    pieces: "1 Box",
    mrp: 750,
    price: 150,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SKY-02",
    name: "12 Shot Multi colour",
    category: "Paint The Sky",
    type: "single",
    pieces: "1 Box",
    mrp: 725,
    price: 145,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SKY-03",
    name: "25 Shots Rider",
    category: "Paint The Sky",
    type: "single",
    pieces: "1 Box",
    mrp: 1250,
    price: 250,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SKY-04",
    name: "50 Colour Rider",
    category: "Paint The Sky",
    type: "single",
    pieces: "1 Box",
    mrp: 2150,
    price: 430,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SKY-05",
    name: "30 Shot Multi Colour Special Stare (30 )",
    category: "Paint The Sky",
    type: "single",
    pieces: "1 Box",
    mrp: 2250,
    price: 450,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SKY-06",
    name: "60 Shot Multi Colour (60 )",
    category: "Paint The Sky",
    type: "single",
    pieces: "1 Box",
    mrp: 3750,
    price: 750,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SKY-07",
    name: "120 Shot Multi Colour (120 4 4 )",
    category: "Paint The Sky",
    type: "single",
    pieces: "1 Box",
    mrp: 7500,
    price: 1500,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SKY-08",
    name: "240 Shot Multi Colour (240 )",
    category: "Paint The Sky",
    type: "single",
    pieces: "1 Box",
    mrp: 15000,
    price: 3000,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SKY-09",
    name: "5×4 Shot Multi Colour",
    category: "Paint The Sky",
    type: "single",
    pieces: "1 Box",
    mrp: 4500,
    price: 900,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-SKY-10",
    name: "Paint The Sky Fancy",
    category: "Paint The Sky",
    type: "single",
    pieces: "1 Box",
    mrp: 1050,
    price: 210,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- WALA CRACKERS (80% Discount) ---
  {
    id: "CRK-GAR-01",
    name: "100 wala",
    category: "Wala Crackers",
    type: "single",
    pieces: "1 Box",
    mrp: 200,
    price: 40,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-GAR-02",
    name: "300 wala",
    category: "Wala Crackers",
    type: "single",
    pieces: "1 Box",
    mrp: 600,
    price: 120,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-GAR-03",
    name: "600 wala",
    category: "Wala Crackers",
    type: "single",
    pieces: "1 Box",
    mrp: 950,
    price: 190,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-GAR-04",
    name: "1000 wala (half)",
    category: "Wala Crackers",
    type: "single",
    pieces: "1 Box",
    mrp: 1000,
    price: 200,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-GAR-05",
    name: "1000 wala (full)",
    category: "Wala Crackers",
    type: "single",
    pieces: "1 Box",
    mrp: 1800,
    price: 360,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-GAR-06",
    name: "2000 wala (half)",
    category: "Wala Crackers",
    type: "single",
    pieces: "1 Box",
    mrp: 2000,
    price: 400,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-GAR-07",
    name: "2000 wala (full)",
    category: "Wala Crackers",
    type: "single",
    pieces: "1 Box",
    mrp: 3500,
    price: 700,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-GAR-08",
    name: "5000 wala (full)",
    category: "Wala Crackers",
    type: "single",
    pieces: "1 Box",
    mrp: 7500,
    price: 1500,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-GAR-09",
    name: "10000 Wala (full)",
    category: "Wala Crackers",
    type: "single",
    pieces: "1 Box",
    mrp: 15000,
    price: 3000,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },

  // --- KIDS FOUNTAIN (80% Discount) ---
  {
    id: "CRK-KID-01",
    name: "Helicaptor",
    category: "Kids Fountain",
    type: "single",
    pieces: "1 Box",
    mrp: 550,
    price: 110,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-KID-02",
    name: "Butterfly",
    category: "Kids Fountain",
    type: "single",
    pieces: "1 Box",
    mrp: 400,
    price: 80,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-KID-03",
    name: "Bambaram",
    category: "Kids Fountain",
    type: "single",
    pieces: "1 Box",
    mrp: 600,
    price: 120,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-KID-04",
    name: "Snake Tablet",
    category: "Kids Fountain",
    type: "single",
    pieces: "1 Box",
    mrp: 825,
    price: 165,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-KID-05",
    name: "Kid Kat",
    category: "Kids Fountain",
    type: "single",
    pieces: "1 Box",
    mrp: 225,
    price: 45,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-KID-06",
    name: "watermelon fountain",
    category: "Kids Fountain",
    type: "single",
    pieces: "1 Box",
    mrp: 950,
    price: 190,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-KID-07",
    name: "kittar fountain",
    category: "Kids Fountain",
    type: "single",
    pieces: "1 Box",
    mrp: 975,
    price: 195,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- WHISTILING SOUND (80% Discount) ---
  {
    id: "CRK-WSL-01",
    name: "Small Siren 5 pcs",
    category: "Whistiling Sound",
    type: "single",
    pieces: "1 Box",
    mrp: 625,
    price: 125,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-WSL-02",
    name: "Mega Siren 2pcs",
    category: "Whistiling Sound",
    type: "single",
    pieces: "1 Box",
    mrp: 900,
    price: 180,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-WSL-03",
    name: "Dora Singer",
    category: "Whistiling Sound",
    type: "single",
    pieces: "1 Box",
    mrp: 800,
    price: 160,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- TIN SHOWER (80% Discount) ---
  {
    id: "CRK-TIN-01",
    name: "Tin Bear",
    category: "Tin Shower",
    type: "single",
    pieces: "1 Box",
    mrp: 450,
    price: 90,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-TIN-02",
    name: "6\" Mega Crackling",
    category: "Tin Shower",
    type: "single",
    pieces: "1 Box",
    mrp: 800,
    price: 160,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-TIN-03",
    name: "Water Queen",
    category: "Tin Shower",
    type: "single",
    pieces: "1 Box",
    mrp: 700,
    price: 140,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- NIGHT COLOURFUL SHOWER (5PCS) (80% Discount) ---
  {
    id: "CRK-NCS-01",
    name: "Colour Rain",
    category: "Night Colourful Shower (5Pcs)",
    type: "single",
    pieces: "1 Box",
    mrp: 450,
    price: 90,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NCS-02",
    name: "Green Garden",
    category: "Night Colourful Shower (5Pcs)",
    type: "single",
    pieces: "1 Box",
    mrp: 450,
    price: 90,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NCS-03",
    name: "Red Star",
    category: "Night Colourful Shower (5Pcs)",
    type: "single",
    pieces: "1 Box",
    mrp: 450,
    price: 90,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NCS-04",
    name: "Golden Raise",
    category: "Night Colourful Shower (5Pcs)",
    type: "single",
    pieces: "1 Box",
    mrp: 450,
    price: 90,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NCS-05",
    name: "Coloue spot",
    category: "Night Colourful Shower (5Pcs)",
    type: "single",
    pieces: "1 Box",
    mrp: 600,
    price: 120,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NCS-06",
    name: "Ice Creem",
    category: "Night Colourful Shower (5Pcs)",
    type: "single",
    pieces: "1 Box",
    mrp: 600,
    price: 120,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NCS-07",
    name: "All Time Choice",
    category: "Night Colourful Shower (5Pcs)",
    type: "single",
    pieces: "1 Box",
    mrp: 1100,
    price: 220,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NCS-08",
    name: "3D Pots",
    category: "Night Colourful Shower (5Pcs)",
    type: "single",
    pieces: "1 Box",
    mrp: 1250,
    price: 250,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- CRACKLING FOUNTAIN (STARWELL) (80% Discount) ---
  {
    id: "CRK-CFS-01",
    name: "Madurai Malli",
    category: "Crackling Fountain (Starwell)",
    type: "single",
    pieces: "1 Box",
    mrp: 825,
    price: 165,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CFS-02",
    name: "Pop Corn",
    category: "Crackling Fountain (Starwell)",
    type: "single",
    pieces: "1 Box",
    mrp: 825,
    price: 165,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CFS-03",
    name: "Lolli Pop",
    category: "Crackling Fountain (Starwell)",
    type: "single",
    pieces: "1 Box",
    mrp: 1000,
    price: 200,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CFS-04",
    name: "Mottu batlu",
    category: "Crackling Fountain (Starwell)",
    type: "single",
    pieces: "1 Box",
    mrp: 1150,
    price: 230,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-CFS-05",
    name: "Knock Out",
    category: "Crackling Fountain (Starwell)",
    type: "single",
    pieces: "1 Box",
    mrp: 725,
    price: 145,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- DIGITAL WALA (80% Discount) ---
  {
    id: "CRK-DGW-01",
    name: "Shin Chan",
    category: "Digital Wala",
    type: "single",
    pieces: "1 Box",
    mrp: 500,
    price: 100,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-DGW-02",
    name: "90 Watts",
    category: "Digital Wala",
    type: "single",
    pieces: "1 Box",
    mrp: 650,
    price: 130,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- NIGHT SHOTS PIPE (80% Discount) ---
  {
    id: "CRK-NSP-01",
    name: "1\" Chotta Fancy (5 varities)",
    category: "Night Shots Pipe",
    type: "single",
    pieces: "1 Box",
    mrp: 225,
    price: 45,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NSP-02",
    name: "2\" Fancy Single Pipe (4 verities)",
    category: "Night Shots Pipe",
    type: "single",
    pieces: "1 Box",
    mrp: 525,
    price: 105,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NSP-03",
    name: "2\" Fancy 3Pcs Pipe (3 varities)",
    category: "Night Shots Pipe",
    type: "single",
    pieces: "1 Box",
    mrp: 1200,
    price: 240,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NSP-04",
    name: "3.5\" Fancy Single Pipe (4 varitis)",
    category: "Night Shots Pipe",
    type: "single",
    pieces: "1 Box",
    mrp: 1500,
    price: 300,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NSP-05",
    name: "3.5 Fancy Nayara Pipe",
    category: "Night Shots Pipe",
    type: "single",
    pieces: "1 Box",
    mrp: 1750,
    price: 350,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NSP-06",
    name: "3.5\" Fancy 2Pcs (3 varities)",
    category: "Night Shots Pipe",
    type: "single",
    pieces: "1 Box",
    mrp: 3100,
    price: 620,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NSP-07",
    name: "4\" Fancy Double Ball (3 varities)",
    category: "Night Shots Pipe",
    type: "single",
    pieces: "1 Box",
    mrp: 2900,
    price: 580,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NSP-08",
    name: "4\"Fancy Pipe (4 varities)",
    category: "Night Shots Pipe",
    type: "single",
    pieces: "1 Box",
    mrp: 2250,
    price: 450,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-NSP-09",
    name: "5\" Fancy Pink Out",
    category: "Night Shots Pipe",
    type: "single",
    pieces: "1 Box",
    mrp: 5500,
    price: 1100,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- REPEATING MULTI COLOURS SHOTS (80% Discount) ---
  {
    id: "CRK-RMS-01",
    name: "7 Shots (5 Pieces)",
    category: "Repeating Multi Colours Shots",
    type: "single",
    pieces: "1 Box",
    mrp: 450,
    price: 90,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-RMS-02",
    name: "Penta Shots",
    category: "Repeating Multi Colours Shots",
    type: "single",
    pieces: "1 Box",
    mrp: 600,
    price: 120,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- PAPER BOMB (80% Discount) ---
  {
    id: "CRK-PBM-01",
    name: "Money in the Bank (3 Lierrib)",
    category: "Paper Bomb",
    type: "single",
    pieces: "1 Box",
    mrp: 750,
    price: 150,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-PBM-02",
    name: "Mony in the Bank (2pcs) Big",
    category: "Paper Bomb",
    type: "single",
    pieces: "1 Box",
    mrp: 1100,
    price: 220,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-PBM-03",
    name: "1/4 Kg Adiyal",
    category: "Paper Bomb",
    type: "single",
    pieces: "1 Box",
    mrp: 250,
    price: 50,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-PBM-04",
    name: "1/2 Kg Adiyal",
    category: "Paper Bomb",
    type: "single",
    pieces: "1 Box",
    mrp: 500,
    price: 100,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-PBM-05",
    name: "1 Kg Adiyal",
    category: "Paper Bomb",
    type: "single",
    pieces: "1 Box",
    mrp: 1000,
    price: 200,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-PBM-06",
    name: "cylinder (Smoke Blast)",
    category: "Paper Bomb",
    type: "single",
    pieces: "1 Box",
    mrp: 950,
    price: 190,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- MATCH BOX (NET RATE Discount) ---
  {
    id: "CRK-MTH-01",
    name: "Super Delux",
    category: "Match Box",
    type: "single",
    pieces: "1 Box",
    mrp: 90,
    price: 90,
    discount: "NET RATE",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-MTH-02",
    name: "Jacky Chan",
    category: "Match Box",
    type: "single",
    pieces: "1 Box",
    mrp: 150,
    price: 150,
    discount: "NET RATE",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-MTH-03",
    name: "Big Boss",
    category: "Match Box",
    type: "single",
    pieces: "1 Box",
    mrp: 290,
    price: 290,
    discount: "NET RATE",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  // --- GUNS (80% Discount) ---
  {
    id: "CRK-GUN-01",
    name: "RING GUN",
    category: "Guns",
    type: "single",
    pieces: "1 No",
    mrp: 80,
    price: 16,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-GUN-02",
    name: "ROLL GUN",
    category: "Guns",
    type: "single",
    pieces: "1 No",
    mrp: 60,
    price: 12,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
  {
    id: "CRK-GUN-03",
    name: "MATCH GUN",
    category: "Guns",
    type: "single",
    pieces: "1 No",
    mrp: 100,
    price: 20,
    discount: "80% OFF",
    badge: "",
    stock: true,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    description: ""
  },
];

// App State
let cart = JSON.parse(localStorage.getItem('crackers_cart') || '[]');
let currentMainView = 'all'; // 'all' | 'combos' | 'single'
let activeCategoryFilter = 'ALL';
let searchQuery = '';

// DOM Cache
const packagesTierContainer = document.getElementById('packagesTierContainer');
const priceListTablesContainer = document.getElementById('priceListTablesContainer');
const catPillsContainer = document.getElementById('catPillsContainer');
const liveSearchInput = document.getElementById('liveSearchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');

// Cart Drawer Elements
const cartDrawerEl = document.getElementById('cartDrawer');
const cartItemsContainerEl = document.getElementById('cartItemsContainer');
const cartDrawerMrpEl = document.getElementById('cartDrawerMrp');
const cartDrawerSavingsEl = document.getElementById('cartDrawerSavings');
const cartDrawerTotalEl = document.getElementById('cartDrawerTotal');
const cartMinAlertEl = document.getElementById('cartMinAlert');
const btnClearCartEl = document.getElementById('btnClearCart');
const btnFooterClearCartEl = document.getElementById('btnFooterClearCart');

// Bottom Floating Summary Bar
const bottomCartBarEl = document.getElementById('bottomCartBar');
const bottomCartItemsEl = document.getElementById('bottomCartItems');
const bottomCartSavingsEl = document.getElementById('bottomCartSavings');
const bottomCartAmountEl = document.getElementById('bottomCartAmount');
const navCartCountEl = document.getElementById('navCartCount');
const bottomCartCountBadgeEl = document.getElementById('bottomCartCountBadge');

// WhatsApp Order Modal Elements
const orderModalEl = document.getElementById('orderModal');
const modalSummaryItemsCountEl = document.getElementById('modalSummaryItemsCount');
const modalSummarySavingsEl = document.getElementById('modalSummarySavings');
const modalSummaryTotalEl = document.getElementById('modalSummaryTotal');

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryPills();
  renderAllViews();
  setupEventListeners();
  updateCartUI();

  // Load saved customer name / phone if available
  const savedProfile = JSON.parse(localStorage.getItem('crackers_customer_profile') || '{}');
  if (savedProfile.name && document.getElementById('orderCustName')) {
    document.getElementById('orderCustName').value = savedProfile.name;
  }
  if (savedProfile.phone && document.getElementById('orderCustPhone')) {
    document.getElementById('orderCustPhone').value = savedProfile.phone;
  }
  if (savedProfile.address && document.getElementById('orderCustAddress')) {
    document.getElementById('orderCustAddress').value = savedProfile.address;
  }
  if (savedProfile.city && document.getElementById('orderCustCity')) {
    document.getElementById('orderCustCity').value = savedProfile.city;
  }
});

// View Switcher: 'all' | 'combos' | 'single'
window.switchMainView = function(view) {
  currentMainView = view;
  
  document.querySelectorAll('.view-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (view === 'all') document.getElementById('tabBtnAll')?.classList.add('active');
  if (view === 'combos') document.getElementById('tabBtnCombos')?.classList.add('active');
  if (view === 'single') document.getElementById('tabBtnSingle')?.classList.add('active');

  const combosSec = document.getElementById('combosSection');
  const priceListSec = document.getElementById('priceListSection');

  if (view === 'combos') {
    if (combosSec) combosSec.style.display = 'block';
    if (priceListSec) priceListSec.style.display = 'none';
  } else if (view === 'single') {
    if (combosSec) combosSec.style.display = 'none';
    if (priceListSec) priceListSec.style.display = 'block';
  } else {
    if (combosSec) combosSec.style.display = 'block';
    if (priceListSec) priceListSec.style.display = 'block';
  }
};

// Render Category Jump Chips
function renderCategoryPills() {
  if (!catPillsContainer) return;

  const categories = ['ALL', ...new Set(PRODUCTS_DATA.map(p => p.category))];
  
  catPillsContainer.innerHTML = categories.map(cat => {
    let icon = '🧨';
    if (cat === 'ALL') icon = '🌟';
    else if (cat.includes('Gift')) icon = '🎁';
    else if (cat.includes('Match')) icon = '🔥';
    else if (cat.includes('Guns')) icon = '🔫';
    else if (cat.includes('Packages')) icon = '🎁';
    else if (cat.includes('Sound')) icon = '💥';
    else if (cat.includes('Chakkar')) icon = '🌀';
    else if (cat.includes('Flower')) icon = '🌸';
    else if (cat.includes('Sparklers')) icon = '✨';
    else if (cat.includes('Rockets')) icon = '🚀';
    else if (cat.includes('Bomb')) icon = '💣';
    else if (cat.includes('Shots') || cat.includes('Sky')) icon = '🎆';
    else if (cat.includes('Garlands') || cat.includes('Wala')) icon = '🎊';
    else if (cat.includes('Kids')) icon = '🧒';

    return `
      <button class="cat-filter-btn ${activeCategoryFilter === cat ? 'active' : ''}" onclick="filterByCategory('${cat}')">
        <span>${icon}</span>
        <span>${cat}</span>
      </button>
    `;
  }).join('');
}

window.filterByCategory = function(cat) {
  activeCategoryFilter = cat;
  renderCategoryPills();
  renderAllViews();

  if (cat.includes('Packages')) {
    switchMainView('combos');
  } else if (cat !== 'ALL') {
    switchMainView('single');
  }
};

// Render Both Combos and Single Products Price Tables
function renderAllViews() {
  const combos = PRODUCTS_DATA.filter(p => p.type === 'combo' || p.category.includes('Packages'));
  const singleProducts = PRODUCTS_DATA.filter(p => p.type !== 'combo' && !p.category.includes('Packages'));

  // Update Badge Counts
  const badgeAll = document.getElementById('badgeAllCount');
  const badgeCombos = document.getElementById('badgeCombosCount');
  const badgeSingle = document.getElementById('badgeSingleCount');
  if (badgeAll) badgeAll.textContent = PRODUCTS_DATA.length;
  if (badgeCombos) badgeCombos.textContent = `${combos.length}`;
  if (badgeSingle) badgeSingle.textContent = `${singleProducts.length}`;

  renderCombosSection(combos);
  renderPriceListTables(singleProducts);
}

// -------------------------------------------------------------
// 1. RENDER COMBOS / PACKAGES (Poornika Poster Offers)
// -------------------------------------------------------------
function renderCombosSection(combos) {
  const combosSec = document.getElementById('combosSection');
  const tabBtnCombos = document.getElementById('tabBtnCombos');
  if (combos.length === 0) {
    if (combosSec) combosSec.style.display = 'none';
    if (tabBtnCombos) tabBtnCombos.style.display = 'none';
    return;
  }
  if (combosSec) combosSec.style.display = 'block';
  if (tabBtnCombos) tabBtnCombos.style.display = 'inline-flex';
  if (!packagesTierContainer) return;

  let filtered = combos;
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = combos.filter(p => p.name.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q)));
  }

  if (filtered.length === 0) {
    packagesTierContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 24px; color: #94a3b8; font-size: 0.9rem;">No package matching "${searchQuery}".</div>`;
    return;
  }

  packagesTierContainer.innerHTML = filtered.map(p => {
    const cartItem = cart.find(item => item.id === p.id);
    const qty = cartItem ? cartItem.quantity : 0;
    const isPopular = p.price === 5000;

    return `
      <div class="package-card ${isPopular ? 'popular' : ''}">
        ${isPopular ? '<div class="popular-ribbon">⭐ Most Popular Deal</div>' : ''}
        
        <div class="pkg-img-wrapper" onclick="openProductModal('${p.id}')">
          <img src="${p.image}" alt="${String(p.name).replace(/"/g, '&quot;')}" class="pkg-img" loading="lazy" decoding="async">
          <span class="pkg-img-badge">${p.discount || '50% OFF'}</span>
        </div>

        <div>
          <span style="font-size: 0.72rem; font-weight: 800; color: #dc2626; text-transform: uppercase;">Official Festive Hamper</span>
          <h3 style="font-size: 1.15rem; font-weight: 900; color: #1e293b; margin-top: 2px;">${p.name}</h3>
          <p style="font-size: 0.82rem; color: #64748b; margin-top: 2px; font-weight: 700;">${p.pieces || ''}</p>
        </div>

        <div class="pkg-shots-free-badge">
          ${p.badge || '💥 FREE SKY SHOTS!'}
        </div>

        <div style="display: flex; align-items: baseline; gap: 8px; margin: 6px 0 6px;">
          <span class="pkg-header-price">₹${p.price.toLocaleString('en-IN')}</span>
          <span style="color: #94a3b8; text-decoration: line-through; font-size: 1.05rem; font-weight: 700;">₹${p.mrp.toLocaleString('en-IN')}</span>
          <span style="font-size: 0.72rem; color: #16a34a; font-weight: 800; background: #dcfce7; padding: 2px 6px; border-radius: 4px;">FREE DELIVERY</span>
        </div>

        <!-- View Combo Items Button -->
        <button type="button" class="btn-view-combo-items" onclick="openComboItemsModal('${p.id}')">
          <span>📋</span> <span>View Combo Items (${p.itemsIncluded ? (p.itemsIncluded.filter(it => !it.includes('FREE') && !it.includes('🎁')).length || p.itemsIncluded.length) : 0}) &rarr;</span>
        </button>

        <div style="margin-top: auto; padding-top: 6px;" id="combo-action-${p.id}">
          ${renderComboActionBtn(p.id, qty)}
        </div>
      </div>
    `;
  }).join('');
}

function renderComboActionBtn(id, qty) {
  if (qty > 0) {
    return `
      <div class="combo-stepper-compact">
        <button type="button" class="combo-stepper-btn" onclick="changeProductQty('${id}', -1)">-</button>
        <span class="combo-stepper-qty">${qty} in Cart</span>
        <button type="button" class="combo-stepper-btn" onclick="changeProductQty('${id}', 1)">+</button>
      </div>
    `;
  }
  return `
    <button type="button" class="btn-combo-add" onclick="setProductQty('${id}', 1)">
      <span>+ Add Package</span>
    </button>
  `;
}

// -------------------------------------------------------------
// COMBO ITEMS DETAILS MODAL (View 50-75 Items)
// -------------------------------------------------------------
let currentModalPackage = null;

window.openComboItemsModal = function(pkgId) {
  const pkg = PRODUCTS_DATA.find(p => p.id === pkgId);
  if (!pkg) return;
  currentModalPackage = pkg;

  const modal = document.getElementById('comboItemsModal');
  const title = document.getElementById('comboModalTitle');
  const sub = document.getElementById('comboModalSubtitle');
  const searchInput = document.getElementById('comboItemSearchInput');

  if (title) title.textContent = pkg.name;
  if (sub) {
    const mainCount = pkg.itemsIncluded ? pkg.itemsIncluded.filter(it => !it.includes('FREE') && !it.includes('🎁')).length : 0;
    const hasBonus = pkg.itemsIncluded && pkg.itemsIncluded.some(it => it.includes('FREE') || it.includes('🎁'));
    sub.textContent = `${pkg.pieces} • Total ${mainCount} Items ${hasBonus ? '+ Free Bonus' : ''} Included`;
  }
  if (searchInput) searchInput.value = '';

  renderComboModalItemsList(pkg.itemsIncluded || []);
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

function renderComboModalItemsList(items, filterText = '') {
  const body = document.getElementById('comboModalBody');
  if (!body) return;

  const q = filterText.toLowerCase();
  const filtered = filterText ? items.filter(it => it.toLowerCase().includes(q)) : items;

  if (filtered.length === 0) {
    body.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 24px; color: #94a3b8; font-size: 0.9rem;">No items match "${filterText}"</div>`;
    return;
  }

  body.innerHTML = filtered.map(item => {
    const isFree = item.includes('FREE') || item.includes('🎁');
    return `
      <div class="combo-item-chip ${isFree ? 'free-item' : ''}">
        <span style="font-size: 1rem;">${isFree ? '🎁' : '✓'}</span>
        <span style="flex: 1;">${item}</span>
      </div>
    `;
  }).join('');
}

window.filterComboModalItems = function(val) {
  if (currentModalPackage && currentModalPackage.itemsIncluded) {
    renderComboModalItemsList(currentModalPackage.itemsIncluded, val);
  }
};

window.closeComboModal = function(e) {
  if (e.target && e.target.id === 'comboItemsModal') {
    closeComboModalDirect();
  }
};

window.closeComboModalDirect = function() {
  const modal = document.getElementById('comboItemsModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
};

// -------------------------------------------------------------
// 2. RENDER SINGLE PRODUCTS (GMR Crackers Style Price Tables)
// -------------------------------------------------------------
function renderPriceListTables(singleProducts) {
  if (!priceListTablesContainer) return;

  let filtered = singleProducts;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }

  if (activeCategoryFilter !== 'ALL' && !activeCategoryFilter.includes('Packages')) {
    filtered = filtered.filter(p => p.category === activeCategoryFilter);
  }

  if (filtered.length === 0) {
    priceListTablesContainer.innerHTML = `
      <div style="text-align: center; padding: 36px 16px; background: white; border-radius: 12px; border: 1px solid #e2e8f0; color: #64748b;">
        <span style="font-size: 2.2rem;">🔍</span>
        <h4 style="margin-top: 8px; color: #1e293b;">No crackers found</h4>
        <p style="font-size: 0.82rem;">Try searching for another keyword or select All Categories.</p>
      </div>
    `;
    return;
  }

  // Group by Category
  const grouped = {};
  filtered.forEach(p => {
    if (!grouped[p.category]) grouped[p.category] = [];
    grouped[p.category].push(p);
  });

  let html = '';

  for (const [categoryName, items] of Object.entries(grouped)) {
    let catIcon = '🧨';
    let themeClass = 'cat-theme-sound';
    if (categoryName.includes('Gift')) { catIcon = '🎁'; themeClass = 'cat-theme-garlands'; }
    else if (categoryName.includes('Match')) { catIcon = '🔥'; themeClass = 'cat-theme-sound'; }
    else if (categoryName.includes('Guns')) { catIcon = '🔫'; themeClass = 'cat-theme-sound'; }
    else if (categoryName.includes('Sound')) { catIcon = '💥'; themeClass = 'cat-theme-sound'; }
    else if (categoryName.includes('Chakkar')) { catIcon = '🌀'; themeClass = 'cat-theme-chakkars'; }
    else if (categoryName.includes('Flower')) { catIcon = '🌸'; themeClass = 'cat-theme-flower'; }
    else if (categoryName.includes('Sparklers')) { catIcon = '✨'; themeClass = 'cat-theme-sparklers'; }
    else if (categoryName.includes('Rockets')) { catIcon = '🚀'; themeClass = 'cat-theme-rockets'; }
    else if (categoryName.includes('Bomb')) { catIcon = '💣'; themeClass = 'cat-theme-bombs'; }
    else if (categoryName.includes('Shots') || categoryName.includes('Sky')) { catIcon = '🎆'; themeClass = 'cat-theme-shots'; }
    else if (categoryName.includes('Garlands') || categoryName.includes('Wala')) { catIcon = '🎊'; themeClass = 'cat-theme-garlands'; }
    else if (categoryName.includes('Kids')) { catIcon = '🧒'; themeClass = 'cat-theme-kids'; }

    html += `
      <div class="category-table-card" id="cat-sec-${categoryName.replace(/\s+/g, '-')}">
        <div class="category-table-header ${themeClass}">
          <span class="cat-name">${catIcon} ${categoryName}</span>
          <span class="cat-count">${items.length} Varieties</span>
        </div>

        <div style="overflow-x: auto;">
          <table class="price-list-table">
            <thead>
              <tr>
                <th style="width: 70px;">Image</th>
                <th>Cracker Name & Packaging</th>
                <th style="width: 95px;">Actual MRP</th>
                <th style="width: 125px;">Rate (Offer)</th>
                <th style="width: 140px; text-align: center;">Quantity</th>
                <th style="width: 110px; text-align: right;">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              ${items.map(item => {
                const cartItem = cart.find(ci => ci.id === item.id);
                const qty = cartItem ? cartItem.quantity : 0;
                const lineTotal = item.price * qty;

                return `
                  <tr class="${qty > 0 ? 'has-qty' : ''}" id="row-${item.id}">
                    <td class="td-img">
                      <img src="${item.image}" alt="${String(item.name).replace(/"/g, '&quot;')}" class="table-img-thumb" loading="lazy" decoding="async"
                           onclick="openProductModal('${item.id}')" title="Click to view details">
                    </td>
                    <td class="td-info">
                      <div class="table-item-name">${item.name}</div>
                      <div class="table-item-desc">${item.description || ''}</div>
                      <span class="table-item-pack">${item.pieces || 'Standard Pack'}</span>
                    </td>
                    <td class="td-pricing td-mrp-col">
                      <span class="table-mrp">₹${item.mrp.toLocaleString('en-IN')}</span>
                    </td>
                    <td class="td-pricing td-rate-col">
                      <span class="table-rate">₹${item.price.toLocaleString('en-IN')}</span>
                      ${item.mrp > item.price ? `<span class="table-mrp mobile-mrp">₹${item.mrp.toLocaleString('en-IN')}</span>` : ''}
                      <span class="table-discount-tag">${item.discount || '77% OFF'}</span>
                    </td>
                    <td class="td-qty" style="text-align: center;">
                      <div class="table-qty-control">
                        <button type="button" class="table-qty-btn minus-btn" onclick="changeProductQty('${item.id}', -1)" title="Decrease">-</button>
                        <input type="number" min="0" value="${qty}" class="table-qty-input" id="input-${item.id}"
                               onchange="setProductQty('${item.id}', parseInt(this.value) || 0)"
                               oninput="setProductQty('${item.id}', parseInt(this.value) || 0)">
                        <button type="button" class="table-qty-btn plus-btn" onclick="changeProductQty('${item.id}', 1)" title="Increase">+</button>
                      </div>
                    </td>
                    <td class="td-total" style="text-align: right;">
                      <span class="table-total-amt ${qty > 0 ? 'active' : ''}" id="total-${item.id}">
                        ₹${lineTotal.toLocaleString('en-IN')}
                      </span>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  priceListTablesContainer.innerHTML = html;
}

// -------------------------------------------------------------
// 3. REAL-TIME AUTOMATIC CALCULATION & CART STATE
// -------------------------------------------------------------
window.changeProductQty = function(productId, delta) {
  const inputEl = document.getElementById(`input-${productId}`);
  let currentQty = 0;
  if (inputEl) {
    currentQty = parseInt(inputEl.value) || 0;
  } else {
    const cartItem = cart.find(ci => ci.id === productId);
    currentQty = cartItem ? cartItem.quantity : 0;
  }
  const newQty = Math.max(0, currentQty + delta);
  setProductQty(productId, newQty);
};

window.setProductQty = function(productId, quantity) {
  const qty = Math.max(0, parseInt(quantity) || 0);
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const itemIndex = cart.findIndex(ci => ci.id === productId);

  if (qty === 0) {
    if (itemIndex > -1) cart.splice(itemIndex, 1);
  } else {
    if (itemIndex > -1) {
      cart[itemIndex].quantity = qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        mrp: product.mrp,
        image: product.image,
        category: product.category,
        quantity: qty
      });
    }
  }

  saveCart();
  updateLiveRow(product, qty);
  updateCartUI();
};

function updateLiveRow(product, qty) {
  const rowEl = document.getElementById(`row-${product.id}`);
  const inputEl = document.getElementById(`input-${product.id}`);
  const totalEl = document.getElementById(`total-${product.id}`);

  if (rowEl) {
    if (qty > 0) rowEl.classList.add('has-qty');
    else rowEl.classList.remove('has-qty');
  }

  if (inputEl && parseInt(inputEl.value) !== qty) {
    inputEl.value = qty;
  }

  if (totalEl) {
    const lineTotal = product.price * qty;
    totalEl.textContent = `₹${lineTotal.toLocaleString('en-IN')}`;
    if (qty > 0) totalEl.classList.add('active');
    else totalEl.classList.remove('active');
  }

  const comboActionEl = document.getElementById(`combo-action-${product.id}`);
  if (comboActionEl) {
    comboActionEl.innerHTML = renderComboActionBtn(product.id, qty);
  }
}

function saveCart() {
  localStorage.setItem('crackers_cart', JSON.stringify(cart));
}

window.clearCart = function() {
  if (!cart || cart.length === 0) return;
  cart = [];
  saveCart();
  PRODUCTS_DATA.forEach(p => {
    updateLiveRow(p, 0);
  });
  updateCartUI();
  if (typeof renderCartDrawerItems === 'function') {
    renderCartDrawerItems();
  }
};

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalMrp = cart.reduce((sum, item) => sum + (item.mrp * item.quantity), 0);
  const savings = Math.max(0, totalMrp - subtotal);

  // Toggle Header Clear button based on cart items
  if (btnClearCartEl) {
    btnClearCartEl.style.display = totalCount > 0 ? 'inline-flex' : 'none';
  }

  // Navbar & Bottom Bar Cart badges
  if (navCartCountEl) navCartCountEl.textContent = totalCount;
  if (bottomCartCountBadgeEl) bottomCartCountBadgeEl.textContent = totalCount;

  // Bottom Floating Bar
  if (bottomCartBarEl) {
    if (totalCount > 0) {
      bottomCartBarEl.style.display = 'flex';
      if (bottomCartItemsEl) bottomCartItemsEl.textContent = `${totalCount} Item${totalCount > 1 ? 's' : ''}`;
      if (bottomCartSavingsEl) bottomCartSavingsEl.textContent = `Save ₹${savings.toLocaleString('en-IN')}`;
      if (bottomCartAmountEl) bottomCartAmountEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    } else {
      bottomCartBarEl.style.display = 'none';
    }
  }

  // Cart Drawer
  if (cartDrawerMrpEl) cartDrawerMrpEl.textContent = `₹${totalMrp.toLocaleString('en-IN')}`;
  if (cartDrawerSavingsEl) cartDrawerSavingsEl.textContent = `₹${savings.toLocaleString('en-IN')}`;
  if (cartDrawerTotalEl) cartDrawerTotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;

  const minOrder = STORE_SETTINGS.minOrderAmount || 3000;
  if (cartMinAlertEl) {
    if (subtotal > 0 && subtotal < minOrder) {
      cartMinAlertEl.style.display = 'block';
      cartMinAlertEl.innerHTML = `⚠️ Minimum order is <strong>₹${minOrder.toLocaleString('en-IN')}</strong>. Please add ₹${(minOrder - subtotal).toLocaleString('en-IN')} more items.`;
    } else {
      cartMinAlertEl.style.display = 'none';
    }
  }

  // Cart Drawer Items List
  if (cartItemsContainerEl) {
    if (cart.length === 0) {
      cartItemsContainerEl.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: #94a3b8;">
          <span style="font-size: 3rem;">🛒</span>
          <h4 style="margin-top: 10px; color: #475569;">Your cart is empty</h4>
          <p style="font-size: 0.85rem;">Select single items or combo packages to order.</p>
        </div>
      `;
    } else {
      cartItemsContainerEl.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${String(item.name).replace(/"/g, '&quot;')}" class="cart-item-thumb">
          <div class="cart-item-details">
            <h5 class="cart-item-title">${item.name}</h5>
            <span class="cart-item-rate">₹${item.price.toLocaleString('en-IN')} each</span>
            <div class="cart-item-controls">
              <div class="table-qty-control">
                <button type="button" class="table-qty-btn" onclick="changeProductQty('${item.id}', -1)">-</button>
                <input type="number" min="0" value="${item.quantity}" class="table-qty-input"
                       onchange="setProductQty('${item.id}', parseInt(this.value) || 0)">
                <button type="button" class="table-qty-btn" onclick="changeProductQty('${item.id}', 1)">+</button>
              </div>
              <span class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Modal Summary Snippet
  if (modalSummaryItemsCountEl) modalSummaryItemsCountEl.textContent = `${totalCount} Items Selected`;
  if (modalSummarySavingsEl) modalSummarySavingsEl.textContent = `You Save ₹${savings.toLocaleString('en-IN')}`;
  if (modalSummaryTotalEl) modalSummaryTotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
}

// -------------------------------------------------------------
// 4. WHATSAPP DIRECT ORDER FLOW (Fast, Zero Friction)
// -------------------------------------------------------------
window.openOrderModal = function() {
  if (cart.length === 0) {
    alert('Please select at least one cracker item or package to order.');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const minOrder = STORE_SETTINGS.minOrderAmount || 3000;
  if (subtotal < minOrder) {
    alert(`Minimum order value is ₹${minOrder.toLocaleString('en-IN')}. Please add ₹${(minOrder - subtotal).toLocaleString('en-IN')} more items to proceed.`);
    return;
  }

  // Close cart drawer if open
  closeCartDrawer();

  // Open WhatsApp Order Modal
  if (orderModalEl) orderModalEl.classList.add('active');
};

window.closeOrderModalDirect = function() {
  if (orderModalEl) orderModalEl.classList.remove('active');
};

window.closeOrderModal = function(e) {
  if (e.target.id === 'orderModal') {
    closeOrderModalDirect();
  }
};

window.submitWhatsAppOrder = function(e) {
  e.preventDefault();

  const name = document.getElementById('orderCustName')?.value.trim();
  const phone = document.getElementById('orderCustPhone')?.value.trim();
  const city = document.getElementById('orderCustCity')?.value.trim();
  const address = document.getElementById('orderCustAddress')?.value.trim();

  if (!name || !phone || !address) {
    alert('Please enter your Name, Phone Number, and Delivery Address.');
    return;
  }

  // Save profile to localStorage for convenience
  localStorage.setItem('crackers_customer_profile', JSON.stringify({ name, phone, city, address }));

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalMrp = cart.reduce((sum, item) => sum + (item.mrp * item.quantity), 0);
  const savings = Math.max(0, totalMrp - subtotal);
  const targetWhatsapp = STORE_SETTINGS.whatsappPhone || '919361154329';

  // Construct Beautiful WhatsApp Order Message
  let msg = `*🎆 POORNIKA CRACKERS - NEW DIWALI ORDER 🎆*\n`;
  msg += `-------------------------------------------\n`;
  msg += `👤 *CUSTOMER DETAILS:*\n`;
  msg += `• Name: *${name}*\n`;
  msg += `• Phone: *${phone}*\n`;
  msg += `• City: *${city}*\n`;
  msg += `• Address: *${address}*\n`;
  msg += `-------------------------------------------\n`;
  msg += `📋 *ORDERED ITEMS (${totalCount} Total):*\n`;

  cart.forEach((item, idx) => {
    msg += `${idx + 1}. *${item.name}*\n   Qty: ${item.quantity} × ₹${item.price} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
  });

  msg += `-------------------------------------------\n`;
  msg += `💰 *TOTAL AMOUNT: ₹${subtotal.toLocaleString('en-IN')}*\n`;
  msg += `🚚 *Delivery:* FREE Doorstep Delivery\n`;
  msg += `-------------------------------------------\n`;
  msg += `Hi Poornika Crackers, please confirm my Diwali crackers booking!`;

  // WhatsApp Target URL with pre-filled order text
  const waUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(msg)}`;

  // Clear cart immediately
  cart = [];
  saveCart();
  PRODUCTS_DATA.forEach(p => {
    updateLiveRow(p, 0);
  });
  updateCartUI();

  // Close modal & drawer
  closeOrderModalDirect();
  if (typeof closeCartDrawer === 'function') {
    closeCartDrawer();
  }

  // Redirect directly to WhatsApp without popup blockers
  window.location.href = waUrl;
};

// -------------------------------------------------------------
// 5. PRODUCT PREVIEW MODAL
// -------------------------------------------------------------
window.openProductModal = function(productId) {
  const p = PRODUCTS_DATA.find(item => item.id === productId);
  if (!p) return;

  const modal = document.getElementById('imageModal');
  const imgEl = document.getElementById('modalImg');
  const catEl = document.getElementById('modalCategory');
  const titleEl = document.getElementById('modalTitle');
  const packEl = document.getElementById('modalPack');
  const descEl = document.getElementById('modalDesc');
  const mrpEl = document.getElementById('modalMrp');
  const priceEl = document.getElementById('modalPrice');
  const actionBtn = document.getElementById('modalActionBtn');

  if (imgEl) imgEl.src = p.image;
  if (catEl) catEl.textContent = p.category;
  if (titleEl) titleEl.textContent = p.name;
  if (packEl) packEl.textContent = p.pieces || 'Standard Festival Packing';
  if (descEl) descEl.textContent = p.description || 'Premium quality Sivakasi crackers with strict safety compliance.';
  if (mrpEl) mrpEl.textContent = `₹${p.mrp.toLocaleString('en-IN')}`;
  if (priceEl) priceEl.textContent = `₹${p.price.toLocaleString('en-IN')}`;

  if (actionBtn) {
    actionBtn.onclick = () => {
      const existing = cart.find(ci => ci.id === p.id);
      setProductQty(p.id, (existing ? existing.quantity : 0) + 1);
      closeImageModalDirect();
    };
  }

  if (modal) modal.classList.add('active');
};

window.closeImageModalDirect = function() {
  const modal = document.getElementById('imageModal');
  if (modal) modal.classList.remove('active');
};

window.closeImageModal = function(e) {
  if (e.target.id === 'imageModal') {
    closeImageModalDirect();
  }
};

// Drawer Controls
window.openCartDrawer = function() {
  if (cartDrawerEl) cartDrawerEl.classList.add('active');
  if (bottomCartBarEl) bottomCartBarEl.style.display = 'none';
};

window.closeCartDrawer = function() {
  if (cartDrawerEl) cartDrawerEl.classList.remove('active');
  if (bottomCartBarEl && cart.length > 0) bottomCartBarEl.style.display = 'flex';
};

window.closeCartDrawerOnOverlay = function(e) {
  if (e.target.id === 'cartDrawer') {
    closeCartDrawer();
  }
};

window.clearSearch = function() {
  if (liveSearchInput) {
    liveSearchInput.value = '';
    searchQuery = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    renderAllViews();
  }
};

// Event Listeners
function setupEventListeners() {
  document.querySelectorAll('.btn-open-cart').forEach(btn => {
    btn.addEventListener('click', openCartDrawer);
  });

  if (liveSearchInput) {
    liveSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
      }
      renderAllViews();
    });
  }
}
