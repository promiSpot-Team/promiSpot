import react from "react";
import "./WhiteHeader.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const WhiteHeader = (props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  const { text, onClick } = props;

  return (
    <div className="white-header-wrapper">
      <div className="white-header-vector-wrapper">
        <FontAwesomeIcon
          onClick={handleNavigate}
          icon={faChevronLeft}
          size="lg"
        />
      </div>
      <div className="white-header-text-wrapper">{text}</div>
    </div>
  );
};

export default WhiteHeader;
