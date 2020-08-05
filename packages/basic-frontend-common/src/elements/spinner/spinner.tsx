import React, { FC } from "react";
import { Icon, IconSize } from "../../identity";
import { ThemeType } from "../../typings";

type SpinnerProps = {
  theme?: ThemeType;
  backgroundImage?: string;
};

export const Spinner: FC<SpinnerProps> = ({ theme, backgroundImage }) => {
  if (typeof window !== "undefined" && backgroundImage) {
    document.body.style.backgroundImage = `linear-gradient(to bottom, #0b3536 0%, rgba(125, 185, 232, 0)), url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }

  const wrapper = `flex h-screen`;

  const style = `m-auto animate-spin duration-1000 ${
    theme ? `${theme.body.textColor}` : "text-gray-800"
  }`;

  return (
    <div className={wrapper}>
      <Icon name="spinner_of_dots" size={IconSize.sm} className={style} />
    </div>
  );
};
