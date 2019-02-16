
import * as React from 'react';

import ISectionSpotlight from '../../application/interfaces/viewContentParts/ISectionSpotlight';

function SectionSpotlight({ header, paragraph, cssStyle = "transparent", image = "" }: ISectionSpotlight) {
    const style = "spotlight equal " + cssStyle;
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

export default SectionSpotlight;
