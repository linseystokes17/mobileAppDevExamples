import { createStore, combineReducers, applyMiddleware } from 'redux';
import todos from '../reducers/todos';
import items from '../reducers/items';
import idAssigner from '../middleware/id_assigner';
import storage from '../middleware/storage';

export default createStore(
  combineReducers({
    todos,
    items,
  }),
  applyMiddleware(
    idAssigner,
    storage,
  ),
);
