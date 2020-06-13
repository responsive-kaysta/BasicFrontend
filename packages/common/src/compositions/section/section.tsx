import React, { FC } from "react";
import styled from "styled-components";
import { contentPadding } from "../../identity";

const StyledSection = styled.section`
  margin: 0;
  ${contentPadding}
`;

export const Section: FC = ({ children, ...props }) => {
  return <StyledSection {...props}>{children}</StyledSection>;
};
