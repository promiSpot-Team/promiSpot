import { React, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import TabBar2 from "../../components/TabBar/TabBar2";
import "../scss/Map_Container.scss";
import mapdata from "../mapdata.json";
import { useSelector } from "react-redux";
import store from "../../index";
import PlaceSearch from "./PlaceSearch";

const { kakao } = window;

export default function MapContainer() {
  const [isSearchSelect, setIsSearchSelect] = useState(false);
  const stateMapCenterPosition = useSelector(
    (state) => state.mapCenterPosition
  );
  const [mapCenter, setmapCenter] = useState(stateMapCenterPosition);
  const [map, setMap] = useState(null);
  const [rect, setRect] = useState("");
  const stateRect = useSelector((state) => state.rect);

  const navigate = useNavigate();
  // const { x, y } = useSelector(state => state.mapCenterPosition);

  // 페이지 불러올 때 한 번만 지도 그리기
  useEffect(() => {
    mapscript();
  }, []);

  // 마커나 프로필이 DB에 추가됐을 때
  useEffect(() => {}, [mapdata]);

  // 지도에 장소가 등록돼서 중심 위치를 변경시켜줘야할 때
  useEffect(() => {
    function panTo() {
      var moveLatLon = new kakao.maps.LatLng(mapCenter.x, mapCenter.y);
      if (map) map.panTo(moveLatLon);
    }
    panTo();
  }, [stateMapCenterPosition]);

  useEffect(() => {
    setRect(stateRect);
  }, [stateRect]);

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
    store.dispatch({
      type: "CHANGE_MAP_RECT",
      rect:
        String(bounds.ha) +
        "," +
        String(bounds.qa) +
        "," +
        String(bounds.oa) +
        "," +
        String(bounds.pa),
    });
  };

  // 지도가 그려진 후에 'dragend' 이벤트 인식
  if (map !== null) {
    kakao.maps.event.addListener(map, "dragend", function () {
      // 지도의 영역이 변경될 때마다 가장자리 좌표값 변경된 거 보내주기
      var bounds = map.getBounds();
      setRect(
        String(bounds.ha) +
          "," +
          String(bounds.qa) +
          "," +
          String(bounds.oa) +
          "," +
          String(bounds.pa)
      );
      store.dispatch({
        type: "CHANGE_MAP_RECT",
        rect,
      });
    });
  }

  return (
    <div id="map-all-wrapper">
      <div id="map" className="map-wrapper">
        {/* {isSearchSelect && (
          <PlaceSearch />
        )} */}
        {/* <Link to="/map/search" state={{ rect }}>
          <button
            style={{
              position: "absolute",
              zIndex: 999,
              top: 0,
              left: 0,
            }}
            onClick={() => navigate("/map/search")}
            // onClick={() => setIsSearchSelect(!isSearchSelect)}
          >
            검색
          </button>
        </Link> */}
        {/* <Link to="/map/recommend">
          <button
            style={{
              position: "absolute",
              zIndex: 999,
            }}
          >
            추천
          </button>
        </Link> */}

        <Outlet />
      </div>
      <div className="map-tab-wrapper">
        <TabBar2 />
      </div>
    </div>
  );
}
