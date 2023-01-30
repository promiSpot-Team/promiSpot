import "./App.css";
import { Route, Routes, useHistory } from "react-router-dom";
import MapContainer from "./pages/PlaceMap/MapContainer";
import Start from "./pages/Login/Start";
import Login from "./pages/Login/Login";
import Join from "./pages/Login/Join";
import Friend from "./pages/Friend/Friend";
import FriendList from "./pages/Friend/FriendList";
import Main from "./pages/Main/Main";
import AddressSearch from "./pages/Address/AddressSearch"
import PlaceSearch from "./pages/PlaceMap/PlaceSearch";
import PlaceRecommend from "./pages/PlaceMap/PlaceRecommend";

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
        <Route path="search" element={<PlaceSearch />}/>
        <Route path="recommend" element={<PlaceRecommend />}/>
      </Route>      
      <Route path="/address">
        <Route path="search" element={<AddressSearch />} />
      </Route>
      <Route path="/friend" element={<Friend />}>
        <Route path="list" element={<FriendList />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
