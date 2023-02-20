import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";
import { setToken } from "../../Redux/reducer/user";
import { setCenter } from "../../Redux/reducer/map";
import {
  FormControl,
  TextField,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material/";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IoIosArrowBack } from "react-icons/io";
import BasicButton from "../../components/Buttons/BasicButton";
import "../scss/Login.scss";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 아이디, 비밀번호 설정
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 비밀번호 관련 설정
  const [passwordState] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const isLogin = useSelector((state) => state.user.isLogin);

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
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

  // async await axios 요청
  const loginHandle = async (data) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${SERVER_URL}/member/login`,
        data,
      });

      if (response.data.message === "fail") {
        throw new Error();
        alert("없는 회원");
      }
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
      sessionStorage.setItem("info", JSON.stringify(info));
      // localStorage.setItem("isLogin", true);
      const response2 = await axios({
        method: "GET",
        url: `${SERVER_URL}/address/addressList/${info.memberSeq}`,
      });
      const primaryAddress = await response2.data.filter((address) => {
        return address.addressIsPrimary === 1;
      });
      dispatch(
        setCenter({
          centerX: parseFloat(primaryAddress[0].addressX),
          centerY: parseFloat(primaryAddress[0].addressY),
        })
      );
      navigate("/main");
    } catch (err) {
      console.log(err);
      alert("로그인 실패");
      navigate("/login");
    }
  };

  /* 이미 로그인 된 상태면 무조건 메인페이지로 이동 */
  useEffect(() => {
    if (isLogin) {
      navigate("/main");
    }
  }, []);

  // 시작 페이지로 이동
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
            <TextField
              className="input-form-wrapper"
              id="id"
              label="아이디"
              name="id"
              placeholder="아이디를 입력하세요"
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
              <BasicButton text="로그인" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
