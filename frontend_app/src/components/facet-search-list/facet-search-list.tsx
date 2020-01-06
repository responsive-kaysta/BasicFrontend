import * as React from "react";
import FacetSearchListItem from "./facet-search-list-item";
import {
  iFacetSearchListProps,
  iFacetSearchListState,
  iFacetSearchListItemProps
} from "./spec";

class FacetSearchList extends React.Component<
  iFacetSearchListProps,
  iFacetSearchListState
> {
  constructor(props: iFacetSearchListProps, state: iFacetSearchListState) {
    super(props, state);
    this.state = {
      facetContainer: [],
      selectedFacet: ""
    };
    this.resetFacet = this.resetFacet.bind(this);
    this.facetChange = this.facetChange.bind(this);
  }

  resetFacet(e: any) {
    this.setState({
      facetContainer: this.props.dataContainer,
      selectedFacet: ""
    });
  }

  facetChange(e: any) {
    const newList: any = this.props.dataContainer.filter(
      (f: any) => f.FacetName === e.target.value
    );
    this.setState({
      facetContainer: newList,
      selectedFacet: e.target.value
    });
  }

  componentDidMount() {
    this.setState({
      facetContainer: this.props.dataContainer,
      selectedFacet: ""
    });
  }

  facetes = [
    ...new Set(
      this.props.dataContainer.map(
        (f: iFacetSearchListItemProps) => f.FacetName
      )
    )
  ];

  public render() {
    const pageStyle = this.props.pageStyle
      ? this.props.pageStyle + " table-wrapper"
      : "light table-wrapper";

    const mappedTodos = this.state.facetContainer.map(
      (searchListItem: iFacetSearchListItemProps) => {
        return (
          <FacetSearchListItem
            searchListItem={searchListItem}
            key={searchListItem.Id}
          />
        );
      }
    );

    return this.ListContainer(mappedTodos, pageStyle);
  }

  private ListContainer(list: any, pageStyle: string) {
    return (
      <>
        <div>
          <ul className="actions small">
            <li key="reset">
              <button className="small" value="reset" onClick={this.resetFacet}>
                Reset
              </button>
            </li>
            {this.facetes.map(facet => (
              <li key={facet}>
                <button
                  className="small special"
                  value={facet}
                  onClick={this.facetChange}
                >
                  {facet}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={pageStyle}>
          <table>
            <tbody>{list}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default FacetSearchList;
