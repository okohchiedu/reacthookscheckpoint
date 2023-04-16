
const MovieCard = ({movie}) => {

    return(
      <div className="movie-Card" >
  
        <img 
          src={movie.posterURL}
          alt={movie.title}
        />
        <h1>
          {movie.title}
        </h1>
  
        <p>
          {movie.description}
        </p>
  
        <p>
          Movie Rating : {movie.rating}
        </p>
      </div>
    );
  }
export default MovieCard  