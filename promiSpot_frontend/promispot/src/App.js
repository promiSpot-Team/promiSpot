import './App.css';
import { BrowserRouter, Route, Routes, useHistory } from 'react-router-dom';
import Start from './pages/Start'
import MapContainer from './pages/MapContainer'
import SearchBar from './components/search/SearchBar';

function App() {
  // const history = useHistory();
  return (
      <BrowserRouter>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Start/>} />
          {/* <Route path="/form" component={Form} /> */}
          
          {/* <Route component={NotFound} /> */}
          <Route path="/map" element={<MapContainer />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
