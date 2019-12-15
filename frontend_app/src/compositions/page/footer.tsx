import * as React from "react";

class Footer extends React.Component {
  openWindow = (url: string) => {
    window.open(url);
  };

  public render() {
    return (
      <>
        <footer id="footer">
          <ul className="icons">
            <li>
              <i
                className="fab fa-xing"
                onClick={() =>
                  this.openWindow(
                    "https://www.xing.com/profile/Kay_Stuckenschmidt/cv?sc_o=mxb_p"
                  )
                }
              />
            </li>
            <li>
              <i
                className="fab fa-linkedin"
                onClick={() =>
                  this.openWindow(
                    "https://www.linkedin.com/in/responsivekaysta/"
                  )
                }
              />
            </li>
            <li>
              <i
                className="fab fa-github"
                onClick={() =>
                  this.openWindow("https://github.com/responsive-kaysta")
                }
              />
            </li>
            <li>
              <i
                className="fas fa-archive"
                onClick={() =>
                  this.openWindow("https://www.nuget.org/profiles/kaysta")
                }
              />
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
