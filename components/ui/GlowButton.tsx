"use client";

import React from "react";
import clsx from "clsx";

type GradientButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={clsx("gradient-btn", className)}
      >
        <span className="gradient-btn__text">{text}</span>
        <span className="gradient-btn__sparkle" aria-hidden />
      </button>

      {/* ===============================
          GLOBAL STYLES (SAFE & FAST)
      =============================== */}
      <style jsx global>{`
        .gradient-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 14px 32px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;

          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.2px;

          color: #1b1300;
          background: linear-gradient(90deg, #f7a72b, #fbd75d);
          background-size: 200% 200%;

          box-shadow: 0 10px 30px rgba(255, 190, 90, 0.35);

          transition:
            transform 180ms cubic-bezier(.19,1,.22,1),
            box-shadow 180ms cubic-bezier(.19,1,.22,1),
            background-position 300ms ease;

          will-change: transform;
        }

        .gradient-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 18px 45px rgba(255, 200, 100, 0.45);
          background-position: 100% 50%;
        }

        .gradient-btn__text {
          position: relative;
          z-index: 2;
        }

        /* ===== Sparkle (NO SVG, GPU SAFE) ===== */
        .gradient-btn__sparkle {
          pointer-events: none;
          position: absolute;
          inset: -40%;
          opacity: 0;

          background:
            radial-gradient(circle at 30% 40%, rgba(255,255,255,0.6), transparent 40%),
            radial-gradient(circle at 70% 60%, rgba(255,255,255,0.45), transparent 45%),
            radial-gradient(circle at 50% 20%, rgba(255,255,255,0.35), transparent 50%);

          filter: blur(6px);
          transition: opacity 220ms ease;
        }

        .gradient-btn:hover .gradient-btn__sparkle {
          opacity: 1;
        }

        /* ===== Accessibility ===== */
        @media (prefers-reduced-motion: reduce) {
          .gradient-btn,
          .gradient-btn:hover {
            transition: none;
            transform: none;
          }

          .gradient-btn__sparkle {
            display: none;
          }
        }

        /* ===== Mobile ===== */
        @media (max-width: 768px) {
          .gradient-btn {
            font-size: 15px;
            padding: 12px 24px;
          }
        }
      `}</style>
    </>
  );
};

export default React.memo(GradientButton);
