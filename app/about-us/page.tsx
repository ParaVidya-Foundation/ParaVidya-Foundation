import { Metadata } from "next"
import Abouthero from "@/components/about/Abouthero"
import QuoteGuruji from "@/components/about/QuoteGuruji"
import ImageQuote from "@/components/about/imagequote"

export const metadata: Metadata = {
  title: "About Us – Para Vidya",
  description: "Mission, vision, and team behind the Para Vidya Foundation.",
}

export default function AboutUsPage() {
  return (
    <div>
      <Abouthero />
      <QuoteGuruji />
      <ImageQuote />
    </div>
  )
}
