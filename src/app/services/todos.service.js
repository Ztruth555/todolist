import {
    addNewTodoAction,
    editTodoAction,
    fetchTodoAction,
    removeTodoAction
} from 'app/reducers/todos.reducer'

export function fetchTodo({ dispatch }) {
    const data = JSON.parse(localStorage.getItem('totlist_data')) || []

    dispatch(fetchTodoAction(data))
}

export function addNewTodo({ dispatch }, payload) {
    const store = JSON.parse(localStorage.getItem('totlist_data')) || []

    localStorage.setItem('totlist_data', JSON.stringify([payload, ...store]))
    dispatch(addNewTodoAction(payload))
}

export function removeTodo() {

}

export function editTodo() {

}
