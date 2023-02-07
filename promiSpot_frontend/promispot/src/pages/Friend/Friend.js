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
  const [valid, setValid] = useState(false);

  const isValid = () => {
    console.log(valid);
    setValid(!valid);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 

  const [inputData, setInputData] = useState('')
  // input 값 변할 때마다 axios 요청
  const changeInputData = (e) => {
    getFriendSearchResult(e.target.value);
    setInputData(e.target.value)
  }

  const [friendSearchResult, setFriendSearchResult] = useState(null);

  // 변경된 inputData 값으로 친구 목록 가져오기
  const getFriendSearchResult = async (memberInfo) => {
    try {
      const response = await axios({
        method: 'GET', 
        url: `${SERVER_URL}/friend/${memberInfo}`,
      })  
      setFriendSearchResult(response.data)
    } catch(err) {
      setFriendSearchResult(null)
      console.log(err)
    }
  }

  // 친구 요청 보내기
  // 내 친구 목록/받은 요청/보낸 요청에 다 memberSeq props로 넘겨주기
  const memberSeq = useSelector(state => state.currentUserInfo.memberSeq)

  const sendFriendRequest = async (friendRequestMember) => {
    try {
      const response = await axios({
        method: 'POST', 
        url: `${SERVER_URL}/friend/request`,
        data: {
          memberSeq, 
          friendRequestMember
        }
      })
      console.log(response)
    } catch(err) {
      console.log(err)
    }
  }

  // 검색결과창 닫기
  const closeSearchResult = () => {
    setInputData('')
    setFriendSearchResult(null)
  }

  return (
    <>
      <div className="d-flex flex-column justify-content-center w-100 h-100">
        <div className="d-flex flex-column justify-content-center align-items-center">
        </div>
      </div>
      <BasicHeader2 text="친구 목록" />
      
      {/* <SearchBar /> */}
      <div className="friend-wrapper">
        <div className="friend-search-wrapper">
          {/* <SearchBar GetAxiosQuery={null}/> */}
          <div className="search">
            <input type="text" className="search__input" placeholder="Search..."
              onChange={changeInputData}
              value={inputData}
            />
            <div className="search__icon">
              <ImSearch/>
            </div>
          </div>
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
        {friendSearchResult === null ? 
          <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="basic tabs example" centered>
                <Tab label="내 친구" {...a11yProps(0)} />
                <Tab label="받은 요청" {...a11yProps(1)}/>
                <Tab label="보낸 요청" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <FriendList/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <FriendRequestReceive  memberSeq={memberSeq}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <FriendRequestSend />
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
                <p onClick={closeSearchResult}>X</p>
              </div>
            </Box>
            {/* <TabPanel> */}
              {friendSearchResult && friendSearchResult.map((friend, idx) => {
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
                      <div className='profile-info-button' onClick={() => sendFriendRequest(friend.memberSeq)}>
                        <MiniButton text="요청"/>
                      </div>
                    </div>
                  </div>
                )
              })}
            {/* </TabPanel> */}
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
