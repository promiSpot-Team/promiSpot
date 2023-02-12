import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, Input, InputAdornment, InputLabel } from "@mui/material/";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasicButton from "../../components/Buttons/BasicButton";
import BasicHeader from "../../components/Header/BasicHeader1";
import { SERVER_URL } from "../../constants/constants";
import { setToken } from "../../Redux/reducer/user";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { FormControl, TextField } from "@mui/material/";
import "../scss/Login.scss";
import { useSelector } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 비밀번호 관련 설정
  const [passwordState] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const loginHandle = async (data) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${SERVER_URL}/member/login`,
        data,
      });

      console.log("login", response.data);
      const memberSeq = response.data["memberSeq"];
      const accessToken = response.data["access-token"];
      const refreshToken = response.data["refresh-token"];
      const memberId = response.data["memberId"];
      const memberPhoneNum = response.data["memberPhoneNum"];
      const memberPass = response.data["memberPass"];
      const memberName = response.data["memberName"];
      const memberNick = response.data["memberNick"];
      const memberImgPath = response.data["memberImgPath"];

      const info = {
        memberSeq,
        accessToken,
        refreshToken,
        memberId,
        memberPhoneNum,
        memberPass,
        memberName,
        memberNick,
        memberImgPath,
      };
      dispatch(setToken(info));
      sessionStorage.setItem("info", JSON.stringify(info))
      localStorage.setItem("isLogin", true);
      navigate("/main");
    } catch (err) {
      console.log(err);
    }
  };

  // 로그인 버튼 클릭시 로그인 요청
  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = new FormData(e.currentTarget);
    const data = {
      memberId: loginData.get("id"),
      memberPass: loginData.get("password"),
    };
    loginHandle(data);
  };

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  const handleNavigate = () => {
    navigate(-1);
  };

  const isLogin = useSelector((state) => state.user.isLogin);

  /* 이미 로그인 된 상태면 무조건 메인페이지로 이동 */
  React.useEffect(() => {
    if (isLogin) {
      navigate("/main");
    }
  }, []);

  const goStart = () => {
    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <div className="basic-header-1-wrapper">
        <div className="basic-header-1-vector-wrapper" onClick={goStart}>
          <IoIosArrowBack size="3vh" />
        </div>
        <div className="basic-header-1-text-wrapper">로그인</div>
      </div>
      <div className="login-content-wrapper">
        <form className="login-input-wrapper" onSubmit={handleLogin}>
          <FormControl sx={{ width: "70%" }} variant="standard">
            {/* <InputForm id="id" label="아이디" placeholder="UserName" /> */}
            <TextField
              className="input-form-wrapper"
              id="id"
              label="아이디"
              name="id"
              placeholder="UserName"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="dense"
              onChange={handleInputId}
            />
          </FormControl>

          <FormControl sx={{ width: "70%" }} variant="standard" margin="dense">
            <InputLabel htmlFor="standard-adornment-password">
              비밀번호
            </InputLabel>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              margin="dense"
              error={passwordState !== "" || false}
              onChange={handleInputPw}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div className="login-btn-wrapper">
            <div className="login-btn">
              {/* <Link to={"/main"} className="link"> */}
              {/* <BasicButton text="로그인" onClick={() => onClickLogin} /> */}
              <BasicButton text="로그인" />
              {/* </Link> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
