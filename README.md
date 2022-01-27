# USCTZN (US CiTiZeN)

![logo](src/assets/logo.png)

A study guide for the US citizenship exam, using React and Cordova

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

Install dependencies by running

```sh
yarn
```

### Run

Run the app in the development mode:

```sh
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Tests

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Static HTML File

### `yarn static`

open `package.json`

```json
{
  "homepage": "./"
}
```

and modify `hompage` property to

```json
{
  "homepage": "https://your-domain.com/usctzn/"
}
```

open `public/index.html`

```html
<script src="cordova.js" type="text/javascript"></script>
```

and comment out `cordova.js` srcscript

```html
<!-- <script src="cordova.js" type="text/javascript"></script> -->
```

open `./docs/index.html` to open the app

## Resources

- https://www.uscis.gov/sites/default/files/document/questions-and-answers/M_1778TXT.txt
- https://www.uscis.gov/sites/default/files/document/flash-cards/M-1779_%28cut-out%29.pdf
- https://www.uscis.gov/citizenship-resource-center/the-2020-version-of-the-civics-test/128-civics-questions-and-answers-with-mp3-audio-2020-version
- https://www.uscis.gov/sites/default/files/document/audio/128_2020_Civics_Test_Version_English.mp3

## Attributions

- [Grenadier Font](https://www.1001fonts.com/grenadier-font.html)
- [Using React with Cordova - Shubham Patil](https://medium.com/@pshubham/using-react-with-cordova-f235de698cc3)
