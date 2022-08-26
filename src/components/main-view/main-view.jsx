import React from 'react';
import axios from 'axios';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import { Container, Col, Row, Navbar, Nav } from 'react-bootstrap';

import './main-view.scss';

export class MainView extends React.Component {
  constructor(){
    super();
    this.state = {
        movies: [],
    selectedMovie: null,
    user: null,
    registered: null
    };
}

componentDidMount(){
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

//When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` property to that movie

setSelectedMovie(newSelectedMovie) {
    this.setState({
        selectedMovie: newSelectedMovie //or instead newSelectedMovie just movie?
    });
}

// When a user successfully logs in, this function updates the `user` property in state to that particular user
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
              <Col lg={3} md={4} sm={6}>
                <MovieCard
                  key={movie._id}
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
