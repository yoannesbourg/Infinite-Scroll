# Getting Started

- Clone this project, 
- npm install
- Run `json-server db.json` in your termnial
- Run `npm run start` in your termnial

If you have a prettier issue, just run npm run lint-fix

### Details:

- For this project I've used React, Typescript, Axios, Redux for the state management, React Hooks, CSS-in-JS approach styling method (Styled Components) and Eslint + Prettier.
- Data management with [json-server](https://github.com/typicode/json-server) to fetch and save data from db.json. It runs on port 3000 by default while the react-app is programmed to run in port 3001.
- List is sorted with unconfirmed bookings at the top and confirmed below.
- When `collaborating: true` then booking is confirmed
- Clicking on "Confirm booking" changes `collaborating` to `true`.
- Mouse hover on "Connected" pill reveals "Disconnect" button, which after click changes `collaborating` to `false`.
- Clicking on "Not my booking" removes the entry from db.
- There is a pagination and a search bar where you can search by the fullname of the couples (even if the surname doesn't appears on the couple card).
- Design system is quite basic, reusable small components in medium components.
