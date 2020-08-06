import {
  Footer,
  Icon,
  IconSize,
  Link,
  NavigationItems,
  ThemeType,
} from "basic-frontend-common";
import React, { useEffect, useState, FC } from "react";
import { PAGE_AUTHOR } from "../constants";

type FooterComponentProps = {
  theme: ThemeType;
};

// https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f
export const FooterComponent: FC<FooterComponentProps> = ({ theme }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const iconSize = windowWidth >= 650 ? IconSize.xxs : IconSize.xxxs;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Footer>
      <ul className="flex flex-row mt-4 md:mt-6">
        <li className="ml-2 mr-2 md:ml-4 md:mr-4">
          <Link
            href="https://github.com/responsive-kaysta"
            theme={theme}
            newWindow
          >
            <Icon name="github_logo" size={iconSize} />
          </Link>
        </li>
        <li className="ml-2 mr-2 md:ml-4 md:mr-4">
          <Link
            href="https://www.xing.com/profile/Kay_Stuckenschmidt/cv"
            theme={theme}
            newWindow
          >
            <Icon name="xing_logo" size={iconSize} />
          </Link>
        </li>
        <li className="ml-2 mr-2 md:ml-4 md:mr-4">
          <Link
            href="https://www.linkedin.com/in/responsivekaysta/"
            theme={theme}
            newWindow
          >
            <Icon name="linkedin_logo" size={iconSize} />
          </Link>
        </li>
      </ul>
      <span className="mb-2 md:mb-4">
        <Link href="https://responsive-it.biz" theme={theme} newWindow>
          2020 {PAGE_AUTHOR}
        </Link>
      </span>
    </Footer>
  );
};

export const menuItems: NavigationItems[] = [
  { link: "/", text: "Home", title: "Navigate to the home-page" },
  {
    link: "/tiles-page",
    text: "Tiles-Page",
    title: "Navigate to the tiles-page",
  },
  {
    link: "/product-page",
    text: "Product-Page",
    title: "Navigate to the product-page",
  },
  { link: "/text-page", text: "Text-Page", title: "Navigate to the text-page" },
  { link: "/text-page", text: "Legal", title: "Navigate to the legal-page" },
  { link: "/text-page", text: "Links", title: "Navigate to the links-page" },
];
