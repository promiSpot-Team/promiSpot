//import React from 'react'
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from '../../components/DragDrop/DragDrop';
import { useDispatch, useSelector } from "react-redux";
import { React, useEffect, useRef, useState } from "react";
import { changeRect } from "../../Redux/reducer/map";
import mapdata from "../mapdata.json";

import '../scss/Map_Container.scss'

const { kakao } = window;

export default function Schedule() {
  const mapscript = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5013, 127.0397),
      level: 2,
    };

    var map = new kakao.maps.Map(container, options);
    // setMap(map);
  };

  useEffect(() => {
    mapscript()
  }, [])

  return (
    <div id="map" style={{ width: '100vw', height: '100vh' }}>
         <div className='schedule-wrapper'>
           <div className='schedule-background-wrapper'>
  
             {/* <DndProvider backend={HTML5Backend}>
      //   <DragDrop/>
      // </DndProvider> */}
             <button className="draggable" draggable="true">🦊</button>
             <button className="draggable" draggable="true">🐸</button>
           </div>
           <div className='map-button-wrapper'>
             <button className="map-button-schedule">
               <BsFillCalendarCheckFill size="40" color="#ffffff" />
             </button>
           </div>
         </div>
      
    </div>
    )
  }
