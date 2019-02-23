
import * as React from 'react';

import { NavLink } from "react-router-dom";

class Header extends React.Component {
    
    public render() {
        return (
            <>
                <header id="header" className="remove">
                    <h1><NavLink to="/">basic frontend</NavLink></h1>
                    <nav id="nav">
                        <ul><li className="none"><a href="#" className="menuToggle"><span>Menu</span></a></li></ul>
                        {/* <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/stuff">Stuff</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul> */}
                    </nav>
                </header>
            </>
        );
    }

}

export default Header;