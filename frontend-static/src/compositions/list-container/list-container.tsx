import * as React from "react";
import { FC, ReactNode } from "react";
import { eListContainerTypes } from "../../page-types/eListContainerTypes";

interface iListContainerProps {
  children: ReactNode;
  header?: string;
  listContainerType?: eListContainerTypes;
}

export const ListContainer: FC<iListContainerProps> = ({
  children,
  header,
  listContainerType
}) => {
  let listElements;
  switch (listContainerType) {
    case eListContainerTypes.actions:
      listElements = <ul className="actions">{children}</ul>;
      break;
    case eListContainerTypes.actionsFit:
      listElements = <ul className="actions small">{children}</ul>;
      break;
    case eListContainerTypes.actionsFitSmall:
      listElements = <ul className="actions vertical">{children}</ul>;
      break;
    case eListContainerTypes.actionsSmall:
      listElements = <ul className="actions vertical small">{children}</ul>;
      break;
    case eListContainerTypes.actionsVertical:
      listElements = <ul className="actions fit">{children}</ul>;
      break;
    case eListContainerTypes.actionsVerticalSmall:
      listElements = <ul className="actions fit small">{children}</ul>;
      break;
    case eListContainerTypes.alt:
      listElements = <ul className="alt">{children}</ul>;
      break;
    case eListContainerTypes.icons:
      listElements = <ul className="icons">{children}</ul>;
      break;
    case eListContainerTypes.iconsMajor:
      listElements = <ul className="icons major">{children}</ul>;
      break;
    default:
      listElements = <ul>{children}</ul>;
      break;
  }

  return (
    <>
      {header && <p className="paragraph">{header}</p>}
      {listElements}
    </>
  );
};
