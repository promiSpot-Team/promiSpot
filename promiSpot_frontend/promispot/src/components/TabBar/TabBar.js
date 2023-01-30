import React from 'react';
import './TabBar.scss';
import { Link } from "react-router-dom";
import {MdPersonSearch} from "react-icons/md";
import {FaHome} from "react-icons/fa";
import {HiUserGroup} from "react-icons/hi";
import {BsPersonCircle} from "react-icons/bs";
import {ImPlus} from "react-icons/im";

export default function TabBar() {
  return (
  <div class="wrapper">
    <div class="navbar">
      <Link to={"/main"} className="link" style={{textDecoration: 'none'}}>
        <FaHome size="36" color="#3f3f3f"/>
      </Link>
      <Link to={"/friend"} className="link">
      <MdPersonSearch size="36" color="#3f3f3f"/>
      </Link>
      <Link to={"/promise"} className="link">
      <HiUserGroup size="36" color="#3f3f3f"/>
      </Link>
      <Link to={"/mypage"} className="link">
      <BsPersonCircle size="36" color="#3f3f3f"/>
      </Link>
      <div class="circle">
      <Link to={"/promise"} className="link">
      <ImPlus size="36" color="#3f3f3f"/>
      </Link>
        {/* <i class="fab fa-youtube social"></i>
        <i class="fab fa-twitter social"></i>
        <i class="fab fa-github  social"></i> */}
      </div>
      <div class="circleBackground"></div>
    </div>
  </div>
  )
}
