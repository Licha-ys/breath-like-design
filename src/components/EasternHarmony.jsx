import React from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const keywords = [
  ["留白", "让信息获得呼吸的距离"],
  ["间", "人与物之间恰到好处的停顿"],
  ["侘寂", "接受朴素、时间感与不完美"],
  ["民艺", "普通器物中的日常温度"],
  ["谦逊", "物不抢夺人的注意"],
  ["自然", "不刻意、不突兀地进入生活"],
  ["调和", "人、行为、物、环境彼此适应"]
];

export default function EasternHarmony() {
  return (
    <Section id="eastern-harmony">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">
            Eastern Harmony
          </p>
          <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">
            东方的调和
          </h2>
          <p className="mt-10 max-w-2xl text-base font-light leading-9 text-ash md:text-lg">
            深泽直人的设计并不借用表面的东方符号，而是让物退到生活背后。
          </p>
          <p className="mt-6 max-w-2xl text-base font-light leading-9 text-ash md:text-lg">
            东方禅意在这里不是装饰风格，而是一种关系状态：人不被物打扰，物不从环境中跳出，空间也不被信息填满。
          </p>
          <p className="mt-6 max-w-2xl text-base font-light leading-9 text-ash md:text-lg">
            当设计足够克制，它就不再需要被看见，而是像呼吸一样，让人、物与环境自然调和。
          </p>
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            {keywords.map(([word, text]) => (
              <div className="border-t border-line/55 pt-3" key={word}>
                <p className="text-sm text-ink/80">{word}</p>
                <p className="mt-2 text-xs leading-6 text-ash">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[520px]"
          initial={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.45 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="breathing-glow absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-warm/20 blur-3xl" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 520">
            <motion.path
              d="M150 130 C120 230 145 360 250 410 C345 455 488 392 506 270 C524 150 400 76 285 88 C230 94 178 106 150 130Z"
              fill="none"
              stroke="#DDE4E2"
              strokeWidth="1"
              initial={{ opacity: 0.15, x: -34, y: 20 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              whileInView={{ opacity: 0.58, x: 0, y: 0 }}
            />
            <motion.path
              d="M225 225 C264 174 345 174 386 225 C424 272 405 352 340 374 C284 392 222 355 214 292 C210 264 212 244 225 225Z"
              fill="none"
              stroke="#B7926A"
              strokeWidth="1.2"
              initial={{ opacity: 0.15, x: 32, y: -16 }}
              transition={{ duration: 1.35, delay: 0.08, ease: "easeInOut" }}
              viewport={{ once: true }}
              whileInView={{ opacity: 0.62, x: 0, y: 0 }}
            />
            <motion.path
              d="M306 144 C284 168 282 202 300 228 C318 254 318 292 290 316 C266 337 245 364 250 401"
              fill="none"
              stroke="#9D6B5C"
              strokeDasharray="5 9"
              strokeLinecap="round"
              strokeWidth="1"
              initial={{ opacity: 0.1, x: -22, y: -28 }}
              transition={{ duration: 1.4, delay: 0.16, ease: "easeInOut" }}
              viewport={{ once: true }}
              whileInView={{ opacity: 0.58, x: 0, y: 0 }}
            />
            <motion.circle
              cx="310"
              cy="260"
              fill="none"
              r="156"
              stroke="#C9C4B8"
              strokeWidth="0.8"
              initial={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 1.45, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              whileInView={{ opacity: 0.38, scale: 1 }}
            />
          </svg>
          <div className="absolute bottom-8 left-8 text-xs leading-6 tracking-[0.22em] text-ash/55">
            人 / 行为 / 物 / 环境
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
