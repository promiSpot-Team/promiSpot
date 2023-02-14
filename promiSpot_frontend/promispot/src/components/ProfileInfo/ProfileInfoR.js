import React, { useState, useEffect } from "react";
import MiniButton from "../Buttons/MiniButton";
import { SERVER_URL } from "../../constants/constants";
import axios from "axios";
import "./ProfileInfoR.scss";

export default function ProfileInfo(props) {
  const { imgUrl, nickName, id } = props;
  // const imgUrl = "/images/" + imgName + ".jpg";
  const [axiosMethod, setAxiosMethod] = useState("");
  const [clearRequest, setClearRequest] = useState(false);

  /* 친구 요청 처리(수락/거절) 하기 */
  const processFriendRequest = async () => {
    try {
      const response = await axios({
        method: axiosMethod,
        url: `${SERVER_URL}/friend/request/${props.friendRequestSeq}`,
      });
      // console.log(response)
      setClearRequest(true);
    } catch (err) {
      console.log(err);
    }
  };

  /* 수락 -> PUT, 거절 -> DELETE */
  const onClick = (method) => {
    setAxiosMethod(method);
  };

  /* 버튼을 눌러서 axiosMethod가 변경되었을 때 PUT이나 DELETE인 경우(수락/거절인 경우)만 axios 실행 */
  useEffect(() => {
    if (axiosMethod === "PUT" || axiosMethod === "DELETE") {
      processFriendRequest();
    }
  }, [axiosMethod]);

  /* 요청 or 거절되었을 때 리스트에서 실시간으로 사라지게 하기 */
  if (clearRequest === true) {
    return null;
  }

  return (
    <div className="profile-info-r-wrapper">
      <div className="profile-info-r-img-wrapper">
        <div className="profile-info-r-img">
          <img src={imgUrl} alt={nickName} title={nickName} width="40px" />
        </div>
      </div>
      <div className="profile-info-r-name-wrapper">
        <div className="profile-info-r-nickname-wrapper">{nickName}</div>
        <div className="profile-info-r-id-wrapper">{id}</div>
      </div>
      <div className="profile-info-r-button-wrapper">
        <div className="profile-info-r-button" onClick={() => onClick("PUT")}>
          <MiniButton text="수락" />
        </div>
        <div
          className="profile-info-r-button"
          onClick={() => onClick("DELETE")}
        >
          <MiniButton text="거절" />
        </div>
      </div>
    </div>
  );
}
