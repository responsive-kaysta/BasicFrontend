
import * as React from 'react';

import { NavLink } from "react-router-dom";

import ToggleMenu from "src/components/page/ToggleMenu";

class Header extends React.Component {

    private isVisible: boolean;

    constructor(props: any, state: any) {
        super(props, state);
        this.state = { visible: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    public toggleMenu() {
        this.setState({ visible: !this.isVisible })
    }
    
    public render() {
        return (
            <>
                <header id="header" className="remove">
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