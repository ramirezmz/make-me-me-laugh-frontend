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

## How to run the project?

To run all project, we need to clone 2 repositories: [frontend](https://github.com/ramirezmz/make-me-me-laugh-frontend) and [backend](https://github.com/ramirezmz/make-me-laugh-backend).
```sh
git clone https://github.com/ramirezmz/make-me-me-laugh-frontend
```
Enter inside the project
```sh
cd make-me-me-laugh-frontend
```
Install dependencies
```sh
npm install
```
And then, we'll use `docker-compose` to up the application
```sh
docker-compose up
```

### Others scripts
#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
