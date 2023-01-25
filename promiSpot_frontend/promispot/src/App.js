import './App.css';
import { BrowserRouter, Route, Routes, useHistory } from 'react-router-dom';
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
        </Routes>
      </BrowserRouter>
  );
}

export default App;
