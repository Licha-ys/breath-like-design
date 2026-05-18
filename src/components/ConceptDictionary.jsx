import React from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const concepts = [
  ["Without Thought", "使用者不需要思考，身体已经知道如何行动。"],
  ["Super Normal", "不依靠强烈造型吸引注意，而是在长期使用中显现可靠、自然和亲密。"],
  ["Outline", "物的轮廓不只是外形，也来自身体动作、使用情境和环境关系。"],
  ["Ma / 间", "物与物、人与物之间的留白、距离和关系。"],
  ["Wabi-sabi / 侘寂", "接受朴素、不完美、时间感与自然痕迹。"],
  ["Mingei / 民艺", "来自普通器物和日常生活的美。"]
];

export default function ConceptDictionary() {
  return (
    <Section id="concept-dictionary">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">
            Concept Dictionary
          </p>
          <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">
            概念词典
          </h2>
        </motion.div>

        <div className="grid gap-px bg-line/35 md:grid-cols-3">
          {concepts.map(([term, text], index) => (
            <motion.div
              className="group min-h-60 bg-rice/75 p-8 transition-colors duration-700 hover:bg-paper/85"
              initial={{ opacity: 0, y: 22 }}
              key={term}
              transition={{ delay: index * 0.06, duration: 0.85, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.35 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="block h-px w-12 bg-line transition-colors duration-700 group-hover:bg-wood/70" />
              <h3 className="mt-8 text-2xl font-light text-ink/80 transition-colors duration-700 group-hover:text-ink">
                {term}
              </h3>
              <p className="mt-7 text-base font-light leading-8 text-ash transition-colors duration-700 group-hover:text-[#6F6A61]">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
