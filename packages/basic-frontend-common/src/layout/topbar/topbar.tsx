import React, { FC, ReactNode, useState } from "react";
import { NavigationItems } from "../../typings";
import { HorizontalNavbar } from "./horizontal-navbar";

type TopbarProps = {
  children: ReactNode;
  footer?: ReactNode;
  menuItems: NavigationItems[];
  logo?: string;
  backgroundImage?: string;
};

export const Topbar: FC<TopbarProps> = ({
  children,
  footer,
  menuItems,
  logo,
  backgroundImage,
}) => {
  const [isMenuVisible, toggleMenuVisible] = useState<boolean>(false);

  if (typeof window !== "undefined" && backgroundImage) {
    // document.body.style.background = `linear-gradient(to bottom, #0b3536 0%, rgba(125, 185, 232, 0)), url(${backgroundImage})`;
    document.body.style.backgroundImage = `linear-gradient(to bottom, #0b3536 0%, rgba(125, 185, 232, 0)), url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }

  return (
    <div className={`flex flex-col w-full min-h-screen`} id="body-wrapper">
      <HorizontalNavbar
        isMenuVisible={isMenuVisible}
        toggleMenuVisible={toggleMenuVisible}
        menuItems={menuItems}
        logo={logo}
      />
      <main
        className={`flex flex-col flex-1 relative z-0`}
        id="main-container"
        tabIndex={0}
      >
        {children}
      </main>
      {footer}
    </div>
  );
};
