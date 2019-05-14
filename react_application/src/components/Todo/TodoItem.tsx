
import * as React from 'react';

import IArchiveContent from 'src/application/interfaces/Archive/IArchiveContent';

function TodoItem(props: { archiveContent: IArchiveContent; }) {
    return (
        <>
            <h1>{props.archiveContent.Id}</h1>
            <h2>{props.archiveContent.ContentTitle}</h2>
        </>
    )
}

export default TodoItem;
