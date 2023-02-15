import React, { useState } from "react";
import { BsPersonPlusFill, BsPersonDashFill } from "react-icons/bs";
import "./ProfileInfo.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPromiseFriend } from "../../Redux/reducer/promise";

export default function ProfileInfo(props) {
  const { imgUrl, nickName, id, friendSeq = null } = props;
  // const imgUrl = "/images/" + imgName + ".jpg";

  /* 약속에 친구 추가하기 -> reducer/promise.js의 setPromiseFriend 함수 실행 */
  const dispatch = useDispatch();

  /* 이미 추가된 경우/아직 추가되지 않은 경우 구분할 변수 */
  const [isAdd, setIsAdd] = useState(false);

  /* 약속에 친구 추가하기 */
  const addPromiseFriend = () => {
    setIsAdd(!isAdd);
    // console.log(friendSeq)
    dispatch(
      setPromiseFriend({
        friendSeq,
        imgUrl,
      })
    );
  };

  /* 약속에서 친구 제거하기 */
  const removePromiseFriend = () => {
    setIsAdd(!isAdd);
    console.log(friendSeq);
    dispatch(
      setPromiseFriend({
        friendSeq,
        imgUrl,
      })
    );
  };

  return (
    <div className="profile-info-wrapper">
      <div className="profile-info-img-wrapper">
        <div className="profile-info-img">
          <img src={imgUrl} alt={nickName} title={nickName} width="40px" />
        </div>
      </div>
      <div className="profile-info-name-wrapper">
        <div className="profile-info-nickname-wrapper">{nickName}</div>
        <div className="profile-info-id-wrapper">{id}</div>
      </div>
      <div className="profile-info-icon-wrapper">
        {/* 아직 추가되지 않은 경우 추가 버튼 | 이미 추가된 경우 삭제 버튼 */}
        {!isAdd ? (
          <BsPersonPlusFill size="25" onClick={addPromiseFriend} />
        ) : (
          <BsPersonDashFill size="25" onClick={removePromiseFriend} />
        )}
      </div>
    </div>
  );
}
