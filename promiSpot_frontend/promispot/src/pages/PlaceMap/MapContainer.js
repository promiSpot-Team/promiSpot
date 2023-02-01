import { React, useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import { motion, Variants } from "framer-motion";
import "../scss/Map_Container.scss";
import mapdata from '../mapdata.json'

const { kakao } = window;

export default function MapContainer() {
  const [map, setMap] = useState(null);

  // 페이지 불러올 때 한 번만 지도 그리기
  useEffect(() => {
    mapscript();
  }, []);
  
  // 마커나 프로필이 추가됐을 때 
  useEffect(() => {
    console.log('sdf')
  }, [mapdata]);


  // 지도 그리기
  const mapscript = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5013, 127.0397),
      level: 2,
    };

    var map = new kakao.maps.Map(container, options)
    setMap(map)
  }
   
  // 지도가 그려진 후에 'dragend' 이벤트 인식
  if (map !== null) {
    kakao.maps.event.addListener(map, 'dragend', function(){
      console.log(map.getCenter(), map.getBounds().toString())
      // setBounds(map.getBounds().toString())
    })
  }
  
  return (
    <>
      <div
        id="map"
        className="map-wrapper"
      >
        <Link to='/map/search' state={{  }}>
          <button style={{
            position: "absolute",
            zIndex: 999,
            top: 0,
            left: 0,
          }}>
            검색
          </button>
        </Link>
        <Link to='/map/recommend'>
          <button style={{
            position: "absolute",
            zIndex: 999,
            
          }}>
            추천
          </button>
        </Link>

        <Outlet />
      </div>
    </>
  );
}
