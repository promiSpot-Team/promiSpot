import React, {useState} from 'react'
import InputForm from '../../components/InputForm/InputForm'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { getMonth, getDate, getDay } from "date-fns";
import '../scss/NewPromiseT.scss'

export default function NewPromiseT() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='new-promise-wrapper'>
      <div className='new-promise-text-wrapper'>
        새로운 약속 생성
      </div>
      
      <div><InputForm id="promise_title" label="약속 제목" placeholder="2월 3일 일정"/> </div>
      
    <DatePicker
    	selected={startDate} 
      value={startDate}
	onChange={(date) => {
    const d = new Date(date).toLocaleDateString('ko-KR');
    console.log(d);
    setStartDate(date);}}
        locale={ko}                   // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        showPopperArrow={false}       // 화살표 변경
        minDate={new Date()}          // 오늘 날짜 전은 선택 못하게
        
        dayClassName={(d) =>
            getDate(d) === getDate(startDate) && getMonth(d) === getMonth(startDate)
                ? 'normal-day selected-day'
                : 'normal-day'
        }
    >
    </DatePicker>

    <div className='new-promise-under-btn-wrapper'>
      생성
    </div>
</div>
  )
}
