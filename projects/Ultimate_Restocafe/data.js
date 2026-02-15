const PLACEHOLDER = 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=1374&auto=format&fit=crop';

const defaultHero = {
  title: "TASTE THE EXCELLENCE",
  subtitle: "Premium Coffee & Exquisite Dining",
  image: PLACEHOLDER
};

const products = [
  { id: 1, name: "Iced Coffee", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 2, name: "Iced Americano", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 3, name: "Iced Americano Lemon", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 4, name: "Iced Americano Banana", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 5, name: "Iced Americano Lotus", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 6, name: "Iced Americano Coconut", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 7, name: "Iced Latte", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 8, name: "Iced Spanish Latte", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 9, name: "Iced Vanilla Latte", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 10, name: "Iced Caramel Latte", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 11, name: "Iced Hazelnut Latte", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 12, name: "Iced Mocha Latte", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 13, name: "Iced Mocha", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 14, name: "Iced White Mocha", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 15, name: "Mocha Frappuccino", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 16, name: "Caramel Frappuccino", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 17, name: "Vanilla Frappuccino", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 18, name: "Iced Long Black", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 19, name: "Iced Gold Brew", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 20, name: "Iced Blue", price: 0, image: PLACEHOLDER, category: "Iced Coffee" },
  { id: 21, name: "Banana Strawberry Milk", price: 0, image: PLACEHOLDER, category: "Cocktail" },
  { id: 22, name: "Berry Strawberry Milk", price: 0, image: PLACEHOLDER, category: "Cocktail" },
  { id: 23, name: "Banana Cream Honey Cocktail", price: 0, image: PLACEHOLDER, category: "Cocktail" },
  { id: 24, name: "Banana Honey Milk", price: 0, image: PLACEHOLDER, category: "Cocktail" },
  { id: 25, name: "Pineapple Banana Honey Milk", price: 0, image: PLACEHOLDER, category: "Cocktail" },
  { id: 26, name: "Avocado Banana Milk", price: 0, image: PLACEHOLDER, category: "Cocktail" },
  { id: 27, name: "Crazy Ultimate", price: 0, image: PLACEHOLDER, category: "Cocktail" },
  { id: 28, name: "Fruits with Cream", price: 0, image: PLACEHOLDER, category: "Emperor" },
  { id: 29, name: "Avocado Emperor", price: 0, image: PLACEHOLDER, category: "Emperor" },
  { id: 30, name: "Apache Emperor", price: 0, image: PLACEHOLDER, category: "Emperor" },
  { id: 31, name: "Extra with Nuts", price: 0, image: PLACEHOLDER, category: "Emperor" },
  { id: 32, name: "Strawberry Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 33, name: "Orange Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 34, name: "Strawberry Pineapple Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 35, name: "Strawberry Kiwi Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 36, name: "Kiwi Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 37, name: "Lemon Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 38, name: "Kiwi Lemon Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 39, name: "Pineapple Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 40, name: "Mango Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 41, name: "Polo Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 42, name: "Polo Ginger Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 43, name: "Mixed Berry Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 44, name: "Watermelon Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 45, name: "Berry Juice", price: 0, image: PLACEHOLDER, category: "Juices" },
  { id: 46, name: "Oreo Milkshake", price: 0, image: PLACEHOLDER, category: "Milkshake" },
  { id: 47, name: "Vanilla Milkshake", price: 0, image: PLACEHOLDER, category: "Milkshake" },
  { id: 48, name: "Strawberry Milkshake", price: 0, image: PLACEHOLDER, category: "Milkshake" },
  { id: 49, name: "KitKat Milkshake", price: 0, image: PLACEHOLDER, category: "Milkshake" },
  { id: 50, name: "Kinder Milkshake", price: 0, image: PLACEHOLDER, category: "Milkshake" },
  { id: 51, name: "Snickers Milkshake", price: 0, image: PLACEHOLDER, category: "Milkshake" },
  { id: 52, name: "Chocolate Milkshake", price: 0, image: PLACEHOLDER, category: "Milkshake" },
  { id: 53, name: "Lotus Milkshake", price: 0, image: PLACEHOLDER, category: "Milkshake" },
  { id: 54, name: "Berry Milkshake", price: 0, image: PLACEHOLDER, category: "Milkshake" },
  { id: 55, name: "Banana Nuts Milkshake", price: 0, image: PLACEHOLDER, category: "Milkshake" },
  { id: 56, name: "Chocolate Nutella Crepe", price: 0, image: PLACEHOLDER, category: "Crepe" },
  { id: 57, name: "Cream Chocolate Crepe", price: 0, image: PLACEHOLDER, category: "Crepe" },
  { id: 58, name: "Fruit Cream Crepe", price: 0, image: PLACEHOLDER, category: "Crepe" },
  { id: 59, name: "Pistachio Crepe", price: 0, image: PLACEHOLDER, category: "Crepe" },
  { id: 60, name: "Chocolate Fettuccine Crepe", price: 0, image: PLACEHOLDER, category: "Crepe" },
  { id: 61, name: "Fruit Fettuccine Crepe", price: 0, image: PLACEHOLDER, category: "Crepe" },
  { id: 62, name: "7up", price: 0, image: PLACEHOLDER, category: "Soft Drinks" },
  { id: 63, name: "Pepsi", price: 0, image: PLACEHOLDER, category: "Soft Drinks" },
  { id: 64, name: "Mirinda Apple", price: 0, image: PLACEHOLDER, category: "Soft Drinks" },
  { id: 65, name: "Mirinda Orange", price: 0, image: PLACEHOLDER, category: "Soft Drinks" },
  { id: 66, name: "7up Grenadine", price: 0, image: PLACEHOLDER, category: "Soft Drinks" },
  { id: 67, name: "7up Blue Hawaii", price: 0, image: PLACEHOLDER, category: "Soft Drinks" },
  { id: 68, name: "7up Kiwi", price: 0, image: PLACEHOLDER, category: "Soft Drinks" },
  { id: 69, name: "7up Pineapple", price: 0, image: PLACEHOLDER, category: "Soft Drinks" },
  { id: 70, name: "7up Lemon Mint", price: 0, image: PLACEHOLDER, category: "Soft Drinks" },
  { id: 71, name: "7up Berry", price: 0, image: PLACEHOLDER, category: "Soft Drinks" },
  { id: 72, name: "7up Blueberry", price: 0, image: PLACEHOLDER, category: "Soft Drinks" },
  { id: 73, name: "7up Wild Berry", price: 0, image: PLACEHOLDER, category: "Soft Drinks" },
  { id: 74, name: "Red Bull Mexican Grenadine", price: 0, image: PLACEHOLDER, category: "Energy Drinks" },
  { id: 75, name: "Red Bull Lemon", price: 0, image: PLACEHOLDER, category: "Energy Drinks" },
  { id: 76, name: "Red Bull Strawberry", price: 0, image: PLACEHOLDER, category: "Energy Drinks" },
  { id: 77, name: "Mojito Energy", price: 0, image: PLACEHOLDER, category: "Energy Drinks" },
  { id: 78, name: "Fruit Salad with Chocolate", price: 0, image: PLACEHOLDER, category: "Fruit Salads" },
  { id: 79, name: "Fruit Salad Cream Honey", price: 0, image: PLACEHOLDER, category: "Fruit Salads" },
  { id: 80, name: "Fruit Salad Extra Nuts", price: 0, image: PLACEHOLDER, category: "Fruit Salads" },
  { id: 81, name: "Hot Chocolate Milk", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 82, name: "Hot Chocolate", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 83, name: "Nescafe with Milk", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 84, name: "Nescafe", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 85, name: "Cappuccino", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 86, name: "Hazelnut Cappuccino", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 87, name: "Caramel Cappuccino", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 88, name: "Vanilla Cappuccino", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 89, name: "Chocolate Cappuccino", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 90, name: "Mocha", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 91, name: "Spanish Latte", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 92, name: "Caramel Latte", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 93, name: "Hazelnut Latte", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 94, name: "Vanilla Latte", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 95, name: "Macchiato", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 96, name: "Flat White", price: 0, image: PLACEHOLDER, category: "Hot Drinks" },
  { id: 97, name: "Espresso", price: 0, image: PLACEHOLDER, category: "Coffee" },
  { id: 98, name: "Turkish Coffee", price: 0, image: PLACEHOLDER, category: "Coffee" },
  { id: 99, name: "Americano", price: 0, image: PLACEHOLDER, category: "Coffee" },
  { id: 100, name: "Black Coffee", price: 0, image: PLACEHOLDER, category: "Coffee" },
  { id: 101, name: "Gold Coffee", price: 0, image: PLACEHOLDER, category: "Coffee" },
  { id: 102, name: "Black Tea", price: 0, image: PLACEHOLDER, category: "Healthy Hot Drinks" },
  { id: 103, name: "Hibiscus", price: 0, image: PLACEHOLDER, category: "Healthy Hot Drinks" },
  { id: 104, name: "Damascus Herbs Tea", price: 0, image: PLACEHOLDER, category: "Healthy Hot Drinks" },
  { id: 105, name: "Ginger Cinnamon Honey", price: 0, image: PLACEHOLDER, category: "Healthy Hot Drinks" },
  { id: 106, name: "Lemon Ginger Honey", price: 0, image: PLACEHOLDER, category: "Healthy Hot Drinks" },
  { id: 107, name: "Ginger Lemon", price: 0, image: PLACEHOLDER, category: "Healthy Hot Drinks" },
  { id: 108, name: "Honey Lemon", price: 0, image: PLACEHOLDER, category: "Healthy Hot Drinks" },
  { id: 109, name: "Cumin Lemon", price: 0, image: PLACEHOLDER, category: "Healthy Hot Drinks" },
  { id: 110, name: "Flavored Tea", price: 0, image: PLACEHOLDER, category: "Healthy Hot Drinks" }
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
