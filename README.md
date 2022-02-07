# Getting Started

### Demo
hosted on github pages:

https://nasserghiasi.github.io/moviedb/

Github pages has some restrictions, so for testing full functionality please run locally.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\

## More info
- MovieDB's storage is localstorage
- IE 11 and below is not project's target
- 5 standard breakpoints supported and avatar image size fixed to reduce CLS (0)
- test covered for some services and components (appx 20% coverage)
- used hash map data structure for increase find performance (O(1))
- use memory cache for storing favorite and watch list data on memory to prevent reading from localStorage for every find requests
- automatically deploys on Github pages after each push on main branch