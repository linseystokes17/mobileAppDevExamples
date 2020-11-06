import Constants from './constants'

export const constants = new Constants({
  CREATE_TODO: 'CREATE_TODO',
  GET_TODOS: 'GET_TODOS',
  GET_TODOS_DONE: 'GET_TODOS_DONE',
})

export const createTodo = (title, icon) => {
  return {
    type: constants.get("CREATE_TODO"),
    payload: {
      title,
      icon
    }
  }
};


export const getTodos = () => ({
  type: constants.get('GET_TODOS'),
})
