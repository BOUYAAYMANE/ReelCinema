import React, { useEffect, useState } from "react";
import { Container, Form, Row, Nav, Navbar, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMovieAction,
  getMoviesSearchAction,
} from "../redux/action/moviesAction";
export const NavbarM = () => {
  const [word, setWord] = useState();
  const onChangeWord = (e) => {
    setWord(e.target.value);
    localStorage.setItem("word", e.target.value);
  };

  const dispatch = useDispatch();
  // to serach in api
  useEffect(() => {
    setWord(localStorage.getItem("word"));
    if (word === "") {
      dispatch(getAllMovieAction());
    } else {
      dispatch(getMoviesSearchAction(word));
      // // number des page kaytbdel f search
      // setPageCounte(resp.data.total_pages);
    }
  }, [word]);

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="4" lg="8">
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </Col>

          <Col xs="6" lg="4" className="d-flex align-items-center">
            <div className="search w-100">
              <FontAwesomeIcon icon={faSearch} className="fa fa-search" />
              <i className="fa fa-search"></i>
              <input
                // onChange={(e) => SearchMovie(e.target.value)}
                onChange={onChangeWord}
                value={word}
                type="text"
                className="form-control"
                placeholder="ابحت"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarM;
