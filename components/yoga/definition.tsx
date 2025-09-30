"use client";

export default function Definition({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full mx-auto my-6 p-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 font-playfair">
        {title}
      </h2>
      <p className="text-xl md:text-xl text-gray-600 leading-relaxed font-manrope">{description}</p>
    </div>
  );
}
