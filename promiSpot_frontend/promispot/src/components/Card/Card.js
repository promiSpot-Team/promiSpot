import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";
import "./Card1.scss";

export default function Card(props) {
  const { date, time, title, imgLink, promiseSeq } = props;

  const navigate = useNavigate();

  const moveToPromise = () => {
    navigate(`/map/${promiseSeq}`);
  };

  return (
    // 카드 전체
    <div className="card-wrapper">
      {/* 카드 헤더 : 제목, 날짜, 시간 */}
      <div className="card-header">
        {/* 카드 제목 */}
         <div className="card-header-title">
          {title}
         </div>
         {/* 카드 날짜, 시간 */}
        <div className="card-header-date-time">
          <div className="card-header-date-div">
            <p>{date}</p>
          </div>
          <div className="card-header-title-div">
            <p>{time}</p>
          </div>
        </div>
      </div>
      {/* 카드 내용 : 친구들, 퇴장/입장 버튼 */}
      <div className="card-content">

      </div>
    </div>
    // <div className="card-wrapper">
    //   <div className="card-contents-wrapper">
    //     <div className="card-top-wrapper">
    //       <div className="card-header-wrapper">
    //         <div className="card-date-wrapper">{date}</div>
    //         <div className="card-time-wrapper">{time}</div>
    //       </div>
    //       <div className="card-title-wrapper">{title}</div>
    //     </div>
    //     <div className="card-img-wrapper">{imgLink}</div>
    //   </div>
    //   <button onClick={moveToPromise}> 입장 </button>
    //   <div className="card-outbtn-wrapper">나가기</div>
    // </div>
  );
}
