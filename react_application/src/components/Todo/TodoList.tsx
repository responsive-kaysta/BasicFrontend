
import * as React from 'react';
// Omitted
import API from 'src/application/core/axios.api';

import IArchiveSource from 'src/application/interfaces/Archive/IArchiveSource';
import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

class TodoList extends React.Component<IViewState, IStoreState> {

    private TodoItem = React.lazy(() => import('./TodoItem'));

    constructor(props: IViewState) {
        super(props);
        this.state = { storeContext: this.props.viewContext, storeContainer: this.props.viewContainer };
    }

    public render() {

        const mappedTodos = this.state.storeContainer.map((todo: IArchiveSource) => {
            return (
                <React.Suspense fallback={<div>Loading...</div>} key={todo.Id}>
                    <div>
                        <this.TodoItem archiveSource={todo} />
                    </div>
                </React.Suspense>
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
