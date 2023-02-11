import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BasicHeader from "../../components/Header/BasicHeader1";
import BasicButton from "../../components/Buttons/BasicButton";
import InputFormRO from "../../components/InputForm/InputFormRO";
import store from '../../store'
import axios from 'axios'
import { SERVER_URL } from '../../constants/constants'
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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { setJoinInfo, setAddress } from '../../reducer/user'
import "../scss/Join2.scss";
import { useDispatch } from 'react-redux'

export default function Join2() {
  /* 리덕스에 저장된 값 불러오기 */
  const addressInfo = useSelector((state) => state?.user?.addressInfo ? state.user.addressInfo : null)
  const joinInfo = useSelector(state => state?.user?.joinInfo ? state.user.joinInfo : null)
  
  /* 초기 변수 선언 */
  const [state, setState] = useState({
    id: joinInfo.id,
    email: joinInfo.email,
    password: joinInfo.password,
    name: joinInfo.name,
    nickName: joinInfo.nickName,
    phoneNumber: joinInfo.phoneNumber,
  })
  
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
  
  const dispatch = useDispatch()
  // 주소 검색 페이지로 이동
  const moveToAddressSearch = () => {
    const newJoinInfo = {...joinInfo, ...state}
    // 주소 검색 페이지 이동 후 되돌아왔을 때에도 입력했던 정보 유지시키기 위함
    dispatch(setJoinInfo(newJoinInfo))
    // 주소 검색 페이지로 이동
    navigate('/address/search')
  }

  // 개인 정보 수집 및 이용 동의 체크박스 설정
  const [checked, setChecked] = useState(false);
  const handleAgree = (event) => {
    setChecked(event.target.checked);
  };

  // async awiat axios 요청
  const onhandlePost = async (data) => {
    try {
      const randomImg = await axios({
        url: 'https://randomuser.me/api/'
      })

      const memberImgPath = randomImg.data.results[0].picture.large

      // 아이디, 비밀번호, 이메일, 이름, 닉네임, 전화번호 보내기
      const response = await axios({
        url: '/member',
        method: 'POST',
        baseURL: SERVER_URL,
        data: {...data, memberImgPath}
      })
      // 회원정보 받기
      const { memberSeq } = response.data

      const response2 = await axios({
        url: '/member/login',
        method: 'POST', 
        baseURL: SERVER_URL,
        data: {
          memberSeq,
          ...addressInfo
        }
      })
      console.log(response2)

      // 회원가입 성공하면 리덕스에 저장된 임시 정보 제거
      const newJoinInfo = {
        id: '',
        email: '', 
        password:'',
        name: '',
        nickName:'', 
        phoneNumber: ''
      }
      const newAddressInfo = {
        addressAddress: '',
        addressX: 0,
        addressY: 0
      }
      dispatch(setJoinInfo(newJoinInfo))
      dispatch(setAddress(null))
      // store.dispatch({
      //   type: 'CLEAR_USER_JOIN_INFO',
      //   joinInfo: {
      //     id: '',
      //     email: '', 
      //     password:'',
      //     name: '',
      //     nickName:'', 
      //     phoneNumber: ''
      //   },
      //   addressInfo: {
      //     addressAddress: '',
      //     addressX: 0,
      //     addressY: 0
      //   }
      // })
      
      // 로그인 페이지로 이동
      navigate("/login");
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    // console.log("addressInfo", addressInfo)
  }, [addressInfo])
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

    // 유효성 검사

    // 유효성 검사가 성공하면 axios 요청
    onhandlePost(joinData)
  }
  
  useEffect(() => {
    // /* 페이지 언마운트 될 때 실행 */
    // return () => {
    //   const newJoinInfo = {
    //     id: '',
    //     email: '', 
    //     password:'',
    //     name: '',
    //     nickName:'', 
    //     phoneNumber: ''
    //   }
    //   // const newAddressInfo = {
    //   //   addressAddress: '',
    //   //   addressX: 0,
    //   //   addressY: 0
    //   // }
    //   dispatch(setJoinInfo(newJoinInfo))
    //   dispatch(setAddress(null))
    // }
  }, [])

  
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
                defaultvalue={!addressInfo ? 
                "아직 등록된 주소가 없습니다" : addressInfo.addressAddress}
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
