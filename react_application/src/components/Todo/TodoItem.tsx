
import * as React from 'react';

import IArchiveSource from 'src/application/interfaces/Archive/IArchiveSource';

function TodoItem(props: { archiveSource: IArchiveSource; }) {
    return (
        <>
            <h1>{props.archiveSource.Id}</h1>
            <h2>{props.archiveSource.SourceName}</h2>
            <p>{props.archiveSource.SourceLink}</p>
        </>
    )
}

export default TodoItem;
