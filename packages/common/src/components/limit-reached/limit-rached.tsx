import * as React from "react";
import { FC } from "react";
import { EyeCatcher } from "../../compositions";
import { PageStyleTemplates } from "../../style-types";

interface LimitReachedProps {
  header: string;
  paragraph: string;
  limitReached: boolean;
  pageStyle: PageStyleTemplates;
}

export const LimitReached: FC<LimitReachedProps> = ({
  header,
  paragraph,
  limitReached,
  pageStyle,
}) => {
  return (
    <>
      {limitReached && (
        <EyeCatcher
          header={header}
          paragraph={paragraph}
          pageStyle={pageStyle}
        />
      )}
    </>
  );
};
