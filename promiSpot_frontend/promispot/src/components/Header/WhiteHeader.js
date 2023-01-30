import react from "react";
import "./WhiteHeader.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const WhiteHeader = (props) => {
  const navigate = useNavigate();
  const { text } = props;

  return (
    <div className="white-header-wrapper">
      <div className="white-header-vector-wrapper" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="white-header-text-wrapper">{text}</div>
    </div>
    // <div className='header-wrapper'>
    //   {/* <PreButton /> */}
    //   <div className='header-vector-wrapper' onClick={() => { console.log('asdfasdf')}} style={{
    //     border: '1px solid black'
    //   }}>

    //       <img
    //       src={ require('../../images/vector.png') }/>
    //   </div>
    //   <div className='header-text-wrapper'>
    //       {text}
    //   </div>
    // </div>
  );
};

export default WhiteHeader;
