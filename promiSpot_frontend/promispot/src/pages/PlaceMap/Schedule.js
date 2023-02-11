import React from 'react'
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from '../../components/DragDrop/DragDrop';
import '../scss/Map_Container.scss'

export default function Schedule() {


return (
  <div className='schedule-wrapper'>
    <div className='schedule-background-wrapper'>
    {/* <DndProvider backend={HTML5Backend}>
      <DragDrop/>
    </DndProvider> */}
      <button className="draggable" draggable="true">🦊</button>
    <button className="draggable" draggable="true">🐸</button>
    </div>
    <div className='map-button-wrapper'>
      <button className="map-button-schedule">
        <BsFillCalendarCheckFill size="40" color="#ffffff" />
      </button>
    </div>
  </div>
);
}

