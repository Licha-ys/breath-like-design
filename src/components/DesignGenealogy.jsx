import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";

const BASE = import.meta.env.BASE_URL;
const asset = (path) => `${BASE}${path.replace(/^\/+/, "")}`;

const people = [
  {
    id: "soetsu",
    side: "left-[18%] top-[22%]",
    name: "柳宗悦",
    en: "Soetsu Yanagi",
    image: "research/people/soetsu-yanagi.jpg",
    avatarPosition: { x: "50%", y: "28%" },
    role: "民艺思想提出者",
    keywords: "民艺 / 普通器物 / 日常之美 / 无名之美",
    text: "柳宗悦强调普通民间器物中的自然美，关注不被个人作者意识过度装饰的日常之物。"
  },
  {
    id: "sori",
    side: "left-[22%] top-[48%]",
    name: "柳宗理",
    en: "Sori Yanagi",
    image: "research/people/sori-yanagi.jpg",
    avatarPosition: { x: "50%", y: "22%" },
    role: "日本现代工业设计代表人物",
    keywords: "工业设计 / 手感 / 功能 / 朴素 / 生活器物",
    text: "柳宗理将民艺精神与现代工业生产结合，让工业产品保留人的触感、功能和日常温度。"
  },
  {
    id: "hara",
    side: "left-[18%] top-[74%]",
    name: "原研哉",
    en: "Kenya Hara",
    image: "research/people/kenya-hara.jpg",
    avatarPosition: { x: "50%", y: "24%" },
    role: "信息设计师，MUJI 设计思想代表人物之一",
    keywords: "空 / 白 / 信息 / 感性 / 这样就好",
    text: "原研哉强调空、白和感知经验，使信息和品牌不依赖强烈视觉刺激，而是通过留白唤起感受。"
  },
  {
    id: "ideo",
    side: "right-[7%] top-[27%]",
    name: "IDEO",
    en: "DESIGN METHOD",
    image: "research/people/ideo-logo.svg",
    avatarPosition: { x: "50%", y: "50%" },
    role: "西方用户观察与设计研究方法",
    keywords: "用户观察 / 行为研究 / 隐性需求 / 原型",
    text: "IDEO 的设计环境影响了深泽直人对行为、隐性需求和问题定义的分析方式。"
  },
  {
    id: "morrison",
    side: "right-[7%] top-[62%]",
    name: "Jasper Morrison",
    en: "British Industrial Designer",
    image: "research/people/jasper-morrison.jpg",
    avatarPosition: { x: "50%", y: "22%" },
    role: "Super Normal 共同提出者",
    keywords: "Super Normal / ordinary objects / everyday use / no ego",
    text: "Jasper Morrison 与深泽直人共同提出 Super Normal，强调普通物品在长期使用中的价值，而不是设计师自我风格的炫耀。"
  }
];

const centerPerson = {
  image: "research/people/naoto-fukasawa.jpg",
  avatarPosition: { x: "50%", y: "24%" }
};

function Portrait({ active = false, label = "", src = "", variant = "node", avatarPosition }) {
  const [failed, setFailed] = useState(false);
  const imageSrc = src ? asset(src) : "";
  const sizeClass =
    variant === "center" ? "h-[156px] w-[156px]" : variant === "panel" ? "h-[72px] w-[72px]" : "h-32 w-32";
  const labelClass = variant === "panel" ? "text-[9px]" : "text-[10px]";

  return (
    <div className={`relative ${sizeClass} overflow-hidden rounded-full border ${active ? "border-wood/70" : "border-[rgba(120,105,85,0.22)]"} bg-[rgba(244,239,228,0.5)]`}>
      {imageSrc && !failed ? (
        <img
          alt=""
          className="h-full w-full object-cover opacity-[0.72] grayscale contrast-[1.05] brightness-[1.05] mix-blend-multiply transition-all duration-700 hover:opacity-90 hover:contrast-[1.12] hover:brightness-100"
          onError={() => setFailed(true)}
          src={imageSrc}
          style={{
            objectPosition: `${avatarPosition?.x || "50%"} ${avatarPosition?.y || "28%"}`
          }}
        />
      ) : (
        <svg className="h-full w-full opacity-[0.72] grayscale" viewBox="0 0 80 80">
          <circle cx="40" cy="28" r="13" fill="#C9C4B8" opacity="0.9" />
          <path d="M18 72 C22 50 58 50 62 72" fill="#B7926A" opacity="0.38" />
          <path d="M24 22 C30 10 52 10 58 24" fill="none" stroke="#77736A" strokeWidth="1" opacity="0.45" />
        </svg>
      )}
      <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 ${labelClass} uppercase tracking-[0.12em] text-ash/75`}>
        {label}
      </span>
    </div>
  );
}

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

        <div className="relative min-h-[840px] border-y border-line/45">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 760" preserveAspectRatio="none">
            <path d="M276 172 C392 208 456 262 532 346" fill="none" stroke="#C9C4B8" strokeWidth="0.65" opacity="0.58" />
            <path d="M310 364 C420 372 474 360 532 346" fill="none" stroke="#C9C4B8" strokeWidth="0.65" opacity="0.58" />
            <path d="M282 562 C404 500 476 414 532 346" fill="none" stroke="#C9C4B8" strokeWidth="0.65" opacity="0.58" />
            <path d="M826 210 C728 258 646 306 574 346" fill="none" stroke="#C9C4B8" strokeWidth="0.65" opacity="0.58" />
            <path d="M826 474 C730 430 646 384 574 346" fill="none" stroke="#C9C4B8" strokeWidth="0.65" opacity="0.58" />
          </svg>

          <button
            className="absolute left-1/2 top-[52%] w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-wood/45 bg-rice/65 px-8 py-8 text-center backdrop-blur-sm"
            onFocus={() => setActive("fukasawa")}
            onMouseEnter={() => setActive("fukasawa")}
            type="button"
          >
            <div className="mx-auto mb-4 flex justify-center">
              <Portrait active avatarPosition={centerPerson.avatarPosition} label="NF" src={centerPerson.image} variant="center" />
            </div>
            <p className="text-3xl font-light text-ink">深泽直人</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ash/60">Naoto Fukasawa</p>
            <p className="mt-5 text-sm leading-7 text-ash">Without Thought / 身体记忆 / 人—物—环境</p>
          </button>

          {people.map((person) => (
            <button
              className={`genealogy-node absolute max-w-[285px] -translate-x-1/2 -translate-y-1/2 text-left ${person.side}`}
              key={person.id}
              onFocus={() => setActive(person.id)}
              onMouseEnter={() => setActive(person.id)}
              type="button"
            >
              <motion.div animate={{ opacity: active === person.id ? 1 : 0.56 }} className="mb-4">
                <Portrait
                  active={active === person.id}
                  avatarPosition={person.avatarPosition}
                  label={person.id === "ideo" ? "IDEO" : person.en.slice(0, 2)}
                  src={person.image}
                />
              </motion.div>
              <motion.p animate={{ opacity: active === person.id ? 1 : 0.78 }} className="text-[28px] font-light text-ink">
                {person.name}
              </motion.p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ash/45">{person.en}</p>
              <p className="mt-4 text-sm leading-7 text-ash/75">{person.keywords}</p>
            </button>
          ))}

          <motion.div
            className="absolute bottom-[3%] left-1/2 flex w-[min(720px,52vw)] -translate-x-1/2 gap-5 border border-[rgba(120,105,85,0.14)] bg-rice/60 px-7 py-5 backdrop-blur-[4px]"
            key={active}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          >
            <div className="shrink-0">
              <Portrait
                active
                label={activePerson ? (activePerson.id === "ideo" ? "IDEO" : activePerson.en.slice(0, 2)) : "NF"}
                src={activePerson ? activePerson.image : centerPerson.image}
                avatarPosition={activePerson ? activePerson.avatarPosition : centerPerson.avatarPosition}
                variant="panel"
              />
            </div>
            <div>
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
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
