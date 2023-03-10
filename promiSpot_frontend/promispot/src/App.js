import { Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/Card/Card";
import AddressSearch from "./pages/Address/AddressSearch";
import AddressSearch2 from "./pages/Address/AddressSearch2";
import Friend from "./pages/Friend/Friend";
import Join from "./pages/Login/Join";
import Login from "./pages/Login/Login";
import Start from "./pages/Login/Start";
import Main from "./pages/Main/Main";
import MyAddress from "./pages/MyPage/MyAddress";
import MyPage from "./pages/MyPage/MyPage";
import Chatting from "./pages/PlaceMap/Chatting";
import GetDetail from "./pages/PlaceMap/GetDetail";
import MapContainer from "./pages/PlaceMap/MapContainer";
import PlaceDetail from "./pages/PlaceMap/PlaceDetail";
import PlaceRecommend from "./pages/PlaceMap/PlaceRecommend";
import Schedule from "./pages/PlaceMap/Schedule";
import Promise from "./pages/Promise/Promise";
import PrivateRoute from "./Route/PrivateRoute";
import PublicRoute from "./Route/PublicRoute";
import NotFound from "./Route/NotFound";

function App() {
  return (
    <Routes>
      {/* 로그인 안 해야 접근 가능 */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/search" element={<AddressSearch />} />
      </Route>
      {/* 로그인 해야 접근 가능 */}
      <Route element={<PrivateRoute />}>
        {/* <Route path="/form" component={Form} /> */}
        <Route path="/main" element={<Main />} />
        {/* <Route component={NotFound} /> */}
        <Route path="/map/:promiseSeq" element={<MapContainer />}>
          {/* <Route path="search" element={<PlaceSearch />} /> */}
          <Route path="recommend" element={<PlaceRecommend />} />
          <Route path=":placeId" element={<PlaceDetail />} />
          {/* <Route path="chatting" element={<Chatting />} /> */}
        </Route>
        <Route path="/schedule/:promiseSeq" element={<Schedule />}>
          <Route path="recommend" element={<PlaceRecommend />} />
          <Route path=":placeId" element={<PlaceDetail />} />
          <Route path="chatting" element={<Chatting />} />
        </Route>
        <Route path="/address">
          <Route path="search" element={<AddressSearch2 />} />
        </Route>
        <Route path="/friend" element={<Friend />} />
        <Route path="/promise" element={<Promise />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/myaddress" element={<MyAddress />} />
        {/* <Route path="/join2" element={<Join2 />} /> */}
        <Route path="/card" element={<Card />} />
        {/* <Route path="/join2" element={<Join2 />} /> */}
        <Route path="/detail" element={<GetDetail />} />

        {/* <Route path="/test2" element={<Test2/>}/> */}
        <Route path="/chatting" element={<Chatting />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
