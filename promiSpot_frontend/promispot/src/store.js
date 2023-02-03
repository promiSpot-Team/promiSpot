export const reducer = (state, action) => {
  // state의 초기값 설정
  // console.log("action", action)
  if (state === undefined) {
    return {
      userId: 1,
      placeList: [],
      mapCenterPosition: {
        x: 37.5013, 
        y: 127.0397
      }
    }
  }
  var newState;
  switch (action.type) {
    case 'SAVE_PLACE_LIST':
      newState = Object.assign({}, state, {placeList: action.placeList})
    case 'REGISTER_PLACE_TO_MAP':
      newState = Object.assign({}, state, {mapCenterPosition: action.mapCenterPosition})
    }
  return newState
}

export default reducer;