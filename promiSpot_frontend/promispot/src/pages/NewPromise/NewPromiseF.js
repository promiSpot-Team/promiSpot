import React, { useState, useEffect } from 'react'
import SearchBar from '../../components/Search/SearchBar'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import Modal from '../../components/Modal/Modal'
import NewPromiseT from './NewPromiseT'
import store from '../../index'
import axios from 'axios'
import '../scss/NewPromiseF.scss'
import { useSelector } from 'react-redux'

export default function NewPromiseF() {
  const [modalOpen, setModalOpen] = useState(false);
  const [friendList, setFriendList] = useState([])
  const memberSeq = useSelector(state => state.currentUserInfo.memberSeq)

  const getFriendList = async () => {
  // 처음 생성 될 때 약속장의 친구 목록 불러오기
    const response = await axios({
      url: `friends/${memberSeq}`,
      method: 'GET',
    })
    setFriendList(response.data)
  }

  useEffect(() => {
    getFriendList()
  }, [])

  return (
    <div className='new-promise-wrapper'>
      <div className='new-promise-text-wrapper'>
        새로운 약속 생성
      </div>
      <div className='new-promise-search-wrapper'>
      <SearchBar/>
      </div>
      <div className='new-promise-profile-wrapper'>
      <ProfileInfo imgName="IU_Profile" nickName="국힙원탑" id="IU"/>
      </div>
      <div className='new-promise-profile-wrapper'>
      <ProfileInfo imgName="KSH_Profile" nickName="도민준" id="KSH"/>
      </div>
      <div className='new-promise-profile-wrapper'>
      <ProfileInfo imgName="KYJ_Profile" nickName="세자빈" id="KYJ"/>
      </div>
      <div className='new-promise-profile-wrapper'>
      <ProfileInfo imgName="PBG_Profile" nickName="보거미" id="PBG"/>
      </div>
      <div className='new-promise-under-wrapper'>
        <div className='new-promise-under-images-wrapper'>
          <div className='new-promise-under-img'>
          <img src={require("../../img/IU_Profile.jpg")} width="35px"/></div>
        </div>
        <div className='new-promise-under-btn-wrapper' onClick={() => setModalOpen(true)} >
          다음
        </div>
      </div>{modalOpen && (<Modal closeModal={() => setModalOpen(!modalOpen)}><NewPromiseT/></Modal>)}
    </div>
  )
}
