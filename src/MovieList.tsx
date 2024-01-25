import React, { useEffect, useState } from 'react';
import Movie from './Movie';

interface MovieData {
  Title: string;
  Year: string;
  Poster: string;
}
const [, setStatus] = useState<string>('');
const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  

  useEffect(() => {
    fetch('https://www.omdbapi.com/?s=star+wars&apikey=abd2c79b')
      .then(response => response.json())
      .then(data => {
        if (data.Error) {
          setStatus(data.Error);
        } else {
          const updatedMovies = data.Search.map((movie: MovieData) => ({
            ...movie,
            Poster: movie.Poster.replace('http://', 'https://'),
          }));
          setMovies(updatedMovies);
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

/*
Importation de React et des hooks useEffect et useState, nécessaires pour gérer l'état local et les effets de bord
import React, { useEffect, useState } from 'react';

Importation du composant Movie, qui sera utilisé pour afficher chaque film
import Movie from './Movie';

Définition de l'interface MovieData, qui spécifie la structure des objets film obtenus de l'API
interface MovieData {
  Title: string;
  Year: string;
  Poster: string;
}

Déclaration d'un état pour gérer le statut de la requête à l'API

Note : le premier élément du tableau retourné par useState (qui contient la valeur actuelle de l'état) n'est pas utilisé, d'où la virgule au début

const [, setStatus] = useState<string>('');


Définition du composant MovieList

const MovieList: React.FC = () => {

  Déclaration d'un état pour stocker la liste des films

 const [movies, setMovies] = useState<MovieData[]>([]);

Utilisation de l'hook useEffect pour effectuer la requête à l'API lors du montage du composant
  useEffect(() => {
Requête à l'API OMDB pour obtenir une liste de films Star Wars
    fetch('https://www.omdbapi.com/?s=star+wars&apikey=abd2c79b')
      .then(response => response.json())
      .then(data => {
Si l'API retourne une erreur, on la stocke dans l'état de statut
        if (data.Error) {
          setStatus(data.Error);
        } else {
Sinon, on met à jour l'état des films avec les données retournées par l'API
Note : on remplace 'http://' par 'https://' dans les URLs des affiches pour éviter les problèmes de contenu mixte
          const updatedMovies = data.Search.map((movie: MovieData) => ({
            ...movie,
            Poster: movie.Poster.replace('http://', 'https://'),
          }));
          setMovies(updatedMovies);
          setStatus('');
        }
      })
      // En cas d'erreur lors de la requête, on la stocke dans l'état de statut
      .catch(error => setStatus('Error: ' + error.message));
  }, []);

Le composant retourne une div qui contient une liste de composants Movie, un pour chaque film dans l'état des films
  
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} title={movie.Title} year={movie.Year} poster={movie.Poster} />
      ))}
    </div>
  );
};

Le composant MovieList est exporté pour qu'il puisse être utilisé dans d'autres fichiers
export default MovieList;
*/