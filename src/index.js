// index.js is for loading in our new component and render it on the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js'

//ReactDOM.render takes the Virtual DOM node created by extends Component and adds it to the actual DOM  It takes two arguments: The component & The DOM element we want to append it to.

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
