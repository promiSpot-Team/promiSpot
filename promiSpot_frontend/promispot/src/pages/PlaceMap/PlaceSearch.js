import React, { useState, useEffect }from 'react'
import { motion } from "framer-motion"
import '../scss/Map_Container.scss'
import '../scss/Search_Bar.scss'
import useAxios from '../../hooks/useAxios'
import SearchBar from '../../components/Search/SearchBar'

export default function PlaceSearch() {
  const [query, setQuery] = useState('')

  const changeQuery = (value) => {
    setQuery(value)
  }

  const { response, loading, error, refetch } = useAxios({
    method: 'GET', 
    url: 'https://api.thecatapi.com/v1/images/search',
    // headers: {
    //   accepts: '*/*',
    // },
    // data: {
    //   userId: 1,
    //   title: query,
    //   body: 'body is...'
    // }
  })

  
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
      <SearchBar changeQuery={changeQuery}/>
      {/* <form className='search-bar-wrapper'>
        <input type="text" className='search-bar' placeholder='검색어를 입력하세요...'/>
      </form> */}
      <div>
        {
          loading ? <p>...loading</p> : <p>{response.title}</p>
        }
      </div>
    </motion.div>
  )
}
