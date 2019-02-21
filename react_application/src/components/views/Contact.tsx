
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

class Contact extends React.Component<IViewState, IStoreState> {

    private SectionSpotlight = React.lazy(() => import('src/components/viewContentParts/SectionSpotlight'));
    private ArticleBanner = React.lazy(() => import('src/components/viewContentParts/ArticleBanner'));
    private SectionSomeLoremContent = React.lazy(() => import('src/components/viewContentParts/SectionSomeLoremContent'));

    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: this.props.viewContainer };
    }

    public render() {
        return (
            <>
                <React.Suspense fallback={<div>Loading...</div>}>

                    <this.ArticleBanner
                        header="contact text"
                        paragraph="welcome Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        cssStyle="gray" />

                    <this.SectionSpotlight
                        header="spotlight"
                        paragraph="spotlight Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        cssStyle="light"
                        image="/assets/images/spotlight_planing.png" />

                    <this.SectionSomeLoremContent viewContainer={this.state.storeContainer} viewContext={this.state.storeContext} />

                </React.Suspense>
            </>
        );
    }
}

export default Contact;
