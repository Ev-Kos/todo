import { combineReducers } from 'redux';
import { taskReducer } from './taskReducers';
import { filterReducer } from './filterReducers';

export const rootReducer = combineReducers({
  taskReducer,
  filterReducer
})