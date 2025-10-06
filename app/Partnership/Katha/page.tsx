
import KathaEnquiryForm from "@/components/Partnership/Katha/KathaEnquiryForm";
import KathaRequest from "@/components/Partnership/Katha/KathaRequest";

export default function Katha() {
  return (
    <div className="w-full">
   
    <div className="w-full">
      <img
        src={"/Carousel/Katha.jpg"}
        alt="Mantra Workshops at Para Vidya"
        className="w-full h-auto object-cover"
        loading="lazy"
      />
    </div>


<KathaRequest />
  </div>
  );
}