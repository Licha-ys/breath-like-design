import { motion } from "framer-motion";

export default function HarmonyLayers() {
  const layerTransition = { duration: 1.65, ease: "easeInOut" };

  return (
    <motion.div
      className="relative mx-auto h-[560px] w-full max-w-xl"
      initial={{ opacity: 0 }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.48 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="breathing-glow absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-warm/20 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 520">
        <motion.g
          initial={{ x: -34, y: 18, opacity: 0.2 }}
          transition={layerTransition}
          viewport={{ once: true, amount: 0.55 }}
          whileInView={{ x: 0, y: 0, opacity: 0.66 }}
        >
          <path d="M260 116 C224 116 202 150 210 184 C216 214 236 228 260 228 C284 228 304 214 310 184 C318 150 296 116 260 116 Z M176 398 C184 306 214 252 260 252 C306 252 336 306 344 398" fill="none" stroke="#9D6B5C" strokeLinecap="round" strokeWidth="1.2" />
          <text x="156" y="430" fill="#77736A" fontSize="12" letterSpacing="3">人</text>
        </motion.g>
        <motion.g
          initial={{ x: 42, y: -22, opacity: 0.18 }}
          transition={{ ...layerTransition, delay: 0.12 }}
          viewport={{ once: true, amount: 0.55 }}
          whileInView={{ x: 0, y: 0, opacity: 0.62 }}
        >
          <path d="M160 292 C190 240 236 214 294 222 C342 228 372 258 384 304 M198 328 H362 M212 328 V408 M350 328 V408" fill="none" stroke="#B7926A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <text x="376" y="430" fill="#77736A" fontSize="12" letterSpacing="3">物</text>
        </motion.g>
        <motion.g
          initial={{ scale: 0.92, opacity: 0.16 }}
          transition={{ ...layerTransition, delay: 0.24 }}
          viewport={{ once: true, amount: 0.55 }}
          whileInView={{ scale: 1, opacity: 0.52 }}
        >
          <path d="M86 360 C110 170 210 78 344 112 C446 138 474 248 432 372" fill="none" stroke="#77736A" strokeLinecap="round" strokeWidth="1" />
          <path d="M114 384 C190 420 326 420 408 384" fill="none" stroke="#C9C4B8" strokeLinecap="round" strokeWidth="1" />
          <text x="244" y="74" fill="#77736A" fontSize="12" letterSpacing="3">环境</text>
        </motion.g>
      </svg>
    </motion.div>
  );
}
