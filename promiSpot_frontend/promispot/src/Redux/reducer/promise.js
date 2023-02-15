/* 액션 타입 만들기 */
const SET_PROMISE_FRIEND = "user/SET_PROMISE_FRIEND";
const CLEAR_PROMISE_FRIEND = "user/CLEAR_PROMISE_FRIEND";

const PUBLISH_VOTE_PLACE = "promise/PUBLISH_VOTE_PLACE";

/* 액션 생성함수 만들기 */
export const setPromiseFriend = (friend) => ({
  type: SET_PROMISE_FRIEND,
  friend,
});
export const clearPromiseFriend = () => ({ type: CLEAR_PROMISE_FRIEND });

export const publishVotePlace = (toggle) => ({
  type: PUBLISH_VOTE_PLACE,
  toggle,
});

/* 초기값 설정 */
const initialState = {
  friendList: [],
  toggle: 0,
};

/* 리듀서 선언 */
export default function user(state = initialState, action) {
  switch (action.type) {
    /* 약속에 친구 추가한 목록 저장 */
    case SET_PROMISE_FRIEND: {
      /* 추가하려는 친구가 이미 있는 친구라면 => 제거 | 추가하려는 친구가 아직 없다면 => 추가 */
      const newFriendList = state.friendList.map((friend) => {
        return friend.friendSeq !== action.friend.friendSeq ?
          [...state.friendList, action.friend]
        :
          null
      })
      // state.friendList.includes(action.friend)
      //   ? state.friendList.filter((friend) => {
      //       return friend !== action.friend;
      //     })
      //   : [...state.friendList, action.friend];
      // const newFriendList = state.friendList.includes(action.friend.friendSeq)
      //   ? state.friendList.filter((friend) => {
      //       return friend.friendSeq !== action.friend.friendSeq;
      //     })
      //   : [...state.friendList, action.friend];
      console.log("newFriendList", newFriendList);
      return Object.assign({}, state, {
        ...state,
        friendList: newFriendList,
      });
    }

    case CLEAR_PROMISE_FRIEND: {
      return Object.assign({}, state, {
        friendList: [],
      });
    }

    case PUBLISH_VOTE_PLACE: {
      return Object.assign({}, state, {
        toggle: action.toggle,
      });
    }

    default:
      return state;
  }
}
