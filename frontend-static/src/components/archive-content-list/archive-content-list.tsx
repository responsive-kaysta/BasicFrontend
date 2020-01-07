import * as React from "react";
import ArchiveContentListItem from "./archive-content-list-item";
import { iArchiveContentListItemProps, iArchiveContentListProps } from "./spec";

class ArchiveContentList extends React.Component<iArchiveContentListProps> {
  public render() {
    const pageStyle = this.props.pageStyle
      ? this.props.pageStyle + " table-wrapper"
      : "light table-wrapper";

    const mappedTodos = this.props.dataContainer.map(
      (article: iArchiveContentListItemProps) => {
        return (
          <ArchiveContentListItem archiveContent={article} key={article.Id} />
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

export default ArchiveContentList;
