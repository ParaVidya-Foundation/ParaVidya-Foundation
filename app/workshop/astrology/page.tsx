import YtDisplay from "@/components/workshop/astrology/ytdisplay";
import Team from "@/components/workshop/astrology/Team";
import Image from "next/image";
import AstroContact from "@/components/workshop/astrology/astrocontact";
export default function AstrologyWorkshopsPage() {
    return (
        <div>
            <div className="top-img-about relative w-full overflow-hidden rounded-2xl">
  <Image
    src="/Carousel/About-us.jpg"
    alt="Astrology Workshops at ParaVidya Foundation - Ancient Science of Health and Wellness"
    width={1920}
    height={1080}
    className="w-full h-auto object-contain"
    priority
  />
</div>
            
            <Team />
            <YtDisplay />
            <AstroContact />
        </div>
  );
}