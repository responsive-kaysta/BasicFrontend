import React, { FC, ReactNode, useState } from "react";
import { HorizontalNavbar } from "../../components";
import { NavigationItems } from "../../typings";

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
  ...props
}) => {
  // console.log("theme: ", theme);

  const [isMenuVisible, toggleMenuVisible] = useState<boolean>(false);

  if (backgroundImage) {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
  }

  return (
    <div
      className={`flex flex-col w-full h-screen overflow-hidden`}
      id="body-wrapper"
      {...props}
    >
      <HorizontalNavbar
        isMenuVisible={isMenuVisible}
        toggleMenuVisible={toggleMenuVisible}
        menuItems={menuItems}
        logo={logo}
      />
      <main
        className={`flex flex-col flex-1 relative z-0 overflow-hidden bg-gray-100 text-gray-800`}
        id="main-container"
        tabIndex={0}
      >
        {children}
      </main>
      {footer}
    </div>
  );
};
