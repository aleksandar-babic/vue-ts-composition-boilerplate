# vue-boilerplate-ts-comp
![Build and Test](https://github.com/aleksandar-babic/vue-ts-composition-boilerplate/workflows/Build%20and%20Test/badge.svg)
  
Yet another Vuejs boilerplate. My view on how enterprise vue should be structured and defined.

# Enabled Vue CLI plugins
* Babel
* Typescript
* PWA
* Router
* eslint
* i18n
* unit-jest
* e2e-cypress

# Additional goodies
* Composition API
* Dockerfile
* Axios
* Lodash
* Storybook
* date-fns
* vue-grid-layout

## Composition API
Besides primary idea of composition api, to de-couple and organize business logic, this boilerplate is also using it to implement both global and local state managemenet stores.
> Take a look at `src/store` dir for implementation, `UserDetails` and `Counter` components for usage.

## Data layer
HTTP communication is done using Axios as HTTP client of choice, with abstractions in form of singleton API services.
  
Services are using generics to map response to the appropriate model.
  
DTOs are utilized to ensure that proper payload will be sent to the API services.
> Take a look at `src/services/api`, `BaseApiService` is a generic base class which all other services are inheriting.
  
> Models are defined in `src/models`, DTOs in `src/dto`.
# Linting
Eslint + Prettier

# Git hooks
* pre-commit - runs `yarn lint`
* pre-push - runs `yarn test:unit`

# Development setup
```shell script
# Install dependencies
yarn

# Create an .env file
cp .env.example .env

# Start local development server with hot-reload
yarn serve
```

# Testing
Both unit and e2e tests are enabled. Jest is used as a testing framework of choice for unit tests, cypress for e2e.
* `yarn lint` - static analysis
* `yarn test:unit` - runs jest tests
* `yarn test:e2e` - runs cypress tests 

# Production build
Utilizing docker multi-stage build to firstly install dependencies and build the app, and then copy them to vanilla nginx image in order to minimze the footprint.
> NGINX configuration file can be found in `.docker/nginx.conf`
## How-to
```shell script
# Firstly, build the image
docker build -t image-name .

# Run the container with port 80 exposed
docker run --rm -p 80:80 image-name
```

# CI
Github actions are used for CI. Workflow is defined in `.github/workflows/test.yml`
Workflow steps:
* Setup environment (checkout, install node)
* Create `.env` file
* Install `npm` dependencies
* Build the app
* Run `unit` and `e2e` tests