import React from "react";
import BasicHeader4 from "../../components/Header/BasicHeader4";
import "../scss/Map_Container.scss";
import { motion } from "framer-motion";

export default function PlaceRecommend() {
  return (
    <motion.div
      className="place-modal-wrapper"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
        // ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <BasicHeader4 text="장소 추천" />
    </motion.div>
  );
}
