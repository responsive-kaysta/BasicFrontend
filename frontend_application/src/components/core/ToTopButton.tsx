import * as React from 'react';
import * as Scroll from 'react-scroll';

var scroll = Scroll.animateScroll;

function handleClick(e: { preventDefault: () => void; }) {
    e.preventDefault();
    console.log('The link was clicked.');
    scroll.scrollToTop();
}

function ToTopButton() {
    return (
        <>
            <button onClick={handleClick}>
                to top
            </button>
        </>
    )
}

export default ToTopButton;