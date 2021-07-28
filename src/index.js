import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { rootReducer } from './redux/rootReducer';

const store = createStore(
  rootReducer,
  compose(
  // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

const view = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(view,
  document.getElementById('root'));
