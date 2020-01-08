import * as React from "react";
import AdminArchiveContentListItem from "./admin-archive-content-list-item";
import {
  iAdminArchiveContentListItemProps,
  iAdminArchiveContentListProps
} from "./spec";

class AdminArchiveContentList extends React.Component<
  iAdminArchiveContentListProps
> {
  public render() {
    const pageStyle = this.props.pageStyle
      ? this.props.pageStyle + " table-wrapper"
      : "light table-wrapper";

    const mappedArticles = this.props.dataContainer.map(
      (article: iAdminArchiveContentListItemProps) => {
        return (
          <AdminArchiveContentListItem
            archiveContent={article}
            key={article.ArchiveContentId}
          />
        );
      }
    );
    return this.ListContainer(mappedArticles, pageStyle);
  }

  private ListContainer(list: any, pageStyle: string) {
    return (
      <div className={pageStyle}>
        <table>
          <thead>
            <tr>
              <td>View</td>
              <td>Edit</td>
              <td>Content Id</td>
              <td>ContentTitle</td>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  }
}

export default AdminArchiveContentList;
