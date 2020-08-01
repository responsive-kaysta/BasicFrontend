import {
  Footer,
  Link,
  NavigationItems,
  ThemeType,
} from "basic-frontend-common";
import React from "react";

// https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f
export const footerComponent = (theme: ThemeType) => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const pictogramSize = windowWidth >= 650 ? PictogramSize.xxs : PictogramSize.xxxs;

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);

  return (
    <Footer>
      <ul className="flex flex-row mt-4 md:mt-6">
        <li className="ml-2 mr-2 md:ml-4 md:mr-4">
          <Link
            href="https://github.com/responsive-kaysta"
            theme={theme}
            newWindow
          >
            {/* <Pictogram name="xing_logo" size={pictogramSize} /> */}
          </Link>
        </li>
        <li className="ml-2 mr-2 md:ml-4 md:mr-4">
          <Link
            href="https://www.xing.com/profile/Kay_Stuckenschmidt/cv"
            theme={theme}
            newWindow
          >
            {/* <Pictogram name="linkedin_logo" size={pictogramSize} /> */}
          </Link>
        </li>
        <li className="ml-2 mr-2 md:ml-4 md:mr-4">
          <Link
            href="https://www.linkedin.com/in/responsivekaysta/"
            theme={theme}
            newWindow
          >
            {/* <Pictogram name="github_logo" size={pictogramSize} /> */}
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
