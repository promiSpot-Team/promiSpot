import react, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BasicButton from '../../components/buttons/basicButton';
import WhiteHeader from '../../components/header/whiteHeader'
import '../scss/login.scss';

function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
        //로그인 버튼을 눌렀을 때 발생하는 일들을 쓰면 됨
    }

    /*
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        axios.get('/member/login')
        .then(res => console.log(res))
        .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])
 */

  return (
    <div className="login-wrapper">
        <WhiteHeader text="로그인" onClick={() => {console.log('로그인 페이지 확인')}}/>
        <div className="login-content-wrapper">
            <div className='login-input-wrapper'>
                {/* <form onSubmit={LoginFunc}> */}
                    <label htmlFor='input_id'>아이디</label>
                    <input
                    className="login-inputs"
                    type='text'
                    name='input_id'
                    value={inputId}
                    onChange={handleInputId} />

                    <label htmlFor='input_pw'>비밀번호</label>
                    <input
                    className="login-inputs"
                    type='password'
                    name='input_pw'
                    value={inputPw}
                    onChange={handleInputPw} />
            
                {/* </form> */}
            </div>
            <div className='login-btn'>
                {/* <Link to={"/"} className="link"> */}
                    <BasicButton
                    text="로그인"
                    onClick={() => onClickLogin}/>
                {/* </Link> */}
            </div>
        </div>
    </div>
  );
}

export default Login;