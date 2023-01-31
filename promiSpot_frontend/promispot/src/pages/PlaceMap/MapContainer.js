import { React, useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import { motion, Variants } from "framer-motion";
import "../scss/Map_Container.scss";
import mapdata from '../mapdata.json'

const { kakao } = window;

export default function MapContainer() {
  
  useEffect(() => {
    mapscript();
  }, []);

  // 지도 그리기
  const mapscript = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5013, 127.0397),
      level: 1,
    };
    const map = new kakao.maps.Map(container, options);

    mapdata.users.forEach((user) => {
      var customOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(37.5013, 127.0399),
        content: `<div class="map-user-profile"><img src=${user.profile_url}></div>`,
        xAnchor: 0.3,
        yAnnchor: 0.91
      })

      customOverlay.setMap(map);
    })

    // 커스텀 오버레이 (마커 모양)
    mapdata.places.forEach((place) => {
      var customOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(place.place_y, place.place_x),
        content: `<div class="pin"></div><div class="pulse"></div>`,
        xAnchor: 0.3,
        yAnchor: 0.91,
      });

      customOverlay.setMap(map);

    //   // 마커 그리기
    //   // const marker = new kakao.maps.Marker({
    //   //   map: map,
    //   //   clickable: true,
    //   //   position: new kakao.maps.LatLng(place.place_y, place.place_x),
    //   //   placeName: place.place_name
    //   // })

    //   // kakao.maps.event.addListener(marker, 'click', () => {
    //   //   console.log('click!')
    //   // })
    });
  };
  return (
    <>
      <div
        id="map"
        className="map-wrapper"
      >
        <Link to='/map/search'>
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
