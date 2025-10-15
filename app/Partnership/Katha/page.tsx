
import KathaRequest from "@/components/Partnership/Katha/KathaRequest";
import Image from "next/image";

export default function Katha() {
  return (
    <div className="w-full">
   
    <div className="w-full">
      <Image
        src={"/Carousel/Katha.jpg"}
        alt="Mantra Workshops at Para Vidya"
        width={1200}
        height={600}
        className="w-full h-auto object-cover"
        priority
      />
    </div>


<KathaRequest />
  </div>
  );
}