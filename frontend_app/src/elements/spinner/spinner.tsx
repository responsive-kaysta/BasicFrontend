import * as React from "react";
import loading from "../../assets/images/logo.svg";

/* 
    credits to: https://auth0.com/docs/quickstart/spa/react/01-login#add-a-callback-component
*/

class Spinner extends React.Component {
  public render() {
    return (
      <>
        <img className="spinner" src={loading} alt="loading" />
      </>
    );
  }
}
export default Spinner;
