import React, { FC, ReactNode } from "react";
import { HeadingTypes } from "./heading-types";

type HeadingProps = {
  children: ReactNode;
  type: HeadingTypes;
  cssStyle?: string;
};

export const Heading: FC<HeadingProps> = ({ children, type, cssStyle }) => {
  switch (type) {
    case HeadingTypes.abstract: {
      const style = cssStyle ? cssStyle : "";
      return <h3 className={style}>{children}</h3>;
    }
    case HeadingTypes.headline: {
      const style = cssStyle ? cssStyle : "";
      return <h2 className={style}>{children}</h2>;
    }
    case HeadingTypes.tagline: {
      const style = cssStyle ? cssStyle : "";
      return <h4 className={style}>{children}</h4>;
    }
    case HeadingTypes.title: {
      const style = cssStyle ? cssStyle : "";
      return <h1 className={style}>{children}</h1>;
    }
  }
};
