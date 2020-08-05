import React from "react";
import { Topbar, ThemeDarkgray } from "basic-frontend-common";
import { menuItems, FooterComponent } from "../includes/site-parts";

class ProductPage extends React.Component {
  public render() {
    return (
      <>
        {typeof window !== "undefined" ? (
          <>
            <Topbar
              backgroundImage="/backgrounds/Website-Design-Background.png"
              branding="Basic Frontend"
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

export default ProductPage;
