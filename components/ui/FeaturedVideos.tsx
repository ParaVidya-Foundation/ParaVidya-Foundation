"use client";

import React from "react";

interface VideoCard {
  id: string; // YouTube video ID
  title: string;
  thumbnail: string;
}

interface FeaturedVideosProps {
  headline: string;
  description: string;
  videos: VideoCard[];
  exploreLink: string;
}

export default function FeaturedVideos({
  headline,
  description,
  videos,
  exploreLink,
}: FeaturedVideosProps) {
  return (
    <section className="w-[90%] mx-auto bg-gradient-to-b from-yellow-50/70 to-yellow-100/30 backdrop-blur-lg rounded-3xl shadow-lg p-8 md:p-12 border border-white/30">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
        <h2 className="flex items-center text-3xl md:text-4xl font-semibold text-gray-900">
          <span className="mr-3 text-4xl">▶</span> {headline}
        </h2>
        <p className="max-w-xl text-gray-700 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/30 hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out"
          >
            {/* YouTube Embed */}
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-md font-readable text-white group-hover:text-yellow-300 transition-colors duration-300">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More */}
      <div className="mt-12 text-center">
        <a
          href={exploreLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-gray-900 font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Explore More <span className="ml-2">↗</span>
        </a>
      </div>
    </section>
  );
}
