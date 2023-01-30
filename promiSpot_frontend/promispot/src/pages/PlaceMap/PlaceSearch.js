import React from 'react'
import { motion } from "framer-motion"
import '../scss/map_container.scss'
import '../scss/search_bar.scss'

export default function PlaceSearch() {
  return (
    <motion.div
      className='place-modal-wrapper'
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
        // ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <h2>장소 검색</h2>
      <form className='search-bar-wrapper'>
        <input type="text" className='search-bar' placeholder='검색어를 입력하세요...'/>
      </form>
    </motion.div>
  )
}
