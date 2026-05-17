import React, { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/products.js";

const sections = [
  { type: "pull", label: "PULL", hint: "点击或拉动细绳", product: products[0] },
  { type: "approach", label: "APPROACH", hint: "靠近雾气", product: products[1] },
  { type: "press", label: "PRESS", hint: "点击按键", product: products[2] },
  { type: "sit", label: "SIT", hint: "让身体靠近椅子", product: products[3] },
  { type: "light", label: "LIGHT", hint: "点击点亮", product: products[4] }
];

function StageShell({ children }) {
  return (
    <div className="relative flex min-h-[560px] items-center justify-center">
      <div className="relative h-[min(72vw,460px)] min-h-[420px] w-[min(82vw,460px)]">
        <div className="pointer-events-none absolute inset-8 rounded-full border border-line/25" />
        {children}
      </div>
    </div>
  );
}

function RevealedImage({ product, revealed, className = "", lit = false }) {
  if (!revealed) return null;

  return (
    <motion.img
      alt={product.name}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 object-contain object-center mix-blend-multiply ${
        lit ? "drop-shadow-[0_0_46px_rgba(233,216,184,0.68)]" : ""
      } ${className}`}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      src={product.image}
      transition={{ duration: 0.75, ease: "easeOut" }}
    />
  );
}

function PullStage({ product, reveal, revealed }) {
  return (
    <StageShell>
      <button className="absolute inset-0 cursor-pointer" onClick={reveal} onPointerDown={reveal} type="button">
        <motion.div animate={{ opacity: revealed ? 0.72 : 0.22 }} className="absolute left-1/2 top-[28%] h-[44%] w-[44%] -translate-x-1/2 rounded-full border border-line" />
        <motion.div animate={{ height: revealed ? "55%" : "49%", y: revealed ? 8 : 0 }} className="absolute left-1/2 top-[9%] w-px bg-ash/60" />
        <motion.div animate={{ y: revealed ? 22 : 0 }} className="absolute left-1/2 top-[59%] h-3 w-3 -translate-x-1/2 rounded-full border border-ash/70 bg-rice" />
        <RevealedImage className="w-[58%] max-h-[68%]" product={product} revealed={revealed} />
      </button>
    </StageShell>
  );
}

function ApproachStage({ product, reveal, revealed }) {
  return (
    <StageShell>
      <div className="absolute inset-0 cursor-pointer" onClick={reveal} onMouseEnter={reveal} onMouseMove={reveal}>
        {[0, 1, 2].map((index) => (
          <motion.div
            animate={{ opacity: revealed ? 0.34 - index * 0.07 : 0.13, scale: revealed ? 1.38 + index * 0.28 : 0.9 + index * 0.08 }}
            className="absolute left-1/2 top-[28%] h-[34%] w-[34%] -translate-x-1/2 rounded-full bg-bluegray/35 blur-2xl"
            key={index}
            transition={{ duration: 1.05 + index * 0.14, ease: "easeInOut" }}
          />
        ))}
        <RevealedImage className="w-[60%] max-h-[66%]" product={product} revealed={revealed} />
      </div>
    </StageShell>
  );
}

function PressStage({ product, reveal, revealed }) {
  const [pressed, setPressed] = useState(null);

  return (
    <StageShell>
      <div className="absolute inset-0">
        <div className="absolute left-[56%] top-[16%] grid -translate-x-1/2 grid-cols-4 gap-2.5 opacity-80">
          {Array.from({ length: 16 }).map((_, index) => (
            <motion.button
              animate={{ backgroundColor: revealed && pressed === index ? "#D8C7AD" : "#F8F7F2" }}
              className="h-9 w-9 cursor-pointer border border-line"
              key={index}
              onClick={() => {
                setPressed(index);
                reveal();
              }}
              type="button"
            />
          ))}
        </div>
        <RevealedImage className="h-[72%] max-w-[42%]" product={product} revealed={revealed} />
      </div>
    </StageShell>
  );
}

function SitStage({ product, reveal, revealed }) {
  return (
    <StageShell>
      <button className="absolute inset-0 cursor-pointer" onClick={reveal} onMouseEnter={reveal} type="button">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 460 460">
          <motion.path animate={{ opacity: revealed ? 0.56 : 0.18, x: revealed ? 0 : -20, y: revealed ? 0 : 12 }} d="M230 84 C190 96 174 142 190 178 C204 206 230 220 262 214 C306 206 330 164 304 124 C292 102 270 84 230 84 Z M150 344 C170 264 214 224 280 230 C344 236 386 276 404 348" fill="none" stroke="#77736A" strokeDasharray="6 10" strokeLinecap="round" strokeWidth="1.4" />
          <path d="M70 286 C136 204 236 184 336 222 C376 238 414 214 448 154 M126 292 V390 M384 224 V390 M98 390 H420" fill="none" stroke="#B7926A" strokeLinecap="round" strokeWidth="3" />
        </svg>
        <RevealedImage className="w-[64%] max-h-[62%]" product={product} revealed={revealed} />
      </button>
    </StageShell>
  );
}

function LightStage({ product, reveal, revealed }) {
  return (
    <StageShell>
      <button className="absolute inset-0 cursor-pointer" onClick={reveal} type="button">
        <motion.div animate={{ opacity: revealed ? 0.76 : 0, scale: revealed ? 1.32 : 0.98 }} className="absolute left-1/2 top-[21%] h-[58%] w-[58%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,244,224,0.84),rgba(233,216,184,0.22)_45%,transparent_72%)] blur-2xl" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 460 460">
          <path d="M178 222 C200 134 260 134 282 222 Z M230 222 V326 M194 326 H266" fill="none" stroke="#A7A198" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
        <RevealedImage className="w-[58%] max-h-[66%]" lit product={product} revealed={revealed} />
      </button>
    </StageShell>
  );
}

function Stage({ type, product, reveal, revealed }) {
  const Component = {
    pull: PullStage,
    approach: ApproachStage,
    press: PressStage,
    sit: SitStage,
    light: LightStage
  }[type];
  return <Component product={product} reveal={reveal} revealed={revealed} />;
}

function InteractionSection({ section }) {
  const [revealed, setRevealed] = useState(false);
  const reveal = () => setRevealed(true);
  const { product } = section;

  return (
    <section className="relative flex min-h-screen items-center py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 md:px-10 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div initial={{ opacity: 0, y: 26, filter: "blur(8px)" }} viewport={{ once: true, amount: 0.35 }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.05, ease: "easeInOut" }}>
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">{section.label}</p>
          <h2 className="text-6xl font-extralight text-ink md:text-8xl">{product.action}</h2>
          <p className="mt-8 text-sm tracking-[0.22em] text-ash/65">{revealed ? "理念已显现" : section.hint}</p>
          <motion.div animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 18, filter: revealed ? "blur(0px)" : "blur(8px)" }} transition={{ duration: 0.75, ease: "easeOut" }}>
            <p className="mt-12 max-w-xl border-l border-line/70 pl-6 text-2xl font-light leading-10 text-ink/85">{product.shortLine}</p>
            <p className="mt-6 max-w-xl text-base font-light leading-8 text-ash">{product.description}</p>
            <div className="mt-8 flex max-w-xl flex-wrap gap-x-5 gap-y-3 text-sm text-ash">
              {product.keywords.map((word) => (
                <span className="border-b border-line/70 pb-1" key={word}>
                  {word}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <Stage product={product} reveal={reveal} revealed={revealed} type={section.type} />
      </div>
    </section>
  );
}

export default function ProductInteractionSections() {
  return (
    <div id="product-interactions">
      {sections.map((section) => (
        <InteractionSection key={section.type} section={section} />
      ))}
    </div>
  );
}
