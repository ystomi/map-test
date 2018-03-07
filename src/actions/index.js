import * as actionTypes from '../utils/actionTypes';

export const onSearchClick = (word) => ({
  type: actionTypes.SEARCH,
  word,
});