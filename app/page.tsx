import CustomCarousel from "@/components/carousel"
import DonationSection from "@/components/home/donationsection"
import Marquee from "@/components/home/marquee"
import NGOSocietyImpact from "@/components/home/NGOSocietyImpact"
import SupportUs from "@/components/home/Supportus"
import { Metadata } from "next"
import PaintReveal from "../components/home/Paintreveal"

export const metadata: Metadata = {
  title: "Home – Para Vidya Foundation",
  description:
    "Welcome to Para Vidya Foundation. Join our spiritual journey through Sadhna, Yoga, Workshops, and Seva.",
}

export default function HomePage() {
  return (
    <>

      <CustomCarousel
        images={[
          "/carousel/Your-One-Stop-for-Sacred-Rituals.jpg",
          "/carousel/About-us.jpg",
          "/carousel/Navgrah-Shanti.jpg",
          "/carousel/Online-Hawan.jpg",
        ]}     
      />
      <Marquee />
<NGOSocietyImpact />
      
      <DonationSection />
      <PaintReveal
  imageSrc="/Logo.png"
  title="Dharmo Rakshati Rakshitah"
  subtitle="They say dharma protects its protector. Experience firsthand how the most ancient Vedic traditions nurture your soul."
/>

      <SupportUs />
    </>
  )
}
