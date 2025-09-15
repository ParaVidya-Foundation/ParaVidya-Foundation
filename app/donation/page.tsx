import PaymentPage from "@/components/donation/Donate"
import HowToContribute from "@/components/donation/Spread"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donation – Para Vidya",
  description: "Support our mission. Donate via Stripe or UPI (placeholders).",
}

export default function DonationPage() {
  return (
   <div>
    <PaymentPage />
    <HowToContribute />
   </div>
  )
}
