import { combineReducers } from 'redux';
import counter from './counter';
import form from './form';
import results from './results';

const reducer = combineReducers({
  form,
  results,
});

export default reducer;
