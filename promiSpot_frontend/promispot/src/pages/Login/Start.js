import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BasicButton from "../../components/Buttons/BasicButton";
import "../scss/Start.scss";

function Start() {
  const [Title, setTitle] = useState("");
  const [Count, setCount] = useState(0);
  const completionWord = "함께\n정하는\n약속장소";

  // 글씨 하이라이트
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + completionWord[Count]
          : completionWord[0];
        setCount(Count + 1);

        if (Count >= completionWord.length) {
          setCount(0);
          setTitle("");
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <div className="start-scroll">
      <div className="start-wrapper">
        <div className="container">
          <div className="main-title">
            <div className="main-title-first-text">{Title}</div>
          </div>

          <span className="text first-text">함께</span>
          <span className="text second-text">정하는</span>
          <span className="text third-text">약속장소</span>
        </div>
        <div className="img-wrapper">
          <img
            className="img-wrapper"
            src={require("../../img/promispot_logo.png")}
          />
        </div>
        <div className="svg-wrapper">
          <svg
            viewBox="0 0 1000 1000"
            className="world"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="clipPath">
                <circle cx="500" cy="500" r="500" />
              </clipPath>

              <clipPath id="reflection">
                <rect width="1000" height="500" />
              </clipPath>

              <symbol id="star" viewBox="-20 -20 40 40">
                <circle className="stars" r="20" />
              </symbol>

              <radialGradient
                id="sky-gradient"
                cx="737.45"
                cy="94.64"
                r="800.05"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.03" stopColor="#ffd7ac" />
                <stop offset="0.5" stopColor="#f8a7a1" />
                <stop offset="0.92" stopColor="#6d5d91" />
              </radialGradient>

              <symbol id="sky" viewBox="0 0 1000 1000">
                <rect width="1000" height="1000" fill="url(#sky-gradient)" />
                <circle id="sun" className="sun" cx="600" cy="45vh" r="30" />
                <use
                  width="10"
                  height="10"
                  x="350"
                  y="550"
                  xlinkHref="#star"
                  className="star"
                />
                <use
                  width="10"
                  height="10"
                  x="470"
                  y="650"
                  xlinkHref="#star"
                  className="star"
                />
                <use
                  width="8"
                  height="8"
                  x="430"
                  y="750"
                  xlinkHref="#star"
                  className="star"
                />
                <use
                  width="9"
                  height="9"
                  x="250"
                  y="650"
                  xlinkHref="#star"
                  className="star"
                />
                <use
                  width="9"
                  height="9"
                  x="590"
                  y="780"
                  xlinkHref="#star"
                  className="star"
                />
                <use
                  width="5"
                  height="5"
                  x="700"
                  y="750"
                  xlinkHref="#star"
                  className="star"
                />
                <use
                  width="4"
                  height="4"
                  x="300"
                  y="800"
                  xlinkHref="#star"
                  className="star"
                />
              </symbol>
            </defs>

            <g id="planet" clipPath="url(#clipPath)">
              <use xlinkHref="#sky" className="sky"></use>
              <g clipPath="url(#reflection)" className="reflection">
                <use xlinkHref="#sky" className="sky"></use>
                <rect
                  id="ocean_light"
                  className="ocean"
                  width="1000"
                  height="500"
                />
              </g>
              <path
                className="hill_reflection"
                d="M638 547H457l51-32H-22l294 148 35-22 148 71 183-165"
              />
              <path className="hill_back" d="M-22 526l294-177 236 177H-22" />
              <path className="hill" d="M108 547l347-159 183 159H108" />
            </g>
          </svg>
        </div>

        <div className="start-btn-wrapper">
          <div className="start-btn">
            <Link to={"/login"} className="link">
              <BasicButton text="로그인" />
            </Link>
          </div>
          <div className="start-btn">
            <Link to={"/join"} className="link">
              <BasicButton text="회원가입" />
            </Link>
          </div>
          <div className="start-btn"></div>
        </div>
      </div>
    </div>
  );
}

export default Start;
