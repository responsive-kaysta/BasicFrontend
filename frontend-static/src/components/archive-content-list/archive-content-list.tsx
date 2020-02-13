import * as React from "react";
import { FC } from "react";
import { iViewArchiveContent } from "../../view-types";
import { ePageStyleTemplates } from "../../page-types/";
import { ArchiveContentListItem } from "./archive-content-list-item";

interface ArchiveContentListProps {
  resultSet: iViewArchiveContent[];
  pageStyle?: ePageStyleTemplates;
}

export const ArchiveContentList: FC<ArchiveContentListProps> = ({
  resultSet,
  pageStyle
}) => {
  const cssStyle = pageStyle
    ? pageStyle + " table-wrapper"
    : "light table-wrapper";

  const mappedItems = resultSet.map((item: iViewArchiveContent) => {
    return <ArchiveContentListItem item={item} key={item.Id} />;
  });
  return ListContainer(mappedItems, cssStyle);
};

const ListContainer = (list: any, cssStyle: string) => {
  return (
    <div className={cssStyle}>
      <table>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};
