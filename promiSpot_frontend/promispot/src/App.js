import './App.css';
import { BrowserRouter, Route, Routes, useHistory } from 'react-router-dom';
import MapContainer from './pages/PlaceMap/MapContainer'
import Start from './pages/Login/Start'
import Login from './pages/Login/Login'
import Join from './pages/Login/Join'

function App() {
  // const history = useHistory();
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/join" element={<Join/>} />
          {/* <Route path="/form" component={Form} /> */}
          
          {/* <Route component={NotFound} /> */}
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
