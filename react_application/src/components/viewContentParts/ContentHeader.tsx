
import * as React from 'react';

import IContentHeader from '../../application/interfaces/viewContentParts/IContentHeader';

function ContentHeader({ header, paragraph}: IContentHeader) {
    return (
        <>
            <header className="transparent">
                <h2>{header}</h2>
                <p>{paragraph}</p>
            </header>
        </>
    );
}

export default ContentHeader;
