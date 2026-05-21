import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const people = [
  {
    id: "soetsu",
    side: "left-[5%] top-[10%]",
    name: "柳宗悦",
    en: "Soetsu Yanagi",
    role: "民艺思想提出者",
    keywords: "民艺 / 普通器物 / 日常之美 / 无名之美",
    text: "柳宗悦强调普通民间器物中的自然美，关注不被个人作者意识过度装饰的日常之物。"
  },
  {
    id: "sori",
    side: "left-[12%] top-[43%]",
    name: "柳宗理",
    en: "Sori Yanagi",
    role: "日本现代工业设计代表人物",
    keywords: "工业设计 / 手感 / 功能 / 朴素 / 生活器物",
    text: "柳宗理将民艺精神与现代工业生产结合，让工业产品保留人的触感、功能和日常温度。"
  },
  {
    id: "hara",
    side: "left-[4%] bottom-[8%]",
    name: "原研哉",
    en: "Kenya Hara",
    role: "信息设计师，MUJI 设计思想代表人物之一",
    keywords: "空 / 白 / 信息 / 感性 / 这样就好",
    text: "原研哉强调空、白和感知经验，使信息和品牌不依赖强烈视觉刺激，而是通过留白唤起感受。"
  },
  {
    id: "ideo",
    side: "right-[7%] top-[18%]",
    name: "IDEO",
    en: "Design Method",
    role: "西方用户观察与设计研究方法",
    keywords: "用户观察 / 行为研究 / 隐性需求 / 原型",
    text: "IDEO 的设计环境影响了深泽直人对行为、隐性需求和问题定义的分析方式。"
  },
  {
    id: "morrison",
    side: "right-[5%] bottom-[16%]",
    name: "Jasper Morrison",
    en: "British Industrial Designer",
    role: "Super Normal 共同提出者",
    keywords: "Super Normal / ordinary objects / everyday use / no ego",
    text: "Jasper Morrison 与深泽直人共同提出 Super Normal，强调普通物品在长期使用中的价值，而不是设计师自我风格的炫耀。"
  }
];

export default function DesignGenealogy() {
  const [active, setActive] = useState("fukasawa");
  const activePerson = people.find((person) => person.id === active);

  return (
    <Section id="design-genealogy">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">Design Genealogy</p>
          <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">
            东方工业设计的关系谱系
          </h2>
          <p className="mt-8 text-base font-light leading-8 text-ash md:text-lg">
            深泽直人的无意识设计可以放在东方工业设计的延续中理解。这不是严格的师承关系，而是一条关于“日常器物、人的使用、朴素美学与环境调和”的思想谱系。
          </p>
        </motion.div>

        <div className="relative min-h-[620px] border-y border-line/45">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 620" preserveAspectRatio="none">
            <path d="M240 118 C360 180 430 226 548 302" fill="none" stroke="#C9C4B8" strokeWidth="0.8" />
            <path d="M300 314 C405 300 460 300 548 302" fill="none" stroke="#C9C4B8" strokeWidth="0.8" />
            <path d="M250 518 C365 430 452 362 548 302" fill="none" stroke="#C9C4B8" strokeWidth="0.8" />
            <path d="M846 160 C730 220 650 260 552 302" fill="none" stroke="#C9C4B8" strokeWidth="0.8" />
            <path d="M848 470 C730 410 650 350 552 302" fill="none" stroke="#C9C4B8" strokeWidth="0.8" />
          </svg>

          <button
            className="absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-wood/45 bg-rice/60 px-8 py-10 text-center backdrop-blur-sm"
            onFocus={() => setActive("fukasawa")}
            onMouseEnter={() => setActive("fukasawa")}
            type="button"
          >
            <p className="text-3xl font-light text-ink">深泽直人</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ash/60">Naoto Fukasawa</p>
            <p className="mt-5 text-sm leading-7 text-ash">Without Thought / 身体记忆 / 人—物—环境</p>
          </button>

          {people.map((person) => (
            <button
              className={`absolute max-w-[230px] text-left ${person.side}`}
              key={person.id}
              onFocus={() => setActive(person.id)}
              onMouseEnter={() => setActive(person.id)}
              type="button"
            >
              <motion.span animate={{ opacity: active === person.id ? 1 : 0.45 }} className="mb-4 block h-2.5 w-2.5 rounded-full border border-wood/60 bg-rice" />
              <motion.p animate={{ opacity: active === person.id ? 1 : 0.62 }} className="text-2xl font-light text-ink">
                {person.name}
              </motion.p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ash/55">{person.en}</p>
              <p className="mt-4 text-sm leading-7 text-ash">{person.keywords}</p>
            </button>
          ))}

          <motion.div
            className="absolute bottom-8 left-1/2 w-[min(90%,620px)] -translate-x-1/2 border border-line/45 bg-rice/70 p-6 backdrop-blur-sm"
            key={active}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          >
            {activePerson ? (
              <>
                <p className="text-xs uppercase tracking-[0.2em] text-ash/55">{activePerson.role}</p>
                <p className="mt-3 text-sm leading-7 text-ash">{activePerson.text}</p>
              </>
            ) : (
              <>
                <p className="text-xs uppercase tracking-[0.2em] text-ash/55">中心关系</p>
                <p className="mt-3 text-sm leading-7 text-ash">
                  深泽直人进一步将日常器物中的自然性转化为对无意识行为的观察，让产品在使用中自然显现价值。
                </p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
