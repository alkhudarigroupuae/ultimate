const defaultHero = {
  title: "EQUIP YOUR GREATNESS",
  subtitle: "Premium Gear for the Ultimate Athlete",
  image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
};

const products = [
  {
    id: 1,
    name: "Ultimate Hoodie - Black",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1374&auto=format&fit=crop",
    category: "Apparel"
  },
  {
    id: 2,
    name: "Ultimate Hoodie - Purple",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=1374&auto=format&fit=crop",
    category: "Apparel"
  },
  {
    id: 3,
    name: "Performance Cap",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1374&auto=format&fit=crop",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 60.00,
    image: "https://images.unsplash.com/photo-1526403225898-eda7c1e3b28b?q=80&w=1374&auto=format&fit=crop",
    category: "Accessories"
  },
  {
    id: 5,
    name: "Gym Bag - Large",
    price: 180.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1374&auto=format&fit=crop",
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
