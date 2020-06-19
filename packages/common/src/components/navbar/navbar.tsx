import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type NavbarMenuItem = {
  href: string;
  text: string;
  title: string;
};

type NavbarProps = {
  theme?: ThemeType;
  menuItems?: NavbarMenuItem[];
  withSearch?: boolean;
  logo?: ReactNode;
};

export const Navbar: FC<NavbarProps> = ({
  menuItems,
  theme,
  withSearch,
  logo,
}) => {
  // const [menuVisible, setMenuVisible] = useState<boolean>(false);
  // const [profileVisible, setProfileVisible] = useState<boolean>(false);

  // console.log("menuVisible", menuVisible);
  // console.log("profileVisible", profileVisible);

  console.log(menuItems);
  console.log(theme);
  console.log(withSearch);
  console.log(logo);

  return <header className="flex overflow-hidden bg-gray-100">inhalt</header>;
};
