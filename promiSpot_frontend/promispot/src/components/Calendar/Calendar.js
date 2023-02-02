import React, {useState} from 'react'
import Calendar from 'react-calendar'
import moment, {Moment as MomentTypes} from 'moment';

import './Calendar.scss'

export default function PromiseCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div>{moment(value).format("YYYY년 MM월 DD일")}</div>
      <Calendar onChange={onChange} value={value}/>
    </div>
  )
}
