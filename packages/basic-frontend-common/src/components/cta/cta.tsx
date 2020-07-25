import React, { FC } from "react";
import {
  ButtonRegular,
  ButtonType,
  TextLead,
  TitleAbstract,
} from "../../elements";
import { ThemeType } from "../../identity";

type CallToActionProps = {
  ctaHeader: string;
  ctaText: string;
  primaryButtonText: string;
  primaryButtonAction: () => void;
  secondaryButtonText: string;
  secondaryButtonAction: () => void;
  theme?: ThemeType;
};

export const CallToAction: FC<CallToActionProps> = ({
  ctaHeader,
  ctaText,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
  theme,
}) => {
  const style = `${theme ? theme.body.backgroundColor : "bg-gray-100"} ${
    theme ? theme.body.textColor : "text-gray-800"
  }`;
  return (
    <div className={style}>
      <div className="">
        <TitleAbstract theme={theme}>{ctaHeader}</TitleAbstract>
        <TextLead theme={theme}>{ctaText}</TextLead>
        <div className="mt-6 flex">
          <span className="mr-6">
            <ButtonRegular
              text={primaryButtonText}
              onClick={primaryButtonAction}
              type={ButtonType.tertiary}
            />
          </span>
          <ButtonRegular
            text={secondaryButtonText}
            onClick={secondaryButtonAction}
            type={ButtonType.primary}
          />
        </div>
      </div>
    </div>
  );
};
