
import * as React from 'react';

import IArchiveContent from '../../application/interfaces/Archive/IArchiveContent';

function TodoItem(props: { archiveContent: IArchiveContent; }) {
    return (
        <>
            <div>{props.archiveContent.Id} - {props.archiveContent.ContentTitle}</div>
        </>
    )
}

export default TodoItem;
