import React, { useState, useEffect } from "react";
import BasicHeader2 from "../../components/Header/BasicHeader2";
// import SelectBar from "../../components/SelectBar/SelectBar";
import TabBar from "../../components/TabBar/TabBar";
import FriendList from "./FriendList";
import '../scss/Friend.scss';
import FriendRequestReceive from "./FriendRequestReceive";
import FriendRequestSend from "./FriendRequestSend";
import FriendSearchList from "./FriendSearchList";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchBar from "../../components/Search/SearchBar";
import Box from '@mui/material/Box';
import { ImSearch } from "react-icons/im";
import { SERVER_URL } from '../../constants/constants'
import axios from 'axios'
import { useSelector } from 'react-redux'
import MiniButton from "../../components/Buttons/MiniButton";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const [inputData, setInputData] = useState('');

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Friend(props) {

  const [value, setValue] = useState(0);
  const [showSearchResult, setShowSearchResult] = useState(false)
  const [searchList, setSearchList] = useState([])
  const [clearQuery, setClearQuery] = useState()
  const memberSeq = useSelector(state => state?.currentUserInfo?.memberSeq ? state.currentUserInfo.memberSeq : 0)
  

  const [valid, setValid] = useState(false);

  const isValid = () => {
    console.log(valid);
    setValid(!valid);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const HandleInputFocus = (isFocus) => {
    setShowSearchResult(isFocus)
  }

  const clearInputQuery = () => {
    setShowSearchResult(false)
    setSearchList(null)
    setClearQuery(!clearQuery)
  }

  // 친구 아이디, 전화번호 검색 결과 가져오기
  const [query, setQuery] = useState('')

  const searchFriend = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${SERVER_URL}/friend/${query}`,
      })
      // 검색된 결과가 있을 경우 searchList 업데이트
      if (response.data !== 'fail') {
        setSearchList(response.data)
      }
    } catch(err) {
      setSearchList([])
      console.log(err)
    }
  }

  // 부모컴포넌트(Friend.js)에서 자식 컴포넌트(Searchbar.js) 쿼리 값 가져오기
  const GetAxiosQuery = (query) => {
    setQuery(query)
  }

  // 검색된 친구 결과 리스트에서 친구 요청 보낼 친구 선택해서 요청 보내기
  const requestFriend = async (friendSeq) => { 
    try {
      const response = await axios({
        method: 'POST', 
        url: `${SERVER_URL}/friend/request`,
        data: {
          memberSeq,
          friendRequestMember: 41
        }
      })
      const data = {
        memberSeq, 
        friendRequestMember: friendSeq
      }
      console.log("data", data)
      console.log(response)
    } catch(err) {
      console.log(err)
    }
  }

  const [requestSendFriendList, setRequestSendFriendList] = useState([]);

   // 현재 유저가 보낸 친구 신청 목록 불러오기
   const getFriendRequestSend = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `${SERVER_URL}/friend/${memberSeq}/1`,
      })
      if (res.data !== 'fail') {
        setRequestSendFriendList(res.data)
      }
    } catch(err) {
      setRequestSendFriendList([])
    }
  }

  const [requestReceiveFriendList, setRequestReceiveFriendList] = useState([]);

  // 현재 유저가 받은 친구 신청 목록 불러오기
  const getFriendRequestReceive = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `${SERVER_URL}/friend/${memberSeq}/0`,
      })
      if (res.data !== 'fail') {
        setRequestReceiveFriendList(res.data)
      }
    } catch(err) {
      setRequestReceiveFriendList([])
    }
  }

  useEffect(() => {
    searchFriend()
  }, [query])
  
  useEffect(() => {
    console.log("searchList", searchList)
  }, [searchList])

  useEffect(() => {
    console.log('보낸', requestSendFriendList)
  }, [requestSendFriendList])

  useEffect(() => {
    console.log('받은', requestReceiveFriendList)
  }, [requestReceiveFriendList])
  
  return (
    <>
      <div className="d-flex flex-column justify-content-center w-100 h-100">
        <div className="d-flex flex-column justify-content-center align-items-center">
        </div>
      </div>
      <BasicHeader2 text="친구 목록" />
      <div className="friend-wrapper">
        <div className="friend-search-wrapper">
          <SearchBar GetAxiosQuery={GetAxiosQuery} HandleInputFocus={HandleInputFocus} clearQuery={clearQuery}/>
        </div>
        {/* <Link to = '/friend/list'>
          <button onClick={() => setVisible1(!visible1)}>친구 리스트</button>
        </Link> 
        {visible1 && <FriendList/>}
        <Link to = '/friend/respond'>
          <button onClick={() => setVisible2(!visible2)}>받은 요청</button>
        </Link> 
        {visible2 && <FriendRequestReceive/>}
        <Link to = '/friend/send'>
          <button onClick={() => setVisible3(!visible3)}>보낸 요청</button>
        </Link> 
        {visible3 && <FriendRequestSend/>}
        <div className="friend-content-wrapper">
          {<FriendList/> */}
      </div>
      <Box sx={{ width: '100%' }}>
        {!showSearchResult ?
          <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="basic tabs example" centered>
                <Tab label="내 친구" {...a11yProps(0)} />
                <Tab onClick={getFriendRequestReceive} label="받은 요청" {...a11yProps(1)} />
                <Tab onClick={getFriendRequestSend} label="보낸 요청" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <FriendList memberSeq={memberSeq}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <FriendRequestReceive memberSeq={memberSeq} requestReceiveFriendList={requestReceiveFriendList}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <FriendRequestSend memberSeq={memberSeq} requestSendFriendList={requestSendFriendList}/>
            </TabPanel>
          </>
          :
          <> 
            <Box sx={{ borderBottom: 1, borderColor: 'divider', position: 'relative' }}>
              {/* <Tabs className="friend-search-result-list" textColor="secondary" indicatorColor="secondary" aria-label="basic tabs example">
                <p>검색결과</p>
                <p>X</p>
              </Tabs> */}
              <div className="friend-search-result-list">
                <p>검색결과</p>
                <p onClick={clearInputQuery}>X</p>
              </div>
            </Box>
            <TabPanel>
              {searchList && searchList.map((friend, idx) => {
                return (
                  <div key={idx} className='profile-info-wrapper'>
                    <div className='profile-info-img-wrapper'>
                      <div className='profile-info-img'>
                      <img src={require("../../img/IU_Profile.jpg")} width="40px"/></div>
                    </div>
                    <div className='profile-info-name-wrapper'>
                      <div className='profile-info-nickname-wrapper'>{friend.memberNick}</div>
                      <div className='profile-info-id-wrapper'>{friend.memberId}</div>
                    </div>
                    <div className='profile-info-button-wrapper'>
                      <div className='profile-info-button' onClick={() => requestFriend(friend.memberSeq)}>
                        <MiniButton text="요청"/>
                      </div>
                    </div>
                  </div>
                )
              })}
            </TabPanel>
          </>
        }
      </Box> 
      <TabBar />
    </>

//     <div className="d-flex flex-column justify-content-center w-100 h-100">

// <div className="d-flex flex-column justify-content-center align-items-center">
// </div>
// </div>
//     <BasicHeader2 text="친구 목록"/>
//     <div className="friend-wrapper">
//       <div className="friend-search-wrapper">
      
//     <div className="search">
//       <input type="text" className="search__input" placeholder="Search..." onClick={isValid}/>
//       <div className="search__icon">
//         <ImSearch/>
//       </div>
//     </div></div>
//       {/* <Link to = '/friend/list'>
//         <button onClick={() => setVisible1(!visible1)}>친구 리스트</button>
//       </Link> 
//       {visible1 && <FriendList/>}
//       <Link to = '/friend/respond'>
//         <button onClick={() => setVisible2(!visible2)}>받은 요청</button>
//       </Link> 
//       {visible2 && <FriendRequestReceive/>}
//       <Link to = '/friend/send'>
//         <button onClick={() => setVisible3(!visible3)}>보낸 요청</button>
//        </Link> 
//       {visible3 && <FriendRequestSend/>}
//       <div className="friend-content-wrapper">
//         {<FriendList/> */}
//       </div>
//       <div>
//         {
//           valid === false
//           ? <Box sx={{ width: '100%' }}>
//           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//             <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="basic tabs example" centered>
//               <Tab label="내 친구" {...a11yProps(0)} />
//               <Tab label="받은 요청" {...a11yProps(1)} />
//               <Tab label="보낸 요청" {...a11yProps(2)} />
//             </Tabs>
//           </Box>
//           <TabPanel value={value} index={0}>
//             <FriendList/>
//           </TabPanel>
//           <TabPanel value={value} index={1}>
//             <FriendRequestReceive/>
//           </TabPanel>
//           <TabPanel value={value} index={2}>
//             <FriendRequestSend/>
//           </TabPanel>
//         </Box>
//         : <Box sx={{ width: '100%' }}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="basic tabs example" centered>
//             <Tab label="검색 결과" {...a11yProps(0)} />
//           </Tabs>
//         </Box>
//         <TabPanel value={value} index={0}>
//     <div className='profile-info-wrapper'>
//       <div className='profile-info-img-wrapper'>
//         <div className='profile-info-img'>
//         <img src={require("../../img/IU_Profile.jpg")} width="40px"/></div>
//       </div>
//       <div className='profile-info-name-wrapper'>
//         <div className='profile-info-nickname-wrapper'>닉네임</div>
//         <div className='profile-info-id-wrapper'>아이디</div>
//       </div>
//       <div className='profile-info-button-wrapper'>
//         <div className='profile-info-button'><button onClick={isValid}>요청</button></div>
        
//       </div>
//     </div>
//         </TabPanel>
//       </Box>
//         }
//     </div>
    
  );
}
