import React from 'react';
import { BsPersonPlusFill } from 'react-icons/bs';
import './ProfileInfo.scss';

export default function ProfileInfo() {
  return (
    <div className='profile-info-wrapper'>
      <div className='profile-info-img-wrapper'>
        <img src={require("../../images/Profile.jpg")} />
      </div>
      <div className='profile-info-name-wrapper'>
        <div className='profile-info-nickname-wrapper'>닉네임</div>
        <div className='profile-info-id-wrapper'>아이디</div>
      </div>
      <div className='profile-info-icon-wrapper'>
        <BsPersonPlusFill/>
      </div>
    </div>
  )
}
