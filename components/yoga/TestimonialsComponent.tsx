"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IconPlayerPlay } from "@tabler/icons-react";

type Reel = {
  id: string;
  name: string;
  title: string;
  videoUrl: string; // YouTube URL
};

interface Props {
  reels?: Reel[];
  title?: string;
  loopDuration?: number; // seconds for full loop
}

const extractYouTubeId = (url: string) => {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.searchParams.has("v")) return u.searchParams.get("v") || "";
    const embedParts = u.pathname.split("/embed/");
    if (embedParts[1]) return embedParts[1];
    return u.pathname.split("/").pop() || "";
  } catch {
    const m = url.match(/[?&]v=([^&]+)/);
    return m ? m[1] : "";
  }
};

const getThumbnail = (videoUrl: string) => {
  const id = extractYouTubeId(videoUrl);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "/images/video-placeholder.jpg";
};

const buildPlayerUrl = (videoUrl: string) => {
  const id = extractYouTubeId(videoUrl);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1` : "";
};

export default function VideoReelsCarousel({
  reels = DEFAULT_REELS,
  title = "Featured Yoga Reels",
  loopDuration = 60,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const items = [...reels, ...reels]; // duplicate for infinite scroll

  const setupTimeline = () => {
    const track = trackRef.current;
    if (!track) return;

    if (tlRef.current) {
      tlRef.current.kill();
      gsap.set(track, { clearProps: "transform" });
    }

    const singleWidth = track.scrollWidth / 2;
    if (!singleWidth) return;

    gsap.set(track, { x: 0 });
    const duration = Math.max(12, loopDuration);

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(track, { x: -singleWidth, duration, ease: "none" });
    tlRef.current = tl;

    if (isPaused) tl.pause();
  };

  useEffect(() => {
    setupTimeline();

    const handleResize = () => setupTimeline();
    window.addEventListener("resize", handleResize);

    return () => {
      if (tlRef.current) tlRef.current.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [reels, loopDuration]);

  // Pause/play
  const pause = () => { if (tlRef.current && !isPaused) { tlRef.current.pause(); setIsPaused(true); } };
  const play = () => { if (tlRef.current && isPaused) { tlRef.current.play(); setIsPaused(false); } };

  useEffect(() => { selectedVideo ? pause() : play(); }, [selectedVideo]);

  // Disable scroll when modal open
  useEffect(() => {
    if (selectedVideo) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [selectedVideo]);

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="mb-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto md:mx-0">
            Short yoga reels from our community — tap to watch or hover to pause.
          </p>
        </header>

        {/* Carousel */}
        <div ref={containerRef} className="relative w-full overflow-hidden py-4">
          <div ref={trackRef} className="flex gap-6 px-4 will-change-transform">
            {items.map((r, idx) => (
              <div
                key={`${r.id}-${idx}`}
                onClick={() => setSelectedVideo(r.videoUrl)}
                className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-[200px] bg-gray-100">
                  <img src={getThumbnail(r.videoUrl)} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <IconPlayerPlay className="text-white w-8 h-8" />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-sm md:text-base font-semibold text-gray-900">{r.name}</h3>
                  <p className="text-xs md:text-sm text-gray-500">{r.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl h-[70vh] bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white text-xl hover:bg-white/30"
            >
              ×
            </button>
            <iframe
              src={buildPlayerUrl(selectedVideo)}
              title="Video player"
              className="w-full h-full"
              frameBorder={0}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
