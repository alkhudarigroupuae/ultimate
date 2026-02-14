const defaultHero = {
  title: "TASTE THE EXCELLENCE",
  subtitle: "Premium Coffee & Exquisite Dining",
  image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1470&auto=format&fit=crop"
};

const products = [
  {
    id: 1,
    name: "Signature Espresso",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=1374&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: 2,
    name: "Avocado Toast",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1588137372308-15f75323ca8d?q=80&w=1374&auto=format&fit=crop",
    category: "Breakfast"
  },
  {
    id: 3,
    name: "Iced Spanish Latte",
    price: 24.00,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1469&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: 4,
    name: "Chicken Caesar Salad",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1470&auto=format&fit=crop",
    category: "Food"
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?q=80&w=1374&auto=format&fit=crop",
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
