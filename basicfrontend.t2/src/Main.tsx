
import * as React from 'react';

import { HashRouter, NavLink, Route } from "react-router-dom";

import Contact from "./Contact";
import Home from "./Home";
import Stuff from "./Stuff";

class Main extends React.Component {
    public render() {
        return (
            <HashRouter>
                <div>
                    <h1><NavLink to="/">Simple Page</NavLink></h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;