import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const resultReducer = (state = {isFetching: false, imgQuery: [], url: '', largeViewUrl: ''}, action) => {
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

      case 'RENDER_LARGE_VIEW':
        return Object.assign({}, state, {
          isFetching: false,
          largeViewUrl: action.largeViewUrl
        })

      case 'CANCEL_LARGE_VIEW':
        return Object.assign({}, state, {
          isFetching: false,
          largeViewUrl: ''
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