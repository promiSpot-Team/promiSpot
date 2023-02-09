/* 액션 타입 만들기 */
const SET_PROMISE_FRIEND = 'user/SET_PROMISE_FRIEND';

/* 액션 생성함수 만들기 */
export const setPromiseFriend = friend => ({ type: SET_PROMISE_FRIEND, friend })

/* 초기값 설정 */
const initialState = {
  friendList: []
}

/* 리듀서 선언 */
export default function user(state = initialState, action) {
  switch (action.type) {
    /* 약속에 친구 추가한 목록 저장 */ 
    case SET_PROMISE_FRIEND: {
      const newFriendList = state.friendList.includes(action.friend) ? 
      state.frinedList.filter((friend) => {
        return friend !== action.friend
      })
      : [...state.friendList, action.friend]
      return Object.assign({}, state, {
        ...state, friendList: newFriendList
      })
    }

    default:
      return state;
  }
}