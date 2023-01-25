import react, { useContext } from 'react';
import { Route } from 'react-router-dom';
import BagicButton from '../components/buttons/bagicButton'
// import Header from '../components/header/header';
// import Footer from '../components/footer/footer';
// import './scss/main.scss';

function Start() {
  return (
    <div class="startWrapper">
      {/* <Route component={Header} /> */}
      {/* <Route component={Logo} /> */}
      <Route component={BagicButton} />
      <Route component={BagicButton} />
      {/* <Route component={Footer} /> */}
      
    </div>
  );
}

export default Start;