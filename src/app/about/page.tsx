import AboutSection from "./aboutSection"
import { createSEO } from "../lib/seo"

export const metadata = createSEO ({
  title: "Latar Belakang Kami",
  description: "Lihatlah awal mula berdirinya warlok kopi. Kopi lokal dengan kualitas dunia",
  image: "#",
  url: "https://warlok.vercel.app/about"
})

export default function AboutPage() {
  return (
    <AboutSection />
  )
}
