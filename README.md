# Getting Started

- Clone this project, 
- npm install
- Run `json-server generate.js` in your termnial
- Run `npm run start` in your termnial

If you have a prettier issue, just run npm run lint-fix

### Details:

- For this project I've used React, Typescript, Axios, React Hooks, Sass for styling with BEM approach and Eslint + Prettier.
- Data management with [json-server](https://github.com/typicode/json-server) to fetch and save data from db.json. It runs on port 3000 by default while the react-app is programmed to run in port 3001.
- This is an image list with an infinte scroll, once you get to the bottom of the page, new images are laoded.
- Clicking on "like" icon changes `liked` to `true` or `false` if it's already liked.
