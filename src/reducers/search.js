import * as actionTypes from '../utils/actionTypes';

const initialSearchState = {
  searchWord: "",
  pois: []
}

const search = (state = initialSearchState, action) => {
  if(action.type === actionTypes.SEARCH) {
    return {
      ...state,
      searchWord: state.searchWord,
      pois: [],
    }
  }
  else {
    return state;
  }
}

export default search;