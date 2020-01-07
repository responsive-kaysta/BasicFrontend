import React from "react";
import ModalWindow from "../../components/modal-window/modal-window";
import DateTime from "../../elements/date-time/date-time";
import { iFacetSearchModalBoxProps, iFacetSearchModalBoxState } from "./spec";

// https://peteris.rocks/blog/modal-window-in-react-from-scratch/

class FacetSearchModalBox extends React.Component<
  iFacetSearchModalBoxProps,
  iFacetSearchModalBoxState
> {
  constructor(props: iFacetSearchModalBoxProps) {
    super(props);
    this.state = { isModalOpen: false };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <p
          onClick={() => this.openModal()}
          dangerouslySetInnerHTML={{
            __html: this.props.searchContent.ContentTitle
          }}
        />

        <ModalWindow
          isOpen={this.state.isModalOpen}
          onClose={() => this.closeModal()}
          modalClassName="modal-box light"
        >
          <div className="news-modal-header">
            <h3
              dangerouslySetInnerHTML={{
                __html: this.props.searchContent.ContentTitle
              }}
            />
          </div>
          <div className="news-modal-body" onClick={() => this.closeModal()}>
            <p
              className="lead"
              dangerouslySetInnerHTML={{
                __html: this.props.searchContent.ContentText
              }}
            />
            <div>
              <i className="fas fa-link" />
              &nbsp;
              <a
                href={this.props.searchContent.ContentLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.searchContent.SourceName}
              </a>
            </div>
            <div className="row-bottom-padding">
              <i className="fas fa-clock" />
              &nbsp;
              <span>
                <DateTime
                  dateTimeType="DateOnly"
                  dateTime={this.props.searchContent.OriginDate}
                />
              </span>
            </div>
            <p className="small align-center">
              Click somewhere to close the Window
            </p>
          </div>
        </ModalWindow>
      </>
    );
  }
}

export default FacetSearchModalBox;
