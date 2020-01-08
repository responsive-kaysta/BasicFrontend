import React from "react";
import { iDateTimeProps } from "./spec";

class DateTime extends React.Component<iDateTimeProps> {
  render() {
    const dateTime = new Date(this.props.dateTime);
    let dateTimeFormat;

    switch (this.props.dateTimeType) {
      case "Regular":
        dateTimeFormat = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
        break;
      case "DateOnly":
        dateTimeFormat = `${dateTime.toLocaleDateString()}`;
        break;
    }
    return dateTimeFormat;
  }
}
export default DateTime;
