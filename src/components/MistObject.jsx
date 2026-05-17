import { motion } from "framer-motion";
import { useState } from "react";

const words = ["空气", "湿度", "身体感受", "低存在感"];

export default function MistObject() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="relative mx-auto flex h-[540px] w-full max-w-xl items-center justify-center"
      initial={{ opacity: 0, y: 28 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      transition={{ duration: 1.15, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.45 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <motion.div
        animate={{ opacity: open ? 0 : 0.55 }}
        className="absolute top-16 text-xs tracking-[0.28em] text-ash/60"
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        靠近空气
      </motion.div>
      <div className="absolute h-72 w-72 rounded-full border border-line/45 bg-rice/35 shadow-hush" />
      {[0, 1, 2].map((index) => (
        <motion.div
          animate={{
            opacity: open ? 0.2 - index * 0.04 : 0.42 - index * 0.08,
            scale: open ? 1.52 + index * 0.24 : 1.04 + index * 0.12
          }}
          className="absolute h-64 w-64 rounded-full border border-bluegray/65 bg-bluegray/20 blur-[2px]"
          key={index}
          transition={{ duration: 1.25 + index * 0.2, ease: "easeInOut" }}
        />
      ))}
      <motion.div
        animate={{ scale: open ? 0.97 : 1 }}
        className="absolute h-36 w-36 rounded-full border border-line/70 bg-gradient-to-b from-white/70 to-warm/30"
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      <div className="absolute grid h-[360px] w-[360px] place-items-center">
        {words.map((word, index) => {
          const positions = [
            "left-6 top-16",
            "right-3 top-28",
            "bottom-20 left-5",
            "bottom-12 right-8"
          ];

          return (
            <motion.span
              animate={{ opacity: open ? 1 : 0, y: open ? 0 : 12, filter: open ? "blur(0px)" : "blur(6px)" }}
              className={`absolute ${positions[index]} text-sm tracking-[0.16em] text-ash`}
              key={word}
              transition={{ delay: index * 0.08, duration: 0.85, ease: "easeInOut" }}
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}
