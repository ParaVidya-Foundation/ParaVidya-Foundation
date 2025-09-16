"use client";
import { useState } from "react";

interface ImageData {
  src: string;
  name: string;
  location: string;
}

// Sample 30 images (add as many as you want, pages will auto-increase)
const images: ImageData[] = [
  { src: "https://images.unsplash.com/photo-1557053908-4793c484d06f?w=400", name: "Rita Brown", location: "London, UK" },
  { src: "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?w=400", name: "James Nelson", location: "San Francisco, US" },
  { src: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=400", name: "Christine McKay", location: "New York, US" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400", name: "Sophia Lee", location: "Toronto, CA" },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400", name: "Michael Smith", location: "Sydney, AU" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400", name: "Emily Davis", location: "Berlin, DE" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400", name: "David Johnson", location: "Paris, FR" },
  { src: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400", name: "Olivia White", location: "Rome, IT" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400", name: "Sophia Martinez", location: "Madrid, ES" },
  { src: "https://images.unsplash.com/photo-1502767089025-6572583495b0?w=400", name: "Daniel Brown", location: "Chicago, US" },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400", name: "Hannah Wilson", location: "Tokyo, JP" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400", name: "Lucas Green", location: "Dubai, UAE" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400", name: "Sarah Taylor", location: "Cape Town, ZA" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400", name: "Ethan Brown", location: "Singapore" },
  { src: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400", name: "Ava Thompson", location: "Mumbai, IN" },
  // Duplicate to simulate 30+ images
  { src: "https://images.unsplash.com/photo-1557053908-4793c484d06f?w=400", name: "Person A", location: "Delhi, IN" },
  { src: "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?w=400", name: "Person B", location: "NYC, US" },
  { src: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=400", name: "Person C", location: "Paris, FR" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400", name: "Person D", location: "Tokyo, JP" },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400", name: "Person E", location: "London, UK" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400", name: "Person F", location: "Berlin, DE" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400", name: "Person G", location: "Dubai, UAE" },
  { src: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400", name: "Person H", location: "Singapore" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400", name: "Person I", location: "Toronto, CA" },
  { src: "https://images.unsplash.com/photo-1502767089025-6572583495b0?w=400", name: "Person J", location: "Rome, IT" },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400", name: "Person K", location: "Madrid, ES" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400", name: "Person L", location: "Sydney, AU" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400", name: "Person M", location: "Cape Town, ZA" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400", name: "Person N", location: "San Francisco, US" },
  { src: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400", name: "Person O", location: "Chicago, US" },
];

const ITEMS_PER_PAGE = 15;

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {paginatedImages.map((img, index) => (
          <div
            key={index}
            className="relative w-72 h-96 bg-white rounded-md shadow-lg overflow-hidden group"
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
            className={`px-4 py-2 rounded-lg ${
              currentPage === i + 1
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
    </main>
  );
}
