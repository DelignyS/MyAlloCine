import React from 'react';
import SearchForm from './SearchForm';

const App: React.FC = () => {
  return (
    <div>
      <SearchForm />
      {}
    </div>
    
  );
};

export default App;

/* Le fichier App.tsx est le composant racine de votre application React.
Il est généralement le point d'entrée de votre application React et est responsable du rendu
de tous les autres composants de l'application. Dans votre cas, il rend le composant SearchForm.

Voici une explication détaillée de chaque partie de ce fichier :

Il y a d'abord une importation de React, qui est nécessaire pour utiliser JSX. Ensuite,
il y a une importation de SearchForm, qui est le composant que vous allez créer dans la prochaine étape.

Ensuite, il y a une fonction App qui est le composant racine de votre application React.
Elle renvoie un élément div qui contient un élément SearchForm. React.FC est un type générique qui signifie Functionnal Component.

Enfin, il y a une exportation par défaut de App, qui permet à ce composant d'être importé dans d'autres fichiers.
*/