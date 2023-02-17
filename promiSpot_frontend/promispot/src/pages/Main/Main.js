import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Info from "../../components/Info/Info";
import TabBar from "../../components/TabBar/TabBar";
import { SERVER_URL } from "../../constants/constants";
import "../scss/Main.scss";
import { setToken } from "../../Redux/reducer/user";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card2 from "../../components/Card/Card2";
import { useLocation } from "react-router";

export default function Main() {
  const [promiseList, setPromiseList] = useState(null);
  const memberSeq = useSelector((state) => state?.user?.info?.memberSeq);

  const location = useLocation();

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  };

  // const searchVotePlaceList = async () => {
  //   try {
  //     const response = await axios({
  //       method: "GET",
  //       url: `${SERVER_URL}/vote/getVotePlaceList/${promiseSeq}`,
  //     });
  //     if (response.data !== "fail") {
  //       setVotePlaceList(response.data);

  //       console.log(response.data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  // if (!memberSeq) {
  //   window.location.replace('/login')
  // }

  const dispatch = useDispatch();
  const [votePlaceList, setVotePlaceList] = useState([]);

  const searchPromiseList = async () => {
    const response = await axios({
      method: "GET",
      url: `${SERVER_URL}/promise/getList/${memberSeq}`,
    });
    if (response.data !== "fail") {
      setPromiseList(response.data);
      const promiseSeq = response.data[0].promiseSeq;
      const response1 = await axios({
        method: "GET",
        url: `${SERVER_URL}/vote/getVotePlaceList/${promiseSeq}`,
      });
      if (response.data !== "fail") {
        setVotePlaceList(response1.data);
        console.log(response1.data);
      }
    }
  };
  useEffect(() => {
    searchPromiseList();
    // searchVotePlaceList();
  }, []);


  console.log("promiseList", promiseList)
  return (
    <div className="main-wrapper">
      {/* <button onClick={logOut}>로그아웃</button> */}
      <div className="main-top-wrapper">
        <div className="main-top-logo-wrapper">
          <img
            src={require("../../img/promiSpot_long_logo.png")}
            width="150px"
          />
        </div>
      </div>
      <div className="main-info-wrapper">
        <div>
          <Slider {...settings}>
            {promiseList !== null &&
              promiseList.map((promise) => {
                return (
                  <div
                    className="promise-list-each-wrapper"
                    key={promise.promiseSeq}
                  >
                    <Card2
                      date={promise.promiseDate}
                      time={promise.promiseTime}
                      title={promise.promiseTitle}
                      promiseSeq={promise.promiseSeq}
                      participantList={promise.participantList}
                    ></Card2>
                  </div>
                );
              })}
          </Slider>
        </div>
        {/* <Info date="1/12" subject="점심팟" time="10:00AM" /> */}
      </div>
      <div className="main-img">
        {/* <img src={require("../../img/Roadmap.png")} width="300px" /> */}
      </div>
      <div className="main-tabbar-wrapper">
        <TabBar />
      </div>
    </div>
  );
}
