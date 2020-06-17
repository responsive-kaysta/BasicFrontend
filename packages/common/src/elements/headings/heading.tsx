import React, { FC, ReactNode } from "react";
import { HeadingTypes } from "./heading-types";

type HeadingProps = {
  children: ReactNode;
  type: HeadingTypes;
};

export const Heading: FC<HeadingProps> = ({ children, type }) => {
  switch (type) {
    case HeadingTypes.abstract: {
      return <h3 className="sm:text-base md:text-lg lg:text-xl">{children}</h3>;
    }
    case HeadingTypes.headline: {
      return <h2 className="sm:text-base md:text-lg lg:text-xl">{children}</h2>;
    }
    case HeadingTypes.tagline: {
      return <h4 className="sm:text-base md:text-lg lg:text-xl">{children}</h4>;
    }
    case HeadingTypes.title: {
      return <h1 className="sm:text-lg md:text-xl lg:text-2xl">{children}</h1>;
    }
  }
};
