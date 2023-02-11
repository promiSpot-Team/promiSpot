import React from 'react';
import MiniButton from '../Buttons/MiniButton';
import './ProfileInfoSR.scss';

export default function ProfileInfo(props) {

  const {imgUrl, nickName, id, isValid} = props;
  // const imgUrl = "/images/" + imgName + ".jpg";

  return (
    <div className='profile-info-wrapper'>
      <div className='profile-info-img-wrapper'>
        <div className='profile-info-img'>
        <img src={imgUrl} alt = {nickName} title = {nickName} width="40px"/></div>
      </div>
      <div className='profile-info-name-wrapper'>
        <div className='profile-info-nickname-wrapper'>{nickName}</div>
        <div className='profile-info-id-wrapper'>{id}</div>
      </div>
      <div className='profile-info-button-wrapper'>
        <div className='profile-info-button'><button onClick={isValid}>요청</button></div>
        
      </div>
    </div>
  )
}
