import React from 'react';
import MiniButton from '../Buttons/MiniButton';
import './ProfileInfoR.scss';

export default function ProfileInfo(props) {

  const {imgName, nickName, id} = props;
  const imgUrl = "/images/" + imgName + ".jpg";

  const acceptRequest = () => {
    if (props.IsAcceptOrReject) {
      props.IsAcceptOrReject({
        isAccept: true, 
        friendRequestSeq: props.friendRequestSeq
      })
    }
  }

  const rejectRequest = () => {
    if (props.IsAcceptOrReject) {
      props.IsAcceptOrReject({
        isAccept: false, 
        friendRequestSeq: props.friendRequestSeq
      })
    }
  }

  return (
    <div className='profile-info-wrapper'>
      <div className='profile-info-img-wrapper'>
        <div className='profile-info-img'>
        <img src={imgUrl} alt = {imgName} title = {imgName} width="40px"/></div>
      </div>
      <div className='profile-info-name-wrapper'>
        <div className='profile-info-nickname-wrapper'>{nickName}</div>
        <div className='profile-info-id-wrapper'>{id}</div>
      </div>
      <div className='profile-info-button-wrapper'>
        <div className='profile-info-button' onClick={acceptRequest}><MiniButton text="수락"/></div>
        <div className='profile-info-button' onClick={rejectRequest}><MiniButton text="거절"/></div>
        
      </div>
    </div>
  )
}
