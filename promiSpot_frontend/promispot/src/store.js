export const reducer = (state, action) => {
  // state의 초기값 설정
  // console.log("action", action)
  if (state === undefined) {
    return {
      userId: 1,
      placeList: [],
    }
  }
  var newState;
  switch (action.type) {
    case 'SAVE_PLACE_LIST':
      newState = Object.assign({}, state, {placeList: action.placeList})
    }

  return newState
}

export default reducer;