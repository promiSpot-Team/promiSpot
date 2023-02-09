import React, { useState } from "react";
import "./TabBar.scss";
import Modal from "../Modal/Modal";
import NewPromiseF from "../../pages/NewPromise/NewPromiseF";
import { Link } from "react-router-dom";
import { MdPersonSearch } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import { ImPlus } from "react-icons/im";
import SearchBar from "../../components/Search/SearchBar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import InputForm from "../../components/InputForm/InputForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { getMonth, getDate, getDay } from "date-fns";
import { weekdays } from "moment";

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

  const [friendList, setFriendList] = useState([]);

  const importFriendList = (data) => {
    setFriendList(data)
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
                  <div className="new-promise-profile-wrapper">
                    <ProfileInfo
                      imgName="IU_Profile"
                      nickName="국힙원탑"
                      id="IU"
                    />
                  </div>
                  {friendList.length > 0 && friendList.map((friend) => {
                    return (
                      <div className="new-promise-profile-wrapper">
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

                  <div className="new-promise-under-btn-wrapper">
                    <Link to={"/map"} className="link">
                      생성
                    </Link>
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
