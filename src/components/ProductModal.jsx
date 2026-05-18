import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProductImage } from "../utils/productImages.js";

export default function ProductModal({ product, source, onClose, onNext, onPrev }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  useEffect(() => setFailed(false), [product.id]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-paper/80 p-5 backdrop-blur-md"
      initial={{ opacity: 0 }}
      onClick={onClose}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <motion.article
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        className="grid max-h-[90vh] w-full max-w-6xl overflow-auto border border-line/60 bg-rice/95 shadow-hush md:grid-cols-[1.05fr_0.95fr]"
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        onClick={(event) => event.stopPropagation()}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      >
        <div className="flex min-h-[420px] items-center justify-center border-b border-line/45 bg-paper/55 p-8 md:border-b-0 md:border-r">
          {!failed ? (
            <img
              alt={`${product.name} product image`}
              className="max-h-[62vh] w-full object-contain mix-blend-multiply"
              onError={() => setFailed(true)}
              src={getProductImage(product)}
            />
          ) : (
            <div className="grid h-80 w-full place-items-center border border-line/50 bg-paper/70 text-sm tracking-[0.18em] text-ash">
              图片待替换
            </div>
          )}
        </div>
        <div className="p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-ash/60">
            {product.brand} / {product.year}
          </p>
          <h2 className="mt-5 text-4xl font-light leading-tight text-ink">{product.cnName}</h2>
          <p className="mt-3 text-lg font-light text-ash">{product.name}</p>

          <div className="mt-7 grid gap-3 border-y border-line/45 py-5 text-sm leading-6 text-ash md:grid-cols-2">
            <p>产品名：{product.name}</p>
            <p>中文名：{product.cnName}</p>
            <p>年份：{product.year}</p>
            <p>合作品牌：{product.brand}</p>
            <p>对应动作：{product.behavior}</p>
            <p>对应理念：{product.primaryConcept}</p>
          </div>

          <p className="mt-10 border-l border-line/70 pl-5 text-2xl font-light leading-10 text-ink/85">
            {product.shortLine}
          </p>
          <p className="mt-8 text-base font-light leading-8 text-ash">{product.description}</p>

          <div className="mt-8 space-y-4 text-base font-light leading-8 text-ash">
            <p>
              <span className="text-ink/75">设计特点：</span>
              {product.designFeature}
            </p>
            <p>
              <span className="text-ink/75">一句话总结：</span>
              {product.summary}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {product.keywords.map((word) => (
              <span className="border-b border-line/70 pb-1 text-sm text-ash" key={word}>
                {word}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {product.concepts.map((word) => (
              <span className="bg-mist/70 px-3 py-1 text-xs uppercase tracking-[0.16em] text-ash" key={word}>
                {word}
              </span>
            ))}
          </div>

          <p className="mt-9 text-xs leading-6 text-ash/70">
            Image source:{" "}
            <a className="border-b border-line hover:text-ink" href={product.sourcePage} rel="noreferrer" target="_blank">
              {source?.sourcePage || product.sourcePage}
            </a>
          </p>
          {source?.imageUrl && (
            <p className="mt-2 break-all text-[11px] leading-5 text-ash/55">
              Downloaded image URL: {source.imageUrl}
            </p>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button className="border border-line/70 px-5 py-3 text-sm text-ash transition-colors duration-500 hover:bg-paper hover:text-ink" onClick={onPrev} type="button">
              上一件设计
            </button>
            <button className="border border-line/70 px-5 py-3 text-sm text-ash transition-colors duration-500 hover:bg-paper hover:text-ink" onClick={onNext} type="button">
              下一件设计
            </button>
            <button className="ml-auto border-b border-line pb-1 text-sm text-ash transition-colors duration-500 hover:text-ink" onClick={onClose} type="button">
              关闭
            </button>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
