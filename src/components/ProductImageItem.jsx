import React, { useState } from "react";
import { motion } from "framer-motion";
import { getProductImage } from "../utils/productImages.js";

export default function ProductImageItem({ product, active, dimmed, onHover, onOpen }) {
  const [failed, setFailed] = useState(false);
  const imageSrc = getProductImage(product);

  return (
    <motion.button
      animate={{ opacity: dimmed ? 0.35 : 1, scale: active ? 1.02 : 1 }}
      className="group relative flex min-h-[320px] flex-col justify-between border border-line/40 bg-rice/30 p-6 text-left backdrop-blur-sm transition-colors duration-700 hover:bg-white/25"
      onClick={onOpen}
      onFocus={onHover}
      onMouseEnter={onHover}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      type="button"
    >
      <div className="flex h-56 items-center justify-center">
        {!failed ? (
          <img
            alt={`${product.name} product image`}
            className="max-h-52 w-full object-contain opacity-90 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-100"
            onError={() => setFailed(true)}
            src={imageSrc}
          />
        ) : (
          <div className="grid h-52 w-full place-items-center border border-line/50 bg-paper/60 text-sm tracking-[0.18em] text-ash">
            图片待替换
          </div>
        )}
      </div>
      <motion.div
        animate={{ opacity: active ? 1 : 0.35, y: active ? 0 : 8 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <p className="text-xs uppercase tracking-[0.22em] text-ash/60">
          {product.brand} / {product.year}
        </p>
        <h3 className="mt-3 text-xl font-light text-ink">{product.cnName}</h3>
        <p className="mt-2 text-sm font-light text-ash">{product.name}</p>
      </motion.div>
    </motion.button>
  );
}
