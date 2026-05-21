import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const panels = {
  west: {
    label: "Western Method",
    title: "西方方法",
    keywords: ["功能逻辑", "系统", "效率", "用户研究", "问题定义", "显性需求", "技术理性"],
    text: "西方现代设计更强调功能、结构、效率和可验证的方法。它帮助设计师拆解问题、观察用户、建立系统。"
  },
  center: {
    label: "Naoto Fukasawa",
    title: "深泽直人",
    keywords: ["Observation × Harmony", "Behavior × Emptiness", "Function × Atmosphere", "Product × Environment"],
    text: "深泽直人将二者调和：用观察方法发现人的无意识动作，用东方的留白与克制让物自然进入环境。"
  },
  east: {
    label: "Eastern Relation",
    title: "东方关系",
    keywords: ["留白", "克制", "日常", "物我合一", "身体感受", "低存在感", "环境调和"],
    text: "东方设计更强调人与物、物与环境之间的关系。它不急于突出设计，而是让物安静地融入生活。"
  }
};

export default function EastWestSection() {
  const [active, setActive] = useState("center");

  return (
    <Section id="east-west">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">East × West</p>
          <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">东西方之间</h2>
          <p className="mt-8 text-base font-light leading-8 text-ash md:text-lg">
            深泽直人的特殊性不在于单纯属于东方或西方，而在于他站在两者之间。他用西方设计方法观察用户行为，又用东方审美处理人、物与环境的关系。
          </p>
        </motion.div>

        <div className="grid items-stretch gap-6 md:grid-cols-[1fr_0.72fr_1fr]">
          {["west", "center", "east"].map((key) => {
            const panel = panels[key];
            return (
              <motion.button
                animate={{ opacity: active === key ? 1 : 0.58 }}
                className="relative min-h-[440px] border border-line/45 bg-rice/25 p-8 text-left transition-colors duration-700 hover:bg-rice/40"
                key={key}
                onFocus={() => setActive(key)}
                onMouseEnter={() => setActive(key)}
                type="button"
              >
                {key === "center" && <span className="absolute inset-y-8 left-1/2 w-px bg-line/50" />}
                <p className="text-xs uppercase tracking-[0.28em] text-ash/55">{panel.label}</p>
                <h3 className="mt-6 text-3xl font-light text-ink">{panel.title}</h3>
                <div className="mt-8 flex flex-wrap gap-3">
                  {panel.keywords.map((word) => (
                    <span className="border-b border-line/70 pb-1 text-sm text-ash" key={word}>
                      {word}
                    </span>
                  ))}
                </div>
                <motion.p
                  animate={{ opacity: active === key ? 1 : 0, y: active === key ? 0 : 8 }}
                  className="mt-10 text-base font-light leading-8 text-ash"
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                >
                  {panel.text}
                </motion.p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
