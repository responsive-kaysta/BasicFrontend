import * as React from "react";
// Omitted
import API from "../../application/axios.api";
import ArchiveContentListItem from "./archiveContentListItem";
import { iArchiveContentListItemProps } from "./spec/iArchiveContentListItemProps";
import { iArchiveContentState, iArchiveContentProps } from "./spec";
import Spinner from "../../elements/spinner/spinner";

class ArchiveContentList extends React.Component<
  iArchiveContentProps,
  iArchiveContentState
> {
  constructor(props: iArchiveContentProps, state: iArchiveContentState) {
    super(props, state);
    this.state = { storeContainer: [] };
  }

  public render() {
    const styleProp = this.props.cssStyle;
    const cssStyle = "container " + styleProp;

    const mappedTodos = this.state.storeContainer.map(
      (article: iArchiveContentListItemProps) => {
        return (
          <ArchiveContentListItem archiveContent={article} key={article.Id} />
        );
      }
    );
    return this.ListContainer(mappedTodos, cssStyle);
  }

  public async componentDidMount() {
    const response = await API.get(this.props.apiController).then(res => {
      const storeContainer = res.data;
      this.setState({ storeContainer });
    });
    return response;
  }

  private ListContainer(list: any, cssStyle: string) {
    return (
      <React.Suspense fallback={<Spinner />}>
        <div className={cssStyle}>
          <div className="page-header">
            <h2>The latest news</h2>
          </div>
          <ul>{list}</ul>
        </div>
      </React.Suspense>
    );
  }
}

export default ArchiveContentList;
