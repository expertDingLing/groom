import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
  });

export default createRootReducer;
