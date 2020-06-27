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
    <div
      className={`flex px-5 md:px-8 text-base sm:text-xl font-semibold sm:font-bold text-gray-100`}
      id="navbar-logo"
      title={`Branding`}
    >
      {logo}
    </div>
  );

  return (
    <header id="horizontal-navbar-header">
      <div
        className={`flex flex-row items-center justify-between h-12 md:h-16 bg-gray-700 text-gray-100`}
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
            id="horizontal-navbar"
            className={`fixed flex flex-col top-0 right-0 w-2/3 md:w-1/3 h-screen z-40 bg-gray-700 text-gray-100 transition-all duration-300 ease-in-out ${
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
                    <a
                      href={item.link}
                      title={item.title}
                      className={`text-gray-100 text-md`}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
