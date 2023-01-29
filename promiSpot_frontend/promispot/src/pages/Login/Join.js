import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import BasicButton from "../../components/Buttons/BasicButton";
import WhiteHeader from "../../components/Header/WhiteHeader";
import {
  TextField,
  Input,
  InputLabel,
  IconButton,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Checkbox,
} from "@mui/material/";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../scss/Join.scss";

function Join() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [checked, setChecked] = useState(false);

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickJoin = () => {
    console.log("click join");
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
  const [showPassword_1, setShowPassword_1] = React.useState(false);
  const [showPassword_2, setShowPassword_2] = React.useState(false);

  const handleClickShowPassword_1 = () => setShowPassword_1((show) => !show);
  const handleClickShowPassword_2 = () => setShowPassword_2((show) => !show);

  const handleMouseDownPassword_1 = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseDownPassword_2 = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  // 의 체크
  const handleAgree = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="join-wrapper">
      <WhiteHeader text="회원가입" />
      <div className="join-content-wrapper">
        <div className="join-input-wrapper">
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField
              id="standard-textarea"
              label="아이디"
              placeholder="UserName"
              multiline
              variant="standard"
              font-family="Pretendard-Bold"
              margin="normal"
            />
          </FormControl>
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField
              id="standard-textarea"
              label="이메일"
              placeholder="E-mail"
              multiline
              variant="standard"
              font-family="Pretendard-Bold"
              margin="normal"
            />
          </FormControl>

          <FormControl sx={{ width: "70%" }} variant="standard" margin="normal">
            <InputLabel htmlFor="standard-adornment-password">
              비밀번호
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword_1 ? "text" : "password"}
              placeholder="Password"
              margin="normal"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword_1}
                    onMouseDown={handleMouseDownPassword_1}
                  >
                    {showPassword_1 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ width: "70%" }} variant="standard" margin="normal">
            <InputLabel htmlFor="standard-adornment-password">
              비밀번호 확인
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword_2 ? "text" : "password"}
              placeholder="Password"
              margin="normal"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword_2}
                    onMouseDown={handleMouseDownPassword_2}
                  >
                    {showPassword_2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField
              id="standard-textarea"
              label="이름"
              placeholder="Name"
              multiline
              variant="standard"
              font-family="Pretendard-Bold"
              margin="normal"
            />
          </FormControl>
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField
              id="standard-textarea"
              label="닉네임"
              placeholder="NickName"
              multiline
              variant="standard"
              font-family="Pretendard-Bold"
              margin="normal"
            />
          </FormControl>
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField
              id="standard-textarea"
              label="주소"
              placeholder="Address"
              multiline
              variant="standard"
              font-family="Pretendard-Bold"
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
          </FormControl>
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField
              id="standard-textarea"
              label="전화번호"
              placeholder="Phone Number"
              multiline
              variant="standard"
              font-family="Pretendard-Bold"
              margin="normal"
            />
          </FormControl>
          <div className="join-inputs">
            <FormControlLabel
              control={<Checkbox onChange={handleAgree} color="primary" />}
              label="개인 정보 수집 및 이용 약관 동의"
              margin="normal"
            />
          </div>
        </div>
        <div className="join-btn-wrapper">
          <div className="join-btn">
            <Link to={"/login"} className="link">
              <BasicButton text="회원가입" onClick={() => onClickJoin} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
