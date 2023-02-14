import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../constants/constants";
import MiniButton from "../Buttons/MiniButton";
import "./ProfileInfoS.scss";

export default function ProfileInfo(props) {
  const { imgUrl, nickName, id } = props;
  // const imgUrl = "/images/" + imgName + ".jpg";
  const [axiosMethod, setAxiosMethod] = useState("");
  const [clearRequest, setClearRequest] = useState(false);

  /* 친구 요청 취소 하기 */
  const cancelFriendRequest = async () => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${SERVER_URL}/friend/request/${props.friendRequestSeq}`,
      });
      // console.log(response)
      setClearRequest(true);
    } catch (err) {
      console.log(err);
    }
  };
  const onClick = (method) => {
    setAxiosMethod(method);
  };
  useEffect(() => {
    if (axiosMethod === "DELETE") {
      cancelFriendRequest();
    }
  }, [axiosMethod]);

  if (clearRequest === true) {
    return null;
  }

  return (
    <div className="profile-info-s-wrapper">
      <div className="profile-info-s-img-wrapper">
        <div className="profile-info-s-img">
          <img src={imgUrl} alt={nickName} title={nickName} width="40px" />
        </div>
      </div>
      <div className="profile-info-s-name-wrapper">
        <div className="profile-info-s-nickname-wrapper">{nickName}</div>
        <div className="profile-info-s-id-wrapper">{id}</div>
      </div>
      <div
        className="profile-info-s-icon-wrapper"
        onClick={() => onClick("DELETE")}
      >
        <MiniButton text="요청 취소" />
      </div>
    </div>
  );
}
