import * as React from "react";
import ArticleContentModalBox from "../article-content-modal-box/article-content-modal-box";
import iArchiveContentListItemProps from "./spec/iArchiveContentListItemProps";

function ArchiveContentListItem(props: {
  archiveContent: iArchiveContentListItemProps;
}) {
  return (
    <tr>
      <td>
        <ArticleContentModalBox articleContent={props.archiveContent} />
      </td>
    </tr>
  );
}

export default ArchiveContentListItem;
