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

function WesternVisual() {
  return (
    <svg className="mb-8 h-32 w-full opacity-75" viewBox="0 0 320 140">
      <path d="M32 28 H98 V62 H32 Z M186 24 H260 V58 H186 Z M104 90 H218 V120 H104 Z" fill="none" stroke="#C9C4B8" strokeWidth="1" />
      <path d="M98 45 C132 45 150 42 186 42 M64 62 C78 86 88 102 104 105 M218 105 C240 86 250 72 260 58" fill="none" stroke="#B7926A" strokeWidth="1" />
      <path d="M34 78 H76 M34 88 H88 M34 98 H68" stroke="#D7D1C5" strokeWidth="1" />
      <circle cx="64" cy="45" r="5" fill="#DDE4E2" />
      <circle cx="224" cy="42" r="5" fill="#E9D8B8" />
      <circle cx="160" cy="105" r="5" fill="#9D6B5C" opacity="0.35" />
    </svg>
  );
}

function CenterVisual() {
  return (
    <svg className="mb-8 h-32 w-full opacity-80" viewBox="0 0 260 140">
      <motion.path
        animate={{ opacity: [0.28, 0.62, 0.28] }}
        d="M30 72 C70 42 92 98 130 70 C168 42 190 96 230 70"
        fill="none"
        stroke="#9D6B5C"
        strokeLinecap="round"
        strokeWidth="1.2"
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="130" cy="70" r="48" fill="none" stroke="#C9C4B8" strokeWidth="0.9" />
      <circle cx="130" cy="70" r="20" fill="#E9D8B8" opacity="0.28" />
      <path d="M130 22 V118 M82 70 H178" stroke="#D7D1C5" strokeWidth="0.8" />
    </svg>
  );
}

function EasternVisual() {
  return (
    <svg className="mb-8 h-32 w-full opacity-75" viewBox="0 0 320 140">
      <circle cx="160" cy="70" r="52" fill="none" stroke="#C9C4B8" strokeWidth="0.9" />
      <circle cx="160" cy="70" r="28" fill="none" stroke="#B7926A" strokeWidth="0.9" opacity="0.75" />
      <path d="M70 76 C110 54 132 94 160 70 C188 46 210 86 250 66" fill="none" stroke="#9D6B5C" strokeLinecap="round" strokeWidth="1" opacity="0.55" />
      <path d="M92 104 H134 M184 36 H228 M122 30 H158" stroke="#D7D1C5" strokeWidth="1" />
    </svg>
  );
}

function PanelVisual({ type }) {
  if (type === "west") return <WesternVisual />;
  if (type === "center") return <CenterVisual />;
  return <EasternVisual />;
}

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
                animate={{ opacity: active === key ? 1 : 0.6 }}
                className="relative min-h-[520px] border border-line/45 bg-rice/25 p-8 text-left transition-colors duration-700 hover:bg-rice/40"
                key={key}
                onFocus={() => setActive(key)}
                onMouseEnter={() => setActive(key)}
                type="button"
              >
                {key === "center" && <span className="absolute inset-y-8 left-1/2 w-px bg-line/40" />}
                <PanelVisual type={key} />
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
