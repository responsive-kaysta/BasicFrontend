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
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
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
