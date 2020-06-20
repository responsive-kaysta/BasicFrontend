import React, { FC, ReactNode, useState } from "react";
import { ThemeType } from "../../identity";
import { NavigationItems } from "../../typings";
import { HorizontalNavbar } from "../../components";

type TopbarProps = {
  children: ReactNode;
  menuItems: NavigationItems[];
  theme?: ThemeType;
  logo?: string;
  backgroundImage?: string;
};

export const Topbar: FC<TopbarProps> = ({
  children,
  menuItems,
  theme,
  logo,
  backgroundImage,
  ...props
}) => {
  console.log("theme: ", theme);

  const [isMenuVisible, toggleMenuVisible] = useState<boolean>(false);
  console.log("isMenuVisible: ", isMenuVisible);

  if (backgroundImage) {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
  }

  return (
    <div
      className="flex flex-col h-screen overflow-hidden bg-gray-100"
      {...props}
    >
      <HorizontalNavbar
        isMenuVisible={isMenuVisible}
        toggleMenuVisible={toggleMenuVisible}
        menuItems={menuItems}
        theme={theme}
        logo={logo}
      />
      <main
        className="flex flex-col flex-1 relative z-0 overflow-hidden "
        tabIndex={0}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* <!-- Replace with your content --> */}
          <div className="m-0 p-0 overflow-y-auto">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              {children}
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
};
