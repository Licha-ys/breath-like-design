import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PaoLamp({ active, setActive }) {
  const [on, setOn] = useState(false);
  const lit = active || on;

  return (
    <button
      aria-label="Pao Glass Table Lamp"
      className="relative h-56 w-56 text-left"
      onClick={() => {
        setActive();
        setOn((value) => !value);
      }}
      onMouseEnter={setActive}
      type="button"
    >
      <motion.div
        animate={{ opacity: lit ? 0.72 : 0.18, scale: lit ? 1.18 : 0.82 }}
        className="absolute left-1/2 top-10 h-44 w-44 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(233,216,184,0.72),rgba(233,216,184,0.18)_45%,transparent_70%)] blur-2xl"
        transition={{ duration: 1.15, ease: "easeInOut" }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 220 220">
        <path d="M58 104 C70 54 150 54 162 104 Z" fill="#F8F7F2" stroke="#C9C4B8" strokeWidth="1.3" />
        <motion.path
          animate={{ opacity: lit ? 0.72 : 0.22 }}
          d="M68 102 C80 70 140 70 152 102 Z"
          fill="#E9D8B8"
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <path d="M110 104 V164 M88 164 H132 M78 176 H142" fill="none" stroke="#77736A" strokeLinecap="round" strokeWidth="1.3" />
      </svg>
      <motion.p
        animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : 8 }}
        className="absolute -left-20 top-28 w-36 text-sm font-light leading-6 text-ash"
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        让空间变得更柔和。
      </motion.p>
    </button>
  );
}
