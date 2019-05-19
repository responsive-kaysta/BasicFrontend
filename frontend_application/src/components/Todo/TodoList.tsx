
import * as React from 'react';
// Omitted
import API from '../../application/core/axios.api';

import IArchiveContent from '../../application/interfaces/Archive/IArchiveContent';
import IStoreState from '../../application/interfaces/core/IStoreState';
import IViewState from '../../application/interfaces/core/IViewState';
import TodoItem from '../../components/Todo/TodoItem';

class TodoList extends React.Component<IViewState, IStoreState> {

    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: [] };
    }

    public render() {

        const style = this.state.storeContext;

        const mappedTodos = this.state.storeContainer.map((todo: IArchiveContent) => {
            return (
                <div key={todo.Id} className={style}>
                    <TodoItem archiveContent={todo} />
                </div>
            )
        })
        return mappedTodos;
    }

    public async componentDidMount() {
        const response = await API.get('service/selectLatestArchiveContentToList')
            .then(res => {
                const storeContainer = res.data;
                this.setState({ storeContainer });
            })
        return response;
    }

}

export default TodoList;