import axios from 'axios';
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import BasicHeader4 from "../../components/Header/BasicHeader4";
import { KAKAO_MAP_URL, KAKAO_REST_API_KEY } from '../../constants/constants';
import "../scss/Map_Container.scss";
import { useSelector } from 'react-redux'

export default function PlaceRecommend() {
  const { x, y } = useSelector(state => state.map.centerXY)
  const [recommendPlaceList, setRecommendPlaceList] = useState(null)
  const categoryList = {
    "CE7": '카페',
    "CT1": '문화시설', 
    "AT4": '관광명소', 
    "FD6": '음식점' 
  }
  const tempList = []

  /** 추천 장소 가져오기 */
  const getRecommendPlace = async (category) => {
    const response = await axios({
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`
      },
      url: `${KAKAO_MAP_URL}/v2/local/search/category`,
      params: {
        category_group_code: category
      }
    })
    tempList.push(response.data.documents)
    setRecommendPlaceList(tempList)
  }

  useEffect(() => {
    Object.keys(categoryList).map((category) => {
      console.log(category)
      getRecommendPlace(category)
    })
  }, [])   

  console.log(recommendPlaceList)
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
      <div className="place-modal-content-wrapper">
        <div className="place-category-list-wrapper">
          {Object.values(categoryList).map((category, idx) => {
            return (
              <div key={idx} className="category-name-div">
                {category}
              </div>
            )
          })}
        </div> 
      </div>
      <div className="recommend-content-wrapper">
        {recommendPlaceList && recommendPlaceList.map((place, idx) => {
          return (
            <div key={idx} className="recommend-place-div">
              <p className="place-title">
                {place[0].place_name}
              </p>
              <p className="place-address">
                {place[0].address_name}
              </p>
            </div>
          )
        })}
      </div>
    </motion.div>
  );
}
