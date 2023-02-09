import React, { useEffect, useState } from "react";
import "./TabBar2.scss";
import Modal from "../Modal/Modal";
import NewPromiseF from "../../pages/NewPromise/NewPromiseF";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { MdRecommend } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { BsChatLeftDotsFill } from "react-icons/bs";

import { useLocation } from "react-router-dom";

export default function TabBar2(props) {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // url에서 promiseSeq 가져오기
  const [promiseSeq, setPromiseSeq] = useState();
  const location = useLocation();
  useEffect(() => {
    var path = location.pathname;
    var parse = path.split("/");
    var seq = parse[2];
    setPromiseSeq(seq);
  }, []);

  useEffect(() => {
    console.log(promiseSeq);
  }, [promiseSeq]);

  return (
    <>
      <div className="wrapper">
        <div className="navbar">
          <div className="navbar-left">
            <div className="navbar-left-icon">
              <Link to={"/main"} className="link" style={{ textDecoration: "none" }}>
                <FaHome size="36" color="#ffffff" />
              </Link>
            </div>
            <div className="navbar-left-icon">
              <Link to={`/map/${promiseSeq}/search`} className="link">
                <ImSearch size="36" color="#ffffff" />
              </Link>
            </div>
          </div>
          <div className="navbar-right">
            <div className="navbar-right-icon">
              <Link to={`/map/${promiseSeq}/recommend`} className="link">
                <MdRecommend size="36" color="#ffffff" />
              </Link>
            </div>
            <div className="navbar-right-icon">
              <Link to={"/mypage"} className="link">
                <BsPersonCircle size="36" color="#ffffff" />
              </Link>
            </div>
          </div>
          <Link to={`/map/${promiseSeq}/chatting`}>
            <div className="circle">
              <BsChatLeftDotsFill size="36" color="#ffffff" />
            </div>
          </Link>
        </div>
        <div className="circleBackground"></div>
      </div>
    </>
  );
}
