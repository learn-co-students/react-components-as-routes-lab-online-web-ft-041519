import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <div>
          Director's Name: {director.name}
          <br />
          Director's Movies: {director.movies.map(
          (film) => (<ul>{film}</ul>)  
          )}
        </div> 
      ))
      }
    </div>
  )
};

export default Directors
