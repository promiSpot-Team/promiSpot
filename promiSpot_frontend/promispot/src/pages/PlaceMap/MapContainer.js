import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { FaVoteYea } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Modal2 from "../../components/Modal/Modal2";
import TabBar2 from "../../components/TabBar/TabBar2";
import { SERVER_URL } from "../../constants/constants";
import { changeRect } from "../../Redux/reducer/map";
import mapdata from "../mapdata.json";
import "../scss/Map_Container.scss";
import PlaceRecommend from "./PlaceRecommend";
import PlaceSearch from "./PlaceSearch";
import { Content } from "antd/es/layout/layout";
import * as StompJs from "@stomp/stompjs";

const { kakao } = window;

export default function MapContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSearchSelect, setIsSearchSelect] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  /* 지도의 중심 위치 정보 redux에서 가져오기 */
  const stateMapCenterPosition = useSelector((state) => state.map.centerXY);

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

  ///////////////////////////////////// 민정 시작////////////////////////////////////////////////////////
  const location = useLocation();
  const [promiseSeq, setPromiseSeq] = useState();

  // const [promiseMemberList, setPromiseMemberList] = useState([]);
  // const getPromiseMembers = async () => {
  //   try {
  //     const response = await axios({
  //       method: "GET",
  //       url: `${SERVER_URL}/promise/member/getList/${promiseSeq}`,
  //     });
  //     setPromiseMemberList(response.data);
  //   } catch (err) {
  //     console.log(err.response.status);
  //   } //catch
  // };
  // useEffect(() => {
  //   getPromiseMembers();
  // }, []);

  ////////////////////////////////////////////////////////////////////////////////////////////////

  // 로그인한 회원 정보 가져오기
  const member = useSelector((state) => state.user.info);
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

  // 처음 페이지가 켜졌을 때 발생하는 함수들
  useEffect(() => {
    var path = location.pathname;
    var parse = path.split("/");
    var seq = parse[2];
    setPromiseSeq(seq);

    searchMemberAddressList();
    connect();
    return () => disconnect();
  }, []);
  // 멤버에 속한 주소가 잘 들어왔는지 확인하는 함수
  // useEffect(() => {
  //   console.log(memberAddressList);
  // }, [memberAddressList]);

  // 등록한 주소 중 하나 선택하기
  const [selectAddress, setSelectAddress] = useState();
  const addressSelect = (e) => {
    setSelectAddress(JSON.parse(e.currentTarget.value));
  };

  // 선택한 주소를 지도에 마커를 찍게 해준다.
  const [memberCustomOverlay, setMemberCustomOverlay] = useState();
  useEffect(() => {
    if (selectAddress) {
      // 선택을 바꿀 때 기존의 찍힌 마커를 지워주는 작업
      if (memberCustomOverlay) {
        memberCustomOverlay.setMap(null);
      }

      const profile_url =
        "https://cdn.lorem.space/images/face/.cache/150x150/nrd-ZmmAnliy1d4-unsplash.jpg";
      if (selectAddress) {
        var customOverlay = new kakao.maps.CustomOverlay({
          position: new kakao.maps.LatLng(selectAddress.addressX, selectAddress.addressY),
          content: `<div class="map-user-profile"><img src=${profile_url}></div>`,
          xAnchor: 0.3,
          yAnnchor: 0.91,
        });
        setMemberCustomOverlay(customOverlay);
        customOverlay.setMap(map);
      }
    }
  }, [selectAddress]);

  // 약속별 회원들이 등록한 출발지를 가져오는 함수
  const [departureList, setDepartureList] = new useState();
  const searchDepartureList = async () => {
    if (promiseSeq) {
      const response = await axios({
        method: "GET",
        url: `${SERVER_URL}/departure/getList/${promiseSeq}`,
      });
      if (response.data !== "fail") {
        setDepartureList(response.data);
      }
    }
  };
  useEffect(() => {
    searchDepartureList();
  }, [promiseSeq]); // 빈괄호는 처음 한 번만 실행한다는 뜻이다.

  // 전에 출발지들을 저장하는 변수
  const [beforeDepartureList, setBeforeDepartureList] = new useState();

  // 회원별 출발지가 변경되면 맵에 마커를 찍어줍니다.
  useEffect(() => {
    const profile_url =
      "https://cdn.lorem.space/images/face/.cache/150x150/nrd-ZmmAnliy1d4-unsplash.jpg";

    if (beforeDepartureList) {
      beforeDepartureList.forEach((beforeDeparture) => {
        beforeDeparture.setMap(null);
      });
    }

    setBeforeDepartureList([]);
    // departureList의 데이터로 마커 찍기
    if (departureList) {
      departureList.forEach((departure) => {
        var customOverlay = new kakao.maps.CustomOverlay({
          position: new kakao.maps.LatLng(departure.departureX, departure.departureY),
          content: `<div class="map-user-profile"><img src=${profile_url}></div>`,
          xAnchor: 0.3,
          yAnnchor: 0.91,
        });

        setBeforeDepartureList((prev) => [...prev, customOverlay]);
        customOverlay.setMap(map);
      });
    }
  }, [departureList]);

  //////////////////////////////////////
  ///////////// Stomp 통신 /////////////

  const client = useRef({});
  const connect = () => {
    client.current = new StompJs.Client({
      // brokerURL: "ws://i8a109.p.ssafy.io:9090/api/ws",
      brokerURL: `ws://localhost:9090/api/ws`,
      onConnect: () => {
        console.log("소켓 연결에 성공했습니다.");
        subscribe();
      },
    });
    client.current.activate();
  };

  // 출발지를 발행하는 코드
  const publish = () => {
    if (!client.current.connected) return;
    console.log("소켓 발신 성공");
    client.current.publish({
      destination: `/pub/departure`,
      body: JSON.stringify({
        promiseSeq: promiseSeq,
      }),
    });
  };

  // 출발지 발행을 받는 코드
  const subscribe = () => {
    var path = location.pathname;
    var parse = path.split("/");
    var promiseSeq1 = parse[2];
    const promiseSeq = client.current.subscribe(`/sub/departure/${promiseSeq1}`, (body) => {
      const json_body = JSON.parse(body.body);
      searchDepartureList();
      console.log("출발지를 subscribe로 받아옵니다.");
    });
  };

  // 연결자 연결종료
  const disconnect = () => {
    client.current.deactivate();
  };

  ////////////////////////////////////////
  ////////////////////////////////////////

  // 출발지를 DB에 저장하게 하는 함수
  // stomp 통신을 통해 다른 사용자에게도 보여줘야한다.
  const onhandleDeparturePost = async () => {
    const intPromiseSeq = parseInt(promiseSeq, 10);
    const sendData = {
      promiseSeq: intPromiseSeq,
      memberSeq: memberSeq,
      memberName: member.memberName,
      departureX: selectAddress.addressX,
      departureY: selectAddress.addressY,
    };
    console.log(sendData);
    try {
      const response = await axios({
        url: "/departure/insert",
        method: "POST",
        baseURL: SERVER_URL,
        data: sendData,
      });
    } catch (err) {
      console.log(err);
    }

    publish();

    // 출발지를 등록하면 DB에서 새로운 출발지를 받아와서 마커들을 찍어준다.
    searchDepartureList();
  };

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
  // });

  // 지도에 장소가 등록됐을 때
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
      console.log('center : ', map.getCenter())
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
    setSearchOpen(isOpen);
  };

  // <TabBar2 />에서 추천 클릭 했을 때 true/false 값 가져오기
  const [recommendOpen, setRecommendOpen] = useState(false);
  const catchClickRecommend = (isOpen) => {
    setRecommendOpen(isOpen);
  };

  return (
    <div id="map-all-wrapper">
      {/* 회원이 지정한 주소를 가져와 선택하게 하는 DIV */}
      <div>출발 주소 선택</div>
      <div>
        <select onChange={addressSelect}>
          {memberAddressList !== null &&
            memberAddressList.map((address) => {
              return (
                // <option key={address.addressSeq} value={`${address.addressX}_${address.addressY}`}> {address.addressNick} </option>
                <option key={address.addressSeq} value={JSON.stringify(address)}>
                  {" "}
                  {address.addressNick}{" "}
                </option>
              );
            })}
        </select>
      </div>
      <button onClick={onhandleDeparturePost}>출발지로 선택</button>

      <div id="map" className="map-wrapper">
        {/* 검색창 껐다 끄기 토클 */}
        {searchOpen && !recommendOpen ? <PlaceSearch /> : null}
        {!searchOpen && recommendOpen ? <PlaceRecommend /> : null}
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
                <Link className="vote-done-btn-two-wrapper" to={`/schedule/${promiseSeq}`}>
                  <button className="vote-done-btn-two-wrapper" onClick={() => setModalOpen(false)}>
                    Schedule
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Modal2>
      )}
    </div>
  );
}
