
import * as React from 'react';

import IStoreState from '../../application/interfaces/core/IStoreState';
import IViewState from '../../application/interfaces/core/IViewState';
import Spinner from "../../components/core/Spinner";
import Footer from "../../components/page/Footer";
import Header from "../../components/page/Header";

const ArticleBanner = React.lazy(() => import('../../components/organism/ArticleBanner'));
const EyeCatcher = React.lazy(() => import('../../components/organism/EyeCatcher'));
const SomeLoremContent = React.lazy(() => import('../../components/organism/SectionSomeLoremContent'));
const SectionSpotlight = React.lazy(() => import('../../components/organism/SectionSpotlight'));

class PageHome extends React.Component<IViewState, IStoreState> {

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
                        <ArticleBanner header="welcome home"
                            paragraph="some fancy text describing this page"
                            cssStyle="transparent" />

                        <div>
                            <SectionSpotlight header="Spotlight"
                                paragraph="Allways use some fancy effects"
                                image="/assets/images/spotlight_planing.png"
                                cssStyle="light" />
                        </div>

                        <SomeLoremContent header="Lorem Content 1" cssStyle="transparent" />
                        <EyeCatcher header="Eye-Catcher" paragraph="a fancy eye-catcher" cssStyle="green" />
                        <SomeLoremContent header="Lorem Content 2" cssStyle="transparent" />
                    </article>
                    <Footer />
                </React.Suspense>
            </>
        );
    }

    public async componentWillMount() {
        const element = document.getElementById("body");
        if (element != null) {
            element.setAttribute('class', 'landing is-mobile');
        }
    }

}

export default PageHome;
