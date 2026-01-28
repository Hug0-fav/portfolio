"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function PageTransitionWrapper({ children, pathname }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        className="flex-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
