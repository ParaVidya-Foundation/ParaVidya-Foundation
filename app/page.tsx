import CustomCarousel from "@/components/carousel"
import DonationSection from "@/components/home/donationsection"
import Marquee from "@/components/home/marquee"
import NGOSocietyImpact from "@/components/home/NGOSocietyImpact"
import SupportUs from "@/components/home/Supportus"
import { Metadata } from "next"
import PaintReveal from "../components/home/Paintreveal"
import KaramkandHome from "@/components/home/Karamkandhome"
import GitaHome from "@/components/home/gitahome"

export const metadata: Metadata = {
  title: "Home – Para Vidya Foundation",
  description:
    "Welcome to Para Vidya Foundation. Join our spiritual journey through Sadhna, Yoga, Workshops, and Seva.",
}

const slides = [
  {

    subtitle: "Innovative solutions for modern problems.",
    image: "SmallCarousel/gita.png",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
  {
  
    subtitle: "Seamless integration with cutting-edge tech.",
    image: "SmallCarousel/gita2.png",
    buttonText: "Get Started",
    buttonLink: "/services",
  },
  {
  
    subtitle: "Be part of the innovation revolution.",
    image: "SmallCarousel/gita1.png",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

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
      <KaramkandHome />
      <DonationSection />
      <GitaHome slides={slides} />
      <PaintReveal
  imageSrc="/Logo.png"
  title="Dharmo Rakshati Rakshitah"
  subtitle="They say dharma protects its protector. Experience firsthand how the most ancient Vedic traditions nurture your soul."
/>

      <SupportUs />
    </>
  )
}
