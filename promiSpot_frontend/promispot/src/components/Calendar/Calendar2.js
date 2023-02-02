import React from 'react'
import { Calendar } from 'react-date-range'
import ko from 'date-fns/locale/ko';	     // 날짜 포맷 라이브러리 (한국어 기능을 임포트)
import moment from 'moment';		     // 날짜 포맷 라이브러리
import 'react-date-range/dist/styles.css'; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Calendar2() {
  return (
    <Calendar date={new Date()} onChange={this.handleSelect}/>
  )
}
