import React, { FC, ReactNode, useState } from "react";
import { NavigationItems, ThemeType } from "../../typings";
import { HorizontalNavbar } from "./horizontal-navbar";

type TopbarProps = {
  children: ReactNode;
  footer?: ReactNode;
  menuItems: NavigationItems[];
  branding?: string;
  theme?: ThemeType;
};

export const Topbar: FC<TopbarProps> = ({
  children,
  footer,
  menuItems,
  branding,
  theme,
}) => {
  const [isMenuVisible, toggleMenuVisible] = useState<boolean>(false);
  return (
    <div className={`flex flex-col w-full min-h-screen`} id="body-wrapper">
      <HorizontalNavbar
        isMenuVisible={isMenuVisible}
        toggleMenuVisible={toggleMenuVisible}
        menuItems={menuItems}
        branding={branding}
        theme={theme}
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
