# media-tracker

Self-hosted open source media-tracker for tv shows and movies.

## Status :construction:

The project is work in progress, right now you can:

- Search tv shows and movies
- Explore trending tv shows and movies
- Explore seasons of a tv show
- Explore related *(similar, recommended)* media of a tv show or movie
- Track/untrack tv shows and movies
- Mark/unmark tv shows and movies as watched
- Mark/unmark individual seasons of tv shows as watched
- Mark/unmark individual episodes of tv shows as watched
- See all your tracked (to do) tv shows and movies on one page
- See all your watched (done) tv shows and movies on one page

It comes with convenient features like the automatic selection of the latest season watched. However, I don’t consider this version as feature complete. In the long run, it should also cover other media like books and maybe games.

Styling is currently based on [Semantic UI React](https://react.semantic-ui.com), so that it can be easily picked-up by the community. There’s no theme, or much design optimization done at the moment, because it wasn’t a priority.

As it’s work in progress, there are no tests and error handling yet. Use at your own risk.

## Demo

[Video demonstration](https://youtu.be/6DcEnZWRwLA) on YouTube.

### Screenshots

**Discover screen**

![Discover Screen](https://github.com/michaelx/media-tracker/blob/master/docs/screenshots/discover.png?raw=true)

**Season screen**

![Season Screen](https://github.com/michaelx/media-tracker/blob/master/docs/screenshots/season.png?raw=true)

[More screenshots](https://github.com/michaelx/media-tracker/tree/master/docs/screenshots).

## Usage and development

The project is split into `client` and `server`. Latter is a simple [JSON Server](https://github.com/typicode/json-server) at the moment.

Clone the repository and change into the `client` folder. Install dependencies:

```sh
npm install
```

Repeat for the `server` folder.

The project uses the TMDb API and requires an API key. After creating an account on [TMDb](https://www.themoviedb.org), you can request an API key under `Profile > Settings > API`. Please add your key in `./client/src/config.js`!

Afterwards open two separate terminal windows and run `npm start` in the `client` folder as well as the `server` folder.

The `client` (frontend) will run at `http://localhost:3000` (opens automatically), and the `server` (backend) will run on port 3001.

### Code guidelines

Used style guides *(enforced with ESLint)*:

- JavaScript: [airbnb-base](https://github.com/airbnb/javascript/tree/master/react)

### Available scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so all its scripts are available in the `client` folder:

```sh
npm start
npm test
npm run build
npm run eject # be careful :)
```

In addition I added:

```sh
npm run lint # the project uses eslint airbnb-base
```

## Author

Michael Xander

- <https://michaelxander.com>
- <https://twitter.com/michaxndr>
