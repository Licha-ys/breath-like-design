import React from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const references = [
  "Naoto Fukasawa Design project pages",
  "Super Normal: Sensations of the Ordinary",
  "Kenya Hara: Designing Design",
  "Soetsu Yanagi: The Unknown Craftsman",
  "Sori Yanagi and Japanese modern industrial design",
  "IDEO design research and user observation methods"
];

export default function ReferencesSection() {
  return (
    <Section id="references" className="min-h-[70vh]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">References</p>
          <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">参考文献</h2>
          <p className="mt-8 text-base font-light leading-8 text-ash md:text-lg">
            这些资料为页面中的人物谱系、设计理念、产品案例和信息转译提供背景线索。
          </p>
        </motion.div>
        <div className="grid gap-px bg-line/35 md:grid-cols-2">
          {references.map((item) => (
            <div className="bg-rice/70 p-6 text-sm leading-7 text-ash" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
