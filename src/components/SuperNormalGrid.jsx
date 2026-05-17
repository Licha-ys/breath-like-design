import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { name: "杯子", path: "M44 42 H96 L88 122 H52 Z M38 56 C18 58 20 92 46 90" },
  { name: "椅子", path: "M42 58 H108 M54 58 V128 M96 58 V128 M48 84 H102" },
  { name: "灯", path: "M48 74 C58 34 102 34 112 74 Z M80 74 V126 M58 126 H102" },
  { name: "手机", path: "M52 28 H108 V132 H52 Z M70 44 H90 M74 114 H86" },
  { name: "CD 播放器", path: "M80 28 A52 52 0 1 1 79.9 28 M80 62 A18 18 0 1 1 79.9 62 M80 132 V154" },
  { name: "加湿器", path: "M80 46 A42 42 0 1 1 79.9 46 M58 74 C70 62 92 62 104 74 M48 34 C62 20 98 20 112 34" }
];

export default function SuperNormalGrid() {
  const [active, setActive] = useState("");

  return (
    <motion.div
      className="mt-16 grid gap-5 md:grid-cols-3"
      initial={{ opacity: 0, y: 26 }}
      viewport={{ once: true, amount: 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
    >
      {items.map((item) => {
        const isActive = active === item.name;

        return (
          <motion.div
            className="group min-h-64 border border-line/45 bg-rice/28 p-8 backdrop-blur-sm transition-colors duration-700 hover:bg-white/30"
            key={item.name}
            onMouseEnter={() => setActive(item.name)}
            onMouseLeave={() => setActive("")}
            whileHover={{ scale: 1.008 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <svg className="mx-auto h-36 w-36" viewBox="0 0 160 160">
              <motion.path
                animate={{ opacity: isActive ? 0.86 : 0.36 }}
                d={item.path}
                fill="none"
                stroke={isActive ? "#9D6B5C" : "#77736A"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            </svg>
            <p className="mt-6 text-center text-base font-light text-ink/70">{item.name}</p>
            <motion.p
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
              className="mt-5 text-center text-sm font-light leading-7 text-ash"
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              它不吸引注意，却长期被信任。
            </motion.p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
