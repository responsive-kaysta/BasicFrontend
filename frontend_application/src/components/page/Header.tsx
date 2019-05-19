
import * as React from 'react';
import { NavLink } from "react-router-dom";
import ToggleMenu from "../../components/page/ToggleMenu";

class Header extends React.Component {

    public render() {
        return (
            <>
                <header id="header">
                    <h1><NavLink to="/">basic frontend</NavLink></h1>
                    <nav id="nav">
                        <ToggleMenu />
                    </nav>
                </header>
            </>
        );
    }
}

export default Header;