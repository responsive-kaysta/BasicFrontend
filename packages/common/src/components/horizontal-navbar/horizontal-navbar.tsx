import React, { FC, ReactNode } from "react";
import { Pictogram, PictogramSize } from "../../identity";
import { NavigationItems } from "../../typings";

type HorizontalNavbarProps = {
  menuItems: NavigationItems[];
  isMenuVisible: boolean;
  toggleMenuVisible: (visible: boolean) => void;
  logo?: ReactNode;
};

export const HorizontalNavbar: FC<HorizontalNavbarProps> = ({
  menuItems,
  isMenuVisible,
  toggleMenuVisible,
  logo,
}) => {
  const logoComp = (
    <div className={`flex px-5 md:px-8 text-lg text-gray-100`} id="navbar-logo">
      {logo}
    </div>
  );

  return (
    <header id="horizontal-navbar-header">
      <div
        className={`md:hidden flex flex-row items-center justify-between h-12 md:h-16 bg-gray-700 text-gray-100`}
      >
        {logoComp}
        {!isMenuVisible && (
          <div className="flex pr-3">
            <button
              className={`text-gray-100`}
              aria-label="Open sidebar"
              onClick={() => toggleMenuVisible(true)}
            >
              <Pictogram name="hamburger_menu" size={PictogramSize.xs} />
            </button>
          </div>
        )}
        {isMenuVisible && (
          <nav
            id="horizontal-navbar-mobile-nav"
            className={`fixed flex flex-col top-0 right-0 w-2/3 h-screen z-40 bg-gray-700 text-gray-100 transition-all duration-300 ease-in-out ${
              isMenuVisible ? "bg-opacity-75" : "bg-opacity-0"
            }`}
            onClick={() => toggleMenuVisible(false)}
          >
            <div className="flex">
              <button
                className={`text-gray-100`}
                aria-label="Close sidebar"
                onClick={() => toggleMenuVisible(false)}
              >
                <Pictogram
                  name="hamburger_menu_close"
                  size={PictogramSize.xs}
                />
              </button>
            </div>
            <ul className="px-6 w-full">
              {menuItems.map((item) => {
                return (
                  <li
                    key={item.title}
                    className={`pt-6 pb-2 w-full border-b border-gray-300`}
                  >
                    <a href={item.link} title={item.title} className={``}>
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      <div
        className={`hidden md:flex flex-row items-center h-12 md:h-16 bg-gray-700 text-gray-100`}
      >
        {logoComp}
        <nav id="horizontal-navbar-nav" className="flex">
          <ul className="flex flex-row">
            {menuItems.map((item) => {
              return (
                <li key={item.title} className="px-8">
                  <a href={item.link} title={item.title} className={``}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
