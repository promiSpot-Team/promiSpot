export const reducer = (state, action) => {

  // state의 초기값 설정
  if (state === undefined) {
    return {
      userId: 1,
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
      addressInfo: ''
    }
  }

  // action.type에 따라 state를 변경
  var newState;
  switch (action.type) {
    // 장소 검색 후 상세 페이지 클릭하고 다시 장소 검색 페이지로 돌아왔을 때 검색 목록 보여주기
    case 'SAVE_PLACE_LIST':
      newState = Object.assign({}, state, {placeList: action.placeList})
      break
      
    // 지도에 장소 등록할 때 장소의 위치로 지도 중심 이동시키기
    case 'REGISTER_PLACE_TO_MAP':
      newState = Object.assign({}, state, {mapCenterPosition: action.mapCenterPosition})
      break

    // 지도 드래그 될 때 지도의 사각형 값 변경하기
    case 'CHANGE_MAP_RECT':
      newState = Object.assign({}, state, {rect: action.rect})
      break

    // 회원가입 도중 주소를 선택하고 돌아왔을 때 입력 정보 남아있게 하기
    // 단, 다른 페이지로 이동했을 때는 동작하지 않음
    case 'SAVE_USER_JOIN_INFO':
      newState = Object.assign({}, state, {joinInfo: action.joinInfo})
      break

    // 회원가입 진행 후 리덕스에 임시로 저장했던 회원 정보는 삭제하기
    case 'REMOVE_USER_JOIN_INFO':
      newState = Object.assign({}, state, {userId: action.userId})
      break

    case 'SAVE_ADDRESS_INFO':
      newState = Object.assign({}, state, {addressInfo: action.addressInfo})
    }
  return newState
}

export default reducer;