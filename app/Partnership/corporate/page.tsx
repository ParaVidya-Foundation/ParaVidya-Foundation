import CorporateCollaboration from "@/components/Partnership/Corporate/CorporateCollaboration";
import CorporateWorkshopForm from "@/components/Partnership/Corporate/CorporateWorkshopForm";
import CSRExecutionSection from "@/components/Partnership/Corporate/CSRExecutionSection";
import PartnershipBenefits from "@/components/Partnership/Corporate/PartnershipBenefits";
import YogaWorkshopSection from "@/components/Partnership/Corporate/YogaWorkshopSection";

export default function Corporate() {
  return (
    <div className="w-full">
   
      <div className="w-full">
        <img
          src={"/Carousel/Workplace-Challanges.jpg"}
          alt="Mantra Workshops at Para Vidya"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={"/corporate.jpg"}
            alt="Corporate at Para Vidya"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
            loading="lazy"
          />
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
