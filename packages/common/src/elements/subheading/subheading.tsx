import React, { FC } from "react";
import styled from "styled-components";
import { typography } from "../../identity";
import { SunheadingProps } from "./subheading-props";
import { SubheadingTypes } from "./sunbheading-types";

const Abstract = styled.h3`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.uppercase};
  text-decoration: ${typography.decoration.none};
  font-size: ${typography.size.m1};
  font-weight: ${typography.weight.bold};
`;

const Headline = styled.h3`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
  font-size: ${typography.size.m3};
  font-weight: ${typography.weight.bold};
`;

const Tagline = styled.h3`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
  font-size: ${typography.size.m1};
  font-weight: ${typography.weight.bold};
  text-align: center;
`;

const Lead = styled.h4`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
  font-size: ${typography.size.m1};
  font-weight: ${typography.weight.bold};
`;

export const SubHeading: FC<SunheadingProps> = ({ children, type }) => {
  switch (type) {
    case SubheadingTypes.abstract: {
      return <Abstract>{children}</Abstract>;
    }
    case SubheadingTypes.headline: {
      return <Headline>{children}</Headline>;
    }
    case SubheadingTypes.lead: {
      return <Lead>{children}</Lead>;
    }
    case SubheadingTypes.tagline: {
      return <Tagline>{children}</Tagline>;
    }
    default: {
      return <Lead>{children}</Lead>;
    }
  }
};
