import React, { useState, useRef, useEffect  }from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { KAKAO_MAP_URL, KAKAO_REST_API_KEY } from '../../constans/kakaomap'
import SearchBar from '../../components/Search/SearchBar2'
import store from '../../index'
import { useSelector } from 'react-redux'
import '../scss/Map_Container.scss'
import '../scss/Search_Bar.scss'

export default function PlaceSearch() {
  const statePlaceList = useSelector((state) => state.placeList)
  const [placeList, setPlaceList] = useState(statePlaceList)
  const { rect } = useLocation().state
  const navigate = useNavigate()
  const childRef = useRef()
  // const rect = useLocation().state.rect
  console.log('rect', useLocation())

  const GetAxiosResponse = (data) => {
    if (data?.response?.documents) {
      setPlaceList(data.response.documents)
    }
  }
  
  useEffect(() => {
    childRef.current.whileDragMapHandle()
  }, [rect])

  const config = {
    method: 'GET', 
    baseURL: `${KAKAO_MAP_URL}/v2/local/search/keyword`,
    headers: {
      Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`
    },
    params: {
      rect
    }
  }
  
  function moveToPlaceDetail(props) {
    store.dispatch({
      type: 'SAVE_PLACE_LIST',
      placeList
    })
    navigate(`/map/${props}`)
  }

  return (
    <motion.div
      className='place-modal-wrapper'
      // initial={{ opacity: 0, y: 15 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{
      //   duration: 0.3,
      //   delay: 0.3,
      //   // ease: [0, 0.71, 0.2, 1.01]
      // }}
    >
      <h2>장소 검색</h2>
      <SearchBar 
        GetAxiosResponse={GetAxiosResponse} 
        config={config}
        ref={childRef}
      />
      <div style={{ position: 'absolute', overflow: 'auto', width: '100%', left: '-0.3%', height: '50%'}}>
        {placeList.map((place, index) => {
          return (
            <div onClick={() => moveToPlaceDetail(place.id)} style={{ height: '40px'}} key={index}><span>{place.place_name}</span></div>
          )
        })}
      </div>
      {/* <form className='search-bar-wrapper'>
        <input type="text" className='search-bar' placeholder='검색어를 입력하세요...'/>
      </form> */}
    </motion.div>
  )
}
// export default function PlaceSearch() {
//   const [placeList, setPlaceList] = useState([])
//   const { rect } = useLocation().state
//   const childRef = useRef()
//   console.log(rect)

//   const GetAxiosResponse = (data) => {
//     if (data?.response?.documents) {
//       setPlaceList(data.response.documents)
//     }
//   }
  
//   useEffect(() => {
//     childRef.current.showAlert()
//   }, [rect])

//   const config = {
//     method: 'GET', 
//     baseURL: `${KAKAO_MAP_URL}/v2/local/search/keyword`,
//     headers: {
//       // Host: `${KAKAO_MAP_HOST}`,
//       Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`
//     },
//     params: {
//       rect
//     }
//   }

//   return (
//     <motion.div
//       className='place-modal-wrapper'
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.3,
//         delay: 0.3,
//         // ease: [0, 0.71, 0.2, 1.01]
//       }}
//     >
//       <h2>장소 검색</h2>
//       <button onClick={GetAxiosResponse}>버튼</button>
//       <SearchBar GetAxiosResponse={GetAxiosResponse} config={config}/>
//       <div>
//         {placeList.map((place, index) => {
//           return (
//             <div key={index}>{place.place_name}</div>
//           )
//         })}
//       </div>
//       {/* <form className='search-bar-wrapper'>
//         <input type="text" className='search-bar' placeholder='검색어를 입력하세요...'/>
//       </form> */}
//     </motion.div>
//   )
// }
