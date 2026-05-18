import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import BreathLine from "./components/BreathLine.jsx";
import Section from "./components/Section.jsx";
import DesignerProfile from "./components/DesignerProfile.jsx";
import BehaviorLab from "./components/BehaviorLab.jsx";
import ProductInteractionSections from "./components/ProductInteractionSections.jsx";
import TimelineSection from "./components/TimelineSection.jsx";
import ConceptDictionary from "./components/ConceptDictionary.jsx";
import EasternHarmony from "./components/EasternHarmony.jsx";
import ProductArchive from "./components/ProductArchive.jsx";

const navItems = [
  { id: "home", title: "像呼吸一样" },
  { id: "designer-profile", title: "设计师档案" },
  { id: "behavior-lab", title: "无意识行为实验室" },
  { id: "product-interactions", title: "单独产品交互页" },
  { id: "timeline", title: "时间中的日常" },
  { id: "concept-dictionary", title: "概念词典" },
  { id: "eastern-harmony", title: "东方的调和" },
  { id: "product-archive", title: "真实产品档案室" },
  { id: "ending", title: "当设计消失，生活继续" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.25, ease: "easeInOut" }
  }
};

function ProgressRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 38, damping: 24 });

  return (
    <aside className="fixed right-7 top-1/2 z-30 hidden -translate-y-1/2 items-center gap-4 lg:flex">
      <div className="relative h-64 w-px overflow-hidden bg-line/40">
        <motion.div
          className="absolute left-0 top-0 h-full w-px origin-top bg-ink/35"
          style={{ scaleY }}
        />
      </div>
      <div className="flex flex-col gap-4" aria-hidden="true">
        {navItems.map((item) => (
          <span
            className="h-1.5 w-1.5 rounded-full border border-line/80 bg-rice/60 transition-colors duration-700 hover:bg-wood/70"
            key={item.id}
            title={item.title}
          />
        ))}
      </div>
    </aside>
  );
}

function BodyCue() {
  return (
    <motion.div
      animate={{ opacity: [0.3, 0.72, 0.3], y: [0, 8, 0] }}
      className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-4 text-xs tracking-[0.32em] text-ash/60 md:flex"
      transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <span>向下滚动</span>
      <span className="h-16 w-px bg-gradient-to-b from-line to-transparent" />
    </motion.div>
  );
}

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden text-ink">
      <BreathLine />
      <ProgressRail />

      <Section id="home" className="min-h-screen pt-16">
        <div className="mx-auto grid min-h-[86vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.38em] text-ash/60">
              Naoto Fukasawa / Without Thought
            </p>
            <h1 className="text-6xl font-extralight leading-none tracking-normal text-ink md:text-8xl lg:text-9xl">
              像呼吸一样
            </h1>
            <p className="mt-8 max-w-lg text-xl font-light leading-9 text-ash">
              深泽直人的无意识设计与东方调和
            </p>
            <p className="mt-12 max-w-md text-base font-light leading-8 text-ash/90">
              好的设计不需要被注意。它像空气、光、水和呼吸一样，自然地进入日常。
            </p>
            <p className="mt-8 max-w-md border-l border-line/70 pl-5 text-lg font-light leading-8 text-ink/80">
              在理解之前，身体已经知道如何行动。
            </p>
          </motion.div>
          <motion.div
            className="relative h-[42vh] min-h-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.5, ease: "easeInOut" }}
          >
            <div className="breathing-glow absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-warm/30 blur-3xl" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 720 420">
              <motion.path
                animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.35, 0.72, 0.35] }}
                d="M46 216 C122 198 154 198 214 216 C274 234 313 234 372 216 C431 198 480 197 535 216 C590 235 626 234 674 216"
                fill="none"
                stroke="#9D6B5C"
                strokeLinecap="round"
                strokeWidth="1.4"
                transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                animate={{ opacity: [0.25, 0.48, 0.25] }}
                d="M110 260 C210 320 498 319 610 260"
                fill="none"
                stroke="#C9C4B8"
                strokeLinecap="round"
                strokeWidth="1"
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </div>
        <BodyCue />
      </Section>

      <DesignerProfile />
      <BehaviorLab />
      <ProductInteractionSections />
      <TimelineSection />
      <ConceptDictionary />
      <EasternHarmony />
      <ProductArchive />

      <Section id="ending" className="pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.55 }}
            whileInView="visible"
          >
            <p className="mb-7 text-xs uppercase tracking-[0.34em] text-ash/60">
              Quiet Continuity
            </p>
            <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">
              当设计消失，生活继续
            </h2>
            <p className="mt-10 text-lg font-light leading-9 text-ash">
              当设计足够自然，它就不再需要被解释。它像呼吸一样，存在，却不打扰。
            </p>
            <p className="mt-14 text-2xl font-light leading-10 text-ink/80">
              好的设计不要求被注意，它只是安静地让生活继续。
            </p>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
