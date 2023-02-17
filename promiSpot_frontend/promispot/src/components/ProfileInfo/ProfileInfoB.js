import React from "react";
import "./ProfileInfoB.scss";

export default function ProfileInfo(props) {
  const { imgUrl, nickName, id } = props;

  return (
    <div className="profile-info-b-wrapper">
      <div className="profile-info-b-img-wrapper">
        <div className="profile-info-b-img">
          <img src={imgUrl} alt={nickName} title={nickName} width="40px" />
        </div>
      </div>
      <div className="profile-info-b-name-wrapper">
        <div className="profile-info-b-nickname-wrapper">{nickName}</div>
        <div className="profile-info-b-id-wrapper">{id}</div>
      </div>
      <div className="profile-info-b-icon-wrapper"></div>
    </div>
  );
}
