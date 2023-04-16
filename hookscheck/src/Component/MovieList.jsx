

import MovieCard from "./MovieCard"

const MovieList = ({movies, filterTitle, filterRate}) => {

    const filteredMovies = movies.filter(movie => {
      return(
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) && 
        movie.rating >= filterRate
      );
    });
  
    return(
      <div className="movieList" >
        {filteredMovies.map(movie => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }

  export default MovieList;
 