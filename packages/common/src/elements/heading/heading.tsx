import * as React from "react";
import { FC } from "react";
import { HeadingProps } from "./heading-props";
import { HeadingTypes } from "./heading-types";
import styled from "styled-components";
import { typography } from "../../identity";

const StyledH1 = styled.h1`
  font-size: ${typography.size.l1};
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
  font-weight: ${typography.weight.extrabold};
`;

const StyledH2 = styled.h2`
  font-size: ${typography.size.l2};
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
  font-weight: ${typography.weight.extrabold};
`;

const StyledH3 = styled.h3`
  font-size: ${typography.size.l3};
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
  font-weight: ${typography.weight.extrabold};
`;

const StyledH4 = styled.h4`
  font-size: ${typography.size.m1};
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
  font-weight: ${typography.weight.extrabold};
`;

const StyledH5 = styled.h5`
  font-size: ${typography.size.m2};
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
  font-weight: ${typography.weight.extrabold};
`;

const StyledH6 = styled.h6`
  font-size: ${typography.size.m3};
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
  font-weight: ${typography.weight.extrabold};
`;

export const Heading: FC<HeadingProps> = ({ children, type, ...props }) => {
  switch (type) {
    case HeadingTypes.H1: {
      return <StyledH1 {...props}>{children}</StyledH1>;
    }
    case HeadingTypes.H2: {
      return <StyledH2 {...props}>{children}</StyledH2>;
    }
    case HeadingTypes.H3: {
      return <StyledH3 {...props}>{children}</StyledH3>;
    }
    case HeadingTypes.H4: {
      return <StyledH4 {...props}>{children}</StyledH4>;
    }
    case HeadingTypes.H5: {
      return <StyledH5 {...props}>{children}</StyledH5>;
    }
    case HeadingTypes.H6: {
      return <StyledH6 {...props}>{children}</StyledH6>;
    }
    default: {
      return <StyledH1 {...props}>{children}</StyledH1>;
    }
  }
};
