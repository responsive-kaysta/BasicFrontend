import * as React from "react";
import { FC } from "react";
import { HeadingProps } from "./heading-props";
import { HeadingTypes } from "./heading-types";
import styled, { css } from "styled-components";
import { typography } from "../../identity";

export const style = css`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
`;

const StyledH1 = styled.h1`
${style}
  font-size: ${typography.size.l1}px;
  font-weight: ${typography.weight.extrabold};
`;

const StyledH2 = styled.h2`
${style}
  font-size: ${typography.size.l2}px;
  font-weight: ${typography.weight.extrabold};
`;

const StyledH3 = styled.h3`
${style}
  font-size: ${typography.size.l3}px;
  font-weight: ${typography.weight.extrabold};
`;

const StyledH4 = styled.h4`
${style}
  font-size: ${typography.size.m1}px;
  font-weight: ${typography.weight.extrabold};
`;

const StyledH5 = styled.h5`
${style}
  font-size: ${typography.size.m2}px;
  font-weight: ${typography.weight.extrabold};
`;

const StyledH6 = styled.h6`
${style}
  font-size: ${typography.size.m3}px;
  font-weight: ${typography.weight.extrabold};
`;

export const Heading: FC<HeadingProps> = ({ children, type, ...props }) => {
  switch (type) {
    case HeadingTypes.h1: {
      return <StyledH1 {...props}>{children}</StyledH1>;
    }
    case HeadingTypes.h2: {
      return <StyledH2 {...props}>{children}</StyledH2>;
    }
    case HeadingTypes.h3: {
      return <StyledH3 {...props}>{children}</StyledH3>;
    }
    case HeadingTypes.h4: {
      return <StyledH4 {...props}>{children}</StyledH4>;
    }
    case HeadingTypes.h5: {
      return <StyledH5 {...props}>{children}</StyledH5>;
    }
    case HeadingTypes.h6: {
      return <StyledH6 {...props}>{children}</StyledH6>;
    }
    default: {
      return <StyledH1 {...props}>{children}</StyledH1>;
    }
  }
};
