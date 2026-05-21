import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const BASE = import.meta.env.BASE_URL;
const asset = (path) => `${BASE}${path.replace(/^\/+/, "")}`;

const layers = [
  {
    title: "日本现代工业设计",
    keywords: "工业生产 / 日常器物 / 生活美学 / 使用温度",
    text: "日本现代工业设计在工业生产与日常生活之间寻找平衡。深泽直人的产品延续了这种方向，但他不只关注器物形式，而是进一步关注人在使用中的无意识动作。",
    visual: "objects",
    image: "research/context/context-japan-industrial.svg"
  },
  {
    title: "西方设计方法",
    keywords: "IDEO / 用户观察 / 行为研究 / 隐性需求",
    text: "深泽直人在 IDEO 体系中接触用户观察和行为研究，这让他能够从人的动作中发现设计线索。后来他将这种方法转化为 Without Thought。",
    visual: "method",
    image: "research/context/context-western-method.png"
  },
  {
    title: "生活方式品牌",
    keywords: "MUJI / ±0 / au KDDI / maruni / HAY",
    text: "这些品牌让深泽直人的理念进入具体生活产品：CD 播放器、加湿器、手机、椅子、灯具。产品不再只是功能物，而成为日常行为和空间氛围的一部分。",
    visual: "collage"
  }
];

const contextMoments = [
  ["1980", "多摩美术大学产品设计毕业", "产品设计训练让他从器物、尺度与生产关系出发。"],
  ["1980s", "Seiko Epson：先进开发设计", "早期企业设计经验让他理解技术产品如何进入日常。"],
  ["1989", "进入 ID Two / IDEO 体系", "西方用户观察方法开始影响他分析行为的方式。"],
  ["1996", "建立 IDEO 东京办公室", "他把观察方法带回日本，并转向更克制的生活产品语境。"],
  ["2003", "成立 Naoto Fukasawa Design", "无意识行为逐渐成为其个人设计实践的核心线索。"],
  ["2006", "共同提出 Super Normal", "普通物品的长期信任感被明确为设计判断。"]
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

function ResearchImage({ src, fallback }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return fallback;

  return (
    <div className="relative h-28 w-44 overflow-hidden rounded-[999px] border border-line/35 bg-paper/45">
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

function Visual({ type, image }) {
  if (type === "objects") return <ResearchImage src={image} fallback={<ObjectsSketch />} />;
  if (type === "method") return <ResearchImage src={image} fallback={<MethodSketch />} />;
  return <ProductCollage />;
}

function FukasawaPortrait() {
  return (
    <div className="mt-8 flex items-center gap-5">
      <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border border-[rgba(120,105,85,0.22)] bg-[rgba(244,239,228,0.5)] md:h-36 md:w-36">
        <img
          alt="Naoto Fukasawa portrait"
          className="block h-full w-full object-cover opacity-[0.72] grayscale contrast-[1.05] brightness-[1.04] mix-blend-multiply"
          src={asset("research/people/naoto-fukasawa.jpg")}
          style={{ objectPosition: "50% 22%" }}
        />
      </div>
      <div className="hidden h-px flex-1 bg-line/45 sm:block" />
    </div>
  );
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
          <FukasawaPortrait />
          <p className="mt-10 max-w-2xl text-base font-light leading-9 text-ash md:text-lg">
            深泽直人的设计理念形成于多重背景的交汇处：日本现代工业设计的日常器物传统、西方用户观察方法，以及 MUJI、±0、maruni、HAY 等生活方式品牌的实践语境。
          </p>
          <p className="mt-6 max-w-2xl text-base font-light leading-9 text-ash md:text-lg">
            这些背景共同让他的设计从“造型表达”转向“行为、身体和环境关系”。
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
                <Visual image={layer.image} type={layer.visual} />
              </div>
            </motion.button>
          ))}
        </div>

        <div className="lg:col-span-2 mt-10 grid gap-px bg-line/30 md:grid-cols-6">
          {contextMoments.map(([year, title, detail]) => (
            <motion.div
              className="group bg-rice/45 p-5 transition-colors duration-700 hover:bg-rice/75"
              key={year}
              initial={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 0.78, y: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <p className="text-lg font-light text-ink/80">{year}</p>
              <p className="mt-3 text-xs leading-6 tracking-[0.14em] text-ash/60">{title}</p>
              <p className="mt-4 text-sm leading-7 text-ash opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                {detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
