import * as React from "react";
import { FC } from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BoxContainer: FC = ({ children }) => {
  return <FlexBox>{children}</FlexBox>;
};
