import { React, useEffect } from 'react'
import mapdata from './mapdata.json'
import styles from "./MapContainer.module.scss"
import SearchBar from '../components/search/SearchBar';

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
      level: 1
    };
    const map = new kakao.maps.Map(container, options);
    
    // 커스텀 오버레이 (마커 모양)
    mapdata.places.forEach(place => {
      var customOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(place.place_y, place.place_x),
        content: `<div class=${styles.pin} onclick="showDetail()"}></div><div class=${styles.pulse}></div>`,
        xAnchor: 0.3,
        yAnchor: 0.91
      });

      customOverlay.setMap(map)
      
      // 마커 그리기
      // const marker = new kakao.maps.Marker({
      //   map: map, 
      //   clickable: true,
      //   position: new kakao.maps.LatLng(place.place_y, place.place_x),
      //   placeName: place.place_name
      // })

      // kakao.maps.event.addListener(marker, 'click', () => {
      //   console.log('click!')
      // })
    })
  }
  return (
    <>
      <SearchBar />
      <div id="map" style={{
          width: "100%",
          height: "400px"
        }}>
      </div>
    </>
  )
}
