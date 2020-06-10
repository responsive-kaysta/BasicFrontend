import * as React from "react";
import { FC } from "react";

/* 
    credits to: https://auth0.com/docs/quickstart/spa/react/01-login#add-a-callback-component
*/

interface SpinnerProps {
  imagePath: string;
  loadingState: boolean;
}

export const Spinner: FC<SpinnerProps> = ({ loadingState, imagePath }) => {
  return (
    <>
      {loadingState && (
        <img className="spinner" src={imagePath} alt="loading" />
      )}
    </>
  );
};
