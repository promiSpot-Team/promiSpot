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
import Join2 from './pages/Login/Join2'

function App() {
  // const history = useHistory();
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      {/* <Route path="/form" component={Form} /> */}
      <Route path="/main" element={<Main />} />
      {/* <Route component={NotFound} /> */}
      <Route path="/map" element={<MapContainer />}>
        <Route path="search" element={<PlaceSearch />} />
        <Route path="recommend" element={<PlaceRecommend />} />
        <Route path=":placeId" element={<PlaceDetail />} />
      </Route>
      <Route path="/address">
        <Route path="search" element={<AddressSearch />} />
      </Route>
      <Route path="/friend" element={<Friend />}>
        <Route path="list" element={<FriendList />} />
        <Route path="receive" element={<FriendRequestReceive />} />
        <Route path="send" element={<FriendRequestSend />} />
      </Route>
      <Route path="/tabBar" element={<TabBar />} />
      <Route path="/tabBar2" element={<TabBar2 />} />
      {/* <Route path="/promiselist" element={<PromiseList/>}/> */}
      <Route path="/promise" element={<Promise />} />
      {/* 임시 */}
      <Route path="/calendar" element={<PromiseCalendar />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/join2" element={<Join2 />} />
    </Routes>
  );
}

export default App;
