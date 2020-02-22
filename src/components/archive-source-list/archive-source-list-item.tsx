import * as React from "react";
import { FC } from "react";
import { iViewArchiveSource } from "../../view-types";

interface ArchiveSourceListItemProps {
  item: iViewArchiveSource;
}

export const ArchiveSourceListItem: FC<ArchiveSourceListItemProps> = ({
  item
}) => {
  const handleClick = (e: any) => {
    window.sessionStorage["ArchiveContentBySourceId"] = e;
    document.location.href = `/articles-by-source`;
  };
  return (
    <tr onClick={() => handleClick(item.SourceId)} className="clickable">
      <td>{item.Id}</td>
      <td>{item.SourceName}</td>
      <td>{item.SourceCount}</td>
    </tr>
  );
};
