import React, { FC, ReactNode } from "react";

type BasicContainerProps = {
  children: ReactNode;
  backgroundImage?: string;
};

export const ContainerBasic: FC<BasicContainerProps> = ({
  children,
  backgroundImage,
}) => {
  const style = `container mx-auto bg-gray-100 text-gray-800`;

  if (backgroundImage) {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
  }

  return <div className={style}>{children}</div>;
};
