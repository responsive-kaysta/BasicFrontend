import * as React from "react";
import { FC } from "react";

interface LanguageSelectorProps {
  onChange: (e: any) => void;
}

export const LanguageSelector: FC<LanguageSelectorProps> = ({ onChange }) => {
  return (
    <select onChange={e => onChange(e)} defaultValue="0" defaultChecked>
      <option value="0">Sprache</option>
      <option value="1">Deutsch</option>
      <option value="2">English</option>
    </select>
  );
};
