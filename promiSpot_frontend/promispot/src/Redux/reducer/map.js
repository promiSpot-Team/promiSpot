const SAVE_PLACE_LIST = 'map/SAVE_PLACE_LIST'
const SET_PLACE = 'map/SET_PLACE'
const CHANGE_RECT = 'map/CHANGE_RECT'
const SET_CENTER = 'map/SET_CENTER'
const CHANGE_CENTER = 'map/CHANGE_CENTER'

export const savePlaceList = placeList => ({ type: SAVE_PLACE_LIST, placeList })
export const setPlace = place => ({ type: SET_PLACE, place })
export const changeRect = rect => ({ type: CHANGE_RECT, rect })
export const setCenter = centerXY => ({ type: SET_CENTER, centerXY })
export const changeCenter = centerXY => ({ type: CHANGE_CENTER, centerXY })

const initialState = {
  centerXY: {
    x: 127.0397,
    y: 37.5013
  }
}

export default function map(state = initialState, action) {
  switch (action.type) {
    /* 장소 상세 페이지 검색 리스트 저장 */ 
    case SAVE_PLACE_LIST: {
      return Object.assign({}, state, {
        placeList: action.placeList
      })
    }

    /* 장소 등록 시 중심 위치 변경 */
    case SET_PLACE: {
      return Object.assign({}, state, {
        centerXY: {
          x: parseFloat(action.place.x),
          y: parseFloat(action.place.y)
        }
      })
    }

    /* 지도 드래그 될 때 지도의 영역 값 변경 */ 
    case CHANGE_RECT: {
      return Object.assign({}, state, {
        rect: action.rect
      })
    }

    case SET_CENTER: {
      return Object.assign({}, state, {
        centerXY: action.centerXY
      })
    }

    case CHANGE_CENTER: {
      return Object.assign({}, state, {
        mapXY: action.mapXY
      })
    }

    default:
      return state;
  }
}