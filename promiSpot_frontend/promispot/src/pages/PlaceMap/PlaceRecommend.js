import axios from 'axios';
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import BasicHeader4 from "../../components/Header/BasicHeader4";
import { KAKAO_MAP_URL, KAKAO_REST_API_KEY } from '../../constants/constants';
import "../scss/Map_Container.scss";
import { useSelector } from 'react-redux'

export default function PlaceRecommend() {
  const { x, y } = useSelector(state => state.map.centerXY)
  const [recommendPlaceList, setRecommendPlaceList] = useState([])
  const categoryList = ["CE7", "FD6", "AT4", "CT1"]

  /** 추천 장소 가져오기 */
  const getRecommendPlace =  () => {
    const recommendPlaces = []
    categoryList.forEach(category => {
      var response = axios({
        method: 'GET',
        headers: {
          Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`
        },
        url: `${KAKAO_MAP_URL}/v2/local/search/category`,
        params: {
          category_group_code: category
        }
      })
      setRecommendPlaceList(response)
      console.log(recommendPlaceList)
    })
  }

  useEffect(() => {
    getRecommendPlace()
  }, [])

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
