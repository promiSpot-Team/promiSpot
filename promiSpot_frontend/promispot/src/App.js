import './App.css';
import { BrowserRouter, Route, Routes, useHistory } from 'react-router-dom';
import start from './pages/start'
import MapContainer from './pages/MapContainer'

function App() {
  // const history = useHistory();
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<start/>} />
          {/* <Route path="/form" component={Form} /> */}
          
          {/* <Route component={NotFound} /> */}
          <Route path="/map" element={<MapContainer />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
