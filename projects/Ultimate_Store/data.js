const PLACEHOLDER = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23000000"/><text x="50%" y="50%" fill="%23ffffff" font-size="24" font-family="Segoe UI, Arial" text-anchor="middle" dominant-baseline="middle">ULTIMATE</text></svg>';

const defaultHero = {
  title: "EQUIP YOUR GREATNESS",
  subtitle: "Premium Gear for the Ultimate Athlete",
  image: PLACEHOLDER
};

const products = [
  {
    id: 1,
    name: "Ultimate Hoodie - Black",
    price: 120.00,
    image: PLACEHOLDER,
    category: "Apparel"
  },
  {
    id: 2,
    name: "Ultimate Hoodie - Purple",
    price: 120.00,
    image: PLACEHOLDER,
    category: "Apparel"
  },
  {
    id: 3,
    name: "Performance Cap",
    price: 45.00,
    image: PLACEHOLDER,
    category: "Accessories"
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 60.00,
    image: PLACEHOLDER,
    category: "Accessories"
  },
  {
    id: 5,
    name: "Gym Bag - Large",
    price: 180.00,
    image: PLACEHOLDER,
    category: "Bags"
  }
];

// Initialize products from LocalStorage or default
let productsData = JSON.parse(localStorage.getItem('store_products')) || products;

// Helper to save products
function saveProducts(newProducts) {
    productsData = newProducts;
    localStorage.setItem('store_products', JSON.stringify(productsData));
    return true;
}

// Ensure defaultHero is also customizable if needed
let heroData = JSON.parse(localStorage.getItem('store_hero')) || defaultHero;

function saveHero(newHero) {
    heroData = newHero;
    localStorage.setItem('store_hero', JSON.stringify(heroData));
    return true;
}
