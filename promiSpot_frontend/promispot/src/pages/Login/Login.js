import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import BasicButton from "../../components/Buttons/BasicButton";
import WhiteHeader from "../../components/Header/WhiteHeader";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "../scss/login.scss";

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
          {/* <form onSubmit={LoginFunc}> */}
          {/* <label htmlFor="input_id">아이디</label>
          <input
            className="login-inputs"
            type="text"
            name="input_id"
            value={inputId}
            onChange={handleInputId}
          /> */}
          <FormControl
            sx={{ m: 1, width: "70%" }}
            variant="standard"
            margin="dense"
          >
            <TextField
              id="standard-textarea"
              label="아이디"
              placeholder="UserName"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="dense"
            />
          </FormControl>
          {/* <label htmlFor="input_pw">비밀번호</label>
          <input
            className="login-inputs"
            type="password"
            name="input_pw"
            value={inputPw}
            onChange={handleInputPw}
          /> */}

          <FormControl
            sx={{ m: 1, width: "70%" }}
            variant="standard"
            margin="dense"
          >
            <InputLabel htmlFor="standard-adornment-password">
              비밀번호
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              margin="dense"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {/* </form> */}
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
