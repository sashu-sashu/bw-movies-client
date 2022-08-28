/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Row, Col } from "react-bootstrap";

import "./movie-view.scss";

export class MovieView extends React.Component {
  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.keypressCallback);
  }

render() {
  const { movie, onBackClick } = this.props;

  return (
    <div className="movie-view">
      <div className="movie-poster">
        <img src={movie.ImagePath} />
      </div>
      <div className="movie-title">
        <span className="label">Title: </span>
        <span className="value">{movie.Title}</span>
      </div>
      <div className="movie-description">
        <span className="label">Description: </span>
        <span className="value">{movie.Description}</span>
      </div>
      <div className="movie-director">
        <span className="label">Director: </span>
        <span className="value">
          {movie.Director.Name + " ~ " + movie.Director.Bio}
        </span>
      </div>
      <div className="movie-genre">
        <span className="label">Genre: </span>
        <span className="value">
          {movie.Genre.Name + " ~ " + movie.Genre.Description}
        </span>
      </div>
      <Button
        className="mt-4"
        onClick={() => {
          onBackClick(null);
        }}
      >
        Back
      </Button>
    </div>
  );
}
}


MovieView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
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
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};