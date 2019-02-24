
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

const ArticleBanner = React.lazy(() => import('src/components/organism/ArticleBanner'));
const SectionSpotlight = React.lazy(() => import('src/components/organism/SectionSpotlight'));
const TodoList = React.lazy(() => import('src/components/Todo/TodoList'));

class PageStuff extends React.Component<IViewState, IStoreState> {

    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: [] };
    }

    public render() {
        return (
            <>
                <React.Suspense fallback={<>Loading...</>}>

                    <ArticleBanner header="PageStuff"
                        paragraph="some fancy text describing this page"
                        cssStyle="transparent" />

                    <div>
                        <SectionSpotlight header="Spotlight"
                            paragraph="Allways use some fancy effects"
                            image="/assets/images/spotlight_planing.png"
                            cssStyle="light" />
                    </div>

                    <TodoList viewContext="light" />

                </React.Suspense>
            </>
        );
    }

}

export default PageStuff;
