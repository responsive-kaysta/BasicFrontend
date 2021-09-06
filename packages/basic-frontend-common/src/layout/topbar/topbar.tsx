import React, { FC, ReactNode, useState } from 'react';
import { NavigationItems, ThemeType } from '../../typings';
import { HorizontalNavbar } from './horizontal-navbar';

type TopbarProps = {
  children: ReactNode;
  footer?: ReactNode;
  menuItems: NavigationItems[];
  branding?: string;
  theme?: ThemeType;
  stickyHeader?: boolean;
};

export const Topbar: FC<TopbarProps> = ({
  children,
  footer,
  menuItems,
  branding,
  theme,
  stickyHeader = false,
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
        stickyHeader={stickyHeader}
      />
      <main
        className={`flex flex-col flex-1 z-0 ${stickyHeader ? '' : ''}`}
        id="main-container"
        tabIndex={0}
      >
        {children}
      </main>
      {footer}
    </div>
  );
};
