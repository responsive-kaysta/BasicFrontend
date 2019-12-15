import * as React from "react";
import { iArchiveSourceListItemProps } from "./spec/iArchiveSourceListItemProps";

function ArchiveSourceListItem(props: {
  archiveContent: iArchiveSourceListItemProps;
}) {
  return (
    <tr>
      <td>{props.archiveContent.Id}</td>
      <td>{props.archiveContent.SourceName}</td>
    </tr>
  );
}

export default ArchiveSourceListItem;
