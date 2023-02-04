import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BasicHeader from "../../components/Header/BasicHeader1";
import BasicButton from "../../components/Buttons/BasicButton";
import InputFormRO from "../../components/InputForm/InputFormRO";
import store from '../../index'
import axios from 'axios'
import { 
  Input,
  TextField,
  InputLabel,
  IconButton,
  FormControl,
  InputAdornment,
  FormHelperText,
  FormControlLabel,
  Checkbox
 } from "@mui/material/";
import { SettingsInputAntenna, Visibility, VisibilityOff } from "@mui/icons-material";

import "../scss/Join2.scss";

export default function Join2() {
  // input 값 변경될 때마다 리덕스에 변경된 값 저장
  // 페이지 첫 랜더링 될 때 저장된 값 불러오기
  // 저장된 값이 '' 라면 defaultValue == null
  const joinInfo = useSelector((state) => state.joinInfo)
  const [state, setState] = useState({
    id: joinInfo.id,
    email: joinInfo.email,
    password: joinInfo.password,
    name: joinInfo.name,
    nickName: joinInfo.nickName,
    phoneNumber: joinInfo.phoneNumber,
  })
  const addressInfo = useSelector((state) => state.addressInfo)
  
  const navigate = useNavigate();
  
  // 값이 입력될 때마다 변화하는 입력값 state객체에 저장
  const handleInputChange = (e) => {
    setState({
        ...state,
        [e.target.name] : e.target.value
      }
    )
  };

  // 비밀번호 폼 변수
  const [passwordState] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
    
  // 주소 검색 페이지로 이동
  const moveToAddressSearch = () => {
    const newJoinInfo = {...joinInfo, ...state}
    // 주소 검색 페이지 이동 후 되돌아왔을 때에도 입력했던 정보 유지시키기 위함
    store.dispatch({
      type: 'SAVE_USER_JOIN_INFO',
      joinInfo: {
        ...newJoinInfo
      }
    })
    // 주소 검색 페이지로 이동
    navigate('/address/search')
  }

  // 개인 정보 수집 및 이용 동의 체크박스 설정
  const [checked, setChecked] = useState(false);
  const handleAgree = (event) => {
    setChecked(event.target.checked);
  };

  // async awiat axios 요청
  const onhandlePost = async (e) => {
    
  }

  // form의 onSubmit 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);
    const joinData = {
      memberId: data.get("id"),
      memberEmail: data.get("email"),
      memberPass: data.get("password"),
      memberName: data.get("name"),
      memberNick: data.get("nickName"),
      memberPhoneNum: data.get("phoneNumber"),
    }

    axios(
      {
        url: '/member',
        method: 'post', 
        data: {
          ...joinData
        },
        baseURL: 'http://localhost:9090'
      }
    ).then((res) => {
      console.log(res)
    }).then((res) => {
      console.log(res)
    }).then((res) => {
     
    }).catch((err) => {

    })

    console.log(joinData)
  }

  return (
    <div className="join-wrapper">
      <BasicHeader text="회원가입" />
      <div className="join-content-wrapper">

        {/* 회원가입 전체 폼 */}
        <form className="join-input-wrapper"
          onSubmit={handleSubmit}
        >
          {/* 아이디 입력 */}
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField className='input-form-wrapper'
              id="id"
              label="아이디"
              placeholder="UserName"
              name="id"
              type="id"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="dense"
              defaultValue={joinInfo?.id ? joinInfo.id : null}
              onChange={handleInputChange}
            />
          </FormControl>

          {/* 이메일 입력 */}
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField className='input-form-wrapper'
              id="email"
              label="이메일"
              placeholder="ssafy@ssafy.com"
              name="email"
              type="email"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="dense"
              defaultValue={joinInfo?.email ? joinInfo.email : null}
              onChange={handleInputChange}
            />
          </FormControl>

          {/* 비밀번호 입력 */}
          <FormControl sx={{ width: "70%", marginTop: '20px' }} variant="standard" margin="dense"
            className="input-form-pwd-wrapper" 
          >
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
              defaultValue={joinInfo?.password ? joinInfo.password : null}
              onChange={handleInputChange}
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
          
          {/* 비밀번호 확인 입력 */}
          <FormControl sx={{ width: "70%" }} variant="standard" margin="dense"
            className="input-form-pwd-wrapper" 
          >
            <InputLabel htmlFor="standard-adornment-password">
              비밀번호 확인
            </InputLabel>
            <Input
              id="rePassword"
              name="rePassword"
              type={showPassword ? "text" : "password"}
              placeholder="Rewrite Password"
              margin="dense"
              error={passwordState !== "" || false}
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

          {/* 이름 입력 */}
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField className='input-form-wrapper'
              id="name"
              label="이름"
              placeholder="Name"
              name="name"
              type="name"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="dense"
              defaultValue={joinInfo?.name? joinInfo.name : null}
              onChange={handleInputChange}
            />
          </FormControl>

          {/* 닉네임 입력 */}
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField className='input-form-wrapper'
              id="nickName"
              label="닉네임"
              placeholder="NickName"
              name="nickName"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="dense"
              defaultValue={joinInfo?.nickName? joinInfo.nickName : null}
              onChange={handleInputChange}
            />
          </FormControl>
          
          {/* 전화번호 입력 */}
          <FormControl sx={{ width: "70%" }} variant="standard">
            <TextField className='input-form-wrapper'
              id="phoneNumber"
              label="전화번호"
              placeholder="Phone Number"
              name="phoneNumber"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="dense"
              defaultValue={joinInfo?.phoneNumber? joinInfo.phoneNumber : null}
              onChange={handleInputChange}
            />
          </FormControl>
          
          {/* 주소 입력 */}
          <FormControl sx={{ width: "70%" }} variant="standard" margin="normal"
            onClick={moveToAddressSearch}
          >
            {/* <Link to={"/address"} className="link"> */}
              <InputFormRO
                id="Address"
                label="주소"
                defaultvalue={addressInfo === '' ? "아직 등록된 주소가 없습니다" : addressInfo}
              />
            {/* </Link> */}
          </FormControl>

          {/* 개인 정보 수집 및 이용 약관 동의 체크박스 */}
          <div className="join-inputs">
            <FormControlLabel
              control={<Checkbox onChange={handleAgree} color="primary" />}
              label="개인 정보 수집 및 이용 약관 동의"
              margin="normal"
            />
          </div>

          {/* 회원가입 버튼 */}
          <div className="join-btn-wrapper">
            <div className="join-btn">
              <BasicButton text="회원가입" />
              <FormHelperText></FormHelperText>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}
