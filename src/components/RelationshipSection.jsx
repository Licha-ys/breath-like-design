import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const relations = [
  {
    action: "拉",
    product: "Wall mounted CD Player",
    layers: ["拉绳", "CD 播放器启动", "声音被打开", "声音像空气一样进入房间", "Without Thought"]
  },
  {
    action: "靠近",
    product: "Humidifier",
    layers: ["靠近", "雾气扩散", "空气变得可感知", "湿度调和身体感受", "Harmony"]
  },
  {
    action: "按",
    product: "INFOBAR",
    layers: ["按键", "手机回应操作", "熟悉的矩形和按键秩序", "普通物品中的清晰个性", "Super Normal"]
  },
  {
    action: "坐下",
    product: "Hiroshima Arm Chair",
    layers: ["坐下", "曲线承托身体", "身体自然安放", "木材、触感和尺度融合", "Outline"]
  },
  {
    action: "点亮",
    product: "Pao Glass Table Lamp",
    layers: ["点亮", "灯光扩散", "空间变柔和", "光调和环境氛围", "Eastern Harmony"]
  }
];

const layerLabels = ["身体动作", "产品回应", "使用经验", "空间关系", "设计理念"];

export default function RelationshipSection() {
  const [active, setActive] = useState(0);

  return (
    <Section id="relationship-section">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div
          className="mb-16 grid gap-8 md:grid-cols-[0.8fr_1.2fr]"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        >
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">
              Relationship Section
            </p>
            <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">
              关系剖面
            </h2>
          </div>
          <p className="max-w-3xl self-end text-base font-light leading-8 text-ash md:text-lg">
            在这里，产品不再被理解为孤立的物，而被拆解为一组关系：身体如何行动，产品如何回应，经验如何形成，空间如何被改变，理念如何从中显现。
          </p>
        </motion.div>

        <div className="relative border-y border-line/45 py-14">
          <svg className="pointer-events-none absolute left-0 top-[6.5rem] h-24 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              animate={{ opacity: [0.24, 0.55, 0.24] }}
              d="M28 62 C150 22 250 98 370 61 C495 24 614 96 738 60 C880 18 1010 40 1174 62"
              fill="none"
              stroke="#C9C4B8"
              strokeLinecap="round"
              strokeWidth="1"
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid gap-5 lg:grid-cols-5">
            {relations.map((item, index) => (
              <motion.button
                animate={{ opacity: active === index ? 1 : 0.5, y: 0 }}
                className="group relative min-h-[390px] cursor-pointer bg-rice/20 p-5 text-left transition-colors duration-700 hover:bg-rice/35"
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                key={item.action}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                transition={{ delay: index * 0.08, duration: 0.85, ease: "easeInOut" }}
                type="button"
                viewport={{ once: true, amount: 0.35 }}
                whileInView={{ opacity: active === index ? 1 : 0.62, y: 0, filter: "blur(0px)" }}
              >
                <span className="mb-8 block h-2.5 w-2.5 rounded-full border border-wood/60 bg-rice" />
                <p className="text-3xl font-light text-ink">{item.action}</p>
                <p className="mt-3 min-h-10 text-xs uppercase tracking-[0.18em] text-ash/60">
                  {item.product}
                </p>

                <div className="mt-9 space-y-5">
                  {item.layers.map((layer, layerIndex) => (
                    <div className="border-t border-line/45 pt-3" key={`${item.action}-${layer}`}>
                      <p className="text-[11px] tracking-[0.22em] text-ash/50">
                        {layerLabels[layerIndex]}
                      </p>
                      <p className={`mt-2 text-sm font-light leading-6 ${layerIndex === 4 ? "text-wood" : "text-ash"}`}>
                        {layer}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
