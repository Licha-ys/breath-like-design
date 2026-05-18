import React from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const keywords = ["日常", "无意识", "身体记忆", "普通", "克制", "调和"];

export default function DesignerProfile() {
  return (
    <Section id="designer-profile">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">
            Designer Profile
          </p>
          <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">
            设计师档案
          </h2>
          <p className="mt-10 max-w-2xl text-base font-light leading-9 text-ash md:text-lg">
            深泽直人是日本工业设计师，他的设计关注日常生活中自然发生的行为。他并不强调强烈的造型表达，而是通过简洁、克制、低存在感的物体，让人与物之间的关系变得自然。
          </p>
          <p className="mt-6 max-w-2xl text-base font-light leading-9 text-ash md:text-lg">
            其作品涉及家电、家具、手机、灯具等多个领域，并与 MUJI、±0、au KDDI、maruni、HAY 等品牌合作。
          </p>
        </motion.div>

        <motion.div
          className="relative min-h-[420px]"
          initial={{ opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="breathing-glow absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-warm/25 blur-3xl" />
          <svg className="absolute inset-x-0 top-24 h-40 w-full" viewBox="0 0 680 180">
            <motion.path
              animate={{ pathLength: [0.35, 1, 0.35], opacity: [0.28, 0.62, 0.28] }}
              d="M40 95 C120 52 185 130 265 92 C345 54 410 128 492 91 C564 58 610 74 640 95"
              fill="none"
              stroke="#C9C4B8"
              strokeLinecap="round"
              strokeWidth="1"
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          <div className="absolute inset-x-0 bottom-10 grid grid-cols-2 gap-x-8 gap-y-7 md:grid-cols-3">
            {keywords.map((word, index) => (
              <motion.div
                className="border-t border-line/55 pt-4"
                initial={{ opacity: 0, y: 16 }}
                key={word}
                transition={{ delay: 0.18 * index, duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="block h-2 w-2 rounded-full border border-wood/60 bg-rice" />
                <p className="mt-4 text-lg font-light text-ink/80">{word}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
