import React from 'react';
import { movies } from '../data';

const Movies = ({ movies }) => {
  return (
    <div>
        <h1>Movies Page</h1>
        { movies }
        {/* { movies.map(movie => {
          <div className="movie">
            <p>{movie.title}</p>
            <p>Time: {movie.time}</p>
            <p>Genres: </p>
          </div>
        })} */}
    </div>
  );
};

export default Movies;
