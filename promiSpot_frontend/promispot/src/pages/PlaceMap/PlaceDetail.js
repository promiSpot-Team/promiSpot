import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BasicHeader from "../../components/Header/BasicHeader3";
import getDetail from "./GetDetail";
import { setPlace } from "../../Redux/reducer/map";
import { useDispatch } from "react-redux";
import GetDetail from "./GetDetail";
import axios from "axios";
import { SERVER_URL } from "../../constants/constants";
import { useSelector } from "react-redux";

import { publishVotePlace } from "../../Redux/reducer/promise";

export default function PlaceDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const place = location.state;
  const dispatch = useDispatch();
  const memberSeq = useSelector((state) => state.user.info.memberSeq);

  const toggle = useSelector((state) => state.promise.toggle);

  // 이 장소가 등록되어 있는지 확인하는 함수
  // const [checkVote, setCheckVote] = useState();
  // const searchCheckVote = async () => {
  //   const response = await axios({
  //     method: "GET",
  //     url: `${SERVER_URL}/promise/getList/1`,
  //   });
  //   if (response.data !== "fail") {
  //     setPromiseList(response.data);
  //   }
  // };
  // useEffect(() => {
  //   searchPromiseList();
  // }, []);

  console.log(place);
  /* 장소 '등록하기' 버튼 누르면 지도에 등록하면서 약속 장소 후보로 등록 */
  // 등록하기를 누르면 DB에 저장
  const registerPlaceToMap = async () => {
    dispatch(setPlace(place));
    console.log(place);
    setIsRegister(false);

    // 약속 장소 후보 등록 함수
    const insertVote = async (placeId) => {
      var path = location.pathname;
      var parse = path.split("/");
      var promiseSeq = parse[2];

      const sendData = {
        promiseSeq: promiseSeq,
        placeId: placeId,
        memberSeq: memberSeq,
        voteCnt: 0,
      };

      try {
        const response = await axios({
          url: "http://localhost:9090/api/vote/insert",
          method: "POST",
          // baseURL: SERVER_URL,
          data: sendData,
        });
      } catch (err) {
        console.log(err);
      }
    };

    // 장소등록 -> 장소아이디를 받아온다 -> 약속장소후보 테이블에 저장한다.
    const sendData = {
      placeId: place.id,
      placeName: place.place_name,
      placeCategoryName: place.category_name,
      placeCategoryGroupCode: place.category_group_code,
      placeCategoryGroupName: place.category_group_name,
      placePhone: place.phone,
      placeRoadAddressName: place.road_address_name,
      placeAddressName: place.address_name,
      placeX: place.x,
      placeY: place.y,
      placeUrl: "",
      placeImgUrl: "",
    };

    try {
      const response = await axios({
        url: "http://localhost:9090/api/place/insert",
        method: "POST",
        // baseURL: SERVER_URL,
        data: sendData,
      });
      console.log("장소등록 후 응답보기 : ");
      console.log(response.data.placeId);
      insertVote(response.data.placeId);

      // 발행
      dispatch(publishVotePlace(toggle + 1));

      console.log(toggle);
      console.log();
    } catch (err) {
      console.log(err);
    }
  };

  const [isRegister, setIsRegister] = React.useState(true);

  return (
    <div className="place-modal-wrapper">
      <div>
        <BasicHeader text={place.place_name ? place.place_name : place.placeName} />
      </div>
      <div>
        <GetDetail place={place} />
        {isRegister ? (
          <button onClick={registerPlaceToMap} className="place-register-btn">
            등록하기
          </button>
        ) : (
          <>
            <button>투표하기</button>
            <button className="place-register-btn" onClick={() => setIsRegister(true)}>
              등록 취소
            </button>
          </>
        )}
      </div>
    </div>
  );
}
