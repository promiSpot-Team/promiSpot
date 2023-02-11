import axios from "axios";
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
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../../components/InputForm/InputForm";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import SearchBar from "../../components/Search/SearchBar";
import { SERVER_URL } from "../../constants/constants";
import { clearPromiseFriend } from "../../reducer/promise";
import Modal from "../Modal/Modal";
import "./TabBar.scss";

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
  const navigate = useNavigate();

  /* 날짜랑 제목으로 약속 생성하기 */

  /* <InputForm />에서 약속 제목 입력값 받아오기 */
  const getInputPromiseTitle = (data) => {
    setPromiseTitle(data);
  };

  /* 날짜 변수 선언 */
  const [startDate, setStartDate] = useState(new Date());
  const [promiseDate, setPromiseDate] = useState();
  const [promiseTime, setPromiseTime] = useState();
  const [promiseDay, setPromiseDay] = useState();

  /* 날짜 데이터 정리*/
  const onChangeDatePicker = (date) => {
    d = new Date(date).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });

    /* 2023년 2월 19일 일요일 */
    setStartDate(date);

    /* 날짜 : 2023년 2월 19일 */
    setPromiseDate(d.slice(0, d.length - 3).trim());

    /* 요일 : 일요일 */
    setPromiseDay(d.slice(d.length - 3, d.length));

    /* 시간 : 03: 03PM */
    startDate.getHours() > 12
      ? setPromiseTime(
          (startDate.getHours() - 12).toString().padStart(2, "0") +
            ":" +
            startDate.getMinutes().toString().padStart(2, "0") +
            "PM"
        )
      : setPromiseTime(
          startDate.getHours().toString().padStart(2, "0") +
            ":" +
            startDate.getMinutes().toString().padStart(2, "0") +
            "AM"
        );
  };

  /* 친구 리스트 변수 선언 */
  const [friendList, setFriendList] = useState([]);

  /* 자식 컴포넌트에서 친구 리스트 data 가져와서 변수에 할당 */
  const importFriendList = (data) => {
    setFriendList(data);
  };

  /* 약속에 추가된 친구 목록 리덕스에서 가져오기 */
  const promiseFriendList = useSelector((state) => state.promise.friendList);
  const memberSeq = useSelector((state) => state.user.info.memberSeq);
  const [promiseTitle, setPromiseTitle] = useState("약속1");

  /* 약속 생성 axios */
  const createPromise = async () => {
    console.log(promiseDate, promiseTitle, promiseTime, promiseDay);
    try {
      /* 약속 생성 */
      const response1 = await axios({
        method: "POST",
        url: `${SERVER_URL}/promise/create`,
        data: {
          promiseTitle,
          promiseLeader: memberSeq,
          promiseDate,
          promiseTime,
          promiseDay,
          promiseVoteIsFinish: 0,
          promiseScheduleIsFinish: 0,
        },
      });

      /* promiseSeq 값 받기 */
      const promiseSeq = response1.data.promiseSeq;

      /* 약속 친구 추가 */
      const newFriend = promiseFriendList.map((friendSeq) => {
        return {
          promiseSeq,
          memberSeq: friendSeq,
          promiseMemberIsLeader: 0,
        };
      });
      /* 현재 약속 생성을 누르는 유저 = 약속장의 데이터 추가 */
      newFriend.push({
        promiseSeq,
        memberSeq,
        promiseMemberIsLeader: 1,
      });

      /* 약속 친구 추가 */
      const response2 = await axios({
        method: "POST",
        url: `${SERVER_URL}/promise/member/regist`,
        data: newFriend,
      });
      /* 약속 친구까지 추가되면 맵 생성 */
      if (response2.data === "success") {
        navigate(`/map/${promiseSeq}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* modal이 닫히면 저장해둔 약속 친구 정보 지우기 */
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!modalOpen) {
      dispatch(clearPromiseFriend());
    }
  }, [modalOpen]);

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
                <div className="navbar-left-icon-txt">Home</div>
              </Link>
            </div>
            <div className="navbar-left-icon">
              <Link to={"/friend"} className="link">
                <MdPersonSearch size="36" color="#ffffff" />
                <div className="navbar-left-icon-txt">Friend</div>
              </Link>
            </div>
          </div>
          <div className="navbar-right">
            <div className="navbar-right-icon">
              <Link to={"/promise"} className="link">
                <HiUserGroup size="36" color="#ffffff" />
                <div className="navbar-right-icon-txt">Promise</div>
              </Link>
            </div>
            <div className="navbar-right-icon">
              <Link to={"/mypage"} className="link">
                <BsPersonCircle size="36" color="#ffffff" />
                <div className="navbar-right-icon-txt">MyPage</div>
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
                  {friendList.length > 0 &&
                    friendList.map((friend, idx) => {
                      return (
                        <div key={idx} className="new-promise-profile-wrapper">
                          <ProfileInfo
                            imgName="IU_Profile"
                            nickName={friend.memberNick}
                            id={friend.memberId}
                            friendSeq={friend.memberSeq}
                          />
                        </div>
                      );
                    })}
                  <div className="new-promise-under-wrapper">
                    <div className="inner-wrapper">
                      {promiseFriendList.map((promiseFriend, idx) => {
                        return (
                          <div
                            key={idx}
                            className="new-promise-under-images-wrapper"
                          >
                            <div className="new-promise-under-img">
                              <img
                                src={require("../../img/IU_Profile.jpg")}
                                width="35px"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="new-promise-under-btn-wrapper">
                      <button onClick={changeNextModal}>다음</button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="new-promise-wrapper">
                  <div>
                    <InputForm
                      id="promise_title"
                      label="약속 제목"
                      placeholder="일정"
                      getInputPromiseTitle={getInputPromiseTitle}
                    />{" "}
                  </div>

                  <DatePicker
                    selected={startDate}
                    value={startDate}
                    onChange={onChangeDatePicker}
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

                  <div
                    onClick={createPromise}
                    className="new-promise-under-btn-wrapper"
                  >
                    {/* <Link to={"/map"} className="link"> */}
                    생성
                    {/* </Link> */}
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
