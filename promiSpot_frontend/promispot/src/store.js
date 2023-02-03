export const reducer = (state, action) => {

  // state의 초기값 설정
  if (state === undefined) {
    return {
      userId: 1,
      mapCenterPosition: {
        x: 37.5013, 
        y: 127.0397
      }
    }
  }

  // action.type에 따라 state를 변경
  var newState;
  switch (action.type) {
    case 'SAVE_PLACE_LIST':
      newState = Object.assign({}, state, {placeList: action.placeList})
      break
      
    case 'REGISTER_PLACE_TO_MAP':
      newState = Object.assign({}, state, {mapCenterPosition: action.mapCenterPosition})
      break

    case 'CHANGE_MAP_RECT':
      newState = Object.assign({}, state, {rect: action.rect})
      break
    }
  return newState
}

export default reducer;