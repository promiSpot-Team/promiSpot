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
      <div className="container">
    <span className="text first-text">함께</span>
    <span className="text second-text">정하는</span>
    <span className='text third-text'>약속장소</span>
</div>
        {/* <div className="start-logo-wrapper">
          <img src={require("../../img/promispot_logo.png")} width="300px" />

        </div> */}
        
    <div className="svg-wrapper">
    <img className = "img-wrapper" src={require("../../img/promispot_logo.png")} width="300px" />
    <svg viewBox="0 0 1000 1000" class="world" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
    <defs>
      <clipPath id="clip-path">
        <circle  cx="500" cy="500" r="400"/>
      </clipPath>
      
      <clipPath id="reflection">
        <rect width="1000" height="500"/>
      </clipPath>
      
      <symbol id="star" viewBox="-20 -20 40 40">
        <circle class="stars" r="20"/>
      </symbol>
  
      <radialGradient id="sky-gradient" cx="737.45" cy="94.64" r="800.05" gradientUnits="userSpaceOnUse">
        <stop offset="0.03" stop-color="#ffd7ac"/>
        <stop offset="0.5" stop-color="#f8a7a1"/>
        <stop offset="0.92" stop-color="#6d5d91"/>
      </radialGradient>
      
      <symbol id="sky" viewBox="0 0 1000 1000">
        <rect width="1000" height="1000" fill="url(#sky-gradient)"/>
        <circle id="sun" class="sun" cx="658" cy="265" r="62"/>
        <use width="10" height="10" x="350" y="550" xlinkHref="#star" class="star" />
        <use width="10" height="10" x="470" y="650" xlinkHref="#star" class="star" />
        <use width="8" height="8" x="430" y="750" xlinkHref="#star" class="star" />
        <use width="9" height="9" x="250" y="650" xlinkHref="#star" class="star" />
        <use width="9" height="9" x="590" y="780" xlinkHref="#star" class="star" />
        <use width="5" height="5" x="700" y="750" xlinkHref="#star" class="star" />
        <use width="4" height="4" x="300" y="800" xlinkHref="#star" class="star" />
      </symbol>
    </defs>
  
    <g id="planet" clip-path="url(#clip-path)">
      <use xlinkHref="#sky" class="sky" ></use>
      <g clip-path="url(#reflection)" class="reflection">
        <use xlinkHref="#sky" class="sky"></use>
        <rect id="ocean_light" class="ocean"  width="1000" height="500"/>
      </g>
      <path class="hill_reflection" d="M638 547H457l51-32H-22l294 148 35-22 148 71 183-165"/>
      <path class="hill_back" d="M-22 526l294-177 236 177H-22"/>
      <path class="hill" d="M108 547l347-159 183 159H108"/>
    </g>
  </svg></div>
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
