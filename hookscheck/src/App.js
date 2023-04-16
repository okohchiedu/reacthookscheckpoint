import './App.css';
import Filter from './Component/Filter';
import MovieList from './Component/MovieList';
import { useState } from 'react';


function App() { const [movies, setMovies] = useState([
  {
    title: 'Hotstar',
    description: 'Both Aquaman and the Lost Kingdom and The Marvels are placed for immense success.',
    posterURL: 'https://www.hotstar.com/in/movies',
    rating: 9.1
  },
  {
    title: 'Open Culture',
    description: 'heated exchange of gangs in quest to dominate',
    posterURL:  'https://www.openculture.com/freemoviesonline',
    rating: 9.0
  },
  {
    title: 'PopcornFlix',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people.',
    posterURL:   'https://www.popcornflix.com',
    rating: 8.0
  }
]);
const [filterTitle, filterbyTitle] = useState('');
const [filterRate, filterbyRate] = useState(0);

function handleFilterTitleChange(event) {
  filterbyTitle(event.target.value);
}

function handleFilterRateChange(event) {
  filterbyRate(parseFloat(event.target.value));
}

function handleAddMovie() {
  const newMovie = {
    title: 'New Movie',
    description: 'A new movie has been added to the list!',
    posterURL: 'https://archive.org/details/feature_films',
    rating: 8.5
  };
  setMovies([...movies, newMovie]);
}
  return (
    <div>
    <button onClick={handleAddMovie}>Add Movie</button>
    <Filter
        filterbyTitle={handleFilterTitleChange}
        filterbyRate={handleFilterRateChange}
      />
      <MovieList movies={movies} filterTitle={filterTitle} filterRate={filterRate}/>
    </div>
  );
}

export default App;
