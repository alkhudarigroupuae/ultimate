const PLACEHOLDER = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23000000"/><text x="50%" y="50%" fill="%23ffffff" font-size="24" font-family="Segoe UI, Arial" text-anchor="middle" dominant-baseline="middle">ULTIMATE</text></svg>';

const defaultHero = {
  title: "TASTE THE EXCELLENCE",
  subtitle: "Premium Coffee & Exquisite Dining",
  image: PLACEHOLDER
};

const products = [
  {
    id: 1,
    name: "Signature Espresso",
    price: 18.00,
    image: PLACEHOLDER,
    category: "Coffee"
  },
  {
    id: 2,
    name: "Avocado Toast",
    price: 35.00,
    image: PLACEHOLDER,
    category: "Breakfast"
  },
  {
    id: 3,
    name: "Iced Spanish Latte",
    price: 24.00,
    image: PLACEHOLDER,
    category: "Coffee"
  },
  {
    id: 4,
    name: "Chicken Caesar Salad",
    price: 45.00,
    image: PLACEHOLDER,
    category: "Food"
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    price: 15.00,
    image: PLACEHOLDER,
    category: "Dessert"
  }
];

// Initialize products from LocalStorage or default
let productsData = JSON.parse(localStorage.getItem('restocafe_products')) || products;

// Helper to save products
function saveProducts(newProducts) {
    productsData = newProducts;
    localStorage.setItem('restocafe_products', JSON.stringify(productsData));
    return true;
}

// Ensure defaultHero is also customizable if needed
let heroData = JSON.parse(localStorage.getItem('restocafe_hero')) || defaultHero;

function saveHero(newHero) {
    heroData = newHero;
    localStorage.setItem('restocafe_hero', JSON.stringify(heroData));
    return true;
}
