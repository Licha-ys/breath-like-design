import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const BASE = import.meta.env.BASE_URL;
const asset = (path) => `${BASE}${path.replace(/^\/+/, "")}`;

const panels = {
  west: {
    label: "Western Method",
    title: "西方方法",
    image: "research/east-west/eastwest-western-method.png",
    keywords: ["观察", "分析", "原型", "系统", "显性问题"],
    text: "西方方法提供了研究人的工具：观察用户如何行动，分析问题如何产生，并用原型验证解决方式。"
  },
  center: {
    label: "Naoto Fukasawa",
    title: "深泽直人",
    image: "research/east-west/eastwest-fukasawa.svg",
    keywords: ["Observation × Harmony", "Behavior × Emptiness", "Function × Atmosphere", "Product × Environment"],
    text: "深泽直人不是把东西方风格拼贴在一起，而是把两种方法转化为一种设计状态：用观察发现动作，用克制减少干扰，让产品像呼吸一样进入生活。"
  },
  east: {
    label: "Eastern Relation",
    title: "东方关系",
    image: "research/east-west/eastwest-eastern-relation.svg",
    keywords: ["留白", "克制", "日常", "身体感", "环境调和"],
    text: "东方关系不急于突出设计，而是让物退到生活背后，使人、物与空间保持不被打扰的平衡。"
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

function ResearchPlate({ src, fallback }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return fallback;

  return (
    <div className="relative mb-8 h-36 w-full overflow-hidden rounded-[999px] border border-line/35 bg-paper/45">
      <img
        alt=""
        className="h-full w-full object-cover opacity-70 grayscale mix-blend-multiply"
        onError={() => setFailed(true)}
        src={asset(src)}
      />
      <div className="pointer-events-none absolute inset-0 bg-rice/20" />
    </div>
  );
}

function PanelVisual({ type, image }) {
  if (type === "west") return <ResearchPlate src={image} fallback={<WesternVisual />} />;
  if (type === "center") return <ResearchPlate src={image} fallback={<CenterVisual />} />;
  return <ResearchPlate src={image} fallback={<EasternVisual />} />;
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
            深泽直人的特殊性不在于他单纯属于东方或西方，而在于他站在两者之间。西方设计方法让他学会观察行为、定义问题和分析隐性需求；东方审美则让他以留白、克制和低存在感处理人、物与环境之间的关系。
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
                <PanelVisual image={panel.image} type={key} />
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
