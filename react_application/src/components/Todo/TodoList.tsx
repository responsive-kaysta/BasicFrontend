
import * as React from 'react';
// Omitted
import API from '../../application/core/axios.api';

import IArchiveSource from 'src/application/interfaces/Archive/IArchiveSource';
import IStoreState from 'src/application/interfaces/core/IStoreState';
import TodoItem from "./TodoItem";

class TodoList extends React.Component<object, IStoreState> {

    constructor(props: object) {
        super(props);
        this.state = { dataContainer: [] };
    }

    public render() {

        const mappedTodos = this.state.dataContainer.map((todo: IArchiveSource) => {
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
                const dataContainer = res.data;
                this.setState({ dataContainer });
            })
        return response;
    }

}

export default TodoList;
