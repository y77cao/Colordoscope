import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
//import rootReducer from '../reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();
const router = routerMiddleware(history);

const configureStore = (reducer) => {
  return createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(thunk, logger, router),
    ),
  );
}

export default configureStore;