
import * as React from 'react';

import ISectionSpotlight from '../../application/interfaces/ViewContentParts/ISectionSpotlight';

class SectionSpotlight extends React.Component<ISectionSpotlight> {
    constructor(props: ISectionSpotlight) {
        super(props);
    }

    public render() {

        const style = "spotlight equal " + this.props.cssStyle;
        const image = this.props.image;
        const header = this.props.header;
        const paragraph = this.props.paragraph;

        return (
            <>
                <section className={style}>
                    <div className="image">
                        <img className="wide" src={image} alt="Brains and engineering" />
                    </div>
                    <div className="content">
                        <h2>{header}</h2>
                        <p>{paragraph}</p>
                    </div>
                </section>
            </>
        );
    }

}

export default SectionSpotlight;
