import { ThemeDarkgray, Topbar } from "basic-frontend-common";
import React from "react";
import { PAGE_NAME } from "../constants";
import { FooterComponent, menuItems } from "../includes/site-parts";

class TextPage extends React.Component {
  public render() {
    return (
      <>
        {typeof window !== "undefined" ? (
          <>
            <Topbar
              backgroundImage="/backgrounds/Website-Design-Background.png"
              branding={PAGE_NAME}
              theme={ThemeDarkgray}
              menuItems={menuItems}
              footer={<FooterComponent theme={ThemeDarkgray} />}
            >
              <div>content</div>
            </Topbar>
          </>
        ) : null}
      </>
    );
  }
}

export default TextPage;
