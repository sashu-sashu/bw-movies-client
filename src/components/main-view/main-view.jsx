import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { LoginView } from "../login-view/login-view";
import { RegistrationView } from "../registration-view/registration-view";
import { MovieView } from "../movie-view/movie-view";
import { MovieCard } from "../movie-card/movie-card";
import { Row, Col, Container, Navbar, Nav } from "react-bootstrap";

import "./main-view.scss";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      user: null,
      selectedMovie: null, //
    };
  }

  componentDidMount() {
    axios
      .get('https://bw-movies-server.herokuapp.com')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }


  onLoggedIn(user) {
    this.setState({
        user
    });
}

onRegistration(registered) {
    this.setState({
        registered
    });
}

  render() {
    const { movies, selectedMovie, user, registered } = this.state;
            /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are passed as a prop to the LoginView*/
        if (!user) return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;


    if (movies.length === 0) return <div className="main-view" />;
    if (!registered) return <RegistrationView onRegistration={(register) => this.onRegistration(register)} />; 
    if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => {this.setSelectedMovie(newSelectedMovie); }}/>
            // Before the movies have been loaded
        if (movies.length ===0) return <div className='main-view'/>;

        return (
          <div className="main-view">
          <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="#home">Top 10 Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Nav.Link href="#update">Edit Profile</Nav.Link>
                    <Nav.Link href="#logout">Logout</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Container fluid className="mainViewContainer">
            {selectedMovie ? (
              <Row className="justify-content-md-center">
                <Col md={8}>
                  <MovieView
                    movie={selectedMovie}
                    onBackClick={(newSelectedMovie) => {
                      this.setSelectedMovie(newSelectedMovie);
                    }}
                  />
                </Col>
              </Row>
            ) : (
              <Row className="justify-content-md-center">
                {movies.map((movie) => (
                  <Col key={movie._id} lg={3} md={4} sm={6}>
                    <MovieCard
                      
                      movie={movie}
                      onMovieClick={(newSelectedMovie) => {
                        this.setSelectedMovie(newSelectedMovie);
                      }}
                    />
                  </Col>
                ))}
              </Row>
            )}
          </Container>
        </div>
      );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
  }).isRequired,
};