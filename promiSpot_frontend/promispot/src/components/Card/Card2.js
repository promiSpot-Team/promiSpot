import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaVoteYea } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";
import "./Card2.scss";

export default function Card2(props) {
  const { date, time, title, imgLink, promiseSeq, participantList } = props;
  // const [arr, setArr] = React.useState(null)
  var arr = date?.split(/[년월일 ]/);
  var t1 = time?.substr(0, 5);
  var t2 = time?.substr(5, 6);

  const navigate = useNavigate();

  const moveToPromise = () => {
    navigate(`/map/${promiseSeq}`);
  };

  // const [votePlaceList, setVotePlaceList] = useState();
  // const searchVotePlaceList = async () => {
  //   var path = location.pathname;
  //   var parse = path.split("/");
  //   var promiseSeq = parse[2];

  //   const response = await axios({
  //     method: "GET",
  //     url: `${SERVER_URL}/vote/getVotePlaceList/${promiseSeq}`,
  //   });
  //   if (response.data !== "fail") {
  //     setVotePlaceList(response.data);
  //   }
  // };
  const [votePlaceList, setVotePlaceList] = useState([]);
  const searchVotePlaceList = async () => {
    const response = await axios({
      method: "GET",
      url: `${SERVER_URL}/vote/getVotePlaceList/${promiseSeq}`,
    });
    if (response.data !== "fail") {
      setVotePlaceList(response.data);
    }
  };

  useEffect(() => {
    searchVotePlaceList();
  }, []);

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
                <div className="card2-content-friend-one">
                  <div
                    key={participant.memberSeq}
                    className="card2-content-friend-img-div"
                  >
                    <img
                      src={participant.memberImgPath}
                      alt={participant.memberNick}
                    />
                  </div>
                  <div className="card2-content-friend-nick">
                    {participant.memberNick}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="card2-content-vote-wrapper">
          <div className="card2-content-vote-title">
            <FaVoteYea className="card2-content-button-vote-icon" size="25" />
            <div className="card2-content-button-vote-txt">투표 현황</div>
          </div>
          {votePlaceList &&
            votePlaceList.map((votePlace, index) => {
              return (
                <div key={index} className="card2-content-vote-now-one-wrapper">
                  <div className="card2-content-vote-now-one-name">
                    {votePlace.placeName}
                  </div>
                  <div className="card2-content-vote-now-one-cnt">
                    {votePlace.voteCnt}표
                  </div>
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
