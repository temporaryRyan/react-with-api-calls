# API Consuming React App

## Description
This is a demo repository for making API calls in a React app. The `TopStories` component makes calls to the New York Times API and displays a list of the day's top stories. The `TopAnimals` component makes calls to an API running on `localhost:5000`. It is structured to work with the [CretaceousApi](https://github.com/temporaryRyan/API.Solution/tree/main), another Epicodus curriculum project.

###  Requirements:
  * Git
  * Node Package Manager (npm)
  * New York Times API key
  * [CretaceousApi](https://github.com/temporaryRyan/API.Solution/tree/main) running at localhost:5000
  
### Command Line Setup and Installation:
* Clone [CretaceousApi](https://github.com/temporaryRyan/API.Solution/tree/main). Follow instructions for installing and running the API (required for `TopAnimal` component).
* In order for the `TopStories` component to work you'll need to obtain an API key from the New York Times. Follow instructions [here](https://developer.nytimes.com/apis).
* Clone this project:  `$ git clone https://github.com/RyanDuff613/react-with-api-calls.git`
* Navigate to project directory:  `$ cd react-with-api-calls`
* Create `.env` file for storing NYT API key: `$ touch .env`
* In `.env` file add your API key: `REACT_APP_API_KEY=[Your NYT API key goes here (square brackets should be removed)]`
* Install project dependencies: `$ npm install`
* Run server: `$ npm run start`

## Technologies Used
* Node Package Manager (NPM)
* create-react-app
* React 

## Known Bugs
- `DeleteAnimalButton` component successfully deletes an animal from the database but does not remove the animal from the `topAnimals` array inside of the `TopAnimals` component. Users need to click the `Reload top animals` button in order to have UI reflect current database data.

**MIT License**
Copyright (c) 2024 Ryan Duff
