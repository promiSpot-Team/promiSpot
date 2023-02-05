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

export default function TabBar(props) {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

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
              ></Link>
              <FaHome size="36" color="#ffffff" />
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
          <Modal closeModal={() => setModalOpen(!modalOpen)}>
            <NewPromiseF />
          </Modal>
        )}
      </div>
    </>
  );
}
