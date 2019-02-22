
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

// const SectionSpotlight = React.lazy(() => import('src/components/viewContentParts/SectionSpotlight'));
// const ArticleBanner = React.lazy(() => import('src/components/viewContentParts/ArticleBanner'));
// const SectionSomeLoremContent = React.lazy(() => import('src/components/viewContentParts/SectionSomeLoremContent'));

class Home extends React.Component<IViewState, IStoreState> {

    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: this.props.viewContainer };
    }

    public render() {
        return (
            <>
                <React.Suspense fallback={<>Loading...</>}>
                bla
                </React.Suspense>
            </>
        );
    }
}

export default Home;
