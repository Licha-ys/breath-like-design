import React from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const clues = [
  ["回归本质", "从欲望加法转向设计减法。"],
  ["有与无", "留白不是空缺，而是关系得以呼吸的空间。"],
  ["隐性需求", "人在不思考状态下的动作，往往暴露真实需求。"],
  ["情感关怀", "好的设计不只解决功能，也回应人的记忆和感受。"],
  ["认知负荷", "符合直觉的交互可以减少学习成本。"],
  ["行为消融", "产品不再是视觉中心，而是进入行为和环境。"]
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
            这些线索不是完整论文展示，而是从文献中提取出的设计判断，帮助解释为什么本项目强调动作、留白、低刺激和关系。
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
