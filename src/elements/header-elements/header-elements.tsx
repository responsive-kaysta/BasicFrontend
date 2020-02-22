import * as React from "react";
import { eHeaderElementTypes } from "page-types/eHeaderElementTypes";
import { FC, ReactNode } from "react";

interface HeaderElementsProps {
  children: ReactNode;
  headerElementType?: eHeaderElementTypes;
}

export const HeaderElements: FC<HeaderElementsProps> = ({
  children,
  headerElementType
}) => {
  let listElements;
  switch (headerElementType) {
    case eHeaderElementTypes.abstract:
      listElements = <h2 className="abstract">{children}</h2>;
      break;
    case eHeaderElementTypes.headLine:
      listElements = <h2 className="headline">{children}</h2>;
      break;
    case eHeaderElementTypes.headLineCenter:
      listElements = <h2 className="headline align-center">{children}</h2>;
      break;
    default:
      listElements = <h1>{children}</h1>;
      break;
  }

  return <>{listElements}</>;
};
