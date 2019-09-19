import React from 'react';
import { actors } from '../data';

const Actors = () => { 
  return (
    <div>
      <h1>Actors Page</h1> 
      {actors.map((actor) => (
        <div>
          Name: {actor.name}
        <br />
        <br />  
          Movies: {actor.movies.map( (film) => (
            <ul>
              {film}
            </ul>
          ))
          }
        </div>        
      ))
      }
    </div>
  );
};

export default Actors;
