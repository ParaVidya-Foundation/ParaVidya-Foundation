"use client";

import Image from "next/image";

export default function WorkshopSpiritual() {
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
          Workshop Spiritual
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
          Spiritual workshops provide deep insights into ancient wisdom and practices. 
          Through{" "}
          <strong>Bhagavad Gita discourses, Vedanta philosophy, and Upanishads study</strong>, 
          we help you understand the profound spiritual teachings and their practical applications in modern life.
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
          src="/Workshop/ayurveda.png"
          alt="Workshop Spiritual"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
}
