"use client"

import { usePathname } from "next/navigation"

export function ShareButtons({ title }: { title: string }) {
  const pathname = usePathname()
  const url = typeof window !== "undefined" ? window.location.origin + pathname : pathname

  return (
    <div className="flex items-center gap-3">
      <button
        className="text-sm underline hover:opacity-80 bg-transparent border-none cursor-pointer p-0"
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer")}
      >
        Share on Facebook
      </button>
      <button
        className="text-sm underline hover:opacity-80 bg-transparent border-none cursor-pointer p-0"
        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, "_blank", "noopener,noreferrer")}
      >
        Share on X
      </button>
      <button
        className="text-sm underline hover:opacity-80 bg-transparent border-none cursor-pointer p-0"
        onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, "_blank", "noopener,noreferrer")}
      >
        Share on LinkedIn
      </button>
    </div>
  )
}
