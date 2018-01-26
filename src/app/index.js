import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch, Redirect } from 'react-router-dom'

import * as routes from 'app/routes'
import { store, history } from 'app/store'
import { fetchTodo } from 'app/services/todos.service'

export class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="todo_list">
                    <Switch>
                        <Route exact path="/" component={routes.main} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        )
    }
}

export const __NODE__ = document.getElementById('app')

export function bootstrap() {

    fetchTodo(store)

    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
        __NODE__)
}
