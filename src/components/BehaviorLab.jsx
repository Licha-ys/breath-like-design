import React, { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/products.js";

const behaviorItems = [
  {
    id: "pull",
    type: "pull",
    verb: "拉",
    product: products[0],
    note:
      "深泽直人将 CD 播放器设计成接近墙上换气扇的形态。用户拉下细绳，圆盘开始转动，声音被打开。这个动作来自日常生活中的身体记忆。"
  },
  {
    id: "approach",
    type: "approach",
    verb: "靠近",
    product: {
      ...products[1],
      keywords: ["空气", "湿度", "身体感受", "低存在感", "环境"]
    },
    note:
      "这件加湿器不强调机器本身，而是通过低存在感的形态，安静地改变空气、湿度与身体感受。"
  },
  {
    id: "press",
    type: "press",
    verb: "按",
    product: {
      ...products[2],
      keywords: ["熟悉形态", "矩形", "按键", "色彩秩序", "普通中的差异"]
    },
    note:
      "INFOBAR 通过清晰矩形、大面积按键和有秩序的配色，让手机重新回到容易识别与操作的状态。"
  },
  {
    id: "sit",
    type: "sit",
    verb: "坐下",
    product: products[3],
    note:
      "这把椅子的美感不来自夸张造型，而来自温润木材、连续曲线与身体自然安放的关系。"
  },
  {
    id: "light",
    type: "light",
    verb: "点亮",
    product: {
      ...products[4],
      keywords: ["柔光", "氛围", "隐藏技术", "空间调和", "温暖"]
    },
    note:
      "Pao 灯通过柔和光感与简洁轮廓弱化技术存在，让空间本身变得更柔和。"
  }
];

function PullGlyph({ completed, complete }) {
  return (
    <button
      className="pointer-events-auto absolute inset-0 cursor-pointer"
      onClick={complete}
      onPointerDown={complete}
      type="button"
    >
      <motion.span
        animate={{ opacity: completed ? 0.72 : 0.28 }}
        className="absolute left-1/2 top-16 h-24 w-24 -translate-x-1/2 rounded-full border border-line"
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      <motion.span
        animate={{ y: completed ? 16 : 0, backgroundColor: completed ? "#6F6A61" : "#77736A" }}
        className="absolute left-1/2 top-9 h-40 w-px bg-ash/60"
        transition={{ duration: 0.65, ease: "easeInOut" }}
      />
      <motion.span
        animate={{ y: completed ? 16 : 0 }}
        className="absolute left-1/2 top-[188px] h-3 w-3 -translate-x-1/2 rounded-full border border-ash/70 bg-rice"
        transition={{ duration: 0.65, ease: "easeInOut" }}
      />
    </button>
  );
}

function ApproachGlyph({ completed, complete }) {
  return (
    <button
      className="pointer-events-auto absolute inset-0 cursor-pointer"
      onClick={complete}
      onMouseEnter={complete}
      onMouseMove={complete}
      type="button"
    >
      {[0, 1, 2].map((index) => (
        <motion.span
          animate={{
            opacity: completed ? 0.26 - index * 0.05 : 0.12,
            scale: completed ? 1.18 + index * 0.32 : 0.88 + index * 0.1
          }}
          className="absolute left-1/2 top-20 h-28 w-28 -translate-x-1/2 rounded-full bg-bluegray/40 blur-xl"
          key={index}
          transition={{ duration: 1.05 + index * 0.14, ease: "easeInOut" }}
        />
      ))}
      <motion.span
        animate={{ opacity: completed ? 0.32 : 0, scale: completed ? 1.22 : 0.8 }}
        className="absolute left-1/2 top-20 h-32 w-32 -translate-x-1/2 rounded-full border border-bluegray/70"
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
    </button>
  );
}

function PressGlyph({ completed, complete }) {
  const [pressed, setPressed] = useState(null);

  return (
    <div className="absolute inset-0 flex items-start justify-center pt-12">
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <motion.button
            animate={{
              opacity: completed && pressed === index ? 1 : 0.58,
              backgroundColor: completed && pressed === index ? "#D8C7AD" : "#F8F7F2",
              borderColor: completed && pressed === index ? "#B7926A" : "#C9C4B8"
            }}
            className="pointer-events-auto h-9 w-9 cursor-pointer border"
            key={index}
            onClick={() => {
              setPressed(index);
              complete();
            }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}

function SitGlyph({ completed, complete }) {
  return (
    <button
      className="pointer-events-auto absolute inset-0 cursor-pointer"
      onClick={complete}
      onMouseEnter={complete}
      type="button"
    >
      <svg className="absolute left-1/2 top-10 h-40 w-56 -translate-x-1/2" viewBox="0 0 230 150">
        <motion.path
          animate={{
            opacity: completed ? 0.5 : 0.16,
            x: completed ? 0 : -14,
            y: completed ? 0 : 10
          }}
          d="M112 18 C88 24 80 50 88 70 C95 88 112 96 132 92 C160 88 170 60 154 36 C146 24 132 18 112 18 Z M66 120 C80 86 104 72 134 76 C164 80 186 96 198 124"
          fill="none"
          stroke="#77736A"
          strokeDasharray="5 8"
          strokeLinecap="round"
          strokeWidth="1.2"
          transition={{ duration: 0.85, ease: "easeInOut" }}
        />
        <motion.path
          animate={{ stroke: completed ? "#9F7C58" : "#B7926A" }}
          d="M20 88 C58 42 124 38 176 62 C192 70 208 62 218 46 M62 90 V136 M188 64 V136 M44 136 H204"
          fill="none"
          strokeLinecap="round"
          strokeWidth="2.6"
          transition={{ duration: 0.75, ease: "easeInOut" }}
        />
      </svg>
    </button>
  );
}

function LightGlyph({ completed, complete }) {
  return (
    <button
      className="pointer-events-auto absolute inset-0 cursor-pointer"
      onClick={complete}
      type="button"
    >
      <motion.span
        animate={{ opacity: completed ? 0.58 : 0.06, scale: completed ? 1.2 : 0.82 }}
        className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(233,216,184,0.7),rgba(233,216,184,0.18)_45%,transparent_72%)] blur-xl"
        transition={{ duration: 0.95, ease: "easeInOut" }}
      />
      <svg className="absolute left-1/2 top-10 h-36 w-36 -translate-x-1/2" viewBox="0 0 140 140">
        <motion.path
          animate={{ stroke: completed ? "#9F7C58" : "#77736A" }}
          d="M32 76 C42 38 98 38 108 76 Z"
          fill="none"
          strokeWidth="1.4"
          transition={{ duration: 0.75, ease: "easeInOut" }}
        />
        <path d="M70 76 V112 M52 112 H88" fill="none" stroke="#77736A" strokeLinecap="round" strokeWidth="1.2" />
      </svg>
    </button>
  );
}

function BehaviorCard({ item, active, completed, setActiveId, completeItem }) {
  const complete = () => {
    setActiveId(item.id);
    completeItem(item.id);
  };
  const Glyph = {
    pull: PullGlyph,
    approach: ApproachGlyph,
    press: PressGlyph,
    sit: SitGlyph,
    light: LightGlyph
  }[item.type];

  return (
    <motion.div
      animate={{ opacity: active ? 1 : 0.78, scale: active ? 1.01 : 1 }}
      className="relative min-h-72 overflow-hidden border border-line/40 bg-rice/25"
      onMouseEnter={() => setActiveId(item.id)}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    >
      <Glyph complete={complete} completed={completed} />
      <motion.div
        animate={{ opacity: active ? 1 : 0, y: active ? 0 : 8 }}
        className="pointer-events-none absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between"
        transition={{ duration: 0.55, ease: "easeInOut" }}
      >
        <span className="text-2xl font-light text-[#3A3935]">{item.verb}</span>
        <span className="max-w-[8rem] text-right text-xs leading-5 text-[#7A756D]">
          {completed ? "理念已显现" : "完成动作后显现"}
        </span>
      </motion.div>
    </motion.div>
  );
}

function InfoPanel({ item, completed }) {
  return (
    <aside className="min-h-[28rem] border border-line/45 bg-rice/40 p-8 backdrop-blur-sm">
      {!item || !completed ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="flex h-full items-center text-lg font-light leading-9 text-[#6F6A61]"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          选择一个动作，让理念慢慢显现。
        </motion.div>
      ) : (
        <motion.div
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          key={item.id}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#9A948A]">动作：{item.verb}</p>
          <h3 className="mt-5 text-4xl font-light text-[#3A3935]">{item.verb}</h3>
          <p className="mt-8 text-lg font-light text-[#6F6A61]">{item.product.name}</p>
          <p className="mt-2 text-2xl font-light text-[#3A3935]">{item.product.cnName}</p>
          <p className="mt-3 text-sm tracking-[0.18em] text-[#7A756D]">
            {item.product.brand} / {item.product.year}
          </p>
          <p className="mt-8 border-l border-line/70 pl-5 text-xl font-light leading-9 text-[#3A3935]">
            {item.product.shortLine}
          </p>
          <p className="mt-7 text-base font-light leading-8 text-[#6F6A61]">{item.note}</p>
          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3 text-sm text-[#5F5A52]">
            {item.product.keywords.map((word) => (
              <span className="border-b border-line/70 pb-1" key={word}>
                {word}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </aside>
  );
}

export default function BehaviorLab() {
  const [activeId, setActiveId] = useState(null);
  const [completed, setCompleted] = useState({});
  const activeItem = behaviorItems.find((item) => item.id === activeId);

  const completeItem = (id) => {
    setCompleted((current) => ({ ...current, [id]: true }));
  };

  return (
    <section className="relative flex min-h-screen items-center py-24 md:py-32" id="behavior-lab">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
          viewport={{ once: true, amount: 0.4 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.15, ease: "easeInOut" }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#9A948A]">Behavior Lab</p>
          <h2 className="text-4xl font-light leading-tight text-[#3A3935] md:text-6xl">无意识行为实验室</h2>
          <p className="mt-8 text-base font-light leading-8 text-[#6F6A61] md:text-lg">
            在产品出现之前，先让身体进入动作。拉、靠近、按、坐下、点亮，都是无需学习的日常经验。
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {behaviorItems.map((item) => (
              <BehaviorCard
                active={activeId === item.id}
                completeItem={completeItem}
                completed={completed[item.id] === true}
                item={item}
                key={item.id}
                setActiveId={setActiveId}
              />
            ))}
          </div>
          <InfoPanel item={activeItem} completed={activeItem ? completed[activeItem.id] === true : false} />
        </div>
      </div>
    </section>
  );
}
