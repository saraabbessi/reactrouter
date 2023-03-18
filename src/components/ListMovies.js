import React from 'react';
import { movies } from '../Data/DataMovies';
import MovieCard from './MovieCard';

function ListMovies() {
  return (
    <div
    style={{
    display:"flex", 
    justifyContent:"space-between", 
    margin:"auto",
    flexWrap:"wrap"
    }}

    >
         {movies.map((movie) => (
            <MovieCard movie={movie}/>
            ))}
    </div>
  );
}

export default ListMovies;
