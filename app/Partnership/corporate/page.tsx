import Image from "next/image";
import CorporateCollaboration from "@/components/Partnership/Corporate/CorporateCollaboration";
import CorporateWorkshopForm from "@/components/Partnership/Corporate/CorporateWorkshopForm";
import CSRExecutionSection from "@/components/Partnership/Corporate/CSRExecutionSection";
import PartnershipBenefits from "@/components/Partnership/Corporate/PartnershipBenefits";
import YogaWorkshopSection from "@/components/Partnership/Corporate/YogaWorkshopSection";

export default function Corporate() {
  return (
    <div className="w-full">
   
      <div className="w-full relative h-[400px] md:h-[500px]">
        <Image
          src="/Carousel/Workplace-Challanges.jpg"
          alt="Corporate Wellness Programs at ParaVidya Foundation - Workplace Challenges Solutions"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-[300px] md:h-[400px]">
            <Image
              src="/corporate.jpg"
              alt="Corporate Wellness Solutions at ParaVidya Foundation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2">
          <CorporateWorkshopForm />
        </div>
      </div>
      <YogaWorkshopSection />

      <CorporateCollaboration />

      <PartnershipBenefits />

      <CSRExecutionSection />
    </div>
  );
}
