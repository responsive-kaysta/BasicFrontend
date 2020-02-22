import * as React from "react";
import { FC } from "react";
import { iViewArchiveContent } from "../../view-types";
import { ArticleContentModalBox } from "..";

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
