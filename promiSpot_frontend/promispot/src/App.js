import "./App.css";
import { Route, Routes, useHistory } from "react-router-dom";
import MapContainer from "./pages/PlaceMap/MapContainer";
import Start from "./pages/Login/Start";
import Login from "./pages/Login/Login";
import Join from "./pages/Login/Join";
import Friend from "./pages/Friend/Friend";
import FriendList from "./pages/Friend/FriendList";
import FriendRequestReceive from "./pages/Friend/FriendRequestReceive";
import FriendRequestSend from "./pages/Friend/FriendRequestSend";
import Main from "./pages/Main/Main";
import AddressSearch from "./pages/Address/AddressSearch";
import PlaceSearch from "./pages/PlaceMap/PlaceSearch";
import PlaceRecommend from "./pages/PlaceMap/PlaceRecommend";
import TabBar from "./components/TabBar/TabBar";
import TabBar2 from "./components/TabBar/TabBar2";
import PromiseList from "./pages/Promise/PromiseList";
import PromiseCalendar from "./pages/Promise/PromiseCalendar";
import MyPage from "./pages/MyPage/MyPage";
import Promise from "./pages/Promise/Promise";
import Privacy from "./pages/Login/Privacy";
import PlaceDetail from "./pages/PlaceMap/PlaceDetail";
import Join2 from "./pages/Login/Join2";
import Card from "./components/Card/Card";
import GetDetail from "./pages/PlaceMap/GetDetail";
import Test from "./pages/Login/Test";
import Test4 from "./pages/Login/Test4";
import Chatting from "./pages/PlaceMap/Chatting";
import Schedule from "./pages/PlaceMap/Schedule";
import MyAddress from "./pages/MyPage/MyAddress";
import { useEffect } from "react";
import EditInfo from "./pages/MyPage/EditInfo";

function App() {
  // const history = useHistory();
  // useEffect(() => {
  //   return () => {
  //     window.localStorage.clear()
  //   }
  // })
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      {/* <Route path="/form" component={Form} /> */}
      <Route path="/main" element={<Main />} />
      {/* <Route component={NotFound} /> */}
      <Route path="/map/:promiseSeq" element={<MapContainer />}>
        {/* <Route path="search" element={<PlaceSearch />} /> */}
        <Route path="recommend" element={<PlaceRecommend />} />
        <Route path=":placeId" element={<PlaceDetail />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="chatting" element={<Chatting />} />
      </Route>
      <Route path="/address">
        <Route path="search" element={<AddressSearch />} />
      </Route>
      <Route path="/friend" element={<Friend />} />
      <Route path="/promise" element={<Promise />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/myaddress" element={<MyAddress />} />
      <Route path="/editinfo" element={<EditInfo />} />
      <Route path="/privacy" element={<Privacy />} />
      {/* <Route path="/join2" element={<Join2 />} /> */}
      <Route path="/card" element={<Card />} />
      <Route path="/join2" element={<Join2 />} />
      <Route path="/detail" element={<GetDetail />} />
      <Route path="/test" element={<Test />} />

      {/* <Route path="/test2" element={<Test2/>}/> */}
      <Route path="/chatting" element={<Chatting />} />
      <Route path="/test4" element={<Test4 />} />
    </Routes>
  );
}

export default App;
