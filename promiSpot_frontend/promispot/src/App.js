import './App.css';
import { BrowserRouter, Route, Routes, useHistory } from 'react-router-dom';
import Start from './pages/Start'
import MapContainer from './pages/MapContainer';

function App() {
  // const history = useHistory();
  return (
    <MapContainer />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MapContainer />}></Route>
    //   </Routes> 
    // </BrowserRouter>
    // <SccContextProvider>
    //   <BrowserRouter>
    //     <ScrollToTop />
    //     <Switch>
    //       <Route path="/start" exact component={Start} />
    //       {/* <Route path="/form" component={Form} /> */}
          
    //       {/* <Route component={NotFound} /> */}
    //     </Switch>
    //   </BrowserRouter>
    // </SccContextProvider>
  );
}

export default App;
