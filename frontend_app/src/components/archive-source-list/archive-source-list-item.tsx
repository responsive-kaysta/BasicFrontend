import * as React from "react";
import { iArchiveSourceListItemProps } from "./spec/iArchiveSourceListItemProps";

function ArchiveSourceListItem(props: {
  archiveSource: iArchiveSourceListItemProps;
}) {
  return (
    <tr>
      <td>{props.archiveSource.Id}</td>
      <td>{props.archiveSource.SourceName}</td>
      <td>{props.archiveSource.ArticleCount}</td>
    </tr>
  );
}

export default ArchiveSourceListItem;
