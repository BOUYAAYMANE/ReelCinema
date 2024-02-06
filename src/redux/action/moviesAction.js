import axios from "axios";
import { ALLMOVIES, MoviesApi } from "../type/moviesType";
// hna type(action.type,action.data...),data,pages(nombre de page) de action de reducer 'moviesReducer'  (voir reducer)
export const getAllMovieAction = () => {
  // 2-Middleware  partie 2
  // momkin function t ruturn aray function
  return async (dispatchReturn) => {
    const response = await axios.get(MoviesApi);
    dispatchReturn({
      type: ALLMOVIES,
      data: response.data.results,
      pages: response.data.total_pages,
    });
  };
};

export const getMoviesSearchAction = (word) => {
  return async (dispatchReturn) => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=42241d84c6d646fdf31d79a02117c483&language=ar&query=${word}`
    );
    dispatchReturn({
      type: ALLMOVIES,
      data: resp.data.results,
      pages: resp.data.total_pages,
    });
  };
};

export const getPage = (numPage) => {
  return async (dispatchReturn) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=42241d84c6d646fdf31d79a02117c483&language=ar&page=${numPage}`
    );
    dispatchReturn({
      type: ALLMOVIES,
      data: response.data.results,
      pages: response.data.total_pages,
    });
  };
};

// setPageCounte(response.data.total_pages);
