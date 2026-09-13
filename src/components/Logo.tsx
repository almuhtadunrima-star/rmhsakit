import React from "react";

interface LogoProps {
  variant?: "color" | "white";
  className?: string;
}

export function Logo({ variant = "color", className = "" }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon Emblem */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width="46"
          height="46"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Outer Ring / Crescent */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke={isWhite ? "#ffffff" : "#00874e"}
            strokeWidth="4"
            strokeDasharray="6 3"
            opacity="0.85"
          />
          {/* Inner Shield / Hexagon Shape */}
          <path
            d="M50 14L80 28V52C80 70 50 86 50 86C50 86 20 70 20 52V28L50 14Z"
            fill={isWhite ? "rgba(255, 255, 255, 0.15)" : "#e8f5e9"}
            stroke={isWhite ? "#ffffff" : "#00874e"}
            strokeWidth="3"
          />
          {/* Medical Cross */}
          <path
            d="M44 32H56V44H68V56H56V68H44V56H32V44H44V32Z"
            fill={isWhite ? "#ffffff" : "#00874e"}
          />
          {/* Heart / Care Accent in center */}
          <circle
            cx="50"
            cy="50"
            r="4"
            fill={isWhite ? "#fcd34d" : "#f59e0b"}
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-black text-xl tracking-tight ${
              isWhite ? "text-white" : "text-[#00874e]"
            }`}
          >
            RS MUHAMMAD ALI
          </span>
        </div>
        <span
          className={`text-[10px] uppercase font-semibold tracking-wider ${
            isWhite ? "text-emerald-100/80" : "text-slate-500"
          }`}
        >
          Melayani Dengan Hati
        </span>
      </div>
    </div>
  );
}
