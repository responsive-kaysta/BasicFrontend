
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';
import Spinner from "src/components/core/Spinner";
import Footer from "src/components/page/Footer";
import Header from "src/components/page/Header";

const ArticleBanner = React.lazy(() => import('src/components/organism/ArticleBanner'));
const SectionSpotlight = React.lazy(() => import('src/components/organism/SectionSpotlight'));
const TodoList = React.lazy(() => import('src/components/Todo/TodoList'));

class PageSources extends React.Component<IViewState, IStoreState> {

    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: [] };
    }

    public render() {
        return (
            <>

                <React.Suspense key={this.props.viewContext} fallback={<Spinner />}>
                    <Header />
                    <article id="main">
                        <ArticleBanner header="PageSources"
                            paragraph="some fancy text describing this page"
                            cssStyle="transparent" />

                        <div>
                            <SectionSpotlight header="Spotlight"
                                paragraph="Allways use some fancy effects"
                                image="/assets/images/spotlight_planing.png"
                                cssStyle="light" />
                        </div>

                        <TodoList viewContext="light" />
                    </article>
                    <Footer />
                </React.Suspense>
            </>
        );
    }

}

export default PageSources;
