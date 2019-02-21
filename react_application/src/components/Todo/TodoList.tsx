
import * as React from 'react';
// Omitted
import API from '../../application/core/axios.api';

import IArchiveSource from 'src/application/interfaces/Archive/IArchiveSource';
import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';
import TodoItem from "./TodoItem";

class TodoList extends React.Component<IViewState, IStoreState> {

    constructor(props: IViewState) {
        super(props);
        this.state = { storeContext: this.props.viewContext, storeContainer: this.props.viewContainer || [] };
    }

    public render() {

        const mappedTodos = this.state.storeContainer.map((todo: IArchiveSource) => {
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
                const storeContainer = res.data;
                this.setState({ storeContainer });
            })
        return response;
    }

}

export default TodoList;
