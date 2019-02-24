import * as React from 'react';

import loading from 'src/assets/images/loading.png';

/* 
    credits to: https://auth0.com/docs/quickstart/spa/react/01-login#add-a-callback-component
*/

class Callback extends React.Component {
  
  public render() {
    const style = "App-logo";

    return (
      <>
        <img className={style} src={loading} alt="loading"/>
      </>
    );
  }
}

export default Callback;