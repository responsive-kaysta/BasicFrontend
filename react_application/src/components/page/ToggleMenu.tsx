
import * as React from 'react';
import { NavLink } from "react-router-dom";

import IToggleMenuState from 'src/application/interfaces/page/IToggleMenuState';

class ToggleMenu extends React.Component<any, IToggleMenuState> {

    constructor(props: any, state: IToggleMenuState) {
        super(props);
        this.state = { isRight: false }
        this.showRight = this.showRight.bind(this);
    }

    public showRight = () => {
        this.setState({ isRight: !this.state.isRight })
    }


    public render() {
        return (
            <>
                <a onClick={this.showRight} className={this.state.isRight ? "menuClose" : "menuToggle"}>
                    <span className={!this.state.isRight ? "" : "displayNone"}>menu</span>
                </a>

                <div className={this.state.isRight ? "menu displayBlock" : "displayNone"}>
                    <ul>
                        <li><NavLink to="/" onClick={this.showRight}>Home</NavLink></li>
                        <li><NavLink to="/stuff" onClick={this.showRight}>Stuff</NavLink></li>
                        <li><NavLink to="/contact" onClick={this.showRight}>Contact</NavLink></li>
                    </ul>
                </div>

            </>
        );
    }
}

export default ToggleMenu;
