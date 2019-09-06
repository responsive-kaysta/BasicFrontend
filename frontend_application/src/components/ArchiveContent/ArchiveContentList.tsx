import * as React from "react";
// Omitted
import API from "../../application/core/axios.api";
import IArchiveContent from "../../application/interfaces/Archive/IArchiveContent";
import IStoreState from "../../application/interfaces/core/IStoreState";
import IViewState from "../../application/interfaces/core/IViewState";
import ArchiveContentListItem from "../../components/ArchiveContent/ArchiveContentListItem";

class ArchiveContentList extends React.Component<IViewState, IStoreState> {
  constructor(props: IViewState, state: IStoreState) {
    super(props, state);
    this.state = { storeContext: this.props.viewContext, storeContainer: [] };
  }

  public render() {
    const style = this.state.storeContext;
    const cssStyle = "container " + style;

    const mappedTodos = this.state.storeContainer.map(
      (article: IArchiveContent) => {
        return (
          <ArchiveContentListItem archiveContent={article} key={article.Id} />
        );
      }
    );
    return this.ListContainer(mappedTodos, cssStyle);
  }

  public async componentDidMount() {
    const response = await API.get(
      "http://masterarchive.local/api/service/selectArchiveContentToList"
    ).then(res => {
      const storeContainer = res.data;
      this.setState({ storeContainer });
    });
    return response;
  }

  private ListContainer(list: any, cssStyle: string) {
    return (
      <div className={cssStyle}>
        <div className="page-header">
          <h2>The latest news</h2>
        </div>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default ArchiveContentList;
