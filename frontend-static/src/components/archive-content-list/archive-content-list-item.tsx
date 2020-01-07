import * as React from "react";
import { iArchiveContentListItemProps } from "./spec";
import ArticleContentModalBox from "components/article-content-modal-box/article-content-modal-box";

function ArchiveContentListItem(props: {
  archiveContent: iArchiveContentListItemProps;
}) {
  return (
    <tr className="clickable">
      <td>
        <ArticleContentModalBox articleContent={props.archiveContent} />
      </td>
    </tr>
  );
}

export default ArchiveContentListItem;
