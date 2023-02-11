import axios from "axios";
import { React, useEffect, useState } from "react";
import { FaVoteYea } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Modal2 from "../../components/Modal/Modal2";
import TabBar2 from "../../components/TabBar/TabBar2";
import { SERVER_URL } from "../../constants/constants";
import { changeRect } from '../../reducer/map';
import mapdata from "../mapdata.json";
import "../scss/Map_Container.scss";
import PlaceRecommend from "./PlaceRecommend";
import PlaceSearch from './PlaceSearch';

const { kakao } = window;

export default function MapContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSearchSelect, setIsSearchSelect] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  /* 지도의 중심 위치 정보 redux에서 가져오기 */
  const stateMapCenterPosition = useSelector(
    (state) => state.map.centerXY
  );

  // 지도 중심 위치 변수
  const [mapCenter, setmapCenter] = useState(stateMapCenterPosition);

  // 지도 변수
  const [map, setMap] = useState(null);

  // 지도 영역 변수
  const [rect, setRect] = useState("");

  // 지도 영역 변수 redux에서 가져오기
  const stateRect = useSelector((state) => state.map.rect);

  const [valid, setValid] = useState(false);

  const isValid = () => {
    setValid(!valid);
  };

///////////////////////////////////// 민정 ////////////////////////////////////////////////////////
const [promiseMemberList, setPromiseMemberList] = useState([])
  const getPromiseMembers = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${SERVER_URL}/promise/member/getList/17`
      })    
      setPromiseMemberList(response.data)
      console.log(promiseMemberList)
    } catch (err) {
      console.log(err.response.status)
    }//catch
  }
  useEffect(() => {
    getPromiseMembers()
  }, [])
////////////////////////////////////////////////////////////////////////////////////////////////
  // 로그인한 회원 정보 가져오기
  const memberSeq = useSelector((state) => state.user.info.memberSeq);

  // 로그인한 회원의 등록한 주소들 가져오기
  const [memberAddressList, setMemberAddressList] = useState(null);
  const searchMemberAddressList = async () => {
    const response = await axios({
      method: "GET",
      url: `${SERVER_URL}/address/addressList/${memberSeq}`,
    });
    if (response.data !== "fail") {
      setMemberAddressList(response.data);
    }
  };
  useEffect(() => {
    searchMemberAddressList();
  }, []);

  useEffect(() => {
    console.log(memberAddressList);
  }, [memberAddressList]);

  // 등록한 주소 중 하나 선택하기
  const [selectAddress, setSelectAddress] = useState();
  const addressSelect = (e) => {
    setSelectAddress(e.target.value);
  };
  useEffect(() => {
    console.log(selectAddress);
  }, [selectAddress]);

  // 사람 프로필 마커 찍기
  mapdata.users.forEach((user) => {
    var customOverlay = new kakao.maps.CustomOverlay({
      position: new kakao.maps.LatLng(37.5013, 127.0399),
      content: `<div class="map-user-profile"><img src=${user.profile_url}></div>`,
      xAnchor: 0.3,
      yAnnchor: 0.91,
    });

    customOverlay.setMap(map);
  });

  // 장소 마커 찍기
  mapdata.places.forEach((place) => {
    var customOverlay = new kakao.maps.CustomOverlay({
      position: new kakao.maps.LatLng(place.place_y, place.place_x),
      content: `<div class="pin"></div><div class="pulse"></div>`,
      xAnchor: 0.3,
      yAnchor: 0.91,
    });

    customOverlay.setMap(map);

    // // 마커 그리기
    // const marker = new kakao.maps.Marker({
    //   map: map,
    //   clickable: true,
    //   position: new kakao.maps.LatLng(place.place_y, place.place_x),
    //   placeName: place.place_name
    // })

    // kakao.maps.event.addListener(marker, 'click', () => {
    //   // 마커 클릭했을 때 실행될 함수
    //   console.log('click!')
    // })
  });

  // // 지도에 장소가 등록됐을 때
  // useEffect(() => {
  //   setmapCenter(stateMapCenterPosition)
  //   function panTo() {
  //     var moveLatLon = new kakao.maps.LatLng(mapCenter.y, mapCenter.x);
  //     if (map) {
  //       // 1. 등록된 장소로 지도 중심 위치 이동
  //       map.panTo(moveLatLon);

  //       // 2. 장소 마커로 표시하기

  //       var markerPosition  = new kakao.maps.LatLng(mapCenter.y, mapCenter.x);
  //       var marker = new kakao.maps.Marker({
  //           position: markerPosition
  //       }).then((res) => {
  //         marker.setMap(map);
  //       })
  //     }
  //   }
  //   panTo()
  // }, [stateMapCenterPosition])

  const markerPosition = async () => {
    // state의 mapCenterPosition이 변경될 때마다 실행

    //  1. 위도, 경도로 지도에 표시할 위치값 받기
    var { x, y } = stateMapCenterPosition;
    var markerPosition = await new kakao.maps.LatLng(y, x);

    /* 지도 정보(map)가 생성된 후에 panTo를 사용해야 함 */
    if (map) {
      //  2. 1에서 받은 위치로 이동
      map.panTo(markerPosition);
    }

    //  3. 1에서 받은 위치에 마커 표시
    var marker = await new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  };

  // 페이지 불러올 때 한 번만 지도 그리기
  useEffect(() => {
    mapscript();
  }, []);

  // 마커나 프로필이 DB에 추가됐을 때
  useEffect(() => {}, [mapdata]);

  // 지도의 가장 자리가 바뀔 때
  useEffect(() => {
    setRect(stateRect);
  }, [stateRect]);

  // 지도의 중심 위치 변경될 때
  useEffect(() => {
    markerPosition();
  }, [stateMapCenterPosition]);

  // 지도 그리기
  const mapscript = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5013, 127.0397),
      level: 2,
    };

    var map = new kakao.maps.Map(container, options);
    setMap(map);
    var bounds = map.getBounds();
    var newRect =
      String(bounds.ha) +
      "," +
      String(bounds.qa) +
      "," +
      String(bounds.oa) +
      "," +
      String(bounds.pa);
    // 변경된 정보 저장
    dispatch(changeRect(newRect));
  };

  // 지도가 그려진 후에 'dragend' 이벤트 인식
  if (map !== null) {
    kakao.maps.event.addListener(map, "dragend", function () {
      // 지도의 영역이 변경될 때마다 가장자리 좌표값 변경된 거 보내주기
      var bounds = map.getBounds();
      var newRect =
        String(bounds.ha) +
        "," +
        String(bounds.qa) +
        "," +
        String(bounds.oa) +
        "," +
        String(bounds.pa);
      dispatch(changeRect(newRect));
    });
  }

  // <TabBar2 />에서 검색 클릭 했을 때 true/false 값 가져오기
  const [searchOpen, setSearchOpen] = useState(false);
  const catchClickSearch = (isOpen) => {
    setSearchOpen(isOpen)
  }

  // <TabBar2 />에서 추천 클릭 했을 때 true/false 값 가져오기
  const [recommendOpen, setRecommendOpen] = useState(false);
  const catchClickRecommend = (isOpen) => {
    setRecommendOpen(isOpen)
  }

  return (
    <div id="map-all-wrapper">
      {/* 회원이 지정한 주소를 가져와 선택하게 하는 DIV */}
      <div>출발 주소 선택</div>
      <div>
        {/* <select onChange={addressSelect} value={selectAddress}>
          {memberAddressList.map((address) => (
            <option value={address} key={address.addressSeq}>
              {address.nick}
            </option>
          ))}
        </select> */}
      </div>
      <div id="map" className="map-wrapper">
        {/* 검색창 껐다 끄기 토클 */}
        {searchOpen && !recommendOpen?
          <PlaceSearch /> 
        :
          null
        }
        {!searchOpen && recommendOpen?
          <PlaceRecommend /> 
        :
          null
        }
        <Outlet />
      </div>
      <div className="map-button-wrapper">
        {!valid ? (
          <button
            className="map-button-vote"
            onClick={() => {
              setModalOpen(true);
              isValid(true);
            }}
          >
            <FaVoteYea size="40" color="#ffffff" />
          </button>
        ) : (
          <div></div>
          // <button className="map-button-vote">
          //   <BsFillCalendarCheckFill size="40" color="#ffffff" />
          // </button>
        )}
      </div>
      <div className="map-tab-wrapper">
        <TabBar2
          // 검색 클릭 했을 때 
          catchClickSearch={catchClickSearch}
          // 추천 클릭 했을 때
          catchClickRecommend={catchClickRecommend}
        />
      </div>
      {modalOpen && (
        <Modal2 closeModal={() => setModalOpen(!modalOpen)}>
          <div className="vote-done-wrapper">
            {/* <div className='new-promise-text-wrapper'>
        새로운 약속 생성
      </div> */}
            <div className="success-checkmark">
              <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </div>
            <div>
              <div className="vote-done-text-wrapper">투표가 종료되었습니다</div>
              <div className="vote-done-btn-wrapper">
                <div className="vote-done-top-sep-wrapper"></div>
                  <Link className="vote-done-btn-one-wrapper" to={"/main"}>
                    <button className="vote-done-btn-one-wrapper">Home</button>
                  </Link>
                <div className="vote-done-sep-wrapper"></div>
                  <Link className="vote-done-btn-two-wrapper" to={"/map/schedule"}>
                    <button className="vote-done-btn-two-wrapper" onClick={() => setModalOpen(false)}>Schedule</button>
                  </Link>
              </div>
            </div>
          </div>
        </Modal2>
      )}
    </div>
  );
}
