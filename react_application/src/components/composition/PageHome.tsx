
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

class PageHome extends React.Component<IViewState, IStoreState> {

    private ArticleBanner = React.lazy(() => import('src/components/organism/ArticleBanner'));
    private EyeCatcher = React.lazy(() => import('src/components/organism/EyeCatcher'));
    private SomeLoremContent = React.lazy(() => import('src/components/organism/SectionSomeLoremContent'));
    private TopSpotlight = React.lazy(() => import('src/components/organism/SectionSpotlight'));
    // private TodoList = React.lazy(() => import('src/components/Todo/TodoList'));

    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: [] };
    }

    public async componentWillMount() {

        // tslint:disable-next-line: no-console
        console.log("PageHome: componentWillMount");
        return true;
    }

    public async componentDidMount() {

        // tslint:disable-next-line: no-console
        console.log("PageHome: componentDidMount");
        return true;
    }

    public render() {
        return (
            <>
                <React.Suspense fallback={<>Loading...</>}>

                    <this.ArticleBanner header="welcome home"
                        paragraph="some fancy text describing this page"
                        cssStyle="transparent" />

                    <div>
                        <this.TopSpotlight header="Spotlight"
                            paragraph="Allways use some fancy effects"
                            image="/assets/images/spotlight_planing.png"
                            cssStyle="light" />
                    </div>

                    <this.SomeLoremContent header="Lorem Content 1" cssStyle="light" />

                    <this.EyeCatcher header="Eye-Catcher" paragraph="some fancy eye-catcher" cssStyle="green" />

                    <this.SomeLoremContent header="Lorem Content 2" cssStyle="light" />

                </React.Suspense>
            </>
        );
    }

}

export default PageHome;
