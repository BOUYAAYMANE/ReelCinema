import {
  ALLMOVIES,
  SERACHMOVIES
} from "../type/moviesType";

// 2 -creation de reducer
const intialValue = {
  movies: [],
  pageCount: 0
};
export const moviesReducer = (state = intialValue, action) => {
  switch (action.type) {
    case ALLMOVIES:
      // action.data => dakchy li aytsafet lina mn jiha khra
      return {
        movies: action.data, pageCount: action.pages
      };
    default:
      return state;
  }
};