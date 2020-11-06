import UUID from 'uuid-js';
import { constants } from '../actions/items';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.get('CREATE_ITEM'):
      const newItem = {
        ...action.payload,
      }
      return [...state, newItem];
    case constants.get('GET_ITEMS_DONE'):
      return action.payload;
    default:
      return state;
  }
  return state;
}
