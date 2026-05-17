import React from "react";
import { motion } from "framer-motion";

export default function HumidifierObject({ active, setActive }) {
  return (
    <button
      aria-label="±0 加湿器"
      className="relative h-48 w-56 text-left"
      onClick={setActive}
      onMouseEnter={setActive}
      type="button"
    >
      <motion.div
        animate={{ opacity: active ? 0.28 : 0.1, scale: active ? 1.28 : 0.9 }}
        className="absolute left-1/2 top-6 h-32 w-32 -translate-x-1/2 rounded-full border border-bluegray bg-bluegray/30 blur-sm"
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      {[0, 1, 2].map((index) => (
        <motion.div
          animate={{
            opacity: active ? 0.28 - index * 0.06 : 0.1,
            scale: active ? 1.25 + index * 0.28 : 0.82 + index * 0.08,
            y: active ? -28 - index * 14 : 0
          }}
          className="absolute left-1/2 top-12 h-24 w-24 -translate-x-1/2 rounded-full bg-bluegray/30 blur-xl"
          key={index}
          transition={{ duration: 1.25 + index * 0.15, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute bottom-8 left-1/2 h-28 w-44 -translate-x-1/2 rounded-[50%] border border-line/70 bg-gradient-to-b from-rice to-bluegray/30 shadow-hush" />
      <div className="absolute bottom-[72px] left-1/2 h-16 w-28 -translate-x-1/2 rounded-[50%] border border-line/50 bg-rice/70" />
      <motion.div
        animate={{ opacity: active ? 0.36 : 0, scale: active ? 1.15 : 0.9 }}
        className="absolute bottom-0 left-1/2 h-32 w-56 -translate-x-1/2 rounded-full border border-bluegray/60"
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
    </button>
  );
}
