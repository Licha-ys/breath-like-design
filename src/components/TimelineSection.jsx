import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const timeline = [
  {
    year: "1999",
    title: "MUJI Wall mounted CD Player",
    stage: "无意识行为的发现",
    note: "拉绳这一日常动作被转译为声音开启的方式，产品从机器变成空间中的空气感。"
  },
  {
    year: "2003",
    title: "±0 Humidifier",
    stage: "环境感知",
    note: "产品不再强调技术存在，而是让空气、湿度和身体感受发生变化。"
  },
  {
    year: "2003",
    title: "INFOBAR",
    stage: "秩序与识别",
    note: "通过清晰矩形、大面积按键和色彩秩序，让手机重新变得容易理解。"
  },
  {
    year: "2006",
    title: "Super Normal",
    stage: "普通中的超常",
    note: "深泽直人与 Jasper Morrison 共同提出 Super Normal，强调普通物品在长期使用中显现可靠、自然和亲密。"
  },
  {
    year: "2008",
    title: "Hiroshima Arm Chair",
    stage: "身体与轮廓",
    note: "木材、曲线与身体尺度共同形成自然安放的关系。"
  },
  {
    year: "2020",
    title: "Pao Glass Table Lamp",
    stage: "空间调和",
    note: "柔和光线让物退到空间背后，空间本身成为体验主体。"
  }
];

export default function TimelineSection() {
  const [active, setActive] = useState(0);

  return (
    <Section id="timeline">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="mb-16 grid gap-8 md:grid-cols-[0.85fr_1.15fr]"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        >
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">Timeline</p>
            <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">
              理念与产品发展
            </h2>
          </div>
          <p className="max-w-2xl self-end text-base font-light leading-8 text-ash md:text-lg">
            年份不是成果清单，而是日常行为一次次被重新看见的节点。
          </p>
        </motion.div>

        <div className="relative overflow-hidden border-y border-line/45 py-16">
          <svg className="pointer-events-none absolute left-0 top-1/2 h-32 w-full -translate-y-1/2" viewBox="0 0 1200 160" preserveAspectRatio="none">
            <motion.path
              animate={{ opacity: [0.24, 0.52, 0.24] }}
              d="M20 86 C155 30 250 126 382 82 C514 38 630 120 760 80 C900 36 1020 58 1180 84"
              fill="none"
              stroke="#C9C4B8"
              strokeLinecap="round"
              strokeWidth="1"
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          <div className="relative grid gap-8 md:grid-cols-6">
            {timeline.map((item, index) => (
              <motion.button
                animate={{ opacity: active === index ? 1 : 0.58 }}
                className="group cursor-pointer text-left"
                key={`${item.year}-${item.title}`}
                onFocus={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                type="button"
              >
                <span className="block h-3 w-3 rounded-full border border-wood/60 bg-rice transition-colors duration-500 group-hover:bg-warm" />
                <p className="mt-7 text-2xl font-light text-ink">{item.year}</p>
                <p className="mt-3 min-h-14 text-sm leading-6 text-ash">{item.title}</p>
                <motion.div
                  animate={{ opacity: active === index ? 1 : 0, y: active === index ? 0 : 8 }}
                  className="mt-5"
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                >
                  <p className="text-sm font-light text-wood">{item.stage}</p>
                  <p className="mt-3 text-sm font-light leading-7 text-ink/75">{item.note}</p>
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
