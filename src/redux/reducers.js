import { combineReducers } from 'redux';
import counter from './counter';
import form from './form';

const reducer = combineReducers({
  form,
});

export default reducer;
