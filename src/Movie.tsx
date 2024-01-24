import React from 'react';

interface MovieProps {
  title: string;
  year: string;
  poster: string;
}

const Movie: React.FC<MovieProps> = ({ title, year, poster }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{year}</p>
      <img src={poster} alt={title} />
    </div>
  );
};

export default Movie;