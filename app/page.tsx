import CustomCarousel from "@/components/carousel"
import DonationSection from "@/components/home/donationsection"
import Marquee from "@/components/home/marquee"
import NGOSocietyImpact from "@/components/home/NGOSocietyImpact"
import { Metadata } from "next"

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
    </>
  )
}
