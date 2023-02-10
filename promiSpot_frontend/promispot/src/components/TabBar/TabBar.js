import { getDate, getMonth } from "date-fns";
import { ko } from "date-fns/esm/locale";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsPersonCircle } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { ImPlus } from "react-icons/im";
import { MdPersonSearch } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm/InputForm";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import SearchBar from "../../components/Search/SearchBar";
import Modal from "../Modal/Modal";
import "./TabBar.scss";
import axios from 'axios'
import { SERVER_URL } from "../../constants/constants";

export default function TabBar(props) {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);
  const [nextModal, setNextModal] = useState(false);
  var d;
  const HandleInputFocus = () => {
    // console.log(data)
  };
  const changeNextModal = () => {
    setNextModal(!nextModal);
  };

  const [startDate, setStartDate] = useState(new Date());

  /* 친구 리스트 변수 선언 */ 
  const [friendList, setFriendList] = useState([]);
  
  /* 자식 컴포넌트에서 친구 리스트 data 가져와서 변수에 할당 */ 
  const importFriendList = (data) => {
    setFriendList(data)
  }

  /* 약속에 추가된 친구 목록 리덕스에서 가져오기 */
  const promiseFriendList = useSelector(state => state.promise.friendList)

  /* 약속 생성 axios */
  const createPromise = async () => {
    try {
      /* 약속 생성 */
      const response1 = await axios({
        method: 'POST', 
        url: `${SERVER_URL}/promise/createPromise`,
        data: {
          "promiseTitle" : "예시",
          "promiseLeader" : 1,
          "promiseDate" : "2023년 2월 17일",
          "promiseTime" : "02:00PM",
          "promiseDay" : "월요일",
          "promiseVoteIsFinish" : 0,
          "promiseScheduleIsFinish" : 0
        }
      })
      /* promiseSeq 값 받기 */
      const promiseSeq = response1.data.promiseSeq

      /* 약속 친구 추가 */
      const response2 = await axios({
        method: 'POST', 
        url: `${SERVER_URL}/promise/member/regist`,
        data: {
          promiseSeq,
          memberSeq: 4, 
          promiseMemberIsLeader: 0,
        }
      })
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="navbar">
          <div className="navbar-left">
            <div className="navbar-left-icon">
              <Link
                to={"/main"}
                className="link"
                style={{ textDecoration: "none" }}
              >
                <FaHome size="36" color="#ffffff" />
              </Link>
            </div>
            <div className="navbar-left-icon">
              <Link to={"/friend"} className="link">
                <MdPersonSearch size="36" color="#ffffff" />
              </Link>
            </div>
          </div>
          <div className="navbar-right">
            <div className="navbar-right-icon">
              <Link to={"/promise"} className="link">
                <HiUserGroup size="36" color="#ffffff" />
              </Link>
            </div>
            <div className="navbar-right-icon">
              <Link to={"/mypage"} className="link">
                <BsPersonCircle size="36" color="#ffffff" />
              </Link>
            </div>
          </div>
          <div onClick={() => setModalOpen(true)}>
            <div className="circle">
              <ImPlus size="36" color="#ffffff" />
            </div>
          </div>
          <div className="circleBackground"></div>
        </div>
      </div>
      <div>
        {modalOpen && (
          <Modal
            title="새로운 약속 생성"
            button="✖"
            closeModal={() => setModalOpen(!modalOpen)}
            importFriendList={importFriendList}
          >
            {!nextModal ? (
              <>
                <div className="new-promise-wrapper">
                  {/* <div className='new-promise-text-wrapper'>
                        새로운 약속 생성
                      </div> */}
                  <div className="new-promise-search-wrapper">
                    <SearchBar HandleInputFocus={HandleInputFocus} />
                  </div>
                  
                  {/* 임시 데이터
                  <div className="new-promise-profile-wrapper">
                    <ProfileInfo
                      imgName="IU_Profile"
                      nickName="국힙원탑"
                      id="IU"
                    />
                  </div> */}
                  {friendList.length > 0 && friendList.map((friend, idx) => {
                    return (
                      <div key={idx} className="new-promise-profile-wrapper">
                        <ProfileInfo
                          imgName="IU_Profile"
                          nickName={friend.memberNick}
                          id={friend.memberId}
                          friendSeq={friend.memberSeq}
                        />
                      </div>
                    )
                  })}
                  <div className="new-promise-under-wrapper">
                    <div className="new-promise-under-images-wrapper">
                      <div className="new-promise-under-img">
                        <img
                          src={require("../../img/IU_Profile.jpg")}
                          width="35px"
                        />
                      </div>
                    </div>
                    <div className="new-promise-under-btn-wrapper">
                      <button onClick={changeNextModal}>다음</button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="new-promise-wrapper"
                  onClick={(e) => console.log("out")}
                >
                  <div>
                    <InputForm
                      id="promise_title"
                      label="약속 제목"
                      placeholder="일정"
                    />{" "}
                  </div>

                  <DatePicker
                    selected={startDate}
                    value={startDate}
                    onChange={(date) => {
                      d = new Date(date).toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        weekday: "long",
                      });
                      console.log(d);
                      setStartDate(date);
                    }}
                    // showTimeSelect
                    // timeFormat="HH:mm"
                    // timeIntervals={15}
                    // timeCaption="time"
                    locale={ko} // 한글로 변경
                    dateFormat="yyyy.MM.dd(eee) h:mm aa" // 시간 포맷 변경
                    showPopperArrow={false} // 화살표 변경
                    minDate={new Date()} // 오늘 날짜 전은 선택 못하게
                    dayClassName={(d) =>
                      getDate(d) === getDate(startDate) &&
                      getMonth(d) === getMonth(startDate)
                        ? "normal-day selected-day"
                        : "normal-day"
                    }
                    inline
                  ></DatePicker>

                  <div onClick={createPromise} className="new-promise-under-btn-wrapper">
                    {/* <Link to={"/map"} className="link">
                      생성
                    </Link> */}
                  </div>
                </div>
              </>
            )}
          </Modal>
        )}
      </div>
    </>
  );
}
