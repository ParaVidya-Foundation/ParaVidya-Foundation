"use client";
import { useState, useEffect } from "react";

import { ImageData } from "./data/images";
import { images } from "./data/images";

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
    <main className="relative min-h-screen bg-white-900 text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>

      {/* Image Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {paginatedImages.map((img, index) => (
          <div
            key={index}
            className="relative w-72 h-96 bg-white rounded-md shadow-lg overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <div className="absolute inset-2 bg-black transition-all duration-500 group-hover:bottom-20">
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-2 right-2 bottom-2 text-center">
              <h2 className="text-xl font-bold text-gray-900">
                {img.name}
                <br />
                <span className="text-green-600 font-medium text-sm">
                  {img.location}
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
          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg ${currentPage === i + 1
                ? "bg-green-600"
                : "bg-gray-700 hover:bg-gray-600"
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]"
          onClick={() => setSelectedImage(null)} // close on background click
        >
          {/* Close (X) Button - fixed to top right of modal */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-1xl font-bold bg-black/50 rounded-full px-4 py-2 hover:bg-black/70 z-[10001]"
          >
            ✕
          </button>

          <div
            className="relative z-[10000]"
            onClick={(e) => e.stopPropagation()} // prevent closing on image click
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.name}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}
