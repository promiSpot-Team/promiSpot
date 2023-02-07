import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TabBar from "../../components/TabBar/TabBar";
import { SERVER_URL } from "../../constants/constants";
import ProfileInfoS from '../../components/ProfileInfo/ProfileInfoS'
import { useSelector } from 'react-redux'
import '../scss/MyPage.scss'
import store from "../../index";

export default function MyPage() {
  const [myInfoList, setMyInfoList] = useState([]);
  const memberSeq = useSelector(state => state?.currentUserInfo?.memberSeq)
  var accessToken = useSelector(state => state?.currentUserInfo?.accessToken)
  const refreshToken = useSelector(state => state?.currentUserInfo?.refreshToken)
  const memberId = useSelector(state => state?.currentUserInfo?.memberId)
  const currentUserInfo = useSelector(state => state?.currentUserInfo)

  const getMyInfo = async () => {
    try {
      axios.defaults.headers.common['access-token'] = `${accessToken}`
      axios.defaults.headers.common['refresh-token'] = `${refreshToken}`

      const res = await axios({
        method: 'GET',
        url: `${SERVER_URL}/member/${memberSeq}`,
      })
      console.log('결과 : ', res)
      if(res.data !== 'fail') {
        setMyInfoList([res.data])
      }
    } catch(err) {
      if(err.response.status === 400) {
        console.log("in")
        try {
          axios.defaults.headers.common['refresh-token'] = `${refreshToken}`
          var response = await axios({
            url: 'member/refresh',
            method: 'POST',
            baseURL: SERVER_URL,
            data : {
              memberId
            }
          })

          accessToken = response.data["access-token"]

          store.dispatch({
            type: 'REFRESH_ACCESS_TOKEN',
            currentUserInfo: {
              accessToken,
              ...currentUserInfo
            }
          })
        } catch(err) {
          console.log(err)
        }
      }
    }
  }
  useEffect(() => {
    getMyInfo()
  }, [accessToken])

  useEffect(() => {
    console.log("myInfoList", myInfoList)
  }, [myInfoList])

  return (
    <div className="mypage">
      <div className="header">
        <div className="img"></div>
        <div className="text">이름</div>
        <div className="update-text">
          <p>편집</p>
        </div>
      </div>
      {myInfoList && myInfoList.map((item, idx) => {
        return (
          <div className="content">
          <Link to="/address/search">
            <div className="address" style={{ borderBottom: '1px solid #c4c4c4'}}>
              <p >서울특별시 강남구 테헤란로 212</p>
              <p>멀티캠퍼스 역삼</p>
            </div>
          </Link>
          <div className="address">
            <p>{item.memberInfo.memberNick}</p>
            <p>닉네임</p>
          </div>
          <div className="address">
            <p>{item.memberInfo.memberId}</p>
            <p>아이디</p>
          </div>
          <div className="email">
            {item.memberInfo.memberName}
          </div>
        </div>
        )
      })}
      {/* {myInfoList && myInfoList.map((info) => {
          return (<div>
              <ProfileInfoS             
             //   imgName="PBG_Profile"  
            //   nickName={info.memberNick} 
            //   id={info.memberId}/>
            // <div>`${info.memberNick}`</div>
            <div>{info.memberName}</div>
            <div>{info.memberId}</div></div>
          )
        })} */}
      <div className="content">
        <Link to="/address/search">
          <div className="address" style={{ borderBottom: '1px solid #c4c4c4'}}>
            <p >서울특별시 강남구 테헤란로 212</p>
            <p>멀티캠퍼스 역삼</p>
          </div>
        </Link>
        <div className="address">
          <p>닉네임</p>
          <p>닉네임</p>
        </div>
        <div className="address">
          <p>아이디</p>
          <p>아이디</p>
        </div>
        <div className="email"></div>
      </div>
      <div className="logout-btn">

      </div>
      <div>
        {myInfoList.memberNick}
        
      </div>
      <TabBar />
    </div>
  );
}
