export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  priceValue: number;
  beds: number;
  baths: number;
  area: string;
  type: "House" | "Apartment" | "Land";
  purpose: "Buy" | "Rent";
  image: string;
  featured?: boolean;
  description: string;
  amenities: string[];
};

export const properties: Property[] = [
  {
    id: "1", title: "Modern Glass Villa", location: "Lekki Phase 1, Lagos",
    price: "₦185,000,000", priceValue: 185000000, beds: 4, baths: 5, area: "320 m²",
    type: "House", purpose: "Buy", featured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    description: "A bright contemporary home with generous living spaces, a private garden, modern finishes, and convenient access to local amenities.",
    amenities: ["Parking", "Fitted kitchen", "Garden", "24-hour security"]
  },
  {
    id: "2", title: "Minimalist City Apartment", location: "Victoria Island, Lagos",
    price: "₦95,000,000", priceValue: 95000000, beds: 3, baths: 3, area: "180 m²",
    type: "Apartment", purpose: "Buy", featured: true,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    description: "A stylish apartment with an open-plan layout, large windows, and a calm neutral interior in a convenient city location.",
    amenities: ["Elevator", "Gym", "Parking", "Power backup"]
  },
  {
    id: "3", title: "Family Garden Residence", location: "Ajah, Lagos",
    price: "₦650,000 / year", priceValue: 650000, beds: 5, baths: 4, area: "410 m²",
    type: "House", purpose: "Rent",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
    description: "A spacious family home with a landscaped outdoor area, multiple bedrooms, and room to entertain.",
    amenities: ["Garden", "Parking", "Boys' quarters", "Security"]
  },
  {
    id: "4", title: "Luxury Penthouse", location: "Ikoyi, Lagos",
    price: "₦240,000,000", priceValue: 240000000, beds: 3, baths: 4, area: "260 m²",
    type: "Apartment", purpose: "Buy",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    description: "A premium penthouse concept featuring a refined interior, spacious rooms, and an elevated city-living feel.",
    amenities: ["Balcony", "Pool", "Gym", "Concierge"]
  },
  {
    id: "5", title: "Contemporary Starter Home", location: "Gwarinpa, Abuja",
    price: "₦72,000,000", priceValue: 72000000, beds: 3, baths: 3, area: "210 m²",
    type: "House", purpose: "Buy",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    description: "A practical, modern home with comfortable living areas and easy access to everyday services.",
    amenities: ["Parking", "Fitted kitchen", "Water supply", "Security"]
  },
  {
    id: "6", title: "Bright City Rental", location: "Wuse 2, Abuja",
    price: "₦4,500,000 / year", priceValue: 4500000, beds: 2, baths: 2, area: "125 m²",
    type: "Apartment", purpose: "Rent",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    description: "A bright apartment with a practical layout, comfortable bedrooms, and a convenient city address.",
    amenities: ["Parking", "Balcony", "Security", "Water supply"]
  }
];
