import * as React from "react";
import ArchiveSearchListItem from "./archive-search-list-item";
import { iArchiveSearchListProps, iArchiveSearchListItemProps } from "./spec";

class ArchiveSearchList extends React.Component<iArchiveSearchListProps> {
  public render() {
    const pageStyle = this.props.pageStyle
      ? this.props.pageStyle + " table-wrapper"
      : "light table-wrapper";

    const mappedTodos = this.props.dataContainer.map(
      (article: iArchiveSearchListItemProps) => {
        return (
          <ArchiveSearchListItem archiveContent={article} key={article.Id} />
        );
      }
    );
    return this.ListContainer(mappedTodos, pageStyle);
  }

  private ListContainer(list: any, pageStyle: string) {
    return (
      <div className={pageStyle}>
        <table>
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  }
}

export default ArchiveSearchList;
