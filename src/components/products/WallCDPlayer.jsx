import React, { useState } from "react";
import { motion } from "framer-motion";

export default function WallCDPlayer({ active, setActive }) {
  const [playing, setPlaying] = useState(false);
  const isOn = active || playing;

  return (
    <button
      aria-label="MUJI 壁挂式 CD 播放器"
      className="relative h-56 w-56 text-left"
      onClick={() => {
        setActive();
        setPlaying((value) => !value);
      }}
      onMouseEnter={setActive}
      type="button"
    >
      <div className="absolute inset-6 rounded-full bg-ink/5 blur-2xl" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 220 220">
        <circle cx="110" cy="96" fill="#F8F7F2" r="72" stroke="#C9C4B8" strokeWidth="1.2" />
        <circle cx="110" cy="96" fill="#F6F3EC" r="54" stroke="#DDE4E2" strokeWidth="1" />
        <motion.g
          animate={{ rotate: isOn ? 360 : 0 }}
          style={{ originX: "110px", originY: "96px" }}
          transition={{ duration: 7.5, repeat: isOn ? Infinity : 0, ease: "linear" }}
        >
          <circle cx="110" cy="96" fill="none" r="30" stroke="#C9C4B8" strokeWidth="1" />
          <path d="M110 66 V126 M80 96 H140" stroke="#C9C4B8" strokeOpacity="0.6" strokeWidth="1" />
        </motion.g>
        <circle cx="110" cy="96" fill="#F8F7F2" r="7" stroke="#C9C4B8" />
        <motion.line
          animate={{ y2: isOn ? 200 : 184 }}
          stroke="#77736A"
          strokeLinecap="round"
          strokeWidth="1"
          transition={{ duration: 0.75, ease: "easeInOut" }}
          x1="110"
          x2="110"
          y1="168"
          y2="184"
        />
        <motion.circle
          animate={{ cy: isOn ? 204 : 188 }}
          cx="110"
          fill="#F8F7F2"
          r="4"
          stroke="#77736A"
          transition={{ duration: 0.75, ease: "easeInOut" }}
        />
      </svg>
      <motion.p
        animate={{ opacity: isOn ? 1 : 0, y: isOn ? 0 : 8 }}
        className="absolute -right-28 top-20 w-32 text-sm font-light leading-6 text-ash"
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        声音像空气一样被打开。
      </motion.p>
    </button>
  );
}
