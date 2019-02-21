import * as React from 'react';

function TodoComponent(props: { id: string, title: string; description: string; link: string; }) {
    return (
        <>
            <h1 key={props.id}>{props.title}</h1>
            <h2>{props.description}</h2>
            <p>{props.link}</p>
        </>
    )
}

export default TodoComponent;
