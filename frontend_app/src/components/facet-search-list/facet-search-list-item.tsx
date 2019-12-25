import * as React from "react";
import iFacetSearchListItemProps from "./spec/iFacetSearchListItemProps";

function FacetSearchListItem(props: {
  searchListItem: iFacetSearchListItemProps;
}) {
  return (
    <tr key={props.searchListItem.Id}>
      <td>{props.searchListItem.ContentTitle}</td>
    </tr>
  );
}

export default FacetSearchListItem;
