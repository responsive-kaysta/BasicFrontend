
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';
import Callback from "src/components/core/Callback";

const ArticleBanner = React.lazy(() => import('src/components/organism/ArticleBanner'));
const EyeCatcher = React.lazy(() => import('src/components/organism/EyeCatcher'));
const SomeLoremContent = React.lazy(() => import('src/components/organism/SectionSomeLoremContent'));
const SectionSpotlight = React.lazy(() => import('src/components/organism/SectionSpotlight'));

class PageHome extends React.Component<IViewState, IStoreState> {

    // private milliseconds: number;

    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: [] };
        // this.milliseconds = 1500;        
    }

    public render() {
        return (
            <>
                <React.Suspense key={this.props.viewContext} fallback={<Callback />}>

                    <ArticleBanner header="welcome home"
                        paragraph="some fancy text describing this page"
                        cssStyle="transparent" />

                    <div>
                        <SectionSpotlight header="Spotlight"
                            paragraph="Allways use some fancy effects"
                            image="/assets/images/spotlight_planing.png"
                            cssStyle="light" />
                    </div>

                    <SomeLoremContent header="Lorem Content 1" cssStyle="light" />

                    <EyeCatcher header="Eye-Catcher" paragraph="some fancy eye-catcher" cssStyle="green" />

                    <SomeLoremContent header="Lorem Content 2" cssStyle="light" />
                    
                </React.Suspense>
            </>
        );
    }

}

export default PageHome;
