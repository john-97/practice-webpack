import { push } from 'connected-react-router'

const ADD_TO_DO_ITEM = 'ADD_TO_DO_ITEM'
const DELETE_TO_DO_ITEM = 'DELETE_TO_DO_ITEM'

const initialState = {
  todo: []
}

/* eslint-disable no-case-declarations */

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO_ITEM:
      return {
        ...state,
        todo: [
          ...state.todo,
          action.data
        ]
      }
    case DELETE_TO_DO_ITEM:
      const todoArray = state.todo;
      todoArray.splice(action.data, 1)
      return {
        ...state,
        todo: todoArray
      }
    default:
      return state
  }
}

export function addTodo(name) {
  return (dispatch) => {
    dispatch({ type: ADD_TO_DO_ITEM, data: { name } })
  }
}
export function deleteTodo(index) {
  return (dispatch) => {
    dispatch({ type: DELETE_TO_DO_ITEM, data: index })
    dispatch(push('/todo'))
  }
}

export function historyPush(url) {
  return (dispatch) => {
    dispatch(push(url))
  }
}
