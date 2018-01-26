import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addNewTodo } from 'app/services/todos.service'

// arr = {
//     id: Math.random(),
//     title: 'string',
//     isDone: 'boolean'
// }

class MainRoute extends Component {
    state = {
        title: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        const { title } = this.state

        const payload = {
            title,
            id: Math.random(),
            isDone: false
        }

        addNewTodo(this.props, payload)

        this.setState({ title: '' })
    }

    handleChange = event => {
        const { value } = event.target

        this.setState({ title: value })
    }

    render() {
        const { title } = this.state
        const { todos } = this.props

        return(
            <div className="todo_list__wrapper">
                <div className="todo_list__panel">
                    <div className="todo_list__panel__header">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" onChange={this.handleChange} value={title} />
                            <button type="submit">Add</button>
                        </form>
                    </div>
                    <ul className="todo_list__body">
                        {todos.map(item => (
                            <li className="todo_list__body__item" key={item.id}>
                                <input type="checkbox" className="todo_list__body__item__checkbox" />
                                <span className="todo_list__body__item__title">{item.title}</span>
                                <i className="material-icons">delete_forever</i>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}


export default connect(function(store) {
    return {
        todos: store.todos
    }
})(MainRoute)
