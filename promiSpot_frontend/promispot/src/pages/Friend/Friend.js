import React, { useState, useEffect } from "react";
import BasicHeader2 from "../../components/Header/BasicHeader2";
// import SelectBar from "../../components/SelectBar/SelectBar";
import TabBar from "../../components/TabBar/TabBar";
import FriendList from "./FriendList";
import '../scss/Friend.scss';
import FriendRequestReceive from "./FriendRequestReceive";
import FriendRequestSend from "./FriendRequestSend";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchBar from "../../components/Search/SearchBar";
import Box from '@mui/material/Box';
import { useAxios } from '../../hooks/useAxios'
import { SERVER_URL } from '../../constants/constants'
import axios from 'axios'
import { useSelector } from 'react-redux'

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
  const [searchList, setSearchList] = useState(null)
  const [clearQuery, setClearQuery] = useState()
  const memberSeq = useSelector(state => state?.currentUserInfo?.memberSeq ? state.currentUserInfo.memberSeq : 0)
  

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

  // 친구 검색 axios 요청
  const [query, setQuery] = useState('')

  const searchFriend = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${SERVER_URL}/friend/${query}`,
      })
      if (response?.data !== 'fail') {
        setSearchList([response.data])
      }
    } catch(err) {
      console.log(err)
    }
  }

  // 부모컴포넌트(Friend.js)에서 자식 컴포넌트(Searchbar.js) 값 가져오기
  const GetAxiosQuery = (query) => {
    setQuery(query)
  }

  // 검색된 결과에서 친구 요청 보내기
  const requestFriend = async (friendSeq) => { 
    try {
      const response = await axios({
        method: 'POST', 
        url: `${SERVER_URL}/friend/request`,
        data: {
          memberSeq,
          friendRequestMember: friendSeq
        }
      })
    } catch(err) {
      console.log(err)
    }

  }

  useEffect(() => {
    searchFriend()
  }, [query])
  
  useEffect(() => {
    console.log(searchList)
  }, [searchList])
  
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
                <Tab label="받은 요청" {...a11yProps(1)} />
                <Tab label="보낸 요청" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <FriendList memberSeq={memberSeq}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <FriendRequestReceive memberSeq={memberSeq}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <FriendRequestSend memberSeq={memberSeq}/>
            </TabPanel>
          </>
          :
          <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <div className="friend-search-result-wrapper">
                <p>검색 결과</p>
                <p onClick={clearInputQuery}>X</p>
              </div>
            </Box>
            <ul>
              {searchList !== null && searchList.map((friend) => {
                return (
                  <li className="friend-search-result-list">
                    {/* 친구 프로필, 이름, 닉네임 등 정보 */}
                    <div>
                      {friend.memberSeq}
                    </div>
                    {/* 친구 요청 버튼 */}
                    <button onClick={requestFriend(friend.memberSeq)}>
                      요청
                    </button>
                  </li>
                )
              })}
            </ul>
          </>
        }
        
      </Box>
      <TabBar />
    </>
  );
}
