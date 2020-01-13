//This is the 'entry' file for the app. It imports the App component

//Importing React and ReactDOM as dependencies
import React from 'react';
import ReactDOM from 'react-dom';

//Imports App and index.css.
//! index.css is imported so that the css will be processed with the JS files
import App from './components/App';
import './index.css';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
