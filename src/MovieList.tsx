import React, { useEffect, useState } from 'react';
import Movie from './Movie';

interface MovieData {
  Title: string;
  Year: string;
  Poster: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [status, setStatus] = useState<string>('Loading...');

  useEffect(() => {
    fetch('http://www.omdbapi.com/?s=star+wars&apikey=abd2c79b')
      .then(response => response.json())
      .then(data => {
        if (data.Error) {
          setStatus(data.Error);
        } else {
          setMovies(data.Search);
          setStatus('');
        }
      })
      .catch(error => setStatus('Error: ' + error.message));
  }, []);

  return (
    <div>
    {movies.map((movie, index) => (
      <Movie key={index} title={movie.Title} year={movie.Year} poster={movie.Poster} />
    ))}
  </div>
  );
};

export default MovieList;