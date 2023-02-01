import React, { useState }from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from "framer-motion"
import { KAKAO_MAP_URL, KAKAO_REST_API_KEY } from '../../constans/kakaomap'
import SearchBar from '../../components/Search/SearchBar2'
import '../scss/Map_Container.scss'
import '../scss/Search_Bar.scss'

export default function PlaceSearch() {
  const [placeList, setPlaceList] = useState([])
  // const rect = useLocation().state.rect
  console.log('rect', useLocation())

  const GetAxiosResponse = (data) => {
    if (data?.response?.documents) {
      setPlaceList(data.response.documents)
    }
  }

  const config = {
    method: 'GET', 
    baseURL: `${KAKAO_MAP_URL}/v2/local/search/keyword`,
    headers: {
      // Host: `${KAKAO_MAP_HOST}`,
      Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`
    },
    params: {
      rect: '127.03981055912708,37.50035032925001,127.040871597946,37.5018523942496',
    }
  }

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
      <SearchBar GetAxiosResponse={GetAxiosResponse} config={config}/>
      <div>
        {placeList.map((place, index) => {
          return (
            <div key={index}>{place.place_name}</div>
          )
        })}
      </div>
      {/* <form className='search-bar-wrapper'>
        <input type="text" className='search-bar' placeholder='검색어를 입력하세요...'/>
      </form> */}
    </motion.div>
  )
}
