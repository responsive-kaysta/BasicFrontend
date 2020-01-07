import * as React from "react";
import ArticleContentModalBox from "../article-content-modal-box/article-content-modal-box";
import { iArchiveSearchListItemProps } from "./spec";

function ArchiveSearchListItem(props: {
  archiveContent: iArchiveSearchListItemProps;
}) {
  return (
    <tr>
      <td>
        <ArticleContentModalBox articleContent={props.archiveContent} />
      </td>
    </tr>
  );
}

export default ArchiveSearchListItem;
