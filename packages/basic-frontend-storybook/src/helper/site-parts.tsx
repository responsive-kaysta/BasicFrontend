import {
  Footer,
  Icon,
  IconSize,
  Link,
  NavigationItems,
  ThemeType,
} from "basic-frontend-common";
import React, { useEffect, useState } from "react";

// https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f
export const footerComponent = (theme: ThemeType) => {
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
          2020 responsive IT
        </Link>
      </span>
    </Footer>
  );
};

export const menuItems: NavigationItems[] = [
  { link: "/", text: "Menu-Item 1", title: "Menu-Item 1" },
  { link: "/", text: "Menu-Item 2", title: "Menu-Item 2" },
  { link: "/", text: "Menu-Item 3", title: "Menu-Item 3" },
  { link: "/", text: "Menu-Item 4", title: "Menu-Item 4" },
];

export const optionsDropdown: { value: string; label: string }[] = [
  {
    label: "Value 1",
    value: "1",
  },
  {
    label: "Value 2",
    value: "2",
  },
  {
    label: "Value 3",
    value: "3",
  },
];

export const optionsCheckBox: {
  value: string;
  label: string;
  checked?: boolean;
}[] = [
  {
    value: "value1",
    label: "Label 1",
    checked: true,
  },
  {
    value: "value2",
    label: "Label 2",
  },
  {
    value: "value3",
    label: "Label 3",
  },
];

export const optionsRadioButton: {
  value: string;
  label: string;
}[] = [
  {
    value: "value1",
    label: "Label 1",
  },
  {
    value: "value2",
    label: "Label 2",
  },
  {
    value: "value3",
    label: "Label 3",
  },
];
