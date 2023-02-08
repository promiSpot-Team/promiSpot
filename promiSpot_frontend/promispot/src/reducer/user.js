/* 액션 타입 만들기 */
const SET_TOKEN = 'user/SET_TOKEN';
const REISSUE_TOKEN = 'user/REFRESH_TOKEN';
const SET_JOIN_INFO = 'user/SET_JOIN_INFO'
const SET_ADDRESS = 'user/SET_ADDRESS'

/* 액션 생성함수 만들기 */
export const setToken = info => ({ type: SET_TOKEN, info })
export const reissueToken = accessToken => ({ type: REISSUE_TOKEN, accessToken })
export const setJoinInfo = joinInfo => ({ type: SET_JOIN_INFO, joinInfo })
export const setAddress = addressInfo => ({ type: SET_ADDRESS, addressInfo })

/* 초기값 설정 */
const initialState = {
  isLogin: false,
  joinInfo: {
    id: '',
    email: '', 
    password:'',
    name: '',
    nickName:'', 
    phoneNumber: ''
  },
}

/* 리듀서 선언 */
export default function user(state = initialState, action) {
  switch (action.type) {
    /* 로그인 성공하면 토큰 저장 */ 
    case SET_TOKEN: {
      return Object.assign({}, state, {
        info: action.info
      })
    }
    
    /* 토큰 재발급 */
    case REISSUE_TOKEN: {
      const newUserInfo = {...state.info, accessToken: action.accessToken}
      console.log(newUserInfo)
      return Object.assign({}, state, {
        ...state, info: {...newUserInfo}
      })
    }

    /* 회원가입 임시 정보 저장 */
    case SET_JOIN_INFO: {
      return Object.assign({}, state, {
        joinInfo: action.joinInfo
      })
    }

    /* 주소 정보 저장 */
    case SET_ADDRESS: {
      return Object.assign({}, state, {
        addressInfo: action.addressInfo
      })
    }
    default:
      return state;
  }
}