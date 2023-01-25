import react, { useContext } from 'react';
import { Route } from 'react-router-dom';
import BasicButton from '../components/buttons/basicButton'
// import Header from '../components/header/header';
// import Footer from '../components/footer/footer';
import './scss/start.scss';

function Start() {
  return (
    <div className="startWrapper">
      {/* <Route component={Header} /> */}
      {/* <Route component={Logo} /> */}
      {/* <Route component={BasicButton} /> */}
      {/* <Route component={BasicButton} /> */}
      <BasicButton text="로그인"
      onClick={() => console.log('버튼 클릭 완료')}/>
      <BasicButton text="회원가입"
      onClick={() => console.log('버튼 클릭 완료@')}/>
      {/* <Route component={Footer} /> */}
    </div>
  );
}

export default Start;