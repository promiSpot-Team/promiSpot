import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import BasicButton from "../../components/Buttons/BasicButton";
import WhiteHeader from "../../components/Header/BasicHeader1";
import InputForm from "../../components/InputForm/InputForm";
import InputFormRO from "../../components/InputForm/InputFormRO";
import InputFormPWD from "../../components/InputForm/InputFormPWD";

import {  FormControl,  FormControlLabel,  Checkbox,  FormHelperText } from "@mui/material/";
import "../scss/Login.scss";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click login");
    //로그인 버튼을 눌렀을 때 발생하는 일들을 쓰면 됨
  };

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
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="login-wrapper">
      <WhiteHeader text="로그인" />
      <div className="login-content-wrapper">
        <div className="login-input-wrapper">
          <FormControl
            sx={{ width: "70%" }}
            variant="standard"
          >
            <InputForm id="id" label="아이디" placeholder="UserName"/>
          </FormControl>

          <FormControl
            sx={{ width: "70%" }}
            variant="standard"
            margin="dense"
          >
          < InputFormPWD id="password" label="비밀번호" placeholder="Password"/>
          </FormControl>
        </div>
        <div className="login-btn-wrapper">
          <div className="login-btn">
            <Link to={"/main"} className="link">
              <BasicButton text="로그인" onClick={() => onClickLogin} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
