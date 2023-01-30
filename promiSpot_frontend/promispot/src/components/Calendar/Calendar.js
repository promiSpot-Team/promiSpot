import React, {useState} from 'react'
import Calendar from 'react-calendar'
import './Calendar.css'

export default function PromiseCalendar() {
  const [value, onChange] = useState(new Date());
  return (
    <div><div>Hello</div><Calendar onChange={onChange} value={value}/></div>
  )
}
