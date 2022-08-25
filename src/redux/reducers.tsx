import { MapState } from "../types/app-types"

const initialState: MapState = {
  previewOpen: false,
  feature: null
}

export const mapReducer = (state: MapState = initialState, action: {type: string, payload: {}}) => {
    switch(action.type) {
      case 'SET-OPEND':
        return {...state, previewOpen: true}
      case 'SET-CLOSED':
          return {...state, previewOpen: false}
      case 'SET-SELECTED-FEATURE':
        return {...state, previewOpen: true, feature: action.payload}
      default:
        return state
    }
}
