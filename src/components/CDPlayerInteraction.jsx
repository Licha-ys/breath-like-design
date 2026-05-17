import { motion } from "framer-motion";
import { useState } from "react";

export default function CDPlayerInteraction() {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      className="relative mx-auto flex h-[560px] w-full max-w-xl items-center justify-center"
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      viewport={{ once: true, amount: 0.45 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="breathing-glow absolute h-80 w-80 rounded-full bg-warm/25 blur-3xl" />
      <div
        aria-label="靠近或点击拉绳，打开声音"
        className="group relative h-[338px] w-[338px] rounded-full border border-line/70 bg-rice/75 shadow-hush backdrop-blur-sm transition-transform duration-700 hover:scale-[1.01]"
        onClick={() => setActive((value) => !value)}
        onMouseEnter={() => setActive(true)}
        role="button"
        tabIndex={0}
      >
        <div className="absolute inset-8 rounded-full border border-line/60 bg-paper/80" />
        <div
          className={`absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/80 bg-gradient-to-br from-white/80 to-bluegray/45 ${
            active ? "slow-spin" : ""
          }`}
        >
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-line/60" />
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-line/40" />
          <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-rice" />
        </div>
        <motion.span
          animate={{ height: active ? 148 : 104 }}
          className="absolute left-1/2 top-[99%] w-px -translate-x-1/2 bg-ash/60"
          transition={{ duration: 0.85, ease: "easeInOut" }}
        />
        <motion.span
          animate={{ y: active ? 38 : 0 }}
          className="absolute left-1/2 top-[calc(100%+98px)] h-3 w-3 -translate-x-1/2 rounded-full border border-ash/50 bg-rice"
          transition={{ duration: 0.85, ease: "easeInOut" }}
        />
        <motion.span
          animate={{ opacity: active ? 0 : 0.58 }}
          className="absolute -bottom-28 left-1/2 -translate-x-1/2 text-xs tracking-[0.28em] text-ash/70"
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          靠近 / 拉动
        </motion.span>
      </div>
      <motion.div
        animate={{
          opacity: active ? 1 : 0,
          x: active ? 0 : 18,
          filter: active ? "blur(0px)" : "blur(6px)"
        }}
        className="absolute bottom-8 right-0 max-w-xs border-l border-line/70 pl-6 text-lg font-light leading-8 text-ink/80"
        transition={{ duration: 0.95, ease: "easeInOut" }}
      >
        声音像空气一样被打开。
      </motion.div>
    </motion.div>
  );
}
