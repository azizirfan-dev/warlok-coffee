import { createSEO } from '../lib/seo'
import TeamsSection from './teamSection'

export const metadata = createSEO ({
  title: "Dibelakang Meja Bar", 
  description:"Kenalan dulu sama orang-orang hebat di balik setiap aroma kopi Warlok. Mereka bukan cuma barista — tapi seniman rasa dan penjaga cerita.", 
  image:"#",
  url: "https://warlok.vercel.app/teams"
 })

export default function TeamPage() {
  return (
    <TeamsSection /> 
  )
}
