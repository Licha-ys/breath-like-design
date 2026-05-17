import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/products.js";
import { imageSources } from "../data/imageSources.js";
import ProductImageItem from "./ProductImageItem.jsx";
import ProductModal from "./ProductModal.jsx";

export default function ProductArchive() {
  const [activeId, setActiveId] = useState(products[0].id);
  const [selectedId, setSelectedId] = useState(null);
  const selectedIndex = products.findIndex((item) => item.id === selectedId);
  const selected = selectedIndex >= 0 ? products[selectedIndex] : null;
  const sourceMap = useMemo(
    () => Object.fromEntries(imageSources.map((item) => [item.id, item])),
    []
  );

  const openProduct = (id) => {
    setActiveId(id);
    setSelectedId(id);
  };
  const move = (direction) => {
    if (!selected) return;
    const nextIndex = (selectedIndex + direction + products.length) % products.length;
    setSelectedId(products[nextIndex].id);
    setActiveId(products[nextIndex].id);
  };

  return (
    <section className="relative min-h-screen py-24 md:py-32" id="product-archive">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="mb-16 grid gap-8 md:grid-cols-[0.75fr_1.25fr]"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.15, ease: "easeInOut" }}
        >
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ash/60">
              Product Archive
            </p>
            <h2 className="text-4xl font-light leading-tight text-ink md:text-6xl">
              真实产品档案室
            </h2>
          </div>
          <p className="max-w-2xl self-end text-base font-light leading-8 text-ash md:text-lg">
            当行为被理解，产品才显现为证据。点击一件设计，进入它的展签；再切换到下一件，看“无意识设计”如何在不同物中出现。
          </p>
        </motion.div>

        <div className="relative border-y border-line/45 py-12">
          <div className="grid gap-5 md:grid-cols-5">
            {products.map((product) => (
              <ProductImageItem
                active={activeId === product.id}
                dimmed={activeId && activeId !== product.id}
                key={product.id}
                onHover={() => setActiveId(product.id)}
                onOpen={() => openProduct(product.id)}
                product={product}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-3 text-xs leading-6 text-ash/65 md:grid-cols-2">
          {imageSources.map((source) => (
            <p key={source.id}>
              Image source:{" "}
              <a className="border-b border-line hover:text-ink" href={source.sourcePage} rel="noreferrer" target="_blank">
                {source.title}
              </a>
            </p>
          ))}
        </div>
      </div>

      {selected && (
        <ProductModal
          onClose={() => setSelectedId(null)}
          onNext={() => move(1)}
          onPrev={() => move(-1)}
          product={selected}
          source={sourceMap[selected.id]}
        />
      )}
    </section>
  );
}
