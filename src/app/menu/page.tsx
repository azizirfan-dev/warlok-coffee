import MenuSection from "./menuSection";
import { createSEO } from "../lib/seo";

export const metadata = createSEO({
  title: "Menu Andalan Kami",
  description:
    "Temukan racikan kopi terbaik dari barista lokal — mulai dari Es Kopi Susu Tetangga hingga Kopi Nusantara yang legendaris.",
  image: "/og-menu.jpg", // nanti kita bikin di Step 5
  url: "https://warlok.vercel.app/menu",
});


export default function MenuPage() {
  return (
    
      <MenuSection />
    
  )
}
