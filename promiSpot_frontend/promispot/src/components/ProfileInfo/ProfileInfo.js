import React from 'react';
import { BsPersonPlusFill } from 'react-icons/bs';
import './ProfileInfo.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setPromiseFriend } from '../../reducer/promise'

export default function ProfileInfo(props) {

  const { imgName, nickName, id, friendSeq = null } = props;
  const imgUrl = "/images/" + imgName + ".jpg";

  /* 약속에 친구 추가하기 -> reducer/promise.js의 setPromiseFriend 함수 실행 */
  const dispatch = useDispatch()
  const promiseFriendList = useSelector(state => state.promise.friendList)
  const addPromiseFriend = () => {
    console.log(friendSeq)
    dispatch(setPromiseFriend(friendSeq))
  }

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
      <div className='profile-info-icon-wrapper' onClick={addPromiseFriend}>
        <BsPersonPlusFill/>
      </div>
    </div>
  )
}
