import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";

export default function Card(props) {
  const { date, time, title, promiseSeq, participantList } = props;

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
                <div
                  key={participant.memberSeq}
                  className="card-content-friend-img-div"
                >
                  <img
                    src={participant.memberImgPath}
                    alt={participant.memberNick}
                  />
                </div>
              );
            })}
        </div>
        <div className="card-content-button-div">
          <button onClick={moveToPromise}>입장</button>
          <button>나가기</button>
        </div>
      </div>
    </div>
  );
}
