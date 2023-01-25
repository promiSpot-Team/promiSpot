import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Start from './pages/Start'
function App() {
  // const history = useHistory();
  return (
    <SccContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/start" exact component={Start} />
          {/* <Route path="/form" component={Form} /> */}
          
          {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    </SccContextProvider>
  );
}

export default App;
