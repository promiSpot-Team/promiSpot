import React, { useState } from "react";
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ParentFunction = (query) => {
    console.log("query", query)
  }

  return (
    <>
    <div className="d-flex flex-column justify-content-center w-100 h-100">

<div className="d-flex flex-column justify-content-center align-items-center">
</div>
</div>
    <BasicHeader2 text="친구 목록"/>
    <div className="friend-wrapper">
      <div className="friend-search-wrapper">
        <SearchBar ParentFunction={ParentFunction}/>
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
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="basic tabs example" centered>
          <Tab label="내 친구" {...a11yProps(0)} />
          <Tab label="받은 요청" {...a11yProps(1)} />
          <Tab label="보낸 요청" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FriendList/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FriendRequestReceive/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FriendRequestSend/>
      </TabPanel>
    </Box>
      <TabBar />
      </>
  );
}
