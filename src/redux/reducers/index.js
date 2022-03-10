import  { combineReducers } from 'redux';

import filtersReducer from './filters';
import guidsReducer from './guids';

const rootReducer = combineReducers({
    filters: filtersReducer,
    guids: guidsReducer
  });

  export default rootReducer;