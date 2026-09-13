import React from "react";

interface LogoProps {
  variant?: "color" | "white";
  className?: string;
}

export function Logo({ variant = "color", className = "" }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon Emblem with Islamic Medical Identity */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width="48"
          height="48"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Outer Ring / Crescent Symbolism */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={isWhite ? "#ffffff" : "#00874e"}
            strokeWidth="3"
            strokeDasharray="8 4"
            opacity="0.85"
          />
          {/* Octagon / Islamic Star Frame */}
          <path
            d="M36 14L64 14L86 36L86 64L64 86L36 86L14 64L14 36L36 14Z"
            fill={isWhite ? "rgba(255, 255, 255, 0.12)" : "#ecfdf5"}
            stroke={isWhite ? "#ffffff" : "#00874e"}
            strokeWidth="2.5"
          />
          {/* Medical Cross */}
          <path
            d="M44 30H56V44H70V56H56V70H44V56H30V44H44V30Z"
            fill={isWhite ? "#ffffff" : "#00874e"}
          />
          {/* Center Warm Heart/Care Accent */}
          <circle
            cx="50"
            cy="50"
            r="4.5"
            fill={isWhite ? "#fcd34d" : "#f59e0b"}
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-black text-lg sm:text-xl tracking-tight leading-none ${
              isWhite ? "text-white" : "text-[#00874e]"
            }`}
          >
            RSI MUHAMMAD ALI
          </span>
        </div>
        <span
          className={`text-[10px] uppercase font-semibold tracking-wider mt-1 ${
            isWhite ? "text-emerald-100/90" : "text-slate-500"
          }`}
        >
          Rumah Sakit Islam • Melayani dengan Ikhlas
        </span>
      </div>
    </div>
  );
}
