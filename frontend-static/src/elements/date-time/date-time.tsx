import React from "react";

interface DateTimeProps {
  dateTime: Date;
  dateTimeType?: string;
}

export class DateTime extends React.Component<DateTimeProps> {
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
