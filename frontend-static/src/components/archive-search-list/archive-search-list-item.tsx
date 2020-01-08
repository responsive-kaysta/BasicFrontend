import * as React from "react";
import { iArchiveSearchListItemProps } from "./spec";
import ArticleContentModalBox from "components/article-content-modal-box/article-content-modal-box";

function ArchiveSearchListItem(props: {
  archiveContent: iArchiveSearchListItemProps;
}) {
  return (
    <tr className="clickable">
      <td>
        <ArticleContentModalBox articleContent={props.archiveContent} />
      </td>
    </tr>
  );
}

export default ArchiveSearchListItem;
