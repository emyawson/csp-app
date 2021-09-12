# Customer Service Pages - frontend

![Image](https://github.com/mammutmw/customer-service-pages-frontend/blob/develop/public/assets/img/cover-img.png?raw=true)

#### Introduction - the project's aim ####

*IKEA Customer Service pages provide answers for all users throughout their customer experience journey to help themselves and provide easy ways for them to contact us when they need it.*


#### Technologies ####

React Front-End App for Headless CMS Contentful
the frontend is built in React, Redux and Sagas and it uses an express server for routing.
This app has an external dependency from a REST API to fetch data
This is the REST API repository [ingka-group-digital/customer-service-pages](https://github.com/ingka-group-digital/customer-service-pages)


## Application setup

Fist you need to install globally [yarn package manager](https://yarnpkg.com/) 

*npm install --global yarn*

Install all dependecies in the proyect

`yarn install`


## Running locally

`yarn start`

It will use Webpack to build all the project files like the bundle.js and all CSS from the SCSS files and move all static assets from public to a build folder in the root of the project.

**Note: you may need a `.env` file with some environment variables.**

REACT_APP_CMS_ENV
REACT_APP_CMS_MARKET
REACT_APP_CMS_DATA
PHRASE_APP_TOKEN
REACT_APP_CURRENT_MARKET_CONFIG

`yarn dev`

in another terminal window, you need to run the express server so you can get the IKEA header and footer ESIs - Edge Side Includes.

it will open the dev server.
Now you can visit [http://localhost:3000](http://localhost:3000) to view it in the browser.



## Available Scripts

In the project directory, you can run yarn:

- `start`- Build webpack project files, compile javascript bundle.js and all SCSS files 
- `dev`- Build project files in development mode and start the express server using nodemon and webpack
- `clean`- Removes files generated by the build
- `test`- Runs unit test for the application
- `lighthouse` - Runs from the console the Google lighthouse
- `cypress:open` - Starts the integration test  runner interface


### `yarn test`

Test Coverage
Visual regresion test
Unit Test



### Analyzing the Bundle Size

It uses Lighthouse for analyzing performance, SEO and other metrics
For Bundle size

### Deployment
