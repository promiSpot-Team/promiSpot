import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/Search/SearchBar2";
import { KAKAO_MAP_URL, KAKAO_REST_API_KEY } from "../../constants/constants";
import { savePlaceList, setPlace } from "../../Redux/reducer/map";
import "../scss/Map_Container.scss";
import "../scss/Search_Bar.scss";

// url을 가져오기 위한 import
import { useLocation } from "react-router-dom";

export default function PlaceSearch() {
  const statePlaceList = useSelector((state) => state.map.placeList);
  const stateRect = useSelector((state) => state.map.rect);
  const [placeList, setPlaceList] = useState(statePlaceList);
  const navigate = useNavigate();
  const childRef = useRef();
  const dispatch = useDispatch();

  const [promiseSeq, setPromiseSeq] = useState();
  const location = useLocation();
  useEffect(() => {
    var path = location.pathname;
    var parse = path.split("/");
    var seq = parse[2];
    setPromiseSeq(seq);
  }, []);

  useEffect(() => {
    // console.log(promiseSeq);
  }, [promiseSeq]);

  /* hooks/useAxios.js 에서 받아오는 axios의 response 값 
    여기서는 장소의 검색 결과 리스트 */
  const GetAxiosResponse = ({ response, error, loading }) => {
    if (response?.data?.documents) {
      setPlaceList(response.data.documents);
    }
  };

  /* 상위컴포넌트(/map)에서 지도가 드래그 될 때마다 검색 결과 변경 */
  useEffect(() => {
    childRef.current.whileDragMapHandle();
    
    return () => {
      // console.log(localStorage.getItem(''))
    }
  }, []);

  /* 지도 반경이 변화될 때마다 <SearchBar />에 변경된 검색 결과 반영 */
  useEffect(() => {
    childRef.current.whileDragMapHandle();
  }, [stateRect]);

  /* hooks/useAxios.js 에 보내는 config */
  const config = {
    method: "GET",
    baseURL: `${KAKAO_MAP_URL}/v2/local/search/keyword`,
    headers: {
      Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
    },
    params: {
      rect: stateRect,
    },
  };

  /* 변경된 위치에 따른 변경된 검색 결과 저장 */
  function moveToPlaceDetail(place) {
    dispatch(savePlaceList(placeList));
    dispatch(setPlace(place))
    navigate(`/map/${promiseSeq}/${place.id}`, { state: place });
  }
  
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
      <div className="place-search-bar-wrapper">
        <SearchBar GetAxiosResponse={GetAxiosResponse} config={config} ref={childRef} />
      </div>
      <div className="place-search-wrapper">
        <div className="place-search-result-wrapper">
          {placeList &&
            placeList.map((place, index) => {
              return (
                <div
                  className="place-search-result-each-wrapper"
                  onClick={() => moveToPlaceDetail(place)}
                  // style={{ height: "35px" }}
                  key={index}
                >
                  <span>{place.place_name}</span>
                </div>
              );
            })}
        </div>
      </div>
    </motion.div>
  );
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
