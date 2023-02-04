import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../scss/DatePicker.scss";
import { ko } from "date-fns/esm/locale";
import { getMonth, getDate, getDay } from "date-fns";

export default function PromiseCalendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="promise-calendar-wrapper">
      <DatePicker
        selected={startDate}
        value={startDate}
        onChange={(date) => {
          const d = new Date(date).toLocaleDateString("ko-KR");
          console.log(d);
          setStartDate(date);
        }}
        locale={ko} // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        showPopperArrow={false} // 화살표 변경
        dayClassName={(d) =>
          getDate(d) === getDate(startDate) &&
          getMonth(d) === getMonth(startDate)
            ? "normal-day selected-day"
            : "normal-day"
        }
        inline
      />
    </div>
  );
}
