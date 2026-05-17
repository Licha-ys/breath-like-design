import { motion } from "framer-motion";
import { useState } from "react";

const outlines = [
  { name: "CD", d: "M72 24 A48 48 0 1 1 71.9 24 M72 58 A14 14 0 1 1 71.9 58" },
  { name: "INFOBAR", d: "M136 24 H192 V152 H136 Z M146 42 H182 M148 66 H160 M168 66 H180 M148 88 H160 M168 88 H180 M148 110 H160 M168 110 H180" },
  { name: "Hiroshima", d: "M238 124 C260 92 282 84 320 92 C344 98 360 92 374 72 M274 96 V150 M346 92 V150 M250 150 H366" },
  { name: "Pao", d: "M438 96 C452 46 514 46 528 96 Z M482 96 V148 M452 148 H512" }
];

export default function OutlineDraw() {
  const [touched, setTouched] = useState(false);

  return (
    <motion.div
      className="relative h-[500px] w-full max-w-2xl"
      initial={{ opacity: 0, y: 26 }}
      onMouseEnter={() => setTouched(true)}
      onMouseMove={() => setTouched(true)}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.45 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="breathing-glow absolute left-16 top-20 h-80 w-80 rounded-full bg-bluegray/30 blur-3xl" />
      <motion.p
        animate={{ opacity: touched ? 0 : 0.58 }}
        className="absolute right-8 top-8 text-xs tracking-[0.28em] text-ash/60"
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        移动鼠标
      </motion.p>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 420">
        {outlines.map((shape, index) => (
          <g key={shape.name}>
            <motion.path
              animate={{ pathLength: touched ? 1 : 0.18, opacity: touched ? 0.78 : 0.22 }}
              d={shape.d}
              fill="none"
              stroke={index === 2 ? "#B7926A" : "#77736A"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.35"
              transition={{ duration: 1.7, delay: index * 0.12, ease: "easeInOut" }}
            />
            <motion.text
              animate={{ opacity: touched ? 0.62 : 0 }}
              fill="#77736A"
              fontSize="10"
              letterSpacing="2"
              transition={{ duration: 0.8, delay: 0.4 + index * 0.08, ease: "easeInOut" }}
              x={[36, 136, 246, 448][index]}
              y="184"
            >
              {shape.name}
            </motion.text>
          </g>
        ))}
        <motion.path
          animate={{ opacity: touched ? 0.32 : 0.14 }}
          d="M46 238 C152 220 228 272 320 238 C406 206 488 222 552 238"
          fill="none"
          stroke="#C9C4B8"
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </svg>
      <motion.p
        animate={{ opacity: touched ? 1 : 0, x: touched ? 0 : 16, filter: touched ? "blur(0px)" : "blur(6px)" }}
        className="absolute bottom-4 right-0 max-w-sm border-l border-line/70 pl-6 text-base font-light leading-8 text-ash"
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        物的边界，不只来自造型，也来自身体、行为和环境。
      </motion.p>
    </motion.div>
  );
}
