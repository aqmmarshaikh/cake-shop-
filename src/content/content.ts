
export const services = [
  {
    id: "wedding-cakes",
    icon: "💍",
    image: "/images/wedding-cake.jpg",
    titleKey: "services.wedding.title",
    descriptionKey: "services.wedding.desc",
    features: ["Custom Design", "Multi-Tier", "Fresh Flowers", "Gold Leaf"],
    startingPrice: 2500,
  },
  {
    id: "birthday-cakes",
    icon: "🎂",
    image: "/images/birthday-cake.jpg",
    titleKey: "services.birthday.title",
    descriptionKey: "services.birthday.desc",
    features: ["Photo Print", "Custom Shapes", "Themed Decor", "Any Flavor"],
    startingPrice: 800,
  },
  {
    id: "anniversary-cakes",
    icon: "💑",
    image: "/images/anniversary-cake.jpg",
    titleKey: "services.anniversary.title",
    descriptionKey: "services.anniversary.desc",
    features: ["Romantic Design", "Heart Shapes", "Gold Accents", "Custom Message"],
    startingPrice: 1200,
  },
  {
    id: "corporate-cakes",
    icon: "🏢",
    image: "/images/corporate-cake.jpg",
    titleKey: "services.corporate.title",
    descriptionKey: "services.corporate.desc",
    features: ["Logo Print", "Brand Colors", "Bulk Orders", "Delivery"],
    startingPrice: 1500,
  },
  {
    id: "fondant-cakes",
    icon: "🎨",
    image: "/images/fondant-cake.jpg",
    titleKey: "services.fondant.title",
    descriptionKey: "services.fondant.desc",
    features: ["3D Sculpted", "Cartoon Characters", "Custom Figures", "Edible Art"],
    startingPrice: 1800,
  },
  {
    id: "cupcakes",
    icon: "🧁",
    image: "/images/cupcakes.jpg",
    titleKey: "services.cupcakes.title",
    descriptionKey: "services.cupcakes.desc",
    features: ["Mini Cakes", "Assorted Flavors", "Party Packs", "Gift Ready"],
    startingPrice: 400,
  },
];

export const pricing = [
  {
    id: "basic",
    nameKey: "pricing.basic.name",
    descKey: "pricing.basic.desc",
    price: 800,
    unit: "kg",
    popular: false,
    features: [
      "pricing.basic.f1",
      "pricing.basic.f2",
      "pricing.basic.f3",
      "pricing.basic.f4",
    ],
    cta: "pricing.cta",
  },
  {
    id: "premium",
    nameKey: "pricing.premium.name",
    descKey: "pricing.premium.desc",
    price: 1800,
    unit: "kg",
    popular: true,
    features: [
      "pricing.premium.f1",
      "pricing.premium.f2",
      "pricing.premium.f3",
      "pricing.premium.f4",
      "pricing.premium.f5",
    ],
    cta: "pricing.cta",
  },
  {
    id: "luxury",
    nameKey: "pricing.luxury.name",
    descKey: "pricing.luxury.desc",
    price: 3500,
    unit: "kg",
    popular: false,
    features: [
      "pricing.luxury.f1",
      "pricing.luxury.f2",
      "pricing.luxury.f3",
      "pricing.luxury.f4",
      "pricing.luxury.f5",
      "pricing.luxury.f6",
    ],
    cta: "pricing.cta",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Ahmedabad",
    rating: 5,
    image: "/images/testimonial-1.jpg",
    textKey: "testimonials.1.text",
    occasion: "Wedding Cake",
    date: "March 2024",
  },
  {
    id: 2,
    name: "Rahul Patel",
    location: "Gandhinagar",
    rating: 5,
    image: "/images/testimonial-2.jpg",
    textKey: "testimonials.2.text",
    occasion: "Birthday Cake",
    date: "April 2024",
  },
  {
    id: 3,
    name: "Meera Shah",
    location: "Ahmedabad",
    rating: 5,
    image: "/images/testimonial-3.jpg",
    textKey: "testimonials.3.text",
    occasion: "Anniversary Cake",
    date: "May 2024",
  },
  {
    id: 4,
    name: "Anjali Desai",
    location: "Vadodara",
    rating: 5,
    image: "/images/testimonial-4.jpg",
    textKey: "testimonials.4.text",
    occasion: "Corporate Order",
    date: "June 2024",
  },
];

export const faqs = [
  {
    id: 1,
    questionKey: "faq.1.q",
    answerKey: "faq.1.a",
  },
  {
    id: 2,
    questionKey: "faq.2.q",
    answerKey: "faq.2.a",
  },
  {
    id: 3,
    questionKey: "faq.3.q",
    answerKey: "faq.3.a",
  },
  {
    id: 4,
    questionKey: "faq.4.q",
    answerKey: "faq.4.a",
  },
  {
    id: 5,
    questionKey: "faq.5.q",
    answerKey: "faq.5.a",
  },
  {
    id: 6,
    questionKey: "faq.6.q",
    answerKey: "faq.6.a",
  },
];

export const galleryImages = [
  { id: 1, src: "/images/gallery-1.jpg", category: "wedding", captionKey: "gallery.wedding" },
  { id: 2, src: "/images/gallery-2.jpg", category: "birthday", captionKey: "gallery.birthday" },
  { id: 3, src: "/images/gallery-3.jpg", category: "fondant", captionKey: "gallery.fondant" },
  { id: 4, src: "/images/gallery-4.jpg", category: "wedding", captionKey: "gallery.wedding2" },
  { id: 5, src: "/images/gallery-5.jpg", category: "cupcakes", captionKey: "gallery.cupcakes" },
  { id: 6, src: "/images/gallery-6.jpg", category: "birthday", captionKey: "gallery.birthday2" },
  { id: 7, src: "/images/gallery-7.jpg", category: "anniversary", captionKey: "gallery.anniversary" },
  { id: 8, src: "/images/gallery-8.jpg", category: "fondant", captionKey: "gallery.fondant2" },
  { id: 9, src: "/images/gallery-9.jpg", category: "cupcakes", captionKey: "gallery.cupcakes2" },
];

export const stats = [
  { id: 1, value: "5000+", labelKey: "stats.cakes" },
  { id: 2, value: "8+", labelKey: "stats.years" },
  { id: 3, value: "4.9★", labelKey: "stats.rating" },
  { id: 4, value: "100%", labelKey: "stats.fresh" },
];

export const flavors = [
  "Vanilla", "Chocolate", "Red Velvet", "Black Forest", "Butterscotch",
  "Pineapple", "Mango", "Strawberry", "Blueberry", "Oreo",
  "Coffee", "Lemon", "Coconut", "Gulab Jamun", "Kesar Pista",
];
