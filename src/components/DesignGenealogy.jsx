import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const BASE = import.meta.env.BASE_URL;
const asset = (path) => `${BASE}${path.replace(/^\/+/, "")}`;

const people = [
  {
    id: "soetsu",
    position: { left: "18%", top: "18%" },
    name: "柳宗悦",
    en: "Soetsu Yanagi",
    image: "research/people/soetsu-yanagi.jpg",
    avatarPosition: { x: "50%", y: "24%" },
    role: "民艺思想提出者",
    keywords: "民艺 / 普通器物 / 日常之美 / 无名之美",
    text: "柳宗悦强调普通民间器物中的自然美，关注不被个人作者意识过度装饰的日常之物。"
  },
  {
    id: "sori",
    position: { left: "18%", top: "45%" },
    name: "柳宗理",
    en: "Sori Yanagi",
    image: "research/people/sori-yanagi.jpg",
    avatarPosition: { x: "50%", y: "20%" },
    role: "日本现代工业设计代表人物",
    keywords: "工业设计 / 手感 / 功能 / 朴素 / 生活器物",
    text: "柳宗理将民艺精神与现代工业生产结合，让工业产品保留人的触感、功能和日常温度。"
  },
  {
    id: "hara",
    position: { left: "18%", top: "72%" },
    name: "原研哉",
    en: "Kenya Hara",
    image: "research/people/kenya-hara.jpg",
    avatarPosition: { x: "50%", y: "22%" },
    role: "信息设计师，MUJI 设计思想代表人物之一",
    keywords: "空 / 白 / 信息 / 感性 / 这样就好",
    text: "原研哉强调空、白和感知经验，使信息和品牌不依赖强烈视觉刺激，而是通过留白唤起感受。"
  },
  {
    id: "ideo",
    position: { left: "78%", top: "24%" },
    name: "IDEO",
    en: "DESIGN METHOD",
    image: "research/people/ideo-logo.svg",
    role: "西方用户观察与设计研究方法",
    keywords: "用户观察 / 行为研究 / 隐性需求 / 原型",
    text: "IDEO 的设计环境影响了深泽直人对行为、隐性需求和问题定义的分析方式。",
    logo: true
  },
  {
    id: "morrison",
    position: { left: "78%", top: "58%" },
    name: "Jasper Morrison",
    en: "British Industrial Designer",
    image: "research/people/jasper-morrison.jpg",
    avatarPosition: { x: "50%", y: "20%" },
    role: "Super Normal 共同提出者",
    keywords: "Super Normal / ordinary objects / everyday use / no ego",
    text: "Jasper Morrison 与深泽直人共同提出 Super Normal，强调普通物品在长期使用中的价值，而不是设计师自我风格的炫耀。"
  }
];

const centerPerson = {
  id: "fukasawa",
  name: "深泽直人",
  en: "Naoto Fukasawa",
  image: "research/people/naoto-fukasawa.jpg",
  avatarPosition: { x: "50%", y: "22%" },
  role: "中心关系",
  keywords: "Without Thought / 身体记忆 / 人—物—环境",
  text: "深泽直人进一步将日常器物中的自然性转化为对无意识行为的观察，让产品在使用中自然显现价值。"
};

function Avatar({ active = false, person, variant = "node" }) {
  const [failed, setFailed] = useState(false);
  const sizeClass = variant === "center" ? "h-24 w-24" : variant === "detail" ? "h-[72px] w-[72px]" : "h-[104px] w-[104px]";

  if (person.logo) {
    return (
      <div className={`${sizeClass} flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-[rgba(120,105,85,0.22)] bg-[rgba(244,239,228,0.5)]`}>
        <img
          alt="IDEO logo"
          className="h-full w-full object-contain p-4 opacity-[0.72] grayscale contrast-[1.05] brightness-[1.04] mix-blend-multiply transition-all duration-700 hover:opacity-90"
          src={asset(person.image)}
        />
      </div>
    );
  }

  return (
    <div className={`${sizeClass} shrink-0 overflow-hidden rounded-full border ${active ? "border-wood/60" : "border-[rgba(120,105,85,0.22)]"} bg-[rgba(244,239,228,0.5)]`}>
      {!failed ? (
        <img
          alt={`${person.en} portrait`}
          className="h-full w-full object-cover opacity-[0.76] grayscale contrast-[1.08] brightness-[1.04] mix-blend-multiply transition-all duration-700 hover:opacity-90 hover:contrast-[1.12] hover:brightness-100"
          onError={() => setFailed(true)}
          src={asset(person.image)}
          style={{
            objectPosition: `${person.avatarPosition?.x || "50%"} ${person.avatarPosition?.y || "25%"}`
          }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm uppercase tracking-[0.18em] text-ash/65">
          {person.id === "fukasawa" ? "NF" : person.en.slice(0, 2)}
        </div>
      )}
    </div>
  );
}

function DetailPanel({ person }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="genealogy-detail z-[4] border border-[rgba(120,105,85,0.14)] bg-rice/65 px-6 py-5 backdrop-blur-[5px] md:absolute md:bottom-[4%] md:right-[4%] md:w-[420px]"
      initial={{ opacity: 0, y: 10 }}
      key={person.id}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-ash/55">{person.role}</p>
      <p className="mt-3 text-sm leading-7 text-ash">{person.text}</p>
      <p className="mt-4 text-xs leading-6 tracking-[0.16em] text-ash/55">{person.keywords}</p>
    </motion.div>
  );
}

export default function DesignGenealogy() {
  const [active, setActive] = useState("fukasawa");
  const activePerson = people.find((person) => person.id === active) || centerPerson;

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

        <div className="genealogy-map relative mx-auto hidden h-[720px] w-[min(1180px,86vw)] border-y border-line/45 md:block">
          <svg className="genealogy-lines absolute inset-0 z-[1] h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M27 18 C36 24 42 33 39 41" fill="none" stroke="rgba(120,105,85,0.18)" strokeWidth="0.28" />
            <path d="M29 45 C36 45 41 45 38 48" fill="none" stroke="rgba(120,105,85,0.18)" strokeWidth="0.28" />
            <path d="M27 72 C37 65 43 56 39 52" fill="none" stroke="rgba(120,105,85,0.18)" strokeWidth="0.28" />
            <path d="M69 24 C62 29 58 37 61 42" fill="none" stroke="rgba(120,105,85,0.18)" strokeWidth="0.28" />
            <path d="M69 58 C62 55 58 51 61 48" fill="none" stroke="rgba(120,105,85,0.18)" strokeWidth="0.28" />
          </svg>

          <button
            className="genealogy-center absolute left-1/2 top-[48%] z-[3] flex h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full border border-wood/45 bg-rice/65 px-8 text-center backdrop-blur-sm"
            onFocus={() => setActive("fukasawa")}
            onMouseEnter={() => setActive("fukasawa")}
            type="button"
          >
            <Avatar active={active === "fukasawa"} person={centerPerson} variant="center" />
            <p className="mt-2 text-3xl font-light text-ink">深泽直人</p>
            <p className="text-xs uppercase tracking-[0.18em] text-ash/50">Naoto Fukasawa</p>
            <p className="mt-2 text-sm leading-6 text-ash/75">Without Thought / 身体记忆 / 人—物—环境</p>
          </button>

          {people.map((person) => {
            const isActive = active === person.id;
            const isDimmed = active !== "fukasawa" && !isActive;
            return (
              <motion.button
                animate={{ opacity: isActive ? 1 : isDimmed ? 0.32 : 0.72 }}
                className="genealogy-node absolute z-[3] w-[220px] -translate-x-1/2 -translate-y-1/2 text-center"
                key={person.id}
                onFocus={() => setActive(person.id)}
                onMouseEnter={() => setActive(person.id)}
                style={person.position}
                type="button"
              >
                <div className="genealogy-node-content flex flex-col items-center gap-2">
                  <Avatar active={isActive} person={person} />
                  <p className="node-name whitespace-nowrap text-2xl font-light text-ink/80">{person.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-ash/45">{person.en}</p>
                  <p className="node-keywords mx-auto max-w-[220px] text-sm leading-[1.8] text-ash/60">{person.keywords}</p>
                </div>
              </motion.button>
            );
          })}

          <DetailPanel person={activePerson} />
        </div>

        <div className="space-y-8 md:hidden">
          {[centerPerson, ...people].map((person) => (
            <button
              className="w-full border-y border-line/45 bg-rice/30 px-5 py-6 text-left"
              key={person.id}
              onClick={() => setActive(person.id)}
              type="button"
            >
              <div className="flex items-center gap-5">
                <Avatar active={active === person.id} person={person} />
                <div>
                  <p className="text-2xl font-light text-ink">{person.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ash/50">{person.en}</p>
                  <p className="mt-3 text-sm leading-7 text-ash/70">{person.keywords}</p>
                </div>
              </div>
            </button>
          ))}
          <DetailPanel person={activePerson} />
        </div>
      </div>
    </Section>
  );
}
