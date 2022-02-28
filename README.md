https://frontend.turing.edu/lessons/module-3/redux-i.html?ads_cmpid=6451354298&ads_adid=76255849919&ads_matchtype=&ads_network=g&ads_creative=517671727591&utm_term=&ads_targetid=dsa-19959388920&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrFYotoYMx2YuqDaWYnq2lRt0q5BrW8gf3umdGAzw4-mBsiInCEEixhoCImYQAvD_BwE


Vocabulary

****``Redux - a library that allows JavaScript apps to manage application state

action - an object containing a type and a payload, used to tell the reducer how to update the store

action creator - a function that takes in a payload and creates an action object

reducer - a function that takes in the initial state and an action, and which returns that specific part of the global store

combineReducers - a function from Redux that allows us to put together all our reducers into a single object (often called the rootReducer)

store/global state - an object; think of it as a mega state that is accessed and updated with its own functions (similar to how React state is updated with setState)

createStore - a function from Redux that uses the rootReducer to create the store

dispatch - a function from Redux that sends an action object to its reducer (which updates the store)

Provider - a component from react-redux that wraps our App component and allows each child component to be connected to the store

mapStateToProps - a function we create that takes in the global state object and returns an object to be added to a component as part of its props object; it allows the component to access the data in the store

mapDispatchToProps - a function we create that takes in dispatch and returns an object to be added to a component as part of its props object; it allows the component to update the data in the store

connect - a function from react-redux that allows us to connect a component to the store by adding items from the store to our component props, as well as adding dispatch to our component props

container - what we call a component that has been connected to the store``****

# Getting Started with Create React App
npm run dev   //start dev env
npm install axios
npm install redux react-redux redux-thunk

npm add react-router-dom
npm add react-router-dom

----for testing-----------------
npm install redux-mock-store
npm install notistack
npm install @material-ui/lab

for schema validation
npm install formik
npm install yup

incase dependency conflict
npm audit fix
npm audit fix --force

---Helpful
in console type nelow to see whait is in local storage
window.localstorage


##----Materail UI Dependencies--------------------
https://mui.com/getting-started/installation/
npm install @mui/icons-material

npm install prop-types
--------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
