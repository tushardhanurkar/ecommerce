import ip1 from '../assets/ip1.png';
import mb1 from '../assets/mb1.png';
import mb2 from '../assets/mb2.png';
import mb3 from '../assets/mb3.png';
import mb4 from '../assets/mb4.png';
import sm1 from '../assets/sm1.png';
import sm2 from '../assets/sm2.png';
import sm3 from '../assets/sm3.png';
import sm4 from '../assets/sm4.png';
import sm5 from '../assets/sm5.png';
import  v4  from '../assets/v4.png';
import sm6 from '../assets/sm6.png';
import lp1 from '../assets/lp1.png';
import lp2 from '../assets/lp2.png';
import lp3 from '../assets/lp3.png';
import lp4 from '../assets/lp4.png';
import hp1 from '../assets/hp1.png';
import hp2 from '../assets/hp2.png';
import a1 from '../assets/a1.png';  
import a3 from '../assets/a3.png';  
import a6 from '../assets/a6.png';  
import ap1 from '../assets/ap1.png';
import ap2 from '../assets/ap2.png';
import ap3 from '../assets/ap3.png';
import ap7 from '../assets/ap7.png';
import ap8 from '../assets/ap8.png';
import ap12 from '../assets/ap12.png';
import tv1 from '../assets/tv1.png';
import tv2 from '../assets/tv2.png';
import tv3 from '../assets/tv3.png';


export const buyNowDetails = {
  
  "iphone15": {
    id: "iphone15",        
    name: "iPhone 15",
    specs: "8GB RAM | 256GB",
    price: "Rs 75,000",
    description: "A powerful A16 Bionic phone with stunning camera.",
    extraSpecs: [
      "Processor: A16 Bionic",
      "Battery: 4200mAh",
      "Refresh rate: 120Hz",
    ],
    image: ip1,
    colors: ["Black", "Pink", "Blue"]


  },

  "s23ultra": {
    id: "s23ultra",
    name: "Samsung S23 Ultra",
    specs: "12GB RAM | 256GB",
    price: "Rs 90,000",
    description: "Flagship Samsung with 200MP camera.",
    extraSpecs: [
      "Processor: Snapdragon 8 Gen 2",
      "Battery: 5000mAh",
      "Refresh rate: 120Hz",
    ],
    image: sm2,
    colors: ["Green", "Graphite"]
  },

  "vivoy58": {
    id: "vivoy58",
    name: "Vivo Y58 5G",
    specs: "8GB RAM | 256GB ROM",
    price: "Rs 89,999",
    description: "A premium Vivo smartphone with strong camera performance.",
    extraSpecs: [
      "Camera: 50MP + 10MP + 12MP",
      "Battery: 5000mAh",
      "Processor: Snapdragon Series",
      "Display: AMOLED Full HD+"
    ],
    image: v4,
    colors: ["Blue", "Black", "Gold"]
  },

  "galaxyf14": {
    id: "galaxyf14",
    name: "Samsung Galaxy F14",
    specs: "8GB RAM | 128GB ROM",
    price: "Rs 34,999",
    description: "Budget-friendly Samsung smartphone with smooth performance.",
    extraSpecs: [
      "Camera: 50MP + 8MP",
      "Battery: 6000mAh",
      "Processor: Exynos Series",
      "Display: 90Hz TFT"
    ],
    image: sm4,
    colors: ["Green", "Blue"]
  },

  "galaxyf15": {
    id: "galaxyf15",
    name: "Samsung Galaxy F15",
    specs: "8GB RAM | 128GB ROM",
    price: "Rs 39,999",
    description: "Upgraded F-series phone with improved camera setup.",
    extraSpecs: [
      "Camera: 64MP + 8MP + 2MP",
      "Battery: 6000mAh",
      "Processor: Exynos",
      "Display: AMOLED"
    ],
    image: sm5,
    colors: ["Purple", "Black", "Blue"]
  },

  "fold5": {
    id: "fold5",
    name: "Galaxy Fold 5",
    specs: "12GB RAM | 256GB ROM",
    price: "Rs 1,59,999",
    description: "Samsung’s flagship foldable with top-tier specs.",
    extraSpecs: [
      "Camera: 50MP + 10MP + 12MP",
      "Battery: 4400mAh",
      "Processor: Snapdragon 8 Gen 2",
      "Display: 120Hz Dynamic AMOLED"
    ],
    image: sm6,
    colors: ["Icy Blue", "Black", "Cream"]
  },

  "vivov30e": {
    id: "vivov30e",
    name: "Vivo V30e",
    specs: "8GB RAM | 128GB ROM",
    price: "Rs 27,999",
    description: "Vivo mid-range phone with stylish design.",
    extraSpecs: [
      "Camera: 64MP + 8MP + 2MP",
      "Battery: 5000mAh",
      "Processor: Snapdragon Series",
      "Display: 120Hz AMOLED"
    ],
    image: mb1,
    colors: ["Blue", "Purple"]
  },

  "oneplus12t": {
    id: "oneplus12t",
    name: "OnePlus 12T",
    specs: "8GB RAM | 256GB ROM",
    price: "Rs 43,999",
    description: "Powerful performance with clean OxygenOS experience.",
    extraSpecs: [
      "Camera: 50MP + 8MP + 2MP",
      "Battery: 5000mAh",
      "Processor: Snapdragon 8 Gen Series",
      "Display: 120Hz AMOLED"
    ],
    image: mb3,
    colors: ["Grey", "Mint"]
  },

  "redminote13": {
    id: "redminote13",
    name: "Redmi Note 13",
    specs: "6GB RAM | 128GB ROM",
    price: "Rs 14,999",
    description: "Affordable smartphone offering great battery backup.",
    extraSpecs: [
      "Camera: 50MP + 8MP + 2MP",
      "Battery: 5000mAh",
      "Processor: MediaTek Dimensity",
      "Display: 90Hz AMOLED"
    ],
    image: mb2,
    colors: ["Black", "Blue", "White"]
  },

  "hppavilion14": {
    id: "hppavilion14",
    name: "HP Pavilion 14",
    specs: "16GB RAM | 512GB SSD | Intel i7",
    price: "Rs 89,999",
    description: "Premium HP Pavilion with the latest Intel i7 processor.",
    extraSpecs: [
      "Display: 14-inch Full HD",
      "Processor: Intel Core i7",
      "Graphics: Intel Iris Xe",
      "Battery: Up to 8 hours"
    ],
    image: hp1,
    colors: ["Silver", "Black"]
  },

  "asusvivobook15": {
    id: "asusvivobook15",
    name: "Asus VivoBook 15",
    specs: "16GB RAM | 1TB SSD | AMD Ryzen 9",
    price: "Rs 1,49,999",
    description: "Powerful VivoBook with Ryzen 9 for heavy productivity.",
    extraSpecs: [
      "Display: 15.6-inch Full HD",
      "Processor: AMD Ryzen 9",
      "Graphics: Radeon Vega",
      "Battery: Up to 10 hours"
    ],
    image: lp1,
    colors: ["Blue", "Grey"]
  },

  "macbookair3": {
    id: "macbookair3",
    name: "MacBook Air 3",
    specs: "8GB RAM | 512GB SSD | M2 Chip",
    price: "Rs 75,000",
    description: "Thin and powerful MacBook Air with M2 performance.",
    extraSpecs: [
      "Display: 13.6-inch Liquid Retina",
      "Processor: Apple M2",
      "Battery: Up to 18 hours",
      "Weight: 1.2 kg"
    ],
    image: lp4,
    colors: ["Space Grey", "Gold"]
  },

  "acer20s": {
    id: "acer20s",
    name: "Acer 20s",
    specs: "8GB RAM | 256GB SSD | Intel i5",
    price: "Rs 85,000",
    description: "Power-efficient Acer series laptop with i5 performance.",
    extraSpecs: [
      "Display: 15.6-inch Full HD",
      "Processor: Intel Core i5",
      "Battery: Up to 7 hours",
      "Weight: 1.7 kg"
    ],
    image: lp2,
    colors: ["Black"]
  },

  "hpenvyx360": {
    id: "hpenvyx360",
    name: "HP Envy x360",
    specs: "16GB RAM | 1TB SSD | AMD Ryzen 7",
    price: "Rs 1,19,999",
    description: "Premium convertible HP Envy with touch display.",
    extraSpecs: [
      "Display: 15.6-inch Touchscreen",
      "Processor: AMD Ryzen 7",
      "Battery: Up to 12 hours",
      "360° Convertible Design"
    ],
    image: hp2,
    colors: ["Silver"]
  },

  "hp15s": {
    id: "hp15s",
    name: "HP 15s",
    specs: "8GB RAM | 512GB SSD | Intel i3",
    price: "Rs 60,000",
    description: "Budget-friendly HP 15s with all-purpose performance.",
    extraSpecs: [
      "Display: 15.6-inch HD",
      "Processor: Intel Core i3",
      "Battery: Up to 6 hours",
      "Lightweight Design"
    ],
    image: lp3,
    colors: ["White", "Black"]
  },

  "rogzephyrusg14": {
    id: "rogzephyrusg14",
    name: "ROG Zephyrus G14",
    specs: "16GB RAM | 1TB SSD | Ryzen 9 | RTX 3060",
    price: "Rs 1,59,999",
    description: "High-end gaming laptop with RTX 3060 GPU.",
    extraSpecs: [
      "Display: 14-inch QHD 120Hz",
      "Processor: AMD Ryzen 9",
      "GPU: Nvidia RTX 3060",
      "Cooling: Dual Smart Cooling"
    ],
    image: a6,
    colors: ["White", "Eclipse Grey"]
  },

  "asusluminous14": {
    id: "asusluminous14",
    name: "Asus Luminous 14",
    specs: "16GB RAM | 512GB SSD | Intel i7",
    price: "Rs 1,09,999",
    description: "Lightweight premium performance laptop.",
    extraSpecs: [
      "Display: 14-inch Full HD",
      "Processor: Intel Core i7",
      "Battery: Up to 10 hours",
      "Thin & Light"
    ],
    image: a3,
    colors: ["Grey", "Silver"]
  },

  "asusrogstrix": {
    id: "asusrogstrix",
    name: "Asus ROG Strix",
    specs: "32GB RAM | 1TB SSD | Intel i9 | RTX 3080",
    price: "Rs 2,49,999",
    description: "Top tier gaming beast with i9 and RTX 3080.",
    extraSpecs: [
      "Display: 17-inch QHD 165Hz",
      "Processor: Intel Core i9",
      "GPU: Nvidia RTX 3080",
      "RGB Keyboard"
    ],
    image: a1,
    colors: ["Black","White"]
  },

  "whirlpool": {
    id: "whirlpool",
    name: "Whirlpool Aquash Washing Machine",
    specs: "7kg | Semi-Automatic | Top Load",
    price: "Rs 14,999",
    description: "Efficient semi-automatic washing machine suitable for families.",
    extraSpecs: [
      "Capacity: 7kg",
      "Type: Semi-Automatic",
      "Load Type: Top Load",
      "Low Water Consumption"
    ],
    image: ap7,
    colors: ["White", "Blue"]
  },

  "lg65": {
    id: "lg65",
    name: "LG 6.5kg Washing Machine",
    specs: "6.5kg | Fully Automatic | Front Load",
    price: "Rs 25,999",
    description: "Premium fully-automatic front-load washing machine with inverter motor.",
    extraSpecs: [
      "Capacity: 6.5kg",
      "Fully Automatic",
      "Front Load",
      "Inverter Technology"
    ],
    image: ap8,
    colors: ["Silver", "Grey"]
  },

  "samsung8": {
    id: "samsung8",
    name: "Samsung 8kg Washing Machine",
    specs: "8kg | Fully Automatic | Top Load",
    price: "Rs 19,999",
    description: "High-capacity Samsung top-load washing machine ideal for large families.",
    extraSpecs: [
      "Capacity: 8kg",
      "Fully Automatic",
      "Top Load",
      "Diamond Drum Technology"
    ],
    image: ap12,
    colors: ["Grey", "White"]
  },

  "bosch260": {
    id: "bosch260",
    name: "Bosch X900 Refrigerator 260L",
    specs: "260L | Double Door | Inverter",
    price: "Rs 29,999",
    description: "Energy-efficient double-door refrigerator with powerful cooling.",
    extraSpecs: [
      "Capacity: 260L",
      "Double Door",
      "Inverter Compressor",
      "Frost-Free Technology"
    ],
    image: ap1,
    colors: ["Silver", "Black"]
  },

  "lg190": {
    id: "lg190",
    name: "LG 190L Refrigerator",
    specs: "190L | Double Door | Non-Inverter",
    price: "Rs 19,999",
    description: "Compact and durable refrigerator ideal for small families.",
    extraSpecs: [
      "Capacity: 190L",
      "Double Door",
      "Non-Inverter Compressor",
      "Moist Balance Crisper"
    ],
    image: ap2,
    colors: ["Dark Grey", "White"]
  },

  "samsung253": {
    id: "samsung253",
    name: "Samsung 253L Refrigerator",
    specs: "253L | Double Door | Inverter",
    price: "Rs 24,999",
    description: "Modern frost-free fridge with inverter compressor and stabilizer-free operation.",
    extraSpecs: [
      "Capacity: 253L",
      "Double Door",
      "Inverter Technology",
      "Digital Inverter Compressor"
    ],
    image: ap3,
    colors: ["Black Steel", "Silver"]
  },

  "lgtv32": {
    id: "lgtv32",
    name: "LG TV 32 inch HD Ready Smart TV",
    specs: "32 inch | HD Ready | Smart TV",
    price: "Rs 15,999",
    description: "Compact HD smart TV with smooth performance for daily entertainment.",
    extraSpecs: [
      "32-inch HD Ready Display",
      "Smart TV WebOS",
      "20W Speakers",
      "Screen Mirroring"
    ],
    image: tv1,
    colors: ["Black", "Silver"]
  },

  "google43": {
    id: "google43",
    name: "Google 43 inch Full HD Smart TV",
    specs: "43 inch | Full HD | Smart TV",
    price: "Rs 27,999",
    description: "Full HD smart TV with Google TV interface and smooth streaming.",
    extraSpecs: [
      "43-inch Full HD Display",
      "Google TV OS",
      "Chromecast Built-In",
      "24W Speakers"
    ],
    image: tv2,
    colors: ["Black", "Silver"]
  },

  "mitv55": {
    id: "mitv55",
    name: "Mi TV 5X 55 inch 4K Ultra HD Smart TV",
    specs: "55 inch | 4K Ultra HD | Smart TV",
    price: "Rs 39,999",
    description: "Premium 4K UHD TV with Dolby Vision and high-end streaming features.",
    extraSpecs: [
      "55-inch 4K UHD Display",
      "Dolby Vision & HDR10+",
      "PatchWall OS",
      "30W Speakers with Dolby Atmos"
    ],
    image: tv3,
    colors: ["Black", "Silver"]
  }

  
};

  
