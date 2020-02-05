import { eListElementTypes } from "page-types/eListElementTypes";
import * as React from "react";
import { FC, ReactNode } from "react";

interface ListElementProps {
  children: ReactNode;
  listElementType?: eListElementTypes;
}

export const ListElement: FC<ListElementProps> = ({
  children,
  listElementType
}) => {
  let listElement;
  switch (listElementType) {
    case eListElementTypes.li:
      listElement = <li>{children}</li>;
      break;
    default:
      listElement = <li>{children}</li>;
      break;
  }

  return <>{listElement}</>;
};
