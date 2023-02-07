import React from 'react';
import { BsPersonPlusFill } from 'react-icons/bs';
import './ProfileInfo.scss';

export default function ProfileInfo(props) {

  const {imgName, nickName, id} = props;
  const imgUrl = "/images/" + imgName + ".jpg";

  return (
    <div className='profile-info-wrapper'>
      <div className='profile-info-img-wrapper'>
        <div className='profile-info-img'>
        <img src={imgUrl} alt = {imgName} title = {imgName} width="40px" /></div>
      </div>
      <div className='profile-info-name-wrapper'>
        <div className='profile-info-nickname-wrapper'>{nickName}</div>
        <div className='profile-info-id-wrapper'>{id}</div>
      </div>
      <div className='profile-info-icon-wrapper'>
        <BsPersonPlusFill/>
      </div>
    </div>
  )
}
