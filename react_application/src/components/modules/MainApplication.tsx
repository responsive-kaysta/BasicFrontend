import * as React from 'react';

import { HashRouter, NavLink, Route } from "react-router-dom";

import Contact from "../../components/modules/contact/Contact";
import Home from "../../components/modules/home/Home";
import Stuff from "../../components/modules/stuff/Stuff";


class MainApplication extends React.Component {
  public render() {
    return (
      <HashRouter>
        <div>

          <header id="header" className="remove">
            <h1><NavLink to="/">Simple Page</NavLink></h1>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Stuff</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </header>

          <div className="content">
            <Route exact={true} path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </div>

          <footer id="footer">
            <ul className="icons">
              <li>
                <a href="https://www.xing.com/profile/Kay_Stuckenschmidt/cv?sc_o=mxb_p" className="fab fa-xing" target="_blank">
                  <span className="label">&nbsp;</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/responsivekaysta/" className="fab fa-linkedin" target="_blank">
                  <span className="label">&nbsp;</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/responsive-kaysta" className="fab fa-github" target="_blank">
                  <span className="label">&nbsp;</span>
                </a>
              </li>
              <li>
                <a href="https://www.nuget.org/profiles/kaysta" className="fas fa-archive" target="_blank">
                  <span className="label">&nbsp;</span>
                </a>
              </li>
            </ul>

            <div className="copyright">
              <span>&copy; 2019 author</span>
            </div>
          </footer>

        </div>
      </HashRouter>
    );
  }
}

export default MainApplication;
