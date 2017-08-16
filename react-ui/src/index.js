import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { Provider } from 'react-redux';
import configureStore, { history } from './stores/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import rootReducer from './reducers/rootReducer';

const store = configureStore(rootReducer);
ReactDOM.render (
       <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
