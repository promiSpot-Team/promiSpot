import React, {useState} from 'react';
import './TabBar2.scss';
import Modal  from '../Modal/Modal';
import NewPromiseF from '../../pages/NewPromise/NewPromiseF';
import { Link } from "react-router-dom";
import {ImSearch} from "react-icons/im";
import {FaHome} from "react-icons/fa";
import {MdRecommend} from "react-icons/md";
import {BsPersonCircle} from "react-icons/bs";
import {BsChatLeftDotsFill} from "react-icons/bs";

export default function TabBar2(props) {

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
      <ImSearch size="36" color="#ffffff"/>
      </Link>
      <Link to={"/promise"} className="link">
      <MdRecommend size="36" color="#ffffff"  />
      </Link>
      <Link to={"/mypage"} className="link">
      <BsPersonCircle size="36" color="#ffffff"/>
      </Link>
      <div onClick={() => setModalOpen(true)}>
      
      <div className="circle" >

      <BsChatLeftDotsFill size="36" color="#ffffff" />


      </div></div>
      <div className="circleBackground"></div>
    </div>
  </div>
  <div>
  {modalOpen && (<Modal closeModal={() => setModalOpen(!modalOpen)}><NewPromiseF/></Modal>)}</div>
  </>
  )
}
