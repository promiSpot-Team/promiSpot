import "./App.css";
import { Route, Routes, useHistory } from "react-router-dom";
import MapContainer from "./pages/PlaceMap/MapContainer";
import Start from "./pages/Login/Start";
import Login from "./pages/Login/Login";
import Join from "./pages/Login/Join";
import Friend from "./pages/Profile/Friend";
import FriendList from "./pages/Friend/FriendList";
import Main from "./pages/Main/Main";

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
      <Route path="/map" element={<MapContainer />} />
      <Route path="/friend" element={<Friend />}>
        <Route path="list" element={<FriendList />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
