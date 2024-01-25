### Le Cinéma de notre bon vieux Jabba le Hut

En premier lieu, il y a pas mal de doc dans l'application

En l'etat cette application est optimisé pour la production, en ce sens que si vous cloner ce repo, il faudra respecter certaines étapes, et certains points de code afin de le faire fonctionner localement.

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- [Node.js](https://nodejs.org/en/download/) : Un environnement d'exécution JavaScript qui vous permettra d'exécuter votre application en local.
- [npm](https://www.npmjs.com/get-npm) Un gestionnaire de paquets pour Node.js qui vous permettront
 d'installer les dépendances de votre application.

## Installation

Pour installer et mettre en place l'application, suivez les étapes suivantes :

1. Clonez le dépôt sur votre machine locale en utilisant `git clone`.

```git clone https://github.com/DelignyS/MyAlloCine.git [votre nom d'appli]```

2.Naviguez dans le répertoire du projet.

```cd [votre nom d'appli]```

3. Installez les dépendances du projet

```npm i```

4.Lancez l'application en developpement.

```npm start```

Mais au préalable veuillez modifier votre index.html au niveau de ```<script type="module" src="/dist/index.js"></script>``` par ```<script type="module" src="/src/main.tsx"></script>```

##À propos de l'application

Cette application a été créée avec Vite, TypeScript et React 18. Vite est un outil de build qui offre un démarrage rapide et un rechargement à chaud des modules. TypeScript est un sur-ensemble de JavaScript qui ajoute des types statiques, ce qui peut aider à écrire du code plus sûr et plus compréhensible. React 18 est la dernière version de la populaire bibliothèque de création d'interfaces utilisateur.

[ESLint](https://eslint.org/) est un outil d'analyse de code statique largement utilisé pour JavaScript, y compris TypeScript. Il vous aide à trouver et à corriger les problèmes dans votre code JavaScript, tels que les erreurs de syntaxe, les erreurs de typographie, les erreurs de style de code, et plus encore. ESLint est hautement configurable et extensible, ce qui signifie que vous pouvez personnaliser les règles en fonction de vos préférences de style de code ou des conventions de votre équipe. De plus, ESLint prend en charge les dernières fonctionnalités de JavaScript et peut être intégré à de nombreux éditeurs de code et outils de CI/CD, ce qui facilite l'adoption et l'utilisation dans les projets de développement logiciel.

## À propos de l'application

Le cinéma de Jabba est une application qui m'a permis d'avoir une première approche de TypeScript, mais aussi et surtout de React 18.

La documentation présente dans l'application se trouve en commentaire. De manière cohérente, elle suit le cheminement de :
1. index.html
2. main.tsx
3. App.tsx
4. Movie.tsx
5. MovieList.tsx
6. SearchForm.tsx

Les dépendances que j'ai utilisées sont listées dans mon fichier `package.json`.

Bonne lecture et bonne utilisation de l'application à tous !




