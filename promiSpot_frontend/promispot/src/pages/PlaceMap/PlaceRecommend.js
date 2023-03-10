import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import BasicHeader4 from "../../components/Header/BasicHeader4";
import { KAKAO_MAP_URL, KAKAO_REST_API_KEY } from "../../constants/constants";
import { setPlace } from "../../Redux/reducer/map";
import "../scss/Map_Container.scss";

export default function PlaceRecommend() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /** 중심위치  */
  const { centerX, centerY } = useSelector((state) => state.map.centerXY);
  const [recommendPlaceList, setRecommendPlaceList] = useState([]);
  // const [CE7placeList, setCE7placeList] = useState([])
  // const [CT1placeList, setCT1placeList] = useState([])
  // const [AT4placeList, setAT4placeList] = useState([])
  // const [FD6placeList, setCE7placeList] = useState([])
  const categoryList = {
    AT4: "관광명소",
    FD6: "음식점",
    CE7: "카페",
    CT1: "문화시설",
  };

  // const categoryList = ["CE7", "CT1", "AT4", "FD6"]
  const tempList = [];

  /** 추천 장소 가져오기 */
  const getRecommendPlace = () => {
    const promise = Object.keys(categoryList).map(async (category) => {
      const response = await axios({
        method: "GET",
        headers: {
          Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
        },
        url: `${KAKAO_MAP_URL}/v2/local/search/category`,
        params: {
          category_group_code: category,
          x: String(centerX),
          y: String(centerY),
          radius: 2000,
        },
      });
      return response.data.documents;
    });
    const result = Promise.all(promise);
    result.then((res) => {
      setRecommendPlaceList(res);
    });
  };

  const [promiseSeq, setPromiseSeq] = useState();
  const location = useLocation();
  useEffect(() => {
    getRecommendPlace();
    var path = location.pathname;
    var parse = path.split("/");
    var seq = parse[2];
    setPromiseSeq(seq);
  }, []);

  /* 변경된 위치에 따른 변경된 검색 결과 저장 */
  function moveToPlaceDetail(place) {
    // dispatch(savePlaceList(placeList));
    dispatch(setPlace(place));
    navigate(`/map/${promiseSeq}/${place.id}`, { state: place });
  }

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
      <BasicHeader4 text="이런 곳은 어떠세요?" />
      <div className="place-modal-content-wrapper">
        <div className="place-category-list-wrapper">
          {Object.values(categoryList).map((category, idx) => {
            return (
              <div key={idx} className="category-name-div">
                {category}
              </div>
            );
          })}
        </div>
      </div>
      <div className="recommend-content-wrapper">
        {recommendPlaceList &&
          recommendPlaceList.map((place, index) => {
            return (
              <div
                key={index}
                className="recommend-place-div"
                onClick={() => moveToPlaceDetail(place[0])}
              >
                <p className="place-title">{place[0].place_name}</p>
                <p className="place-address">{place[0].address_name}</p>
              </div>
            );
          })}
      </div>
    </motion.div>
  );
}
