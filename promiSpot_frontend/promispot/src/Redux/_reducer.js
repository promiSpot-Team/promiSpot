const initialState = {
  mapCenterPosition: {
    x: 37.5013, 
    y: 127.0397
  },
  joinInfo: {
    id: '',
    email: '', 
    password:'',
    name: '',
    nickName:'', 
    phoneNumber: ''
  },
  addressInfo: {
    addressAddress: '',
    addressX: 0, 
    addressY: 0
  }
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    // 로그인 했을 때, access-token과 memberSeq 저장
    case 'SAVE_CURRENT_USER_INFO': {
      return Object.assign({}, state, {
        currentUserInfo: action.currentUserInfo
      })
    }

    // 회원가입 진행 시 주소 선택 후 돌아왔을 때 회원가입 페이지에 선택된 주소 띄우기
    case 'SAVE_ADDRESS_INFO': {
      return Object.assign({}, state, {
        addressInfo: action.addressInfo
      })
    }
    
    // access-token 재발급
    case 'REFRESH_ACCESS_TOKEN': {
      return Object.assign({}, state, {
        currentUserInfo: action.currentUserInfo
      })
    }

    // 회원가입 진행 후 리덕스에 임시로 저장했던 회원 정보는 삭제하기
    case 'CLEAR_USER_JOIN_INFO': {
      return Object.assign({}, state, {
        joinInfo: action.joinInfo, addressInfo: action.addressInfo
      })
    }

    default:
      return state
  }
}

export default rootReducer