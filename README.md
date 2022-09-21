# Make me laugh project
This project seeks to apply frontend knowledge intuitive and simple screens, nice transitions, reusable components, testing for components and best practices.
## Ingredients
***Frontend***
 - Vue 3
 - Axios
 - Vue Router
 - Typescript
 - Vitest
 - ESLint + Prettier
 - Vueuse

***Backend***
- Typescript
- Express
- Firebase
- Docker
- Cors
- dotenv

## Project structure
```
$PROJECT_ROOT
├── docker-compose.yml      # Entry point
├── .env                    # Environment file
├── ...                     # Configs files 
└── src
    ├── assets              # Css base to among project
    ├── components          # UI components
        ├── Component       # UI component
            ├── __test__    # Test folder about component
    ├── router              # Routes of the project
    └── services            # Handle with api joke
    └── views               # Project's screens
    └── App.vue             # Root component
    └── main.ts             # Entry point
```


## Project Setup

```sh
npm install
```
#### Run project

```sh
docker-compose up
```
#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
