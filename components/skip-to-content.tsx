"use client"

export function SkipToContent() {
  return (
    <button
      onClick={() => document.getElementById('main')?.focus()}
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-[#111111] px-3 py-2 rounded"
    >
      Skip to content
    </button>
  )
}
