/* 액션 타입 만들기 */
const SAVE_INFO = 'user/SAVE_INFO';
const REISSUE_TOKEN = 'user/REFRESH_TOKEN';
const JOIN_INFO = 'user/JOIN_INFO'

/* 액션 생성함수 만들기 */
export const saveInfo = info => ({ type: SAVE_INFO, info })
export const reissueToken = accessToken => ({ type: REISSUE_TOKEN, accessToken })
export const joinInfo = joinInfo => ({ type: JOIN_INFO, joinInfo })

/* 초기값 설정 */
const initialState = {
  isLogin: false
}

/* 리듀서 선언 */
export default function user(state = initialState, action) {
  switch (action.type) {
    case SAVE_INFO: {
      return Object.assign({}, state, {
        info: action.info
      })
    }

    case REISSUE_TOKEN: {
      const newUserInfo = {...state.info, accessToken: action.accessToken}
      console.log(newUserInfo)
      return Object.assign({}, state, {
        ...state, info: {...newUserInfo}
      })
    }

    case JOIN_INFO: {
      return Object.assign({}, state, {
        joinInfo: action.tmpInfo
      })
    }
    default:
      return state;
  }
}