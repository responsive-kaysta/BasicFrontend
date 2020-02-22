import React, { FC, useState } from "react";
import { truncateText } from "utils/truncate-text";
import { ModalWindow } from "../../components/modal-window/modal-window";
import { DateTime } from "../../elements/date-time/date-time";
import { iViewArchiveContent } from "../../view-types";

// https://peteris.rocks/blog/modal-window-in-react-from-scratch/

interface ArchiveContentModalBoxProps {
  item: iViewArchiveContent;
  truncateTitle?: boolean;
  maxTitleLength?: number;
}

export const ArticleContentModalBox: FC<ArchiveContentModalBoxProps> = ({
  item,
  truncateTitle,
  maxTitleLength
}) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(isModalOpen ? false : true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const titleText = truncateTitle
    ? truncateText(item.ContentTitle, maxTitleLength)
    : item.ContentTitle;

  return (
    <>
      <p
        onClick={() => openModal()}
        dangerouslySetInnerHTML={{
          __html: titleText
        }}
      />

      <ModalWindow
        isOpen={isModalOpen}
        onClose={() => closeModal()}
        modalClassName="modal-box light"
      >
        <div className="news-modal-header">
          <h3
            dangerouslySetInnerHTML={{
              __html: item.ContentTitle
            }}
          />
        </div>
        <div className="news-modal-body" onClick={() => closeModal()}>
          <p
            className="lead"
            dangerouslySetInnerHTML={{
              __html: item.ContentText
            }}
          />
          <div>
            <i className="fas fa-link" />
            &nbsp;
            <a
              href={item.ContentLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.SourceName}
            </a>
          </div>
          <div className="row-bottom-padding">
            <i className="fas fa-clock" />
            &nbsp;
            <span>
              <DateTime dateTimeType="DateOnly" dateTime={item.OriginDate} />
            </span>
          </div>
          <p className="small align-center">
            Click somewhere to close the Window
          </p>
        </div>
      </ModalWindow>
    </>
  );
};
