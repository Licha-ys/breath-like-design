import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import WallCDPlayer from "./products/WallCDPlayer.jsx";
import HumidifierObject from "./products/HumidifierObject.jsx";
import InfobarPhone from "./products/InfobarPhone.jsx";
import HiroshimaChair from "./products/HiroshimaChair.jsx";
import PaoLamp from "./products/PaoLamp.jsx";

const products = [
  {
    id: "cd",
    name: "MUJI Wall-mounted CD Player",
    year: "1999",
    text: "声音像空气一样被打开。",
    keywords: ["身体记忆", "拉绳", "无意识操作", "空气"]
  },
  {
    id: "humidifier",
    name: "±0 Humidifier",
    year: "2003",
    text: "它不强调机器的存在，只改变身体感受到的空气。",
    keywords: ["空气", "湿度", "身体感受", "低存在感"]
  },
  {
    id: "infobar",
    name: "INFOBAR",
    year: "2003",
    text: "按键不是装饰，而是身体已经认识的秩序。",
    keywords: ["熟悉形态", "矩形", "按键", "普通中的差异"]
  },
  {
    id: "hiroshima",
    name: "Hiroshima Arm Chair",
    year: "2008",
    text: "好的椅子不是要求身体适应它，而是让身体自然安放。",
    keywords: ["身体尺度", "木材", "曲线", "长期使用"]
  },
  {
    id: "pao",
    name: "Pao Glass Table Lamp",
    year: "2020",
    text: "设计不占据空间，而是让空间变得更柔和。",
    keywords: ["柔光", "氛围", "隐藏技术", "空间调和"]
  }
];

function ProductFrame({ id, activeId, className, children, setActive }) {
  const isActive = activeId === id;
  const isDimmed = activeId && !isActive;

  return (
    <motion.div
      animate={{ opacity: isDimmed ? 0.34 : 1, scale: isActive ? 1.012 : 1 }}
      className={`absolute ${className}`}
      onFocus={() => setActive(id)}
      onMouseEnter={() => setActive(id)}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function ProductRoom() {
  const [activeId, setActiveId] = useState("cd");
  const active = useMemo(
    () => products.find((item) => item.id === activeId) ?? products[0],
    [activeId]
  );

  return (
    <section
      className="relative flex min-h-screen items-center py-24 md:py-32"
      id="product-room"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-[0.78fr_1.22fr]">
        <motion.div
          className="relative z-10 max-w-xl self-center"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          viewport={{ once: true, amount: 0.45 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">
            Interactive Product Room
          </p>
          <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">
            可交互产品之室
          </h2>
          <p className="mt-9 text-base font-light leading-8 text-ash md:text-lg">
            这些作品不是被陈列的物，而是被身体唤醒的行为。拉动、靠近、点击、坐下、点亮，每一个动作都通向深泽直人的无意识设计。
          </p>
          <p className="mt-10 text-sm tracking-[0.2em] text-ash/65">
            靠近展品，信息会慢慢显影
          </p>
        </motion.div>

        <motion.div
          className="relative min-h-[720px] overflow-hidden border border-line/40 bg-rice/30 shadow-hush backdrop-blur-sm"
          initial={{ opacity: 0, y: 28 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="absolute inset-x-10 top-16 h-px bg-line/45" />
          <div className="absolute bottom-28 left-10 right-10 h-px bg-line/45" />
          <div className="breathing-glow absolute right-20 top-20 h-80 w-80 rounded-full bg-warm/20 blur-3xl" />
          <div className="breathing-glow absolute bottom-16 left-20 h-72 w-72 rounded-full bg-bluegray/25 blur-3xl" />

          <ProductFrame activeId={activeId} className="left-[8%] top-[9%]" id="cd" setActive={setActiveId}>
            <WallCDPlayer active={activeId === "cd"} setActive={() => setActiveId("cd")} />
          </ProductFrame>
          <ProductFrame activeId={activeId} className="right-[9%] top-[12%]" id="humidifier" setActive={setActiveId}>
            <HumidifierObject active={activeId === "humidifier"} setActive={() => setActiveId("humidifier")} />
          </ProductFrame>
          <ProductFrame activeId={activeId} className="left-[38%] top-[30%]" id="infobar" setActive={setActiveId}>
            <InfobarPhone active={activeId === "infobar"} setActive={() => setActiveId("infobar")} />
          </ProductFrame>
          <ProductFrame activeId={activeId} className="left-[7%] bottom-[13%]" id="hiroshima" setActive={setActiveId}>
            <HiroshimaChair active={activeId === "hiroshima"} setActive={() => setActiveId("hiroshima")} />
          </ProductFrame>
          <ProductFrame activeId={activeId} className="right-[10%] bottom-[17%]" id="pao" setActive={setActiveId}>
            <PaoLamp active={activeId === "pao"} setActive={() => setActiveId("pao")} />
          </ProductFrame>

          <motion.aside
            key={active.id}
            className="absolute bottom-8 right-8 z-20 max-w-sm border-l border-line/70 bg-rice/55 py-2 pl-6 pr-2 backdrop-blur-sm"
            initial={{ opacity: 0, x: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-ash/60">
              {active.name} / {active.year}
            </p>
            <p className="mt-4 text-lg font-light leading-8 text-ink/85">{active.text}</p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-ash">
              {active.keywords.map((word) => (
                <span className="border-b border-line/70 pb-1" key={word}>
                  {word}
                </span>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
