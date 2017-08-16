import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const resultReducer = (state = {isFetching: false, imgQuery: [], url: ''}, action) => {
  switch (action.type) {
    case 'REQUEST_QUERY':
      return Object.assign({}, state, {
      	isFetching: true
      })

     case 'RECEIVE_QUERY':
       return Object.assign({}, state, {
      	isFetching: false,
      	imgQuery: action.query.data,
      	time: action.receiveAt
      })

      case 'RENDER_PREVIEW':
        return Object.assign({}, state, {
          isFetching: true,
          url: action.url
      })
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  result: resultReducer,
  router: routerReducer,
});

export default rootReducer;