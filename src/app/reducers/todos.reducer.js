import { createAction, createReducer } from 'redux-act'

export const fetchTodoAction = createAction('fetch todo')
export const addNewTodoAction = createAction('add new todo')
export const removeTodoAction = createAction('remove todo')
export const editTodoAction = createAction('edit todo')


const initialState = []

export default createReducer({
    [fetchTodoAction]: (store, payload) => payload,
    [addNewTodoAction]: (store, payload) => [payload, ...store],
    [removeTodoAction]: (store, payload) => {
        const index = store.findIndex(item => item.id === payload.id)

        return index === -1
            ? store
            : [...store.slice(0, index), ...store.slice(index + 1)]
    },
    [editTodoAction]: (store, payload) => {
        const index = store.findIndex(item => item.id === payload.id)

        return index === -1
            ? store
            : [...store.slice(0, index), payload, ...store.slice(index + 1)]
    }
}, initialState)
