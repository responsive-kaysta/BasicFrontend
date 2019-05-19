
import * as React from 'react';
import IStoreState from '../../application/interfaces/core/IStoreState';
import IViewState from '../../application/interfaces/core/IViewState';
import Spinner from "../../components/core/Spinner";
import Footer from "../../components/page/Footer";
import Header from "../../components/page/Header";
import { animateScroll as scroll } from 'react-scroll';

const PageBanner = React.lazy(() => import('../../components/organism/PageBanner'));
const EyeCatcher = React.lazy(() => import('../../components/organism/EyeCatcher'));
const SomeLoremContent = React.lazy(() => import('../../components/organism/SectionSomeLoremContent'));

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

                    <PageBanner
                        header='responsive IT'
                        paragraph='finest - reactive &amp; responsive - frontend'
                        cssStyle='light' />

                    <article id="main">

                        <EyeCatcher
                            header="Eye-Catcher"
                            paragraph="a fancy eye-catcher"
                            cssStyle="green"
                            elId="one" />

                        <SomeLoremContent
                            header="Lorem Content 1"
                            cssStyle="light" />

                        <a onClick={this.scrollToTop} href='#top'>To the top!</a>

                        <EyeCatcher
                            header="Eye-Catcher"
                            paragraph="a fancy eye-catcher"
                            cssStyle="purple"
                            elId="two" />

                        <SomeLoremContent
                            header="Lorem Content 2"
                            cssStyle="light" />

                        <a onClick={this.scrollToTop} href='#top'>To the top!</a>

                    </article>

                    <Footer />

                </React.Suspense>
            </>
        );
    }

    public async componentWillMount() {
        const element = document.getElementById("body");
        if (element != null) {
            element.setAttribute('class', 'landing');
        }
    }

    public scrollToTop() {
        scroll.scrollToTop();
    }

}

export default PageHome;
