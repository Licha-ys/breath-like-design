import React from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const clues = [
  ["回归本质", "他的设计不是增加装饰，而是减少干扰，让物回到真实使用。"],
  ["有与无", "留白让产品不必占满注意力，使用关系反而更清晰。"],
  ["隐性需求", "人的真实需求常常藏在不经意的动作中。"],
  ["情感关怀", "情感不是额外装饰，而是在顺手、熟悉和安心的使用中产生。"],
  ["认知负荷", "当设计符合身体记忆，用户就不需要重新学习。"],
  ["行为消融", "产品不再作为视觉中心，而是融入行为和环境。"]
];

export default function ResearchClues() {
  return (
    <Section id="research-clues">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">Research Clues</p>
          <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">研究线索</h2>
          <p className="mt-8 text-base font-light leading-8 text-ash md:text-lg">
            这些线索不是文献摘要，而是帮助理解深泽直人设计的一组判断：为什么他强调日常动作，为什么物要退到生活背后，为什么好的设计可以减少人的思考。
          </p>
        </motion.div>

        <div className="relative min-h-[520px]">
          {clues.map(([title, text], index) => (
            <motion.div
              className={[
                "absolute w-[min(82vw,320px)] border-t border-line/55 bg-rice/20 p-5 transition-colors duration-700 hover:bg-rice/45",
                [
                  "left-[3%] top-[6%]",
                  "left-[38%] top-[0%]",
                  "right-[2%] top-[14%]",
                  "left-[12%] top-[52%]",
                  "left-[48%] top-[46%]",
                  "right-[7%] bottom-[2%]"
                ][index]
              ].join(" ")}
              initial={{ opacity: 0, y: 18, rotate: index % 2 === 0 ? -0.5 : 0.5 }}
              key={title}
              transition={{ delay: index * 0.08, duration: 0.85, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.25 }}
              whileInView={{ opacity: 0.72, y: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <p className="text-xl font-light text-ink/85">{title}</p>
              <p className="mt-4 text-sm font-light leading-7 text-ash">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
