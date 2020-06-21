import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";
import { NavigationItems } from "../../typings";

type HorizontalNavbarProps = {
  menuItems: NavigationItems[];
  isMenuVisible: boolean;
  toggleMenuVisible: (visible: boolean) => void;
  theme?: ThemeType;
  logo?: ReactNode;
};

export const HorizontalNavbar: FC<HorizontalNavbarProps> = ({
  menuItems,
  isMenuVisible,
  toggleMenuVisible,
  theme,
  logo,
}) => {
  const mobileNavTheme = theme
    ? `${theme.bgMenuColor} ${theme.textColor}`
    : "bg-gray-300";

  const headerTheme = theme
    ? `${theme.bgHeaderColor} ${theme.textHeaderColor}`
    : "bg-gray-300";

  const buttonCloseTheme = theme ? `${theme.textHeaderColor}` : "text-gray-500";

  const menuLinkTheme = theme
    ? `${theme.linkColor} hover:${theme.linkHoverColor} focus:${theme.linkFocusColor} active:${theme.linkActiveColor} visited:${theme.linkVisitedColor}`
    : "text-blue-200";

  const logoComp = (
    <div className="flex px-5 md:px-8" id="navbar-logo">
      {logo}
    </div>
  );

  return (
    <header id="horizontal-navbar-header">
      <div
        className={`md:hidden flex flex-row items-center justify-between h-12 md:h-16 ${headerTheme}`}
      >
        {logoComp}
        {!isMenuVisible && (
          <div className="flex pr-3">
            <button
              className={`m-0 p-0 h-6 w-6 ${buttonCloseTheme}`}
              aria-label="Open sidebar"
              onClick={() => toggleMenuVisible(true)}
            >
              <svg
                className="m-0 p-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        )}
        {isMenuVisible && (
          <div className="flex pr-3">
            <button
              className={`m-0 p-0 h-6 w-6 ${buttonCloseTheme}`}
              aria-label="Close sidebar"
            >
              <svg
                className="m-0 p-0 h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
        {isMenuVisible && (
          <nav
            id="horizontal-navbar-mobile-nav"
            className={`fixed flex top-0 right-0 w-2/3 h-screen z-40 ${mobileNavTheme} transition-opacity duration-300 ${
              isMenuVisible ? "bg-opacity-75" : "bg-opacity-0"
            }`}
            onClick={() => toggleMenuVisible(false)}
          >
            <ul className="px-6 w-full">
              {menuItems.map((item) => {
                return (
                  <li
                    key={item.title}
                    className={`pt-6 pb-2 w-full border-b-2 ${
                      theme ? theme.borderColor : "border-gray-400"
                    }`}
                  >
                    <a
                      href={item.link}
                      title={item.title}
                      className={`${menuLinkTheme}`}
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

      <div
        className={`hidden md:flex flex-row items-center h-12 md:h-16 ${headerTheme}`}
      >
        {logoComp}
        <nav id="horizontal-navbar-nav" className="flex">
          <ul className="flex flex-row">
            {menuItems.map((item) => {
              return (
                <li key={item.title} className="px-8">
                  <a
                    href={item.link}
                    title={item.title}
                    className={`${menuLinkTheme}`}
                  >
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
