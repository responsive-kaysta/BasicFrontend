import React, { FC } from "react";
import { Hruler, TitleSub, TextLead } from "../../elements";
import { ThemeType } from "../../identity";

type EyeCatcherProps = {
  contentTop: string;
  contentBottom: string;
  theme?: ThemeType;
};

export const EyeCatcher: FC<EyeCatcherProps> = ({
  contentTop,
  contentBottom,
  theme,
}) => {
  const style = `w-full p-4 md:p-6 text-center ${
    theme ? theme.body.backgroundColor : "bg-gray-100"
  }`;
  return (
    <section className={style}>
      <TitleSub theme={theme}>{contentTop}</TitleSub>
      <Hruler theme={theme} />
      <TextLead theme={theme}>{contentBottom}</TextLead>
    </section>
  );
};
