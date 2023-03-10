import React, { useEffect, useState } from "react";
import "./Modal.scss";
import axios from 'axios'
import { SERVER_URL } from "../../constants/constants";
import { useSelector } from 'react-redux'

export default function Modal(props) {
  const { title, button, importFriendList } = props;
  const memberSeq = useSelector(state => state.user.info.memberSeq)

  function closeModal() {
    props.closeModal(); 
  }

  const [friendList, setFriendList] = useState([])

  /* <TabBar /> 하위 컴포넌트 */
  /* 약속 잡을 때 내 친구 목록 불러오기 */
  const getFriendList = async () => {
    try {
      const response = await axios({
        method: 'GET', 
        url: `${SERVER_URL}/friend/friends/${memberSeq}`
      })
      setFriendList(response.data)
    } catch(err) {
      if (err.response.status === 404) {
        console.log('404에러')
      }
    }
  }

  useEffect(() => {
    getFriendList()
  }, [])

  /* <TabBar /> 로 friendList 넘겨주기 */ 
  useEffect(() => {
    importFriendList(friendList)
  }, [friendList])

  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <div className="new-promise-text-wrapper">{title}</div>
        <button id="modalCloseBtn" onClick={closeModal}>
          {button}
        </button>
        {props.children}
      </div>
      <div className="new-promise-under-btn-wrapper">
        <button>다음</button>
      </div>
    </div>
  );
}
