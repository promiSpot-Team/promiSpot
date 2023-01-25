import { React, useEffect } from 'react'
import mapdata from './mapdata.json'
import styles from "./MapContainer.module.css"

const { kakao } = window;

export default function MapContainer() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5013, 127.0397),
      level: 1
    };
    const map = new kakao.maps.Map(container, options);

    mapdata.places.forEach(place => {
      var customOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(place.place_y, place.place_x),
        content: `<div style=${styles.pin}>asdfs</div>`,
        xAnchor: 0.3,
        yAnchor: 0.91
      });
      
      customOverlay.setMap(map)
      // new kakao.maps.Marker({
      //   map: map, 
      //   position: new kakao.maps.LatLng(place.place_y, place.place_x),
      //   placeName: place.place_name
      // })
    })

    
  }

  return (
    <>
      <div id="map" style={{
          width: "100%",
          height: "400px"
        }}>
      </div>
    </>
  )
}
