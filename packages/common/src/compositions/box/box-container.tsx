import * as React from "react";
import { FC } from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BoxContainer: FC = ({ children }) => {
  return <FlexBox>{children}</FlexBox>;
};
