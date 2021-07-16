import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const view = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(view,
  document.getElementById('root'));
