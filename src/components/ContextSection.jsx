import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const BASE = import.meta.env.BASE_URL;
const asset = (path) => `${BASE}${path.replace(/^\/+/, "")}`;

const layers = [
  {
    title: "日本现代工业设计",
    keywords: "战后工业化 / 日常器物 / 生活美学 / 朴素实用",
    text: "日本现代设计在工业生产与日常生活之间寻找平衡，强调物品既要可被生产，也要保留人的使用温度。",
    visual: "objects"
  },
  {
    title: "西方设计方法",
    keywords: "IDEO / 用户观察 / 行为研究 / 问题定义",
    text: "西方设计方法为深泽直人提供了观察用户、分析行为和定义问题的工具。",
    visual: "method"
  },
  {
    title: "生活方式品牌",
    keywords: "MUJI / ±0 / au KDDI / maruni / HAY",
    text: "这些品牌和产品语境让深泽直人的理念从个人思考转化为具体的生活产品。",
    visual: "collage"
  }
];

function ObjectsSketch() {
  return (
    <svg className="h-28 w-40 opacity-75" viewBox="0 0 180 120">
      <path d="M22 76 H74 V98 H22 Z" fill="none" stroke="#B7926A" strokeWidth="1.2" />
      <path d="M34 76 V54 C34 38 62 38 62 54 V76" fill="none" stroke="#C9C4B8" strokeWidth="1.2" />
      <path d="M102 28 C126 28 145 47 145 71 C145 92 130 104 108 104 H94 V28 Z" fill="none" stroke="#9A948A" strokeWidth="1.2" />
      <path d="M112 42 H154 M112 60 H154 M112 78 H154" stroke="#D7D1C5" strokeWidth="1" />
      <circle cx="88" cy="68" r="20" fill="none" stroke="#DDE4E2" strokeWidth="1.2" />
    </svg>
  );
}

function MethodSketch() {
  return (
    <svg className="h-28 w-40 opacity-75" viewBox="0 0 180 120">
      <path d="M22 28 H70 V56 H22 Z M108 24 H154 V52 H108 Z M72 78 H132 V104 H72 Z" fill="none" stroke="#C9C4B8" strokeWidth="1" />
      <path d="M70 42 C88 42 90 38 108 38 M46 56 C54 78 58 91 72 91 M132 52 C134 70 134 76 132 78" fill="none" stroke="#B7926A" strokeWidth="1" />
      <circle cx="46" cy="42" r="5" fill="#E9D8B8" opacity="0.7" />
      <circle cx="132" cy="38" r="5" fill="#DDE4E2" opacity="0.8" />
      <circle cx="102" cy="91" r="5" fill="#9D6B5C" opacity="0.35" />
      <path d="M24 72 H46 M24 82 H58 M24 92 H48" stroke="#D7D1C5" strokeWidth="1" />
    </svg>
  );
}

function ProductCollage() {
  const images = [
    ["products/wall-cd-player.png?v=2", "left-2 top-7 w-14"],
    ["products/humidifier.png?v=2", "left-16 top-14 w-16"],
    ["products/infobar.png?v=2", "left-28 top-3 h-20"],
    ["products/hiroshima-chair.png?v=2", "left-7 bottom-3 w-20"],
    ["products/pao-lamp.png?v=2", "right-4 bottom-4 w-16"]
  ];

  return (
    <div className="relative h-28 w-44 opacity-80">
      <div className="absolute inset-4 rounded-full border border-line/40" />
      {images.map(([src, className]) => (
        <img
          alt=""
          className={`absolute object-contain opacity-70 grayscale mix-blend-multiply ${className}`}
          key={src}
          src={asset(src)}
        />
      ))}
    </div>
  );
}

function Visual({ type }) {
  if (type === "objects") return <ObjectsSketch />;
  if (type === "method") return <MethodSketch />;
  return <ProductCollage />;
}

export default function ContextSection() {
  const [active, setActive] = useState(0);

  return (
    <Section id="context">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-10 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">Context</p>
          <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">
            时代中的深泽直人
          </h2>
          <p className="mt-10 max-w-2xl text-base font-light leading-9 text-ash md:text-lg">
            深泽直人的设计理念并不是孤立产生的。它形成于日本现代工业设计、生活方式品牌、用户研究方法和全球化设计语境的交汇处。
          </p>
          <p className="mt-6 max-w-2xl text-base font-light leading-9 text-ash md:text-lg">
            20 世纪后期，产品设计不再只是功能与造型的竞争，而逐渐转向人的体验、情感与日常生活方式。他在日本接受产品设计教育，又在美国 IDEO 的设计环境中接触用户观察和行为研究；回到日本后，将这种观察方法转化为更克制、更日常、更接近东方关系美学的设计语言。
          </p>
        </motion.div>

        <div className="space-y-5">
          {layers.map((layer, index) => (
            <motion.button
              animate={{ opacity: active === index ? 1 : 0.68 }}
              className="group grid w-full gap-6 border-y border-line/45 bg-rice/20 px-6 py-6 text-left transition-colors duration-700 hover:bg-rice/35 md:grid-cols-[1fr_auto]"
              initial={{ opacity: 0, y: 20 }}
              key={layer.title}
              onFocus={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              transition={{ delay: index * 0.12, duration: 0.85, ease: "easeInOut" }}
              type="button"
              viewport={{ once: true }}
              whileInView={{ opacity: active === index ? 1 : 0.76, y: 0 }}
            >
              <div>
                <p className="text-2xl font-light text-ink">{layer.title}</p>
                <p className="mt-3 text-xs leading-6 tracking-[0.18em] text-ash/60">
                  {layer.keywords}
                </p>
                <motion.p
                  animate={{ opacity: active === index ? 1 : 0, y: active === index ? 0 : 8 }}
                  className="mt-5 max-w-2xl text-sm font-light leading-7 text-ash"
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                >
                  {layer.text}
                </motion.p>
              </div>
              <div className="flex items-center justify-center border-l border-line/30 pl-6">
                <Visual type={layer.visual} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </Section>
  );
}
