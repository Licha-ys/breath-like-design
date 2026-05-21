import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const layers = [
  {
    title: "日本现代工业设计",
    keywords: "战后工业化 / 日常器物 / 生活美学 / 朴素实用",
    text: "日本现代设计在工业生产与日常生活之间寻找平衡，强调物品既要可被生产，也要保留人的使用温度。"
  },
  {
    title: "西方设计方法",
    keywords: "IDEO / 用户观察 / 行为研究 / 问题定义",
    text: "西方设计方法为深泽直人提供了观察用户、分析行为和定义问题的工具。"
  },
  {
    title: "生活方式品牌",
    keywords: "MUJI / ±0 / au KDDI / maruni / HAY",
    text: "这些品牌和产品语境让深泽直人的理念从个人思考转化为具体的生活产品。"
  }
];

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
              animate={{ opacity: active === index ? 1 : 0.62 }}
              className="group w-full border-y border-line/45 bg-rice/20 px-6 py-7 text-left transition-colors duration-700 hover:bg-rice/35"
              initial={{ opacity: 0, y: 20 }}
              key={layer.title}
              onFocus={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              transition={{ delay: index * 0.12, duration: 0.85, ease: "easeInOut" }}
              type="button"
              viewport={{ once: true }}
              whileInView={{ opacity: active === index ? 1 : 0.72, y: 0 }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-2xl font-light text-ink">{layer.title}</p>
                  <p className="mt-3 text-xs leading-6 tracking-[0.18em] text-ash/60">
                    {layer.keywords}
                  </p>
                </div>
                <span className="mt-2 h-px w-16 bg-line transition-colors duration-700 group-hover:bg-wood/70" />
              </div>
              <motion.p
                animate={{ opacity: active === index ? 1 : 0, y: active === index ? 0 : 8 }}
                className="mt-6 max-w-2xl text-sm font-light leading-7 text-ash"
                transition={{ duration: 0.55, ease: "easeInOut" }}
              >
                {layer.text}
              </motion.p>
            </motion.button>
          ))}
        </div>
      </div>
    </Section>
  );
}
