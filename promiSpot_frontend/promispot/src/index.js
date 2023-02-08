import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/font.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor = persistStore(store)

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);

reportWebVitals();
export default store;
