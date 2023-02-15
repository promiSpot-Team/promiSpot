import React from "react";
import { motion } from "framer-motion";
import "../scss/Map_Container.scss";

export default function PromiseInfo() {
  return (
    <motion.div
      className="place-modal-wrapper"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
        // ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div>Hello</div>
    </motion.div>
  );
}
