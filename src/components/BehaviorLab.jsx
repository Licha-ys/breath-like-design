import React, { useState } from "react";
import { motion } from "framer-motion";

const behaviorItems = [
  { id: "pull", type: "pull", verb: "拉", hint: "点击拉动" },
  { id: "approach", type: "approach", verb: "靠近", hint: "靠近雾气" },
  { id: "press", type: "press", verb: "按", hint: "点击按键" },
  { id: "sit", type: "sit", verb: "坐下", hint: "让身体靠近" },
  { id: "light", type: "light", verb: "点亮", hint: "点击点亮" }
];

function PullGlyph({ completed, complete }) {
  return (
    <button
      className="absolute inset-0 cursor-pointer"
      onClick={complete}
      onPointerDown={complete}
      type="button"
    >
      <motion.span
        animate={{ opacity: completed ? 0.7 : 0.24 }}
        className="absolute left-1/2 top-10 h-24 w-24 -translate-x-1/2 rounded-full border border-line"
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      <motion.span
        animate={{ y: completed ? 18 : 0, backgroundColor: completed ? "#6F6A61" : "#9A948A" }}
        className="absolute left-1/2 top-7 h-36 w-px bg-ash/55"
        transition={{ duration: 0.65, ease: "easeInOut" }}
      />
      <motion.span
        animate={{ y: completed ? 18 : 0 }}
        className="absolute left-1/2 top-[164px] h-3 w-3 -translate-x-1/2 rounded-full border border-ash/70 bg-rice"
        transition={{ duration: 0.65, ease: "easeInOut" }}
      />
    </button>
  );
}

function ApproachGlyph({ completed, complete }) {
  return (
    <button
      className="absolute inset-0 cursor-pointer"
      onClick={complete}
      onMouseEnter={complete}
      onMouseMove={complete}
      type="button"
    >
      {[0, 1, 2].map((index) => (
        <motion.span
          animate={{
            opacity: completed ? 0.28 - index * 0.05 : 0.13,
            scale: completed ? 1.22 + index * 0.34 : 0.88 + index * 0.08
          }}
          className="absolute left-1/2 top-14 h-28 w-28 -translate-x-1/2 rounded-full bg-bluegray/40 blur-xl"
          key={index}
          transition={{ duration: 1 + index * 0.15, ease: "easeInOut" }}
        />
      ))}
      <motion.span
        animate={{ opacity: completed ? 0.34 : 0, scale: completed ? 1.28 : 0.82 }}
        className="absolute left-1/2 top-14 h-32 w-32 -translate-x-1/2 rounded-full border border-bluegray/70"
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
    </button>
  );
}

function PressGlyph({ completed, complete }) {
  const [pressed, setPressed] = useState(null);

  return (
    <div className="absolute inset-0 flex items-start justify-center pt-14">
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <motion.button
            animate={{
              opacity: completed && pressed === index ? 1 : 0.58,
              backgroundColor: completed && pressed === index ? "#D8C7AD" : "#F8F7F2",
              borderColor: completed && pressed === index ? "#B7926A" : "#C9C4B8"
            }}
            className="h-9 w-9 cursor-pointer border"
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
      className="absolute inset-0 cursor-pointer"
      onClick={complete}
      onMouseEnter={complete}
      type="button"
    >
      <svg className="absolute left-1/2 top-10 h-40 w-52 -translate-x-1/2" viewBox="0 0 230 150">
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
          strokeWidth="2.4"
          transition={{ duration: 0.75, ease: "easeInOut" }}
        />
      </svg>
    </button>
  );
}

function LightGlyph({ completed, complete }) {
  return (
    <button className="absolute inset-0 cursor-pointer" onClick={complete} type="button">
      <motion.span
        animate={{ opacity: completed ? 0.56 : 0, scale: completed ? 1.18 : 0.82 }}
        className="absolute left-1/2 top-9 h-40 w-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(233,216,184,0.68),rgba(233,216,184,0.16)_45%,transparent_72%)] blur-xl"
        transition={{ duration: 0.95, ease: "easeInOut" }}
      />
      <svg className="absolute left-1/2 top-11 h-36 w-36 -translate-x-1/2" viewBox="0 0 140 140">
        <motion.path
          animate={{
            fill: completed ? "rgba(233,216,184,0.25)" : "rgba(233,216,184,0)",
            stroke: completed ? "#9F7C58" : "#77736A"
          }}
          d="M32 76 C42 38 98 38 108 76 Z"
          strokeWidth="1.4"
          transition={{ duration: 0.75, ease: "easeInOut" }}
        />
        <path d="M70 76 V112 M52 112 H88" fill="none" stroke="#77736A" strokeLinecap="round" strokeWidth="1.2" />
      </svg>
    </button>
  );
}

function BehaviorCard({ item, completed, completeItem }) {
  const complete = () => completeItem(item.id);
  const Glyph = {
    pull: PullGlyph,
    approach: ApproachGlyph,
    press: PressGlyph,
    sit: SitGlyph,
    light: LightGlyph
  }[item.type];

  return (
    <motion.div
      animate={{ opacity: completed ? 1 : 0.78 }}
      className="relative min-h-72 overflow-hidden border border-line/35 bg-rice/20 transition-colors duration-700 hover:bg-rice/35"
      transition={{ duration: 0.55, ease: "easeInOut" }}
    >
      <Glyph complete={complete} completed={completed} />
      <div className="pointer-events-none absolute bottom-6 left-5 right-5 z-10">
        <p className="text-2xl font-light text-[#3A3935]">{item.verb}</p>
        <motion.p
          animate={{ opacity: completed ? 1 : 0.72 }}
          className="mt-3 text-xs leading-5 tracking-[0.16em] text-[#7A756D]"
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          {completed ? "动作已发生" : item.hint}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function BehaviorLab() {
  const [completed, setCompleted] = useState({});

  const completeItem = (id) => {
    setCompleted((current) => ({ ...current, [id]: true }));
  };

  return (
    <section className="relative flex min-h-screen items-center py-24 md:py-32" id="behavior-lab">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
          transition={{ duration: 1.15, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.4 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#9A948A]">Behavior Lab</p>
          <h2 className="text-4xl font-light leading-tight text-[#3A3935] md:text-6xl">无意识行为实验室</h2>
          <p className="mt-8 text-base font-light leading-8 text-[#6F6A61] md:text-lg">
            在产品出现之前，先让身体进入动作。拉、靠近、按、坐下、点亮，都是无需学习的日常经验。
          </p>
          <p className="mt-5 text-base font-light leading-8 text-[#6F6A61] md:text-lg">
            这些动作来自日常中的隐性经验。身体先于意识，行为先于解释。
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-5">
          {behaviorItems.map((item) => (
            <BehaviorCard
              completeItem={completeItem}
              completed={completed[item.id] === true}
              item={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
