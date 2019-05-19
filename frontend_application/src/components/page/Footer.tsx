
import * as React from 'react';

class Footer extends React.Component {

    public render() {
        return (
            <>
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
                        <span>&copy; 2019 responsive IT - mobile first!</span>
                    </div>
                </footer>
            </>
        );
    }

}

export default Footer;