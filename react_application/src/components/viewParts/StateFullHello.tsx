
import * as React from "react";

import ICurrentState from "../../application/interfaces/core/ICurrentState"
import IStoreState from "../../application/interfaces/core/IStoreState"

class StateFullHello extends React.Component<IStoreState, ICurrentState> {
  constructor(props: IStoreState) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }

  public render() {
    const { languageName } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <>
        <h2>Hello {languageName + getExclamationMarks(this.state.currentEnthusiasm)}</h2>
        <p>Bereits seit 2002 bieten wir innovative Leistungen rund um Informatik an.</p>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </>
    );
  }

  private onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  private onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  private updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }

}


export default StateFullHello;


function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
