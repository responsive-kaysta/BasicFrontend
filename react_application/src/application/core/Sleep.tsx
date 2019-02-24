
import * as React from 'react';

function Sleep(props: { Milliseconds: number; }) {

    const start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > props.Milliseconds) {
            break;
        }
    }

    return (
        <>
            Sleep for {props.Milliseconds} (ms)
        </>
    )
}

export default Sleep;
