
import * as React from 'react';

import IArchiveSource from 'src/application/interfaces/core/IArchiveSource';

function TodoItem(props: { archiveSource: IArchiveSource; }) {
    return (
        <div>
            <h1>{props.archiveSource.Id}</h1>
            <h2>{props.archiveSource.SourceName}</h2>
            <p>{props.archiveSource.SourceLink}</p>
        </div>
    )
}

export default TodoItem;
