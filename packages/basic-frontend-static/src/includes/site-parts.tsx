import {
  Footer,
  Icon,
  IconSize,
  Link,
  NavigationItems,
  ThemeType,
  useResize,
} from 'basic-frontend-common';
import React, { FC } from 'react';
import { MOBILE_VIEW_WIDTH, PAGE_AUTHOR } from '../constants';
import { TEXTS } from '../localization';

type FooterComponentProps = {
  theme: ThemeType;
};

export const FooterComponent: FC<FooterComponentProps> = ({ theme }) => {
  const iconSize =
    useResize().windowWidth >= MOBILE_VIEW_WIDTH ? IconSize.xxs : IconSize.xxxs;

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
          2020 {PAGE_AUTHOR} - v 0.5.0
        </Link>
      </span>
    </Footer>
  );
};

export const MenuItems = () => {
  const menuItems: NavigationItems[] = [
    {
      link: '/',
      text: TEXTS.siteParts.menuItems.linkHome,
      title: TEXTS.siteParts.menuItems.linkHomeTitle,
    },
    {
      link: '/about',
      text: TEXTS.siteParts.menuItems.linkAbout,
      title: TEXTS.siteParts.menuItems.linkAboutTitle,
    },
    {
      link: '/contact-page',
      text: TEXTS.siteParts.menuItems.linkContact,
      title: TEXTS.siteParts.menuItems.linkContactTitle,
    },
  ];
  return menuItems;
};
