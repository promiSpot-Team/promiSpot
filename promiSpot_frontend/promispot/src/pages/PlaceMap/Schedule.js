import axios from "axios";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "../../components/DragDrop/DragDrop";
import { useDispatch, useSelector } from "react-redux";
import { React, useEffect, useRef, useState } from "react";
import { changeRect } from "../../Redux/reducer/map";
import mapdata from "../mapdata.json";
import TabBar2 from "../../components/TabBar/TabBar2";
import { SERVER_URL } from "../../constants/constants";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

import "../scss/Map_Container.scss";
import "../scss/Schedule.scss";

const { kakao } = window;

export default function Schedule() {
  /* 스케줄 리스트 변수 선언 */
  const [schedulePlaceList, setSchedulePlaceList] = useState([]);
  const [scheduleList, setScheduleList] = useState([]);

  // 지도 변수
  const [map, setMap] = useState(null);

  const location = useLocation();
  const [promiseSeq, setPromiseSeq] = useState();

  // 지도 그리기
  const mapscript = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5013, 127.0397),
      level: 2,
    };

    var map = new kakao.maps.Map(container, options);
    setMap(map);
  };

  // 페이지 처음 랜더링 될 때만 실행
  useEffect(() => {
    mapscript();
  }, []);

  /////////////// 약속 후보 장소 /////////////////////

  // 약속 후보 장소를 불러오는 함수
  const [votePlaceList, setVotePlaceList] = useState();
  const searchVotePlaceList = async () => {
    var path = location.pathname;
    var parse = path.split("/");
    var promiseSeq = parse[2];

    const response = await axios({
      method: "GET",
      url: `${SERVER_URL}/vote/getVotePlaceList/${promiseSeq}`,
    });
    if (response.data !== "fail") {
      setVotePlaceList(response.data);
    }
  };

  // 약속 후보 마커 찍기
  const [beforeVotePlaceList, setBeforeVotePlaceList] = new useState();

  // 후보 장소 누르면 스케줄 장소 리스트에 해당 장소 추가
  const addSchedulePlaceList = (votePlace) => {
    // setSchedulePlaceList(votePlace);
    setSchedulePlaceList((places) => [...places, [votePlace]]);
  };

  // const scheduleList = schedulePlaceList.filter(
  //   (arr, index, callback) => index === callback.findIndex(t => t.placeId === arr.placeId)
  // );

  // save('name', newArray);

  // 스케줄 장소 리스트 변경될 때만 실행
  useEffect(() => {}, [schedulePlaceList]);

  useEffect(() => {
    if (beforeVotePlaceList) {
      beforeVotePlaceList.forEach((beforeVotePlace) => {
        beforeVotePlace.setMap(null);
      });
    }

    setBeforeVotePlaceList([]);

    // BeforeVotePlaceList의 데이터로 마커 찍기
    if (votePlaceList) {
      votePlaceList.forEach((votePlace) => {
        var imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        var imageSize = new kakao.maps.Size(24, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커 생성 및 클릭이벤트 등록
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(votePlace.placeY, votePlace.placeX),
          image: markerImage,
          title: votePlace.placeId,
          placeImgUrl: votePlace.placeImgUrl,
          clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정
        });

        // 마커에 클릭이벤트를 등록
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커 클릭 => 스케줄 장소 리스트에 해당 장소 추가
          addSchedulePlaceList(votePlace);
        });

        setBeforeVotePlaceList((prev) => [...prev, marker]);
        marker.setMap(map);
      });
    }
  }, [votePlaceList]);

  // 처음 페이지가 켜졌을 때 발생하는 함수들
  useEffect(() => {
    var path = location.pathname;
    var parse = path.split("/");
    var seq = parse[2];
    setPromiseSeq(seq);
    searchVotePlaceList();
  }, []);

  // <TabBar2 />에서 검색 클릭 했을 때 true/false 값 가져오기
  const [searchOpen, setSearchOpen] = useState(false);
  const catchClickSearch = (isOpen) => {
    setSearchOpen(isOpen);
  };

  // <TabBar2 />에서 추천 클릭 했을 때 true/false 값 가져오기
  const [recommendOpen, setRecommendOpen] = useState(false);
  const catchClickRecommend = (isOpen) => {
    setRecommendOpen(isOpen);
  };

  return (
    <div id="map" style={{ width: "100vw", height: "100vh" }}>
      <div className="schedule-wrapper">
        <div className="schedule-background-wrapper">
          {/* <button className="draggable" draggable="true">🦊</button>
          <button className="draggable" draggable="true">🐸</button> */}
          <div className="inner-wrapper">
            {schedulePlaceList.map((schedulePlace, idx) => {
              return (
                <div key={idx} className="new-schedule-under-images-wrapper">
                  <div className="new-schedule-under-img">
                    <img
                      // src={require("../../img/IU_Profile.jpg")}
                      src={schedulePlace[0].placeImgUrl}
                      //src="https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FB59A20ADFA864C31B54124064E339231"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="map-button-wrapper">
          <button className="map-button-schedule">
            <BsFillCalendarCheckFill size="40" color="#ffffff" />
          </button>
        </div>
      </div>
      <div className="map-tab-wrapper">
        <TabBar2
          // 검색 클릭 했을 때
          catchClickSearch={catchClickSearch}
          // 추천 클릭 했을 때
          catchClickRecommend={catchClickRecommend}
        />
      </div>
    </div>
  );
}
