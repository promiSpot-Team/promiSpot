import React, {useState} from 'react'
import Calendar from 'react-calendar'
import './Calendar.scss'

export default function PromiseCalendar() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value}/>
    </div>
  )
}
