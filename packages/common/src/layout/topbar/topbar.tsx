import React, { FC, ReactNode, useState } from "react";
import { HorizontalNavbar } from "../../components";
import { NavigationItems } from "../../typings";

type TopbarProps = {
  children: ReactNode;
  menuItems: NavigationItems[];
  logo?: string;
  backgroundImage?: string;
};

export const Topbar: FC<TopbarProps> = ({
  children,
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
      className={`flex flex-col h-screen overflow-hidden bg-gray-100 text-gray-800`}
      id="topbar-main-wrapper"
      {...props}
    >
      <HorizontalNavbar
        isMenuVisible={isMenuVisible}
        toggleMenuVisible={toggleMenuVisible}
        menuItems={menuItems}
        logo={logo}
      />
      <main
        className="flex flex-col flex-1 relative z-0 overflow-hidden "
        id="topbar-main"
        tabIndex={0}
      >
        {/* <!-- Replace with your content --> */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="m-0 p-0 overflow-y-auto">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              {children}
            </div>
          </div>
        </div>
        {/* <!-- /End replace --> */}
      </main>
    </div>
  );
};
