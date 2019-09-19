import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
      <div>  
        Movie Title: {movie.title} 
        <br />
        <br />
        Time: {movie.time}
        <br />
        <br />
        Metascore: {movie.metascore}
        <br />
        <br />
        Genres: {movie.genres.map((genre) => (
          <ul>
          {genre}
          </ul>
          ))}
        <br />
      </div>
      ))
      }
    </div>
  );
};

export default Movies;
