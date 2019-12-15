import React from "react";
import iModalWindowProps from "./spec/iModalWindowProps";

// https://peteris.rocks/blog/modal-window-in-react-from-scratch/

class ModalWindow extends React.Component<iModalWindowProps> {
  close(e: any) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    if (this.props.isOpen === false) return null;

    return (
      <section className="modal">
        <div className={this.props.modalClassName}>{this.props.children}</div>
        <div className="backdrop" onClick={e => this.close(e)} />
      </section>
    );
  }
}

export default ModalWindow;
