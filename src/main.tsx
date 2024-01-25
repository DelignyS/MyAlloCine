import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Can't find root element");
}

/* Le fichier main.tsx est le point d'entrée de votre application React. Il diffère de App.tsx
en ce sens qu'il n'utilise pas la fonction render de ReactDOM mais la fonction createRoot.
Et createRoot est une fonction qui permet d'activer le mode concurrent de React. Ce mode permet à React de rendre
 votre application de manière plus efficace. En effet, il permet à React de rendre votre application en plusieurs fois.
 En effet, il permet à React de rendre votre application en plusieurs fois. Ainsi, si votre application est complexe,
  elle ne bloquera pas le navigateur pendant le rendu. Cela permet d'améliorer l'expérience utilisateur. 

  if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Can't find root element");
}
Ce if permet de vérifier que l'élément root existe bien dans le DOM. Si ce n'est pas le cas, une erreur est affichée dans la console.
*/
