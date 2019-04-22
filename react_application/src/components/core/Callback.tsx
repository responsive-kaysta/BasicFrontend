import * as React from 'react';
// import Sleep from 'src/application/core/Sleep';
import loading from 'src/assets/images/loading.png';

/* 
    credits to: https://auth0.com/docs/quickstart/spa/react/01-login#add-a-callback-component
*/

class Callback extends React.Component {
  
  private style = "App-logo";
  // private sleep: number = 5000;

  public render() {
    
    return (
      <>
        <img className={this.style} src={loading} alt="loading"/>
        {/* Sleep for {this.sleep} (ms) {Sleep(this.sleep)} */}
      </>
    );
  }
}

export default Callback;