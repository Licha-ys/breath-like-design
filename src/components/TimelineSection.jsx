import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const timeline = [
  { year: "1999", title: "MUJI Wall mounted CD Player", note: "拉绳动作把声音变成接近日常换气扇的身体记忆。" },
  { year: "2003", title: "±0 Humidifier", note: "机器退后，空气、湿度和身体感受成为真正的界面。" },
  { year: "2003", title: "INFOBAR", note: "清晰矩形与按键秩序，让手机在普通中拥有可识别的个性。" },
  { year: "2006", title: "Super Normal", note: "设计退到生活背后，在长期使用中显现可靠与亲密。" },
  { year: "2008", title: "Hiroshima Arm Chair", note: "木材、曲线和身体尺度共同形成安放感。" },
  { year: "2020", title: "Pao Glass Table Lamp", note: "柔光不占据空间，而是让空间变得更温和。" }
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
              时间中的日常
            </h2>
          </div>
          <p className="max-w-2xl self-end text-base font-light leading-8 text-ash md:text-lg">
            这些作品像缓慢的呼吸一样分布在时间中。年份不是成果清单，而是日常行为一次次被重新看见的节点。
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
                <motion.p
                  animate={{ opacity: active === index ? 1 : 0, y: active === index ? 0 : 8 }}
                  className="mt-5 text-sm font-light leading-7 text-ink/75"
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                >
                  {item.note}
                </motion.p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
