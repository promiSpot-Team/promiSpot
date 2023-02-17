import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card1.scss";

export default function Card(props) {
  const { date, time, title, imgLink, promiseSeq, participantList } = props;

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
        <div className="card-header-title">{title}</div>
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
        <div className="card-content-friend-div">
          {participantList &&
            participantList.map((participant, idx) => {
              return (
                <div className="card-content-friend-wrapper">
                  <div
                    key={participant.memberSeq}
                    className="card-content-friend-img-div"
                  >
                    <img
                      src={participant.memberImgPath}
                      alt={participant.memberNick}
                    />
                  </div>
                  <div className="card-content-participant-txt">
                    <div className="card-content-participant-non-leader-txt">
                      {participant.memberName}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="card-content-button-div">
          {/* <div className="card-enter-btn"> */}
          <button onClick={moveToPromise}>입장</button>
          {/* </div> */}
          {/* <div className="card-exit-btn"> */}
          <button>나가기</button>
          {/* </div> */}
        </div>
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
