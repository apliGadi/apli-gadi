export interface Car {
  id: string
  brand: string
  model: string
  variant: string
  year: number
  kmDriven: number
  fuelType: "Petrol" | "Diesel" | "CNG" | "Electric" | "Hybrid"
  transmission: "Manual" | "Automatic"
  registrationState: string
  price: number
  emiStarting: number
  image: string
  images: string[]
  ownership: string
  color: string
  engine: string
  mileage: string
  insurance: string
  sold: boolean
}

export interface Testimonial {
  id: string
  name: string
  car: string
  review: string
  image: string
}

export const cars: Car[] = [
  {
    id: "1",
    brand: "Maruti Suzuki",
    model: "Swift",
    variant: "VXI",
    year: 2013,
    kmDriven: 50000,
    fuelType: "Petrol",
    transmission: "Manual",
    registrationState: "MH",
    price: 325000,
    emiStarting: 8500,
    image: "/images/car-1.jpg",
    images: ["/images/car-1.jpg"],
    ownership: "1st Owner",
    color: "Silver",
    engine: "1200 cc",
    mileage: "22 km/l",
    insurance: "Comprehensive",
    sold: false,
  },
  {
    id: "2",
    brand: "Maruti",
    model: "Swift",
    variant: "VXI",
    year: 2012,
    kmDriven: 80000,
    fuelType: "Petrol",
    transmission: "Manual",
    registrationState: "MH",
    price: 280000,
    emiStarting: 21000,
    image: "/images/car-2.jpg",
    images: ["/images/car-2.jpg"],
    ownership: "2nd Owner",
    color: "Perl White",
    engine: "1200 cc",
    mileage: "22 km/l",
    insurance: "Comprehensive",
    sold: false,
  },
  {
    id: "3",
    brand: "Honda",
    model: "City",
    variant: "ZX CVT",
    year: 2020,
    kmDriven: 35000,
    fuelType: "Petrol",
    transmission: "Automatic",
    registrationState: "MH",
    price: 975000,
    emiStarting: 14000,
    image: "/images/car-3.jpg",
    images: ["/images/car-3.jpg"],
    ownership: "2nd Owner",
    color: "Red",
    engine: "1498 cc",
    mileage: "18 km/l",
    insurance: "Third Party",
    sold: false,
  },
  {
    id: "4",
    brand: "Toyota",
    model: "Fortuner",
    variant: "4x2 AT",
    year: 2021,
    kmDriven: 42000,
    fuelType: "Diesel",
    transmission: "Automatic",
    registrationState: "MH",
    price: 3250000,
    emiStarting: 47000,
    image: "/images/car-4.jpg",
    images: ["/images/car-4.jpg"],
    ownership: "1st Owner",
    color: "Black",
    engine: "2755 cc",
    mileage: "10 km/l",
    insurance: "Comprehensive",
    sold: false,
  },
  {
    id: "5",
    brand: "Mahindra",
    model: "XUV700",
    variant: "AX7 L",
    year: 2023,
    kmDriven: 12000,
    fuelType: "Diesel",
    transmission: "Automatic",
    registrationState: "MH",
    price: 2150000,
    emiStarting: 31000,
    image: "/images/car-5.jpg",
    images: ["/images/car-5.jpg"],
    ownership: "1st Owner",
    color: "Silver",
    engine: "2184 cc",
    mileage: "14 km/l",
    insurance: "Comprehensive",
    sold: false,
  },
  {
    id: "6",
    brand: "Tata",
    model: "Nexon",
    variant: "XZ+ (S)",
    year: 2022,
    kmDriven: 20000,
    fuelType: "Petrol",
    transmission: "Manual",
    registrationState: "MH",
    price: 895000,
    emiStarting: 12800,
    image: "/images/car-6.jpg",
    images: ["/images/car-6.jpg"],
    ownership: "1st Owner",
    color: "Blue",
    engine: "1199 cc",
    mileage: "17 km/l",
    insurance: "Comprehensive",
    sold: false,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Deshmukh",
    car: "Hyundai Creta 2022",
    review:
      "Excellent experience with Apli Gadi! The car was in perfect condition and the team handled all the paperwork. Finance was approved in just 2 days. Highly recommended for anyone looking to buy a pre-owned car in Nagpur.",
    image: "",
  },
  {
    id: "2",
    name: "Priya Sharma",
    car: "Maruti Suzuki Swift 2021",
    review:
      "I was looking for a reliable pre-owned car and Apli Gadi made the entire process so smooth. Transparent pricing, no hidden charges, and the EMI option made it very affordable. Thank you team!",
    image: "",
  },
  {
    id: "3",
    name: "Amit Patil",
    car: "Toyota Fortuner 2021",
    review:
      "Best pre-owned car dealer in Nagpur! Got my dream Fortuner at a great price. The team was very professional and helped me with RC transfer. 100% genuine service.",
    image: "",
  },
  {
    id: "4",
    name: "Sneha Kulkarni",
    car: "Tata Nexon 2022",
    review:
      "Very happy with my purchase from Apli Gadi. The car was well-maintained and serviced. The finance process was quick and hassle-free. Will definitely recommend to friends and family.",
    image: "",
  },
]

export const faqs = [
  {
    question: "Do you provide finance in Nagpur?",
    answer:
      "Yes, we provide easy finance options through our trusted finance partners right here in Nagpur. Finance is available up to 90% of the car value with flexible EMI options starting from 12 to 60 months.",
  },
  {
    question: "What documents are required for finance?",
    answer:
      "You will need your PAN card, Aadhaar card, last 3 months bank statement, salary slips (for salaried individuals), or ITR (for self-employed). Our team will guide you through the entire documentation process.",
  },
  {
    question: "Is RC transfer included?",
    answer:
      "Yes, we provide complete RC transfer support. Our team handles all the paperwork and ensures smooth ownership transfer at the Nagpur RTO. This service is included at no extra cost.",
  },
  {
    question: "Can I test drive in Nagpur?",
    answer:
      "Absolutely! You can book a test drive at our Nagpur showroom anytime. Simply click the 'Book Test Drive' button on any car listing or contact us directly to schedule a convenient time.",
  },
  {
    question: "How is EMI calculated?",
    answer:
      "EMI is calculated based on three factors: the loan amount (car price minus down payment), the interest rate offered by our finance partners, and the tenure of the loan. Use our EMI Calculator on the Finance page to get an instant estimate.",
  },
  {
    question: "Are all cars verified and inspected?",
    answer:
      "Yes, every car at Apli Gadi goes through a rigorous multi-point inspection before being listed. We check the engine, transmission, body condition, electrical systems, and more to ensure you get a quality vehicle.",
  },
]

export function formatPrice(price: number): string {
  if (price >= 10000000) {
    return `${(price / 10000000).toFixed(2)} Cr`
  }
  if (price >= 100000) {
    return `${(price / 100000).toFixed(2)} Lakh`
  }
  return price.toLocaleString("en-IN")
}

export function formatKm(km: number): string {
  return km.toLocaleString("en-IN") + " km"
}
