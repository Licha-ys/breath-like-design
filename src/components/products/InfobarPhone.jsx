import React, { useState } from "react";
import { motion } from "framer-motion";

const messages = [
  "熟悉的矩形，让操作在理解之前发生。",
  "差异不来自复杂，而来自普通之中的微小变化。",
  "按键不是装饰，而是身体已经认识的秩序。"
];

const keyColors = [
  "bg-rice",
  "bg-redbrown/55",
  "bg-line/55",
  "bg-rice",
  "bg-line/45",
  "bg-rice",
  "bg-redbrown/45",
  "bg-rice",
  "bg-line/55",
  "bg-rice",
  "bg-rice",
  "bg-line/45",
  "bg-rice",
  "bg-redbrown/50",
  "bg-rice"
];

export default function InfobarPhone({ active, setActive }) {
  const [message, setMessage] = useState(0);

  return (
    <div
      className="relative flex items-start gap-5"
      onMouseEnter={setActive}
    >
      <div className="relative h-64 w-24 rounded-[10px] border border-line/70 bg-gradient-to-b from-rice to-mist p-3 shadow-hush">
        <div className="h-12 rounded-[4px] border border-line/60 bg-bluegray/35" />
        <div className="mt-4 grid grid-cols-3 gap-1.5">
          {keyColors.map((color, index) => (
            <motion.button
              animate={{
                opacity: active && (index + message) % 4 === 0 ? 1 : 0.74,
                y: active && (index + message) % 5 === 0 ? -1 : 0
              }}
              className={`h-8 rounded-[3px] border border-line/45 ${color}`}
              key={index}
              onClick={() => {
                setActive();
                setMessage(index % messages.length);
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              type="button"
            />
          ))}
        </div>
      </div>
      <motion.p
        animate={{ opacity: active ? 1 : 0, x: active ? 0 : 10 }}
        className="mt-16 w-44 text-sm font-light leading-7 text-ash"
        transition={{ duration: 0.65, ease: "easeInOut" }}
      >
        {messages[message]}
      </motion.p>
    </div>
  );
}
