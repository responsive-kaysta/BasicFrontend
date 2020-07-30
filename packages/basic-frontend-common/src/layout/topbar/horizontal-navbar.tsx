import React, { FC, ReactNode } from "react";
import { Pictogram, PictogramSize } from "../../identity";
import { NavigationItems, ThemeType } from "../../typings";
import { openUrl } from "../../utils";

type HorizontalNavbarProps = {
  menuItems: NavigationItems[];
  isMenuVisible: boolean;
  toggleMenuVisible: (visible: boolean) => void;
  branding?: ReactNode;
  theme?: ThemeType;
};

export const HorizontalNavbar: FC<HorizontalNavbarProps> = ({
  menuItems,
  isMenuVisible,
  toggleMenuVisible,
  branding,
  theme,
}) => {
  const brandingStyle = `flex px-5 md:px-8 text-base sm:text-xl font-semibold sm:font-bold ${
    theme ? theme.body.secondaryText : "text-gray-200"
  }`;

  const brandingComp = (
    <span className={brandingStyle} id="navbar-logo" title={`Branding`}>
      <a href="/" title="Branding, navigate to the home page">
        {branding}
      </a>
    </span>
  );

  const wrapperStyle = `flex flex-row items-center justify-between h-12 md:h-16 ${
    theme ? theme.body.backgroundColor : "bg-gray-800"
  } ${theme ? theme.body.secondaryText : "text-gray-200"}`;

  const navStyle = `fixed flex flex-col top-0 right-0 w-2/3 md:w-1/3 h-screen z-40 bg-sgreen-100 ${
    theme ? theme.body.secondaryText : "text-gray-200"
  } transition-all duration-300 ease-in-out ${
    isMenuVisible ? "bg-opacity-75" : "bg-opacity-0"
  }`;

  const menuItemStyle = `pt-6 pb-2 w-full border-b ${
    theme ? theme.body.borderColor : "border-gray-300"
  } hover:${theme ? theme.form.borderHoverColor : "border-red-600"} ${
    theme ? theme.body.secondaryText : "text-gray-200"
  } hover:${theme ? theme.link.hoverColor : "text-red-600"} cursor-pointer`;

  return (
    <header id="horizontal-navbar-header">
      <div className={wrapperStyle}>
        {brandingComp}
        {!isMenuVisible && (
          <div className="flex pr-3">
            <button
              className={`${
                theme ? theme.body.secondaryText : "text-gray-200"
              }`}
              aria-label="Open sidebar"
              title="Open sidebar"
              onClick={() => toggleMenuVisible(true)}
            >
              <Pictogram name="hamburger_menu" size={PictogramSize.xs} />
            </button>
          </div>
        )}
        {isMenuVisible && (
          <nav
            id="horizontal-navbar"
            className={navStyle}
            onClick={() => toggleMenuVisible(false)}
          >
            <div className="flex">
              <button
                className={`${
                  theme ? theme.body.secondaryText : "text-gray-200"
                }`}
                aria-label="Close sidebar"
                title="Close sidebar"
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
                    onClick={() => openUrl(item.link)}
                    className={menuItemStyle}
                  >
                    <a
                      href={item.link}
                      title={item.title}
                      className={`text-md`}
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
