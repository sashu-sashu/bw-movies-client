import React from 'react';

export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;

        return (
            <Container fluid className="movieCardContainer">
        <Row>
          <Col>
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
              <div className="movie-releaseyear">
                <span className="label">ReleaseYear: </span>
                <span className="value">{movie.ReleaseYear}</span>
              </div>
              <div className="movie-runtime">
                <span className="label">RunTime: </span>
                <span className="value">{movie.RunTime}</span>
              </div>
              <div className="movie-director">
                <span className="label">Director: </span>
                <span className="value">
                  {movie.Director.Name +
                    ' BIO: ' +
                    movie.Director.Bio +
                    ' Birth: ' +
                    movie.Director.Birth}
                </span>
              </div>
              <div className="movie-genre">
                <span className="label">Genre: </span>
                <span className="value">
                  {movie.Genre.Name + ' Description: ' + movie.Genre.Description}
                </span>
              </div>
              <Button
                onClick={() => {
                  onBackClick(null);
                }}
              >
                Back
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}