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

/* Le fichier Movie.tsx définit un composant React appelé Movie. Ce composant est utilisé pour afficher
les détails d'un seul film, y compris le titre, l'année de sortie et l'affiche du film.

Le composant Movie est une fonction qui prend un objet props en argument. Cet objet doit contenir trois propriétés :
title, year et poster. Ces propriétés sont définies dans l'interface MovieProps, qui est utilisée pour typer les props
du composant. Cela signifie que TypeScript vérifiera que chaque fois que le composant Movie est utilisé, il reçoit bien un
objet props avec ces trois propriétés, et que chaque propriété est du bon type.

Le composant Movie est probablement utilisé dans d'autres composants de l'application qui ont besoin d'afficher les détails
d'un film. Par exemple, il pourrait être utilisé dans une liste de films, où chaque film de la liste est représenté par un composant
Movie.

Cela nous amène à MovieList.tsx. Alors que Movie.tsx est responsable de l'affichage d'un seul film, MovieList.tsx est
probablement responsable de l'affichage d'une liste de films. Il pourrait utiliser le composant Movie pour afficher chaque
 film de la liste. Ainsi, alors que Movie.tsx s'occupe des détails d'un seul film, MovieList.tsx s'occupe de la gestion de plusieurs 
 films.
 */


/*Importation de React, nécessaire pour définir les composants

import React from 'react';

Définition de l'interface MovieProps, qui spécifie les props que le composant Movie attend
Chaque film doit avoir un titre (une chaîne de caractères), une année (une chaîne de caractères) et une affiche (une URL
sous forme de chaîne de caractères)

interface MovieProps {
  title: string;
  year: string;
  poster: string;
}

Définition du composant Movie
Il s'agit d'un composant fonctionnel qui prend un objet props de type MovieProps
Les props sont décomposées en leurs propriétés individuelles ({ title, year, poster }) pour un accès plus facile

const Movie: React.FC<MovieProps> = ({ title, year, poster }) => {
  
  Le composant retourne une div qui contient les détails du film
  
  Le titre du film est affiché dans une balise h2
  L'année de sortie du film est affichée dans une balise p
  L'affiche du film est affichée dans une balise img, avec le titre du film comme texte alternatif
  
  return (
    <div>
      <h2>{title}</h2>
      <p>{year}</p>
      <img src={poster} alt={title} />
    </div>
  );
};

// Le composant Movie est exporté pour qu'il puisse être utilisé dans d'autres fichiers
export default Movie; */

