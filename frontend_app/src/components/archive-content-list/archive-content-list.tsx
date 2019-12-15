import * as React from "react";
import API from "../../application/axios.api";
import Spinner from "../../elements/spinner/spinner";
import ArchiveContentListItem from "./archive-content-list-item";
import { iArchiveContentProps, iArchiveContentState } from "./spec";
import { iArchiveContentListItemProps } from "./spec/iArchiveContentListItemProps";

class ArchiveContentList extends React.Component<
  iArchiveContentProps,
  iArchiveContentState
> {
  constructor(props: iArchiveContentProps, state: iArchiveContentState) {
    super(props, state);
    this.state = { storeContainer: [] };
  }

  public render() {
    const pageStyle = this.props.pageStyle
      ? this.props.pageStyle + " table-wrapper"
      : "light table-wrapper";

    const mappedTodos = this.state.storeContainer.map(
      (article: iArchiveContentListItemProps) => {
        return (
          <ArchiveContentListItem archiveContent={article} key={article.Id} />
        );
      }
    );
    return this.ListContainer(mappedTodos, pageStyle);
  }

  public async componentDidMount() {
    const response = await API.get(this.props.apiController).then(res => {
      const storeContainer = res.data;
      this.setState({ storeContainer });
    });
    return response;
  }

  private ListContainer(list: any, pageStyle: string) {
    return (
      <React.Suspense fallback={<Spinner />}>
        <div className={pageStyle}>
          <table>
            <tbody>{list}</tbody>
          </table>
        </div>
      </React.Suspense>
    );
  }
}

export default ArchiveContentList;
