// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import App from './App'; // Import your main application component

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
