
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IArticleBanner from 'src/application/interfaces/viewContentParts/IArticleBanner';

class ArticleBanner extends React.Component<IArticleBanner, IStoreState> {

    constructor(props: IArticleBanner, state: IStoreState) {
        super(props, state);
    }

    public render() {

        const style = this.props.cssStyle;
        const header = this.props.header;
        const paragraph = this.props.paragraph;

        return (
            <>
                <header className={style}>
                    <h2>{header}</h2>
                    <p>{paragraph}</p>
                </header>
            </>
        );
    }

}

export default ArticleBanner;
