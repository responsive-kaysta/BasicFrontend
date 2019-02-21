
import * as React from 'react';
// Omitted
import API from '../../application/core/axios.api';

import IArchiveSource from 'src/application/interfaces/Archive/IArchiveSource';
import IStoreState from 'src/application/interfaces/core/IStoreState';
import TodoItem from "./TodoItem";

class TodoList extends React.Component<object, IStoreState> {

    constructor(props: object) {
        super(props);
        this.state = { currentTitle: "TodoList", todos: [] };
    }

    public render() {

        const mappedTodos = this.state.todos.map((todo: IArchiveSource) => {
            return (
                <div key={todo.Id}>
                    <TodoItem archiveSource={todo} />
                </div>
            )
        })

        return mappedTodos;
    }

    public async componentDidMount() {

        const response = await API.get('service/selectOnlineArchiveSources')
            .then(res => {
                const todos = res.data;
                this.setState({ todos });
            })
        return response;
    }

}

export default TodoList;
