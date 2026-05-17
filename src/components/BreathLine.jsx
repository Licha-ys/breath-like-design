import React from "react";

export default function BreathLine() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-[42%] z-0 h-[44vh] opacity-40"
    >
      <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1440 460">
        <path
          className="breath-path"
          d="M0 230 C120 210 190 210 290 230 C390 250 478 250 580 230 C682 210 780 210 884 230 C988 250 1088 250 1194 230 C1300 210 1360 210 1440 230"
          fill="none"
          stroke="#C9C4B8"
          strokeLinecap="round"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
