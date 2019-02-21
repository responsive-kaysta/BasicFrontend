
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

const SectionSpotlight = React.lazy(() => import('../../viewContentParts/SectionSpotlight'));
const ArticleBanner = React.lazy(() => import('../../viewContentParts/ArticleBanner'));
const SectionSomeLoremContent = React.lazy(() => import('../../viewContentParts/SectionSomeLoremContent'));

const TodoList = React.lazy(() => import('../../Todo/TodoList'));

class Stuff extends React.Component<IViewState, IStoreState> {

    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: this.props.viewContainer };
    }

    public render() {
        return (
            <>
                <React.Suspense fallback={<div>Loading...</div>}>

                    <ArticleBanner header="Stuff text" paragraph="Stuff Lorem ipsum dolor sit amet, consectetur adipiscing elit." cssStyle="gray" />
                    <SectionSpotlight header="spotlight" paragraph="spotlight Lorem ipsum dolor sit amet, consectetur adipiscing elit." cssStyle="light" image="/assets/images/spotlight_planing.png" />

                    <SectionSomeLoremContent viewContainer={this.state.storeContainer} viewContext={this.state.storeContext} />

                    <section className="light">
                        <div className="container">
                            <div className="row clearfix">
                                <TodoList viewContainer={this.state.storeContainer} viewContext={this.state.storeContext} />
                            </div>
                        </div>
                    </section>

                </React.Suspense>
            </>
        );
    }
}

export default Stuff;
