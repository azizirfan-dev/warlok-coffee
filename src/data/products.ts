export interface Product {
  name: string;
  image: string;
  description: string;
  price: string;
  category: string;
}

export const products: Product[] = [
  {
    name: "Es Kopi Susu Ronda",
    image: "/assets/kopi-susu.jpg",
    description: "Racikan khas Warga Lokal dengan gula aren dan susu segar.",
    price: "Rp 25.000",
    category: "Signature",
  },
  {
    name: "Kopi Hitam Nusantara",
    image: "/assets/kopi-hitam.jpg",
    description: "Rasa kuat dari biji kopi terbaik Indonesia.",
    price: "Rp 20.000",
    category: "Classic",
  },
  {
    name: "Kopi Susu Pandan Tetangga",
    image: "/assets/kopi-pandan.jpg",
    description: "Perpaduan unik kopi susu dengan aroma pandan wangi.",
    price: "Rp 28.000",
    category: "Signature",
  },
  {
    name: "Kopi Lemon Cold Brew",
    image: "/assets/cold-brew-lemon.jpg",
    description: "Kopi dingin menyegarkan dengan hint lemon.",
    price: "Rp 30.000",
    category: "Seasonal",
  },
];
