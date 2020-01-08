import * as React from "react";
import { iListContainerProps, eListContainerTypes } from "./spec";

class ListContainer extends React.Component<iListContainerProps> {
  public render() {
    let listElements;
    switch (this.props.listContainerType) {
      case eListContainerTypes.actions:
        listElements = <ul className="actions">{this.props.children}</ul>;
        break;
      case eListContainerTypes.actionsFit:
        listElements = <ul className="actions small">{this.props.children}</ul>;
        break;
      case eListContainerTypes.actionsFitSmall:
        listElements = (
          <ul className="actions vertical">{this.props.children}</ul>
        );
        break;
      case eListContainerTypes.actionsSmall:
        listElements = (
          <ul className="actions vertical small">{this.props.children}</ul>
        );
        break;
      case eListContainerTypes.actionsVertical:
        listElements = <ul className="actions fit">{this.props.children}</ul>;
        break;
      case eListContainerTypes.actionsVerticalSmall:
        listElements = (
          <ul className="actions fit small">{this.props.children}</ul>
        );
        break;
      case eListContainerTypes.alt:
        listElements = <ul className="alt">{this.props.children}</ul>;
        break;
      case eListContainerTypes.icons:
        listElements = <ul className="icons">{this.props.children}</ul>;
        break;
      case eListContainerTypes.iconsMajor:
        listElements = <ul className="icons major">{this.props.children}</ul>;
        break;
      default:
        listElements = <ul>{this.props.children}</ul>;
        break;
    }

    return (
      <>
        {this.props.header && <p className="lead">{this.props.header}</p>}
        {listElements}
      </>
    );
  }
}

export default ListContainer;
