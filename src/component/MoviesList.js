import { Row } from "react-bootstrap";
import CardMovie from "./CardMovies";
import PaginationM from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllMovieAction } from "../redux/action/moviesAction";

export const MovieList = () => {
  // utilise redux
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovieAction());
  }, []);
  const dataMovies = useSelector((state) => state.movies);
  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);
  //
  return (
      <Row className="mt-3">
        {movies.length >= 1 ? (
          movies.map((mov) => {
            return <CardMovie key={mov.id} movie={mov} />;
          })
        ) : (
          <h2 className="text-center p-5">لا يوجد افلام ...</h2>
        )}
        {movies.length >= 1 ? <PaginationM /> : null}
      </Row>
  );
};
export default MovieList;
