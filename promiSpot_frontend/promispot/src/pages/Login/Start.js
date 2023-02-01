import react, { useContext } from "react";
import { Link } from "react-router-dom";
import BasicButton from "../../components/Buttons/BasicButton";
import Background from "../../components/Background/Background";
// import Header from '../components/header/header';
// import Footer from '../components/footer/footer';
import "../scss/Start.scss";

function Start() {
  return (
    <>
      {/* <Background/> */}
      <div className="start-wrapper">
        <div className="start-logo-wrapper">
          <img src={require("../../images/promispot_logo.png")} width="300px" />
        </div>
        <div className="start-btn-wrapper">
          <div className="start-btn">
            <Link to={"/login"} className="link">
              <BasicButton
                text="로그인"
                onClick={() => console.log("로그인!")}
              />
            </Link>
          </div>
          <div className="start-btn">
            <Link to={"/join"} className="link">
              <BasicButton
                text="회원가입"
                onClick={() => console.log("회원가입!")}
              />
            </Link>
          </div>
          <div className="start-btn"></div>
        </div>
      </div>
    </>
  );
}

export default Start;
