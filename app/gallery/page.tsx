"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { images, ImageData } from "./data/images";

const ITEMS_PER_PAGE = 15;

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  useEffect(() => {
    if (selectedImage) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="relative min-h-screen flex flex-col items-center p-8 bg-[#fffbea4d] text-gray-900">
      <h1 className="text-4xl md:text-5xl mb-8 text-yellow-600 font-playfair">
        Gallery
      </h1>
      <h2 className="text-xl md:text-3xl mb-8 text-yellow-600 font-manrope">Be the Hands That Heal. Be the Heart That Serves.</h2>

      {/* Image Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {paginatedImages.map((img, index) => (
          <div
            key={index}
            className="relative w-72 h-96 bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img.src}
              alt={img.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={index === 0}
            />
            <div className="absolute bottom-2 left-2 right-2 text-center bg-white/80 backdrop-blur-md rounded-md py-2 shadow">
              <h2 className="text-lg font-readable leading-tight font-bold text-gray-900">
                {img.name}
                <br />
                <span className="text-yellow-600 font-readable font-medium text-sm">
                  {img.Date}
                </span>
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex mt-10 gap-3 flex-wrap justify-center">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === i + 1
                ? "bg-yellow-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close (X) Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-xl font-bold bg-black/50 rounded-full px-4 py-2 hover:bg-black/70 z-[10001]"
          >
            ✕
          </button>

          <div
            className="relative z-[10000]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.name}
              width={1200}
              height={800}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
