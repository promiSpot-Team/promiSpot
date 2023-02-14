import React from "react";
import MiniButton from "../Buttons/MiniButton";
import "./ProfileInfoSR.scss";

export default function ProfileInfo(props) {
  const { imgUrl, nickName, id, isValid } = props;
  // const imgUrl = "/images/" + imgName + ".jpg";

  return (
    <div className="profile-info-sr-wrapper">
      <div className="profile-info-sr-img-wrapper">
        <div className="profile-info-sr-img">
          <img src={imgUrl} alt={nickName} title={nickName} width="40px" />
        </div>
      </div>
      <div className="profile-info-sr-name-wrapper">
        <div className="profile-info-sr-nickname-wrapper">{nickName}</div>
        <div className="profile-info-sr-id-wrapper">{id}</div>
      </div>
      <div className="profile-info-sr-button-wrapper">
        <div className="profile-info-sr-button">
          <button onClick={isValid}>요청</button>
        </div>
      </div>
    </div>
  );
}
