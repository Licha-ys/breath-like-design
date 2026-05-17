import { motion } from "framer-motion";
import { matrixCases } from "../data/content.js";

export default function CaseMatrix() {
  return (
    <motion.div
      className="mx-auto max-w-6xl"
      initial={{ opacity: 0, y: 28 }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.25 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="mb-14 max-w-xl">
        <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">Case Matrix</p>
        <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">案例矩阵</h2>
      </div>
      <div className="relative grid gap-4 md:grid-cols-5">
        <div className="absolute left-4 right-4 top-1/2 hidden h-px bg-line/45 md:block" />
        {matrixCases.map((item, index) => (
          <motion.article
            className="relative min-h-72 border border-line/45 bg-rice/30 p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            key={item.name}
            transition={{ duration: 0.8, delay: index * 0.08, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.34)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          >
            <span className="absolute -top-2 left-6 h-4 w-4 rounded-full border border-line bg-paper" />
            <p className="text-xs tracking-[0.22em] text-ash/55">{item.year}</p>
            <h3 className="mt-5 min-h-16 text-lg font-light leading-7 text-ink/80">{item.name}</h3>
            <div className="mt-8 space-y-3">
              {item.words.map((word) => (
                <div className="flex items-center gap-3 text-sm font-light text-ash" key={word}>
                  <span className="h-px w-7 bg-line" />
                  {word}
                </div>
              ))}
            </div>
            <svg className="absolute bottom-5 right-5 h-14 w-14 opacity-45" viewBox="0 0 64 64">
              <path
                d={[
                  "M32 10 A22 22 0 1 1 31.9 10",
                  "M12 36 C24 16 42 16 52 36",
                  "M18 18 H46 V48 H18 Z",
                  "M12 42 C24 22 42 18 54 30 M22 42 H50",
                  "M14 34 C22 14 42 14 50 34 Z"
                ][index]}
                fill="none"
                stroke="#77736A"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
              />
            </svg>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
