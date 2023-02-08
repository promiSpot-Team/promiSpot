import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TabBar from "../../components/TabBar/TabBar";
import { SERVER_URL } from "../../constants/constants";
import ProfileInfoS from '../../components/ProfileInfo/ProfileInfoS'
import { useSelector, useDispatch } from 'react-redux'
import { reissueToken } from '../../reducer/user'
import '../scss/MyPage.scss'

export default function MyPage() {
  const [myInfoList, setMyInfoList] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { 
    memberId, 
    memberSeq, 
    accessToken, 
    refreshToken 
  } = useSelector(state => state.user.info)

  // 내 정보 조회
  const getMyInfo = async () => {
    try {
      axios.defaults.headers.common['access-token'] = `${accessToken}`
      axios.defaults.headers.common['refresh-token'] = `${refreshToken}`

      const response1 = await axios({
        method: 'GET',
        url: `${SERVER_URL}/member/${memberSeq}`,
      })
      if(response1.data !== 'fail') {
        setMyInfoList([response1.data])
      }
    } catch(err) {
      // HTTP 401 권한없음 에러
      if(err.response.status === 401 || err.response.status === 400) {
        try {
          axios.defaults.headers.common['refresh-token'] = `${refreshToken}`
          const response2 = await axios({
            url: `${SERVER_URL}/member/refresh`,
            method: 'POST',
            data : {
              memberId
            }
          })
          const newAccessToken = response2.data["access-token"]
          
          // 재발급 받은 토큰 store에 저장
          dispatch(reissueToken(newAccessToken))

        } catch(err) {
          console.log(err)
          navigate('/login')
        }
      }
    }
  }
  useEffect(() => {
    getMyInfo()
  }, [accessToken])

  useEffect(() => {
    // console.log("myInfoList", myInfoList)
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
          <div key={idx} className="content">
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
