import React, { useEffect, useState } from "react";
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
  const [checkVotePlace, setCheckVotePlace] = useState();
  const searchCheckVotePlace = async () => {
    var path = location.pathname;
    var parse = path.split("/");
    var promiseSeq = parse[2];
    var placeId = place.id ? place.id : place.placeId;
    const response = await axios({
      method: "GET",
      url: `${SERVER_URL}/vote/checkVote/${promiseSeq}/${placeId}`,
    });
    if (response.data !== "fail") {
      setCheckVotePlace(response.data);
    }
  };

  useEffect(() => {
    searchCheckVotePlace();
  }, []);

  useEffect(() => {
    console.log("checkvotePlace 확인", checkVotePlace);
  }, [checkVotePlace]);

  // 약속 장소 투표 여부 확인하기 //
  const [checkVoteMember, setCheckVoteMember] = useState();
  const searchCheckVoteMember = async () => {
    var path = location.pathname;
    var parse = path.split("/");
    var promiseSeq = parse[2];
    var placeId = place.id ? place.id : place.placeId;
    const response = await axios({
      method: "GET",
      url: `${SERVER_URL}/vote/checkVote/${promiseSeq}/${placeId}`,
    });
    if (response.data !== "fail") {
      setCheckVotePlace(response.data);
    }
  };

  // 약속 장소 투표 여부 확인 끝 //

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
          // url: "http://localhost:9090/api/vote/insert",
          url: "/vote/insert",
          method: "POST",
          baseURL: SERVER_URL,
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
        url: "place/insert",
        method: "POST",
        baseURL: SERVER_URL,
        data: sendData,
      });

      console.log("장소등록 후 응답보기 : ");
      console.log(response.data.placeId);
      insertVote(response.data.placeId);

      // 발행
      dispatch(publishVotePlace(toggle + 1));

      var path = location.pathname;
      var parse = path.split("/");
      var promiseSeq = parse[2];
      navigate(`/map/${promiseSeq}`);
    } catch (err) {
      console.log(err);
    }
  };

  // 약속 장소 후보 삭제
  const cancleVotePlace = async () => {
    console.log("checkVotePlace 취소 확인 : ", checkVotePlace);

    const response = await axios({
      method: "DELETE",
      url: `${SERVER_URL}/vote/delete/${checkVotePlace.voteSeq}`,
    });

    var path = location.pathname;
    var parse = path.split("/");
    var promiseSeq = parse[2];
    dispatch(publishVotePlace(toggle + 1));
    navigate(`/map/${promiseSeq}`);
  };

  // 약속 장소 후보 투표
  const insertVoter = async () => {
    console.log("약속 장소 후보 투표 작동");

    const sendData = {
      memberSeq: memberSeq,
      voteSeq: checkVotePlace.voteSeq,
    };
    try {
      const response = await axios({
        method: "POST",
        url: `${SERVER_URL}/vote/member/insert`,
        data: sendData,
      });
    } catch (err) {
      console.log(err);
    }

    searchCheckVotePlace();
    // dispatch(publishVotePlace(toggle + 1));
  };

  const [isRegister, setIsRegister] = React.useState(true);

  return (
    <div className="place-modal-wrapper">
      <div>
        <BasicHeader text={place.place_name ? place.place_name : place.placeName} />
      </div>
      <div>
        <GetDetail place={place} />

        {checkVotePlace ? (
          <div>
            <div> 득표수 : {checkVotePlace.voteCnt} </div>
            <button onClick={insertVoter}>투표하기</button>
            <button className="place-register-btn" onClick={cancleVotePlace}>
              등록 취소
            </button>
          </div>
        ) : (
          <button onClick={registerPlaceToMap} className="place-register-btn">
            등록하기
          </button>
        )}
      </div>
    </div>
  );
}
