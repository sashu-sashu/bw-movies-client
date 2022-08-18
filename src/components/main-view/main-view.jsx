import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor(){
    super();
    this.state = {
        movies: [
            { 
              _id: "62f519d7cb8121ed39c75512",
              Title: "Coffee and Cigarettes",
              Description : "A series of vignettes that all have coffee and cigarettes in common.",
              Director: {
                  Name: "Jim Jarmusch",
                  BIO: "James Robert Jarmusch is an American film director and screenwriter. He has been a major proponent of independent cinema since the 1980s, directing films including Stranger Than Paradise (1984), Down by Law (1986), Mystery Train (1989), Dead Man (1995), Ghost Dog: The Way of the Samurai (1999), Coffee and Cigarettes (2003), Broken Flowers (2005), Only Lovers Left Alive (2013), Paterson (2016), and The Dead Don't Die (2019). Stranger Than Paradise was added to the National Film Registry in December 2002.[4] As a musician Jarmusch has composed music for his films and released three albums with Jozef van Wissem.",
                  Birth: "1953-01-22",
                  Death: null
              },
              Year: "2003",
              Duration: "1h 35m",
              Genre: {
                 Name: "Comedy drama",
                 Description: "Comedy drama is a genre of dramatic works that combines elements of comedy and drama. As such, it is also known by the portmanteau dramedy."
              },
              ImageURL: "https://m.media-amazon.com/images/M/MV5BYzQxNGU2ZmMtOGVkMS00NGIxLWJjZWUtYjNiNTIwMzVkOGRlXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_FMjpg_UX842_.jpg" 
            },
            { 
              _id: "62f51a04cb8121ed39c75513",
              Title: "Schindler's List",
              Description : "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
              Director: {
                  Name : "Steven Spielberg",
                  BIO: " Steven Allan Spielberg is an American film director, producer, and screenwriter. A figure of the New Hollywood era, he is the most commercially successful director of all time. Spielberg is the recipient of various accolades, including three Academy Awards (including two Best Director wins), a Kennedy Center honor, a Cecil B. DeMille Award, and an AFI Life Achievement Award. Time magazine named him one of the 100 Most Important People of the Century in 2013.",
                  Birth: "1946-12-18",
                  Death: null
              },
              Year: "1993",
              Duration: "3h 15m",
              Genre: {
                  Name: "Drama",
                  Description: "Drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone."
                  },
              ImageURL: "https://m.media-amazon.com/images/M/MV5BNzczOWJlYTAtMDQ1Yy00MWU5LTk3Y2QtMWEyOGRiMjFkMTJmXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_FMjpg_UX606_.jpg"
            },
            { 
                _id: "62f51a77cb8121ed39c75514",
                Title: "Metropolis",
                Description: "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working-class prophet who predicts the coming of a savior to mediate their differences.",
                Director: {
                    Name: "Fritz Lang",
                    BIO: "Friedrich Christian Anton Lang known as Fritz Lang, was an Austrian film director, screenwriter, and producer who worked in Germany and later the United States. One of the best-known émigrés from Germany/'s school of Expressionism, he was dubbed the \"Master of Darkness\" by the British Film Institute. He has been cited as one of the most influential filmmakers of all time.",
                    Birth: "1890-12-05",
                    Death: "1976-08-02"
                    },
                Year: "1926",
                Duration: "2h 33m",
                Genre: {
                    Name: "Sci-Fi",
                    Description: "Science Fiction (sometimes shortened to Sci-Fi) is a genre of speculative fiction which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, extraterrestrial life, sentient artificial intelligence, cybernetics, certain forms of immortality (like mind uploading), and the singularity. Science fiction predicted several existing inventions, such as the atomic bomb, robots and borazon, whose names entirely match their fictional predecessors."
                    },
                ImageURL: "https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX559_.jpg"
            },
        ],
        selectedMovie: null
    };
}

setSelectedMovie(newSelectedMovie) {
    this.setState({
        selectedMovie: newSelectedMovie
    });
}

render() {
  const { movies, selectedMovie } = this.state;

  if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>;

  if (movies.length ===0) return <div className='main-view'>The list is empty!</div>;

  return (
      <div className='main-view'>
        {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => {this.setState({ selectedMovie: newSelectedMovie }); }} />)}
            </div>
        );
    }
}