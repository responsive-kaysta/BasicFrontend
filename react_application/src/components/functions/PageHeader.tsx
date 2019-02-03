
import * as React from 'react';

import IPageHeader from '../../application/interfaces/functions/IPageHeader';

function PageHeader({ headerText, headerParagraph, enthusiasmLevel = 1 }: IPageHeader) {
    return (
        <div>
            <header className="transparent">
                <h2>{headerText}</h2>
                <p>{headerParagraph + getExclamationMarks(enthusiasmLevel)}</p>
            </header>
        </div>
    );
}

export default PageHeader;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}