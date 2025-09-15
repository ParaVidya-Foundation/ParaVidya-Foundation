"use client";

import Image from "next/image";

export default function WorkshopMantra() {
  return (
    <section className="w-[90%] mx-auto py-20 px-6 md:px-12 flex flex-col md:flex-row items-end justify-between gap-12">
      {/* Text Section */}
      <div className="flex-1 text-left">

        <div className="justify-center items-center" style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
}}>
        <h1 className="text-5xl md:text-7xl font-extrabold text-brown-900 tracking-tight leading-tight mb-6">
          Workshop Mantra
        </h1>
        <Image
          src="/underline.png"
          alt="underline"
          className="mb-5 w-full h-full"
          width={500}
          height={20}
        />
        </div>
        <p className="text-2xl md:text-xl text-brown-700 leading-relaxed max-w-2xl">
          Mantra workshops teach the sacred art of sound healing and spiritual transformation. 
          Learn{" "}
          <strong>Gayatri Mantra, Maha Mrityunjaya Mantra, and Vedic chanting</strong> 
          to harness the power of sacred sounds for healing, protection, and spiritual growth.
        </p>
      </div>

      {/* Image Section */}
      <div
  className="flex-1 flex justify-center items-end"
  style={{
    position: "relative",
    zIndex: 10,
    marginBottom: "-25px",
    alignItems: "center",
    bottom: "-80px",
    justifyContent: "flex-end",
  }}
>
        <Image
          src="/Workshop/mantra.png"
          alt="Workshop Mantra"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
}
