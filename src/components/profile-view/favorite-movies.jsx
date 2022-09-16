import React from "react";
import { Link } from "react-router-dom";

import "./profile-view.scss";

export function FavoriteMovieView(favoriteMoviesList) {
  return (
    <div>
      <h2>Favorite Movies</h2>

      {favoriteMoviesList.map((movie) => {
        return (
          <div key={movie._id}>
            <img src={movie.ImageURL} alt={movie.Title} />
            <Link to={`/movies/${movie._id}`}>
              <h4>{movie.Title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}