const defaultHero = {
  title: "ULTIMATE GROOMING",
  subtitle: "VIP Services for the Modern Man",
  image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1474&auto=format&fit=crop"
};

const services = [
  {
    id: 1,
    name: "Classic Haircut",
    price: 60.00,
    image: "https://images.unsplash.com/photo-1599351431202-6e0c06e7af1f?q=80&w=1470&auto=format&fit=crop",
    category: "Hair"
  },
  {
    id: 2,
    name: "Beard Trim & Shape",
    price: 40.00,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1470&auto=format&fit=crop",
    category: "Beard"
  },
  {
    id: 3,
    name: "Royal Shave",
    price: 80.00,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop",
    category: "Beard"
  },
  {
    id: 4,
    name: "Hair Coloring",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1374&auto=format&fit=crop",
    category: "Hair"
  },
  {
    id: 5,
    name: "Facial Treatment",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470&auto=format&fit=crop",
    category: "Spa"
  },
  {
    id: 6,
    name: "Head Massage",
    price: 50.00,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1374&auto=format&fit=crop",
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
