import './App.css';
import { BrowserRouter, Route, Routes, useHistory } from 'react-router-dom';
import MapContainer from './pages/MapContainer'
import SearchBar from './components/search/SearchBar';
import Start from './pages/start'
import Login from './pages/login'
import Join from './pages/join'

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
          <Route path="/map" element={<MapContainer />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
