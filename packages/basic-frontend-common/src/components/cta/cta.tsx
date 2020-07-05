import React, { FC } from "react";
import {
  TextLead,
  TitleAbstract,
  ButtonRegular,
  ButtonType,
} from "../../elements";

type CallToActionProps = {
  ctaHeader: string;
  ctaText: string;
  primaryButtonText: string;
  primaryButtonAction: () => void;
  secondaryButtonText: string;
  secondaryButtonAction: () => void;
};

export const CallToAction: FC<CallToActionProps> = ({
  ctaHeader,
  ctaText,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
}) => {
  return (
    <div className="bg-white">
      <div className="">
        <TitleAbstract>{ctaHeader}</TitleAbstract>
        <TextLead>{ctaText}</TextLead>
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
