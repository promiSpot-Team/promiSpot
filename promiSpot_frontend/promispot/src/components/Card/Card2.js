import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card2.scss";

export default function Card2(props) {
  const { date, time, title, imgLink, promiseSeq, participantList } = props;

  var arr = date?.split(/[년월일 ]/);
  console.log("arr is", arr);
  var t1 = time?.substr(0, 5);
  var t2 = time?.substr(5, 6);
  const temp = () => {
    console.log("arr", arr, typeof arr);
  };
  const navigate = useNavigate();

  const moveToPromise = () => {
    navigate(`/map/${promiseSeq}`);
  };

  return (
    // 카드 전체
    <div className="card2-wrapper">
      {/* 카드 헤더 : 제목, 날짜, 시간 */}
      <div className="card2-header">
        <div className="card2-header-first">
          {/* 카드 날짜, 시간 */}
          <div className="card2-header-date-div">
            {arr[2]}/{arr[4]}
          </div>
          {/* 카드 제목 */}
          <div className="card2-header-title">{title}</div>
        </div>
        <div className="card2-header-title-div">{/* {t2} {t1} */}</div>
      </div>
      {/* 카드 내용 : 친구들, 퇴장/입장 버튼 */}
      <div className="card2-content">
        <div className="card2-content-friend-div">
          {participantList &&
            participantList.map((participant, idx) => {
              return (
                <div
                  key={participant.memberSeq}
                  className="card2-content-friend-img-div"
                >
                  <img
                    src={participant.memberImgPath}
                    alt={participant.memberNick}
                  />
                </div>
              );
            })}
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
