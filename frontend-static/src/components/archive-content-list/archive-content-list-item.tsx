import * as React from "react";
import { ArticleContentModalBox } from "../../components/article-content-modal-box/article-content-modal-box";
import { iViewArchiveContent } from "../../page-types/";
import { FC } from "react";

interface ArchiveContentListItemProps {
  item: iViewArchiveContent;
}

export const ArchiveContentListItem: FC<ArchiveContentListItemProps> = ({
  item
}) => {
  return (
    <tr className="clickable">
      <td>
        <ArticleContentModalBox item={item} truncateTitle maxTitleLength={74} />
      </td>
    </tr>
  );
};
