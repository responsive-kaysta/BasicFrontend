import * as React from "react";
import { FC } from "react";
import loading from "../../../public/assets/images/logo.svg";

/* 
    credits to: https://auth0.com/docs/quickstart/spa/react/01-login#add-a-callback-component
*/

interface SpinnerProps {
  loadingState: boolean;
}

export const Spinner: FC<SpinnerProps> = ({ loadingState }) => {
  return (
    <>
      {loadingState && <img className="spinner" src={loading} alt="loading" />}
    </>
  );
};
