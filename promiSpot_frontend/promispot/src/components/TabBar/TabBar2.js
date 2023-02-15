import React, { useEffect, useState } from "react";
import { BsChatLeftDotsFill, BsPersonCircle } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { MdRecommend } from "react-icons/md";
import { Link } from "react-router-dom";
import "./TabBar.scss";
import { useLocation } from "react-router-dom";

// 지도 페이지에 들어가는 TabBar2
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
    // console.log(promiseSeq);
  }, [promiseSeq]);

  /* 장소 검색/추천 토글 */
  const [openSearch, setOpenSearch] = useState(false);
  const [openRecommend, setOpenRecommend] = useState(false);

  // 장소 검색 클릭
  const onClickSearch = () => {
    setOpenRecommend(false);
    setOpenSearch(!openSearch);
  };

  useEffect(() => {
    props.catchClickSearch(openSearch);
  }, [openSearch]);

  // 장소 추천 클릭
  const onClickRecommend = () => {
    setOpenSearch(false);
    setOpenRecommend(!openRecommend);
  };

  useEffect(() => {
    props.catchClickRecommend(openRecommend);
  }, [openRecommend]);

  return (
    <>
      <div className="wrapper">
        <div className="navbar">
          <div className="navbar-left">
            <Link
              className="navbar-left-one"
              to={"/main"}
              style={{ textDecoration: "none" }}
            >
              <div className="navbar-left-icon">
                <FaHome size="36" color="#ffffff" />
              </div>
              <div className="navbar-left-icon-txt">Home</div>
            </Link>
            <div className="navbar-left-one">
              <div className="navbar-left-icon">
                {/* <Link to={`/map/${promiseSeq}/search`} className="link"> */}
                <ImSearch size="36" color="#ffffff" onClick={onClickSearch} />
              </div>
              <div className="navbar-left-icon-txt">Search</div>
            </div>
            {/* </Link> */}
          </div>
          <div className="navbar-right">
            <div className="navbar-right-one">
              <div className="navbar-right-icon">
                {/* <Link to={`/map/${promiseSeq}/recommend`} className="link"> */}
                <MdRecommend
                  size="40"
                  color="#ffffff"
                  onClick={onClickRecommend}
                />
              </div>
              <div className="navbar-right-icon-txt">Recommend</div>
            </div>
            {/* </Link> */}
            <Link to={"/mypage"} className="navbar-right-one">
              <div className="navbar-right-icon">
                <BsPersonCircle size="36" color="#ffffff" />
              </div>
              <div className="navbar-right-icon-txt">MyPage</div>
            </Link>
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
