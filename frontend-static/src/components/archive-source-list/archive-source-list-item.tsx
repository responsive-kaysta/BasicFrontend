import * as React from "react";
import { iArchiveSourceListItemProps } from "./spec/iArchiveSourceListItemProps";

function ArchiveSourceListItem(props: {
  archiveSource: iArchiveSourceListItemProps;
}) {
  function handleClick(e: any) {
    window.location.href = `/articles-by-source?sourceId=${e}`;
  }
  return (
    <tr
      onClick={() => handleClick(props.archiveSource.SourceId)}
      className="clickable"
    >
      <td>{props.archiveSource.Id}</td>
      <td>{props.archiveSource.SourceName}</td>
      <td>{props.archiveSource.SourceCount}</td>
    </tr>
  );
}

export default ArchiveSourceListItem;
