/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Row, Button, Card , Form, Container } from "react-bootstrap";

import "./profile-view.scss";

function ProfileView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const [user, setUserData] = useState("");
  const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);

  const getUserData = () => {
    let user = localStorage.getItem("user");
    let token = localStorage.getItem("token");
    axios
      .get(`https://bw-movies-server.herokuapp.com/users/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUsername(response.data.Username);
        setEmail(response.data.Email);
        setUserData(response.data);
        setFavoriteMoviesList(
          props.movies.filter((movie) =>
            response.data.FavoriteMovies.includes(movie._id)
          )
        );
        console.log(response);
      })
      .catch((error) => console.error(error));
  };

  // Delete Profile
  const handleDelete = () => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    axios.delete(`https://bw-movies-server.herokuapp.com/users/${user}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert(`The account ${user.Username} was successfully deleted.`);
    localStorage.clear();
    window.open("/register", "_self");
  };
  // Update Profile
  const handleUpdate = () => {
    let user = localStorage.getItem("user");
    let token = localStorage.getItem("token");

    axios
      .put(
        `https://bw-movies-server.herokuapp.com/users/${user}`,
        {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )

      .then((response) => {
        alert("Your profile has been updated");
        localStorage.setItem("user", response.data.Username),
          console.log(response.data);
        window.open("/", "_self");
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      <Row>
        <h3>Profile</h3>
      </Row>

      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter new email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="birthday">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
            type="date"
            placeholder="birthday"
          />
        </Form.Group>
      </Form>

      <Row>
        <Button className="mt-2 ml-3" onClick={handleUpdate}>
          Update your profile
        </Button>
        <Button className="mt-2 ml-4" onClick={handleDelete}>
          Delete your profile
        </Button>
      </Row>
      <Row className="mb-3 mt-4">
        <h4>Favorite movies:</h4>
      </Row>
      <Row>
        {favoriteMoviesList.map((movie) => {
          return (
            <Col xs={12} md={6} lg={3} key={movie._id}>
              <Link to={`/movies/${movie._id}`}>
                <Card.Img
                  className="mb-2"
                  src={movie.ImageURL}
                  alt={movie.Title}
                />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

ProfileView.propTypes = {
  profileView: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string,
  }),
  movies: PropTypes.arrayOf(
    {
      _id: PropTypes.string,
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImageURL: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
      }),
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired,
        Birth: PropTypes.string.isRequired,
        Death: PropTypes.string,
      }),
    }
  ).isRequired
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(ProfileView);