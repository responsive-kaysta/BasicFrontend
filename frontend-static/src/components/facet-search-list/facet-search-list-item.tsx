import * as React from "react";
import FacetSearchModalBox from "./facet-search-modal-box";
import { iFacetSearchListItemProps } from "./spec";

function FacetSearchListItem(props: {
  searchListItem: iFacetSearchListItemProps;
}) {
  return (
    <tr key={props.searchListItem.Id} className="clickable">
      <td>
        <FacetSearchModalBox searchContent={props.searchListItem} />
      </td>
    </tr>
  );
}

export default FacetSearchListItem;
