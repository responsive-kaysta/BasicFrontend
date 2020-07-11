import React, { FC, ReactNode } from "react";

type SectionHeaderProps = {
  children: ReactNode;
};

export const SectionHeader: FC<SectionHeaderProps> = ({ children }) => {
  const style = `mb-2 md:mb-4`;
  return <header className={style}>{children}</header>;
};
