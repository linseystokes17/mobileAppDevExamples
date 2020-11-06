import Constants from './constants'

export const constants = new Constants({
  CREATE_ITEM: 'CREATE_ITEM',
  GET_ITEMS: 'GET_ITEMS',
  GET_ITEMS_DONE: 'GET_ITEMS_DONE',
})

export const createItem = (title) => {
  return {
    type: constants.get("CREATE_ITEM"),
    payload: {
      title
    }
  }
};

export const getItems = () => ({
  type: constants.get('GET_ITEMS'),
})
