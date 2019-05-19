
import * as React from 'react';

import IStoreState from '../../application/interfaces/core/IStoreState';
import IPageBanner from '../../application/interfaces/organism/IPageBanner';

class PageBanner extends React.Component<IPageBanner, IStoreState> {

    public render() {

        const style = this.props.cssStyle;
        const header = this.props.header;
        const paragraph = this.props.paragraph;

        return (
            <>
                <section id="banner">
                    <div className={style}>
                        <h2>{header}</h2>
                        <p>{paragraph}</p>
                    </div>
                    <a href="#one" className="more scrolly">weiter</a>
                </section>
            </>
        );
    }

}

export default PageBanner;
