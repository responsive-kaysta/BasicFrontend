import * as React from "react";
import { ArchiveSourceListItem } from "./archive-source-list-item";
import { ePageStyleTemplates } from "../../less";
import { iViewArchiveSource } from "../../page-types/";
import { FC } from "react";

interface ArchiveSourceListProps {
  resultSet: iViewArchiveSource[];
  pageStyle?: ePageStyleTemplates;
}

export const ArchiveSourceList: FC<ArchiveSourceListProps> = ({
  resultSet,
  pageStyle
}) => {
  const cssStyle = pageStyle
    ? pageStyle + " table-wrapper"
    : "light table-wrapper";

  const mappedItems = resultSet.map((item: iViewArchiveSource) => {
    return <ArchiveSourceListItem item={item} key={item.Id} />;
  });
  return ListContainer(mappedItems, cssStyle);
};

const ListContainer = (list: any, cssStyle: string) => {
  return (
    <div className={cssStyle}>
      <table>
        <thead>
          <tr>
            <td>Source Id</td>
            <td>Source Name</td>
            <td>Article Count</td>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};
