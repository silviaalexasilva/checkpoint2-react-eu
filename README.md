# Checkpoint n°2 - 4h

For this job you have 4 hours ahead of you. This checkpoint is not an exam, it will allow us to validate your skills, so try to do it as much as possible on your side.
This checkpoint is very consistent, if you can't do everything it doesn't matter, do your best;)

## !!! FIRST STEP REQUIRED BEFORE STARTING THE FIRST EXERCISE!

- Clone this project
- Create a `city_name_first_name` branch, which will contain your progress. Replace `city_name_first_name` with the city of your campus, your name and first name.

## Step 1 - Quiz

- To answer the quiz go to[this application](https://wild-quiz-client.herokuapp.com/).
- Answer the Quiz questions **Checkpoint 2 - JS - React**
- Once the quiz is finished, copy the link provided by the application
- Creates a Quiz.md file at the root of the project
- Stick the link you just retrieved on it
- `commits` your file

## Step 2 - React

<img src="https://giphygifs.s3.amazonaws.com/media/14hVsVZomE4hj2/giphy.gif" height="150">

In this step, you will create a new React project in which there will be 2 components that will display data from an API.

The API is available on this url[https://wild-games.herokuapp.com/api/v1](https://wild-games.herokuapp.com/api/v1).
You can use either[axios](https://github.com/axios/axios) or[fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch) to recover the data.

Think about `commit' regularly with an explicit message. For example: ``Create GameList and Game components``.

- Creates a new React project named **list-games** thanks to `create-react-app`.
- Creates 2 components `<GameList />` and `<Game />`.
- `<GameList />` retrieves API games and displays them in as many components as `<Game />>`.
- `<Game />` retrieves with `props` the information of each game (`name`, `background_image`, `rating`...) and displays it in the format of your choice.
- `<Game />` contains a `<button>` that allows the click to remove a game from the `state`. There is no need to remove it from the API.

## Step 3 - Bonus

Do you have any time left? Perfect! Perfect! You will be able to add some useful features to your React project!

#### Filter games by note

- Adds a `Best Games` button to filter games by `rating`.
- When you click on the button, only games with a `rating` greater than or equal to 4.5 are displayed
- The button text is replaced by `All Games` and when clicked, all games are displayed again

#### Add a screenshots page

For this bonus, use the `react-router` library.

- Adds a navigation link in each game to see the images listed in the `short_screenshots` field. 
- Clicking on this link changes the page to `http://localhost:3000/jeu/screenshots/5` or 5 is the id of the selected game.
- Also displays a navigation link to return to the home page.

## Step 4 - Congratulations!

You can quench your thirst at the brewery, you've earned it!

**N.B.: You don't have to start with this step...;)**

![Good Luck](https://media.giphy.com/media/AC1PtbdsJZyOQ/giphy.gif)


Translated with www.DeepL.com/Translator
