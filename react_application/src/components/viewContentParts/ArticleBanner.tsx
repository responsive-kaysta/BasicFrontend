
import * as React from 'react';

import IArticleBanner from '../../application/interfaces/viewContentParts/IArticleBanner';

function ArticleBanner({ header, paragraph, cssStyle = "transparent"}: IArticleBanner) {
    return (
        <>
            <header className={cssStyle}>
                <h2>{header}</h2>
                <p>{paragraph}</p>
            </header>
        </>
    );
}

export default ArticleBanner;
