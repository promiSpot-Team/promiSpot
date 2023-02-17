import React, { useState, useEffect } from "react";
import SearchBar from "../../components/Search/SearchBar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Modal from "../../components/Modal/Modal";
import NewPromiseT from "./NewPromiseT";
import "../scss/NewPromiseF.scss";
import { useSelector } from "react-redux";

export default function NewPromiseF() {
  const [modalOpen, setModalOpen] = useState(false);
  // const memberSeq = useSelector(state => state?.user?.info?.memberSeq ? state.user.info.memberSeq : 0)

  const [showNextModal, setShowNextModal] = useState(false);

  const changeModal = () => {
    setShowNextModal(!showNextModal);
  };

  // useEffect(() => {
  //   getFriendList()
  // }, [])

  const HandleInputFocus = () => {};

  // useEffect(() => {
  // }, [friendList])

  return (
    <div className="new-promise-wrapper">
      {/* <div className='new-promise-text-wrapper'>
        새로운 약속 생성
      </div> */}
      <div className="new-promise-search-wrapper">
        <SearchBar HandleInputFocus={HandleInputFocus} />
      </div>
      <div className="new-promise-profile-wrapper">
        <ProfileInfo imgName="IU_Profile" nickName="국힙원탑" id="IU" />
      </div>
      <div className="new-promise-profile-wrapper">
        <ProfileInfo imgName="KSH_Profile" nickName="도민준" id="KSH" />
      </div>
      <div className="new-promise-profile-wrapper">
        <ProfileInfo imgName="KYJ_Profile" nickName="세자빈" id="KYJ" />
      </div>
      <div className="new-promise-profile-wrapper">
        <ProfileInfo imgName="PBG_Profile" nickName="보거미" id="PBG" />
      </div>
      <div className="new-promise-under-wrapper">
        <div className="new-promise-under-images-wrapper">
          <div className="new-promise-under-img">
            <img src={require("../../img/IU_Profile.jpg")} width="35px" />
          </div>
        </div>
        <div
          className="new-promise-under-btn-wrapper"
          onClick={() => setModalOpen(true)}
        >
          <button onClick={changeModal}>다음</button>
        </div>
      </div>
      {modalOpen && (
        <Modal closeModal={() => setModalOpen(!modalOpen)}>
          <NewPromiseT />
        </Modal>
      )}
    </div>
  );
}
