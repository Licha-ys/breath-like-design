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
    keywords: "民艺 / 普通器物 / 无名之美",
    text: "柳宗悦提出民艺思想，强调普通器物中自然形成的美。这为深泽直人理解“日常物品并不需要强烈作者性”提供了思想前提。"
  },
  {
    id: "sori",
    position: { left: "18%", top: "45%" },
    name: "柳宗理",
    en: "Sori Yanagi",
    image: "research/people/sori-yanagi.jpg",
    avatarPosition: { x: "50%", y: "20%" },
    role: "日本现代工业设计代表人物",
    keywords: "工业设计 / 手感 / 功能 / 生活器物",
    text: "柳宗理将民艺精神转译到现代工业产品中，让工业制品保留人的使用温度。深泽直人延续了这种日常性，并进一步关注人在不思考时如何使用物。"
  },
  {
    id: "hara",
    position: { left: "18%", top: "82%" },
    name: "原研哉",
    en: "Kenya Hara",
    image: "research/people/kenya-hara.jpg",
    avatarPosition: { x: "50%", y: "22%" },
    role: "信息设计师，MUJI 设计思想代表人物之一",
    keywords: "空 / 白 / 信息 / 感性 / 这样就好",
    text: "原研哉代表了 MUJI 语境中的“空、白、感性与低刺激”设计观。它与深泽直人的设计共同指向一种不强调视觉炫耀、而强调使用感受的东方现代性。"
  },
  {
    id: "ideo",
    position: { left: "78%", top: "24%" },
    name: "IDEO",
    en: "DESIGN METHOD",
    image: "research/people/ideo-logo.svg",
    role: "西方用户观察与设计研究方法",
    keywords: "用户观察 / 行为研究 / 隐性需求 / 原型",
    text: "IDEO 为深泽直人提供了西方设计方法：观察用户、分析行为、识别隐性需求。深泽直人将这种方法转化为“Without Thought”，让设计从人的无意识动作中产生。",
    logo: true
  },
  {
    id: "morrison",
    position: { left: "78%", top: "68%" },
    name: "Jasper Morrison",
    en: "British Industrial Designer",
    image: "research/people/jasper-morrison.jpg",
    avatarPosition: { x: "50%", y: "20%" },
    role: "Super Normal 共同提出者",
    keywords: "Super Normal / ordinary objects / everyday use / no ego",
    text: "Jasper Morrison 与深泽直人共同提出 Super Normal，强调普通物品在长期使用中显现出的可靠、自然与亲密。这强化了深泽直人对“低存在感设计”的判断。"
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
  text: "深泽直人位于这些关系的交汇处：他用西方用户观察方法发现无意识行为，又用东方的克制、留白和日常器物观处理人、物与环境的关系。"
};

function Avatar({ active = false, person, variant = "node" }) {
  const [failed, setFailed] = useState(false);
  const size = variant === "center" ? 96 : variant === "detail" ? 72 : 104;
  const avatarStyle = {
    width: `${size}px`,
    height: `${size}px`,
    maxWidth: `${size}px`,
    maxHeight: `${size}px`,
    borderRadius: "999px",
    overflow: "hidden",
    position: "relative",
    flexShrink: 0,
    border: `1px solid ${active ? "rgba(183,146,106,0.6)" : "rgba(120,105,85,0.22)"}`,
    background: "rgba(244,239,228,0.5)"
  };

  if (person.logo) {
    return (
      <div
        className="genealogy-logo-node flex items-center justify-center"
        style={avatarStyle}
      >
        <span className="text-[26px] font-light tracking-[0.14em] text-ash/70">
          IDEO
        </span>
      </div>
    );
  }

  return (
    <div className="genealogy-avatar" style={avatarStyle}>
      {!failed ? (
        <img
          alt={`${person.en} portrait`}
          onError={() => setFailed(true)}
          src={asset(person.image)}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "cover",
            objectPosition: `${person.avatarPosition?.x || "50%"} ${person.avatarPosition?.y || "25%"}`
          }}
          className="opacity-[0.76] grayscale contrast-[1.08] brightness-[1.04] mix-blend-multiply transition-all duration-700 hover:opacity-90 hover:contrast-[1.12] hover:brightness-100"
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
      className="genealogy-detail mx-auto mt-10 w-[min(760px,72vw)] border border-[rgba(120,105,85,0.14)] bg-rice/60 px-7 py-5 backdrop-blur-[5px]"
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
            深泽直人的无意识设计并不是孤立产生的。它可以放在东方工业设计的延续中理解：从民艺对普通器物之美的关注，到柳宗理对工业产品中手感与功能的调和，再到深泽直人对无意识行为、身体记忆与人—物—环境关系的观察。
          </p>
          <p className="mt-5 text-base font-light leading-8 text-ash md:text-lg">
            这不是严格的师承关系，而是一条关于“日常器物、人的使用、朴素美学与环境调和”的思想关系。
          </p>
        </motion.div>

        <div className="genealogy-map relative mx-auto mt-20 hidden h-[620px] w-[min(1180px,86vw)] border-y border-line/45 md:block">
          <svg className="genealogy-lines absolute inset-0 z-[1] h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M27 18 C36 23 42 33 39 41" fill="none" stroke="rgba(120,105,85,0.14)" strokeWidth="0.25" />
            <path d="M28 50 C36 50 41 50 38 50" fill="none" stroke="rgba(120,105,85,0.14)" strokeWidth="0.25" />
            <path d="M27 82 C37 72 43 59 39 53" fill="none" stroke="rgba(120,105,85,0.14)" strokeWidth="0.25" />
            <path d="M69 26 C62 31 58 40 61 44" fill="none" stroke="rgba(120,105,85,0.14)" strokeWidth="0.25" />
            <path d="M69 68 C62 62 58 55 61 52" fill="none" stroke="rgba(120,105,85,0.14)" strokeWidth="0.25" />
          </svg>

          <button
            className="genealogy-center absolute left-1/2 top-1/2 z-[3] flex h-[260px] w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full border border-wood/45 bg-rice/65 px-8 text-center backdrop-blur-sm"
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
        </div>

        <DetailPanel person={activePerson} />
      </div>
    </Section>
  );
}
