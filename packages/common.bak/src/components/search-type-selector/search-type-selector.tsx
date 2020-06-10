import * as React from "react";
import { FC } from "react";

interface LanguageSelectorProps {
  onChange: (e: any) => void;
}

export const SearchTypeSelector: FC<LanguageSelectorProps> = ({ onChange }) => {
  return (
    <select onChange={e => onChange(e)} defaultValue="0" defaultChecked>
      <option value="0">Such-Typ</option>
      <option value="1">Nach Datum</option>
      <option value="2">Nach Titel/Text</option>
    </select>
  );
};
