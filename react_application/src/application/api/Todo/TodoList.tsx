import * as React from 'react';

import axios from "axios";
import TodoComponent from "./TodoComponent";

import IStoreState from 'src/application/interfaces/core/IStoreState';

class TodoList extends React.Component<object, IStoreState> {

    constructor(props: object) {
        super(props);
        this.state = { currentTitle: "TodoList", todos: [] };
    }

    public render() {

        axios.get("http://localhost:8080/api/service/selectOnlineArchiveSources").then((response) => {
            this.setState(() => {
                return {
                    todos: response.data
                }
            })
        })

        const mappedTodos = this.state.todos.map((todo: any) => {
            return <TodoComponent id={todo.id} title={todo.title} description={todo.description} link={todo.link} key={todo.id} />
        })

        return mappedTodos;

    }

}

export default TodoList;
