import React, {useState} from 'react';
import './TabBar.scss';
import Modal  from '../Modal/Modal';
import Calendar from '../Calendar/Calendar';
import { Link } from "react-router-dom";
import {MdPersonSearch} from "react-icons/md";
import {FaHome} from "react-icons/fa";
import {HiUserGroup} from "react-icons/hi";
import {BsPersonCircle} from "react-icons/bs";
import {ImPlus} from "react-icons/im";

export default function TabBar(props) {

    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);

  return (
    <>    <div className="Main">

    <input type="button" value="회원가입" className="blueBtn" onClick={() => setModalOpen(!modalOpen)}/>
    {modalOpen && (<Modal closeModal={() => setModalOpen(!modalOpen)}><Calendar/></Modal>
    )}
  </div>
  <div className="wrapper">
    <div className="navbar">
      <Link to={"/main"} className="link" style={{textDecoration: 'none'}}>
        <FaHome size="36" color="#ffffff"/>
      </Link>
      <Link to={"/friend"} className="link">
      <MdPersonSearch size="36" color="#ffffff"/>
      </Link>
      <Link to={"/promise"} className="link">
      <HiUserGroup size="36" color="#ffffff"  />
      </Link>
      <Link to={"/mypage"} className="link">
      <BsPersonCircle size="36" color="#ffffff"/>
      </Link>
      <div className="circle" >
      <Link to={"/promise"} className="link">
      <ImPlus size="36" color="#ffffff" />
      </Link>
      </div>
      <div className="circleBackground"></div>
    </div>
  </div></>
  )
}
