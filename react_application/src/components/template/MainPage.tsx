
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

import PageHome from 'src/components/composition/PageHome';
import PageStuff from 'src/components/composition/PageStuff';

class MainPage extends React.Component<IViewState, IStoreState> {

    private component: any;

    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: this.props.viewContainer };
    }

    public async componentWillMount() {

        if (this.state.storeContext === "PageHomeContext") {
            this.component = <PageHome viewContext={this.state.storeContext} />;
        }
        else if (this.state.storeContext === "PageStuffContext") {
            this.component = <PageStuff viewContext={this.state.storeContext} />;
        }

        return true;
    }

    public async componentDidMount() {

        return true;
    }

    public render() {
        return (
            <>
                {this.component}
            </>
        );
    }
}

export default MainPage;
