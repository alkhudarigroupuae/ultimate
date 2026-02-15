const PLACEHOLDER = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23000000"/><text x="50%" y="50%" fill="%23ffffff" font-size="24" font-family="Segoe UI, Arial" text-anchor="middle" dominant-baseline="middle">ULTIMATE</text></svg>';

const defaultProducts = [
  {
    id: 1,
    name: "اشتراك يومي",
    price: 4000,
    image: PLACEHOLDER,
    category: "Membership"
  },
  {
    id: 2,
    name: "اشتراك شهري (سيدات)",
    price: 2500,
    image: PLACEHOLDER,
    category: "Membership"
  },
  {
    id: 3,
    name: "اشتراك شهري (رجال)",
    price: 3500,
    image: PLACEHOLDER,
    category: "Membership"
  },
  {
    id: 4,
    name: "عرض 3 أشهر (سيدات)",
    price: 6000,
    image: PLACEHOLDER,
    category: "Bundle"
  },
  {
    id: 5,
    name: "عرض 3 أشهر (رجال)",
    price: 8000,
    image: PLACEHOLDER,
    category: "Bundle"
  },
  {
    id: 6,
    name: "اشتراك صالة برايڤت",
    price: 7500,
    image: PLACEHOLDER,
    category: "VIP"
  },
  {
    id: 7,
    name: "مواي تاي (كوتش ضحى)",
    price: 2000,
    image: PLACEHOLDER,
    category: "Classes"
  },
  {
    id: 8,
    name: "ايروبيك (كوتش ضحى)",
    price: 2000,
    image: PLACEHOLDER,
    category: "Classes"
  },
  {
    id: 9,
    name: "بوكسينغ (كوتش خضر)",
    price: 2000,
    image: PLACEHOLDER,
    category: "Classes"
  },
  {
    id: 10,
    name: "تايكواندو (كوتش يحيى)",
    price: 2000,
    image: PLACEHOLDER,
    category: "Classes"
  },
  {
    id: 11,
    name: "ميكس كلاس (كوتش ليندا)",
    price: 2000,
    image: PLACEHOLDER,
    category: "Classes"
  },
  {
    id: 12,
    name: "زومبا (كوتش نجوى)",
    price: 2000,
    image: PLACEHOLDER,
    category: "Classes"
  },
  {
    id: 13,
    name: "كيك بوكسينغ (كوتش زيد)",
    price: 2000,
    image: PLACEHOLDER,
    category: "Classes"
  },
  {
    id: 14,
    name: "برنامج تدريب خاص",
    price: 1500,
    image: PLACEHOLDER,
    category: "Program"
  }
];

// Initialize products from LocalStorage or default (fallback if empty or invalid)
let productsStorage;
try {
    const raw = localStorage.getItem('fitness_products');
    productsStorage = raw ? JSON.parse(raw) : null;
} catch (_) {
    productsStorage = null;
}

let products = Array.isArray(productsStorage) && productsStorage.length ? productsStorage : defaultProducts;

// Helper to save products (can be used by dashboard)
function saveProducts(newProducts) {
    products = newProducts;
    localStorage.setItem('fitness_products', JSON.stringify(products));
    return true;
}

const defaultHero = {
    title: "UNLEASH YOUR POTENTIAL",
    subtitle: "Join the ultimate fitness community today",
    image: PLACEHOLDER
};
