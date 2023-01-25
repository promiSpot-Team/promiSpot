import './App.css';
import { BrowserRouter, Route, Routes, useHistory } from 'react-router-dom';
import Start from './pages/start'
function App() {
  // const history = useHistory();
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>} />
          {/* <Route path="/form" component={Form} /> */}
          
          {/* <Route component={NotFound} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
