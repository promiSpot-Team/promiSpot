import React from "react";
import BasicHeader2 from "../../components/Header/BasicHeader2";
import PromiseList from "./PromiseList";
import PromiseCalendar from "./PromiseCalendar";
import TabBar from "../../components/TabBar/TabBar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "../scss/Promise.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Promise(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center w-100 h-100">
        <div className="d-flex flex-column justify-content-center align-items-center"></div>
      </div>
      <BasicHeader2 text="내 약속 보기" />
      <div className="friend-wrapper">
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
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            aria-label="full width tabs example"
            centered
          >
            <Tab label="목록" {...a11yProps(0)} />
            <Tab label="캘린더" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="promise-list">
            <PromiseList />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="promise-calendar">
            <PromiseCalendar />
          </div>
        </TabPanel>
      </Box>
      <TabBar />
    </>
  );
}
