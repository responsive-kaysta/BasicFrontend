
import * as React from 'react';
import IStoreState from '../../application/interfaces/core/IStoreState';
import IPageBanner from '../../application/interfaces/organism/IPageBanner';
import * as Scroll from 'react-scroll';

/*
    credits: https://github.com/fisshy/react-scroll

*/

class PageBanner extends React.Component<IPageBanner, IStoreState> {

    public render() {

        const style = this.props.cssStyle;
        const header = this.props.header;
        const paragraph = this.props.paragraph;

        let Link = Scroll.Link;

        return (
            <>
                <section id="banner">
                    <div className={style}>
                        <h2>{header}</h2>
                        <p>{paragraph}</p>
                    </div>
                    <Link className="more" to="one" spy={true} smooth={true} duration={1000} offset={-50}>
                        weiter
                    </Link>

                </section>
            </>
        );
    }

}

export default PageBanner;
