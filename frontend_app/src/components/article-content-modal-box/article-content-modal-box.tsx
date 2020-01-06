import React from "react";
import ModalWindow from "../../components/modal-window/modal-window";
import DateTime from "../../elements/date-time/date-time";
import {
  iArchiveContentModalBoxProps,
  iArchiveContentModalBoxState
} from "./spec";

// https://peteris.rocks/blog/modal-window-in-react-from-scratch/

class ArticleContentModalBox extends React.Component<
  iArchiveContentModalBoxProps,
  iArchiveContentModalBoxState
> {
  constructor(
    props: iArchiveContentModalBoxProps,
    state: iArchiveContentModalBoxState
  ) {
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
            __html: this.props.articleContent.ContentTitle
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
                __html: this.props.articleContent.ContentTitle
              }}
            />
          </div>
          <div className="news-modal-body" onClick={() => this.closeModal()}>
            <p
              className="lead"
              dangerouslySetInnerHTML={{
                __html: this.props.articleContent.ContentText
              }}
            />
            <div>
              <i className="fas fa-link" />
              &nbsp;
              <a
                href={this.props.articleContent.ContentLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.articleContent.SourceName}
              </a>
            </div>
            <div className="row-bottom-padding">
              <i className="fas fa-clock" />
              &nbsp;
              <span>
                <DateTime
                  dateTimeType="DateOnly"
                  dateTime={this.props.articleContent.OriginDate}
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

export default ArticleContentModalBox;
