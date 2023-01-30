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
  FormHelperText,
} from "@mui/material/";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../scss/join.scss";

function Join() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [checked, setChecked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [registerError, setRegisterError] = useState("");
  // const history = useHistory();

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

  const handleAgree = (event) => {
    setChecked(event.target.checked);
  };

  const onhandlePost = async (data) => {
    const { email, name, password } = data;
    const postData = { email, name, password };

    // post
    await axios
      .post("/join", postData)
      .then(function (response) {
        console.log(response, "성공");
        navigate("/login");
      })
      .catch(function (err) {
        console.log(err);
        setRegisterError("회원가입에 실패하였습니다. 다시한번 확인해 주세요.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const joinData = {
      id: data.get("id"),
      email: data.get("email"),
      password: data.get("password"),
      rePassword: data.get("rePassword"),
      name: data.get("name"),
      nickName: data.get("nickName"),
      phoneNumber: data.get("phoneNumber"),
    };
    const { id, email, password, rePassword, name, nickName, phoneNumber } =
      joinData;

    // 이메일 유효성 체크
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(email))
      setEmailError("올바른 이메일 형식이 아닙니다.");
    else setEmailError("");

    // 비밀번호 유효성 체크
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegex.test(password))
      setPasswordState(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
    else setPasswordState("");

    // 비밀번호 같은지 체크
    if (password !== rePassword)
      setPasswordError("비밀번호가 일치하지 않습니다.");
    else setPasswordError("");

    // 이름 유효성 검사
    const nameRegex = /^[가-힣a-zA-Z]+$/;
    if (!nameRegex.test(name) || name.length < 1)
      setNameError("올바른 이름을 입력해주세요.");
    else setNameError("");

    // 회원가입 동의 체크
    if (!checked) alert("회원가입 약관에 동의해주세요.");

    if (
      emailRegex.test(email) &&
      passwordRegex.test(password) &&
      password === rePassword &&
      nameRegex.test(name) &&
      checked
    ) {
      onhandlePost(joinData);
    }
  };

  return (
    <div className="join-wrapper">
      <WhiteHeader text="회원가입" />
      <div className="join-content-wrapper">
        <div className="join-input-wrapper">
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField
              id="id"
              label="아이디"
              placeholder="UserName"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="dense"
            />
          </FormControl>
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField
              id="email"
              type="email"
              label="이메일"
              placeholder="E-mail"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="dense"
              error={emailError !== "" || false}
            />
          </FormControl>
          <FormHelperText>{emailError}</FormHelperText>

          <FormControl sx={{ width: "70%" }} variant="standard" margin="dense">
            <InputLabel htmlFor="standard-adornment-password">
              비밀번호
            </InputLabel>
            <Input
              id="password"
              type={showPassword_1 ? "text" : "password"}
              placeholder="Password(숫자+영문자+특수문자 8자리 이상)"
              margin="dense"
              error={passwordState !== "" || false}
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
          <FormHelperText>{passwordState}</FormHelperText>
          <FormControl sx={{ width: "70%" }} variant="standard" margin="dense">
            <InputLabel htmlFor="standard-adornment-password">
              비밀번호 확인
            </InputLabel>
            <Input
              id="rePassword"
              type={showPassword_2 ? "text" : "password"}
              placeholder="Password"
              margin="dense"
              error={passwordError !== "" || false}
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
          <FormHelperText>{passwordError}</FormHelperText>
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField
              id="name"
              label="이름"
              placeholder="Name"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="dense"
              error={nameError !== "" || false}
            />
          </FormControl>
          <FormHelperText>{nameError}</FormHelperText>
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField
              id="nickName"
              label="닉네임"
              placeholder="NickName"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="dense"
            />
          </FormControl>
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField
              id="address"
              label="주소"
              placeholder="Address"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="dense"
              InputProps={{
                readOnly: true,
              }}
            />
          </FormControl>
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField
              id="phoneNumber"
              label="전화번호"
              placeholder="Phone Number"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="dense"
            />
          </FormControl>
          <div className="join-inputs">
            <FormControlLabel
              control={<Checkbox onChange={handleAgree} color="primary" />}
              label="개인 정보 수집 및 이용 약관 동의"
              margin="dense"
            />
          </div>
        </div>
        <div className="join-btn-wrapper">
          <div className="join-btn">
            <BasicButton text="회원가입" onClick={() => onClickJoin} />
            <FormHelperText>{registerError}</FormHelperText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
