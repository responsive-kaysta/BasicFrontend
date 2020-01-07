import * as React from "react";
import { iAdminArchiveContentListItemProps } from "./spec";

const truncateText = (text: string) => {
  return text.length > 55 ? text.substring(0, 55) + "..." : text;
};

function AdminArchiveContentListItem(props: {
  archiveContent: iAdminArchiveContentListItemProps;
}) {
  return (
    <tr>
      <td>
        <i className="far fa-edit" />
      </td>
      <td>
        <i className="fas fa-edit" />
      </td>
      <td>{props.archiveContent.ArchiveContentId}</td>
      <td>{truncateText(props.archiveContent.ContentTitle)}</td>
    </tr>
  );
}

export default AdminArchiveContentListItem;
