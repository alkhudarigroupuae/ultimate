const PLACEHOLDER = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23000000"/><text x="50%" y="50%" fill="%23ffffff" font-size="24" font-family="Segoe UI, Arial" text-anchor="middle" dominant-baseline="middle">ULTIMATE</text></svg>';

const defaultHero = {
  title: "ULTIMATE GROOMING",
  subtitle: "VIP Services for the Modern Man",
  image: PLACEHOLDER
};

const services = [
  {
    id: 1,
    name: "Classic Haircut",
    price: 60.00,
    image: PLACEHOLDER,
    category: "Hair"
  },
  {
    id: 2,
    name: "Beard Trim & Shape",
    price: 40.00,
    image: PLACEHOLDER,
    category: "Beard"
  },
  {
    id: 3,
    name: "Royal Shave",
    price: 80.00,
    image: PLACEHOLDER,
    category: "Beard"
  },
  {
    id: 4,
    name: "Hair Coloring",
    price: 150.00,
    image: PLACEHOLDER,
    category: "Hair"
  },
  {
    id: 5,
    name: "Facial Treatment",
    price: 120.00,
    image: PLACEHOLDER,
    category: "Spa"
  },
  {
    id: 6,
    name: "Head Massage",
    price: 50.00,
    image: PLACEHOLDER,
    category: "Spa"
  }
];

// Initialize services from LocalStorage or default
let servicesData = JSON.parse(localStorage.getItem('barber_services')) || services;

// Helper to save services
function saveServices(newServices) {
    servicesData = newServices;
    localStorage.setItem('barber_services', JSON.stringify(servicesData));
    return true;
}

// Ensure defaultHero is also customizable if needed
let heroData = JSON.parse(localStorage.getItem('barber_hero')) || defaultHero;

function saveHero(newHero) {
    heroData = newHero;
    localStorage.setItem('barber_hero', JSON.stringify(heroData));
    return true;
}
