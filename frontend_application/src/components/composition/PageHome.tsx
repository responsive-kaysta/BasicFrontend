
import * as React from 'react';
import IStoreState from '../../application/interfaces/core/IStoreState';
import IViewState from '../../application/interfaces/core/IViewState';
import Spinner from "../../components/core/Spinner";
import Footer from "../../components/page/Footer";
import Header from "../../components/page/Header";

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
                        paragraph='IT &amp; Software Architecture, Engineering &amp; Consulting'
                        cssStyle='light' />

                    <article id="main">

                        <SomeLoremContent header="Lorem Content 1" cssStyle="transparent" />
                        <EyeCatcher header="Eye-Catcher" paragraph="a fancy eye-catcher" cssStyle="green" elId="one" />
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
            element.setAttribute('class', 'landing');
        }
    }

}

export default PageHome;
