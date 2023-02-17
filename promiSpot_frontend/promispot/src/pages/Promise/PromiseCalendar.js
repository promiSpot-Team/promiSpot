import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "../scss/DatePicker.scss";
import { ko } from "date-fns/esm/locale";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";
import { getMonth, getDate, getDay } from "date-fns";
import { useSelector } from "react-redux";
import axios from "axios";
import { SERVER_URL } from "../../constants/constants";
import { useNavigate } from "react-router";

export default function PromiseCalendar() {
  // 서버에서 promiseList를 받아오기

  const [promiseList, setPromiseList] = useState(null);
  const memberSeq = useSelector((state) => state.user.info.memberSeq);
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState([]);

  // api 통신을 통해 회원아이디에 해당하는 promiseList 가져오기
  const searchPromiseList = async () => {
    const response = await axios({
      method: "GET",
      url: `${SERVER_URL}/promise/getList/${memberSeq}`,
    });
    if (response.data !== "fail") {
      setPromiseList(response.data);
      setMark([response.data[0].promiseDate]);
      // setMark(response.data.promiseDate);
    }
  };

  useEffect(() => {
    searchPromiseList();
  }, []);

  const navigate = useNavigate();

  const moveToPromise = () => {
    navigate("/map");
  };

  // setMark("2023-02-17");

  // setMark(["2023-02-02", "2023-02-02", "2023-02-10"]);
  return (
    <div className="promise-calendar-wrapper">
      {/* <DatePicker
        selected={startDate}
        value={startDate}
        onChange={(date) => {
          const d = new Date(date).toLocaleDateString("ko-KR");
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
      /> */}
      <Calendar
        onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
        formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
        value={value}
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        navigationLabel={null}
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date, view }) => {
          // 날짜 타일에 컨텐츠 추가하기 (html 태그)
          // 추가할 html 태그를 변수 초기화
          let html = [];
          // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
          if (mark.find((x) => x === moment(date).format("YYYY년 MM월 DD일"))) {
            html.push(<div className="dot"></div>);
          }
          // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
          return (
            <>
              <div className="flex justify-center items-center absoluteDiv">{html}</div>
            </>
          );
        }}
      />
    </div>
  );
}
