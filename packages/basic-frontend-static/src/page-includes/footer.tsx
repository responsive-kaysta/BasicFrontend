import * as React from "react";
import { FC } from "react";
import { PAGE_AUTHOR, PAGE_DESCRIPTION } from "../constants";

export const Footer: FC = () => {
  const openWindow = (url: string) => {
    window.open(url);
  };
  return (
    <>
      <footer id="footer">
        <ul className="icons">
          <li>
            <i
              className="fab fa-xing"
              onClick={() =>
                openWindow(
                  "https://www.xing.com/profile/Kay_Stuckenschmidt/cv?sc_o=mxb_p"
                )
              }
            />
          </li>
          <li>
            <i
              className="fab fa-linkedin"
              onClick={() =>
                openWindow("https://www.linkedin.com/in/responsivekaysta/")
              }
            />
          </li>
          <li>
            <i
              className="fab fa-github"
              onClick={() => openWindow("https://github.com/responsive-kaysta")}
            />
          </li>
          <li>
            <i
              className="fas fa-archive"
              onClick={() =>
                openWindow("https://www.nuget.org/profiles/kaysta")
              }
            />
          </li>
        </ul>
        <div className="copyright">
          <span>
            &copy; {new Date().getFullYear().toString()} - {PAGE_AUTHOR} -{" "}
            {PAGE_DESCRIPTION}
          </span>
        </div>
      </footer>
    </>
  );
};
