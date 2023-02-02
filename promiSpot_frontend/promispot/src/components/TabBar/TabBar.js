import React, {useState} from 'react';
import './TabBar.scss';
import Modal  from '../Modal/Modal';
import NewPromiseT from '../../pages/NewPromise/NewPromiseT';
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
    <>
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
      <div onClick={() => setModalOpen(true)}>
      
      <div className="circle" >

      <ImPlus size="36" color="#ffffff" />


      </div></div>
      <div className="circleBackground"></div>
    </div>
  </div>
  <div>
  {modalOpen && (<Modal closeModal={() => setModalOpen(!modalOpen)}><NewPromiseT/></Modal>)}</div>
  </>
  )
}
