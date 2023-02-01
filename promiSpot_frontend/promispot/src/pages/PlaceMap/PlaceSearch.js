import React, { useState  }from 'react'
import { motion } from "framer-motion"
import '../scss/Map_Container.scss'
import '../scss/Search_Bar.scss'
import SearchBar from '../../components/Search/SearchBar'

export default function PlaceSearch() {
  const [{ response, loading, error }, setData] = useState([])

  const GetAxiosResponse = (data) => {
    console.log('data1', data)
    setData(data)
    console.log('data2', )
  }
  
  console.log(response)
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
      <SearchBar GetAxiosResponse={GetAxiosResponse} />
      {/* <form className='search-bar-wrapper'>
        <input type="text" className='search-bar' placeholder='검색어를 입력하세요...'/>
      </form> */}
      <div>
        {/* {
          loading ? <p>...loading</p> : <p>{response.title}</p>
        } */}
      </div>
    </motion.div>
  )
}
