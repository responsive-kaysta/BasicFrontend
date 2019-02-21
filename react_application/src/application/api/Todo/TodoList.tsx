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

        const mappedTodos = this.state.todos.map((todo: any) => {
            return <TodoComponent id={todo.Id} title={todo.SourceName} description={todo.SourceDescription} link={todo.SourceLink} key={todo.Id} />
        })

        return mappedTodos;

    }

    public componentDidMount() {
        axios.get('http://10.0.2.15:8080/api/service/selectOnlineArchiveSources')
          .then(res => {
            const todos = res.data;
            this.setState({ todos });
          })
      }

}

export default TodoList;
