import * as React from "react";
import { FC } from "react";
import { HeadingProps } from "./heading-props";
import { HeadingTypes } from "./heading-types";

export const Heading: FC<HeadingProps> = ({ children, type }) => {
  switch (type) {
    case HeadingTypes.H1: {
      return <h1>{children}</h1>;
    }
    case HeadingTypes.H2: {
      return <h2>{children}</h2>;
    }
    case HeadingTypes.H3: {
      return <h3>{children}</h3>;
    }
    case HeadingTypes.H4: {
      return <h4>{children}</h4>;
    }
    case HeadingTypes.H5: {
      return <h5>{children}</h5>;
    }
    case HeadingTypes.H6: {
      return <h6>{children}</h6>;
    }
    default: {
      return <h1>{children}</h1>;
    }
  }
};
