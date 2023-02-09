import React from 'react'
import { BsFillCalendarCheckFill } from "react-icons/bs";
import '../scss/Map_Container.scss'

export default function Schedule() {

return (
  <div className='schedule-background-wrapper'>
    <div className='map-button-wrapper'>
      <button className="map-button-schedule">
        <BsFillCalendarCheckFill size="40" color="#ffffff" />
      </button>
    </div>
  </div>
);
}
