import Image from "next/image"

export default function InfoWithImage() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-[70vh]">
      {/* Text Section with Image */}
      <div className="w-full lg:w-1/2 relative flex items-center text-white px-8 py-12 h-[70vh]">
        {/* Background Image */}
        <Image
          src="/card.png"
          alt="Yoga Session"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Content */}
        <div className="relative z-10 max-w-xl mx-auto p-6 rounded-lg">
          <p className="italic text-lg sm:text-xl font-manrope leading-relaxed mb-6">
            “Our mission is to create a sacred space where individuals can
            embark on a transformative journey of self-discovery and holistic
            well-being. Through yoga, we strive to empower our community,
            fostering inner peace, balance, and a profound connection with
            oneself.”
          </p>
          <div>
            <h4 className="text-xl font-semibold font-playfair">
              Paityn Carder
            </h4>
            <p className="text-sm text-gray-300 font-manrope">Founder</p>
          </div>
        </div>
      </div>
    </div>
  )
}
