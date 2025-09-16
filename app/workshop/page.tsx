import { Metadata } from "next"
import WorkshopBento from "@/components/workshop/workshopBento";

export const metadata: Metadata = {
  title: "Workshops & Events – Para Vidya",
  description: "Comprehensive workshops and events for spiritual growth and wellness.",
};

export default function WorkshopPage() {
  return (
<>
  <WorkshopBento/>
    </>
  );
}
