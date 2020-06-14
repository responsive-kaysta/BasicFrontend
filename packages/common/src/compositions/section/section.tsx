import React, { FC } from "react";
import styled from "styled-components";
import { contentMarginBig } from "../../identity";
import { SectionProps } from "./section-props";

const StyledSection = styled.section<SectionProps>`
  ${(props) => props.withMargin && contentMarginBig}
`;

export const Section: FC<SectionProps> = ({
  children,
  withMargin,
  ...props
}) => {
  return (
    <StyledSection withMargin={withMargin} {...props}>
      {children}
    </StyledSection>
  );
};
