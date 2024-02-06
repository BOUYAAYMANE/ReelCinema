import { Container } from "react-bootstrap";
import NavbarM from "./component/Navbar";
import MovieList from "./component/MoviesList";
import axios from "axios";
import { useState } from "react";
// import PaginationM from "./component/Pagination";
import MoviesDetails from "./component/MoviesDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font color-body">
      <NavbarM />
      <Container>
        {/* router page */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MoviesDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
