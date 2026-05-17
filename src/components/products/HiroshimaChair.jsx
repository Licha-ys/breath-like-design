import React from "react";
import { motion } from "framer-motion";

export default function HiroshimaChair({ active, setActive }) {
  return (
    <button
      aria-label="Hiroshima Arm Chair"
      className="relative h-56 w-80 text-left"
      onClick={setActive}
      onMouseEnter={setActive}
      type="button"
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 220">
        <motion.path
          animate={{ opacity: active ? 0.55 : 0.16, x: active ? 0 : -16, y: active ? 0 : 8 }}
          d="M156 34 C132 42 120 70 130 96 C138 118 155 128 176 126 C204 124 218 98 210 72 C205 52 188 36 156 34 Z M104 170 C116 132 138 112 174 116 C212 121 238 140 252 170"
          fill="none"
          stroke="#77736A"
          strokeDasharray="5 8"
          strokeLinecap="round"
          strokeWidth="1.2"
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
        <motion.path
          animate={{ opacity: active ? 0.95 : 0.68 }}
          d="M38 134 C84 88 139 75 198 92 C226 100 248 94 270 70"
          fill="none"
          stroke="#B7926A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
        <path d="M94 132 V190 M236 92 V190 M74 190 H250" fill="none" stroke="#B7926A" strokeLinecap="round" strokeWidth="2.2" />
        <path d="M88 146 C138 164 200 160 246 138" fill="none" stroke="#B7926A" strokeLinecap="round" strokeWidth="2.4" />
      </svg>
      <motion.p
        animate={{ opacity: active ? 1 : 0, y: active ? 0 : 8 }}
        className="absolute bottom-0 left-6 max-w-xs text-sm font-light leading-6 text-ash"
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        让身体自然安放。
      </motion.p>
    </button>
  );
}
