const defaultProducts = [
  {
    id: 1,
    name: "اشتراك يومي",
    price: 4000,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    category: "Membership"
  },
  {
    id: 2,
    name: "اشتراك شهري (سيدات)",
    price: 2500,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop",
    category: "Membership"
  },
  {
    id: 3,
    name: "اشتراك شهري (رجال)",
    price: 3500,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
    category: "Membership"
  },
  {
    id: 4,
    name: "عرض 3 أشهر (سيدات)",
    price: 6000,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop",
    category: "Bundle"
  },
  {
    id: 5,
    name: "عرض 3 أشهر (رجال)",
    price: 8000,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
    category: "Bundle"
  },
  {
    id: 6,
    name: "اشتراك صالة برايڤت",
    price: 7500,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    category: "VIP"
  },
  {
    id: 7,
    name: "مواي تاي (كوتش ضحى)",
    price: 2000,
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop",
    category: "Classes"
  },
  {
    id: 8,
    name: "ايروبيك (كوتش ضحى)",
    price: 2000,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop",
    category: "Classes"
  },
  {
    id: 9,
    name: "بوكسينغ (كوتش خضر)",
    price: 2000,
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop",
    category: "Classes"
  },
  {
    id: 10,
    name: "تايكواندو (كوتش يحيى)",
    price: 2000,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
    category: "Classes"
  },
  {
    id: 11,
    name: "ميكس كلاس (كوتش ليندا)",
    price: 2000,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop",
    category: "Classes"
  },
  {
    id: 12,
    name: "زومبا (كوتش نجوى)",
    price: 2000,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop",
    category: "Classes"
  },
  {
    id: 13,
    name: "كيك بوكسينغ (كوتش زيد)",
    price: 2000,
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop",
    category: "Classes"
  },
  {
    id: 14,
    name: "برنامج تدريب خاص",
    price: 1500,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
    category: "Program"
  }
];

// Initialize products from LocalStorage or default
let products = JSON.parse(localStorage.getItem('fitness_products')) || defaultProducts;

// Helper to save products (can be used by dashboard)
function saveProducts(newProducts) {
    products = newProducts;
    localStorage.setItem('fitness_products', JSON.stringify(products));
    return true;
}

const defaultHero = {
    title: "UNLEASH YOUR POTENTIAL",
    subtitle: "Join the ultimate fitness community today",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
};
