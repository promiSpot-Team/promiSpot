import React, { useEffect, useState } from "react";
import { BsChatLeftDotsFill, BsPersonCircle } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { MdRecommend } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./TabBar2.scss";
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
  const [openInfo, setOpenInfo] = useState(false);

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

  // 약속 정보 클릭
  const onClickInfo = () => {
    setOpenInfo(false);
    setOpenInfo(!openInfo);
  };

  useEffect(() => {
    if (props.catchClickInfo) props.catchClickInfo(openInfo);
  }, [openInfo]);

  return (
    <>
      <div className="wrapper">
        <div className="navbar">
          <div className="navbar-left-2">
            <Link
              className="navbar-left-2-one"
              to={"/main"}
              style={{ textDecoration: "none" }}
            >
              <div className="navbar-left-2-icon">
                <FaHome size="36" color="#ffffff" />
              </div>
              <div className="navbar-left-2-icon-txt">Home</div>
            </Link>
            <div className="navbar-left-2-one">
              <div className="navbar-left-2-icon">
                {/* <Link to={`/map/${promiseSeq}/search`} className="link"> */}
                <ImSearch size="36" color="#ffffff" onClick={onClickSearch} />
              </div>
              <div className="navbar-left-2-icon-txt">Search</div>
            </div>
            {/* </Link> */}
          </div>
          <div className="navbar-right-2">
            <div className="navbar-right-2-one">
              <div className="navbar-right-2-icon">
                {/* <Link to={`/map/${promiseSeq}/recommend`} className="link"> */}
                <MdRecommend
                  size="40"
                  color="#ffffff"
                  onClick={onClickRecommend}
                />
              </div>
              <div className="navbar-right-2-icon-txt">Recommend</div>
            </div>
            {/* </Link> */}
            <div className="navbar-right-2-one">
              <div className="navbar-right-2-icon">
                <AiFillInfoCircle
                  size="36"
                  color="#ffffff"
                  onClick={onClickInfo}
                />
              </div>
              <div className="navbar-right-2-icon-txt">Info</div>
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
