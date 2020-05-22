import * as React from "react";
import { FC } from "react";
import { SortOrderTypes } from "../../page-types";

interface OrderListSelectorProps {
  onChange: (e: any) => void;
}

export const OrderListSelector: FC<OrderListSelectorProps> = ({ onChange }) => {
  return (
    <select
      onChange={(e) => onChange(e)}
      defaultValue={SortOrderTypes.desc}
      defaultChecked
    >
      <option value={SortOrderTypes.desc}>Sortierung</option>
      <option value={SortOrderTypes.asc}>Aufsteigend</option>
      <option value={SortOrderTypes.desc}>Absteigend</option>
    </select>
  );
};
