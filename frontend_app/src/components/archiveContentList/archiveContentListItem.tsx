import * as React from "react";
import iArchiveContentListItemProps from "./spec/iArchiveContentListItemProps";

function ArchiveContentListItem(props: {
  archiveContent: iArchiveContentListItemProps;
}) {
  return (
    <>
      <li>
        {props.archiveContent.Id} - {props.archiveContent.ContentTitle}
      </li>
    </>
  );
}

export default ArchiveContentListItem;
