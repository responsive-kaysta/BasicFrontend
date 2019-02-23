
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

const PageHome = React.lazy(() => import('src/components/composition/PageHome'));

class MainPage extends React.Component<IViewState, IStoreState> {

    private component: any;

    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: this.props.viewContainer };
    }

    public async componentWillMount() {

        if (this.state.storeContext === "PageHome") {
            this.component = <PageHome viewContext={this.state.storeContext} />;
        }
        
        // tslint:disable-next-line: no-console
        console.log("MainPage: componentWillMount");
        return true;
    }

    public async componentDidMount() {



        // tslint:disable-next-line: no-console
        console.log("MainPage: componentDidMount");
        return true;
    }

    public render() {
        return (
            <>
                <React.Suspense fallback={<>Loading...</>}>
                    {this.component}
                </React.Suspense>
            </>
        );
    }
}

export default MainPage;
