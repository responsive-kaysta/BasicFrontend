import React, { FC } from "react";
import {
  ButtonRegular,
  ButtonType,
  TextLead,
  TitleAbstract,
} from "../../elements";
import { ThemeType } from "../../typings";
import { openUrl } from "../../utils";

type CallToActionProps = {
  ctaHeader: string;
  ctaText: string;
  primaryButtonText: string;
  primaryButtonAction: string;
  primaryButtonType?: ButtonType;
  secondaryButtonText: string;
  secondaryButtonAction: string;
  secondaryButtonType?: ButtonType;
  theme?: ThemeType;
};

export const CallToAction: FC<CallToActionProps> = ({
  ctaHeader,
  ctaText,
  primaryButtonText,
  primaryButtonAction,
  primaryButtonType,
  secondaryButtonText,
  secondaryButtonAction,
  secondaryButtonType,
  theme,
}) => {
  const style = `flex flex-col md:flex-row ${
    theme ? theme.body.backgroundColor : "bg-gray-100"
  } ${theme ? theme.body.textColor : "text-gray-800"}`;

  return (
    <div className={style}>
      <div className="w-full md:w-3/4">
        <TitleAbstract theme={theme}>{ctaHeader}</TitleAbstract>
        <TextLead theme={theme}>{ctaText}</TextLead>
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-1/4">
        <div className="mb-2 md:mb-4">
          <ButtonRegular
            text={primaryButtonText}
            onClick={() => openUrl(primaryButtonAction)}
            type={primaryButtonType ? primaryButtonType : ButtonType.tertiary}
          />
        </div>
        <div>
          <ButtonRegular
            text={secondaryButtonText}
            onClick={() => openUrl(secondaryButtonAction)}
            type={
              secondaryButtonType ? secondaryButtonType : ButtonType.primary
            }
          />
        </div>
      </div>
    </div>
  );
};
