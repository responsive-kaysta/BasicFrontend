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
            <h1><NavLink to="/">basic frontend</NavLink></h1>
            <nav>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/stuff">Stuff</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </nav>
          </header>

          <article id="main">
            <Route exact={true} path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </article>

          <footer id="footer">
            <ul className="icons">
              <li>
                <a href="https://www.xing.com/profile/Kay_Stuckenschmidt/cv?sc_o=mxb_p" className="fab fa-xing" target="_blank">
                  <span className="label">xing</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/responsivekaysta/" className="fab fa-linkedin" target="_blank">
                  <span className="label">linkedin</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/responsive-kaysta" className="fab fa-github" target="_blank">
                  <span className="label">github</span>
                </a>
              </li>
              <li>
                <a href="https://www.nuget.org/profiles/kaysta" className="fas fa-archive" target="_blank">
                  <span className="label">archive</span>
                </a>
              </li>
            </ul>

            <div className="copyright">
              <span>&copy; 2019 responsive kaysta</span>
            </div>
          </footer>

        </div>
      </HashRouter>
    );
  }
}

export default MainApplication;
