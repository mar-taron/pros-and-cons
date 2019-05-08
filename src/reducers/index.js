import { combineReducers } from 'redux';
import user from './user';
import group from './group';
import list from './list';

export default combineReducers({
  user,
  group,
  list,
});
