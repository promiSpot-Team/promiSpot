import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/font.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer, composeWithDevTools())
// preloadedState: {
//   loading: {
//     loadingState: true,
//   },
// },)

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

reportWebVitals();
export default store