import * as React from "react";
import { FC } from "react";

interface BoxCompositionProps {
  text: string;
}

export const BoxComposition: FC<BoxCompositionProps> = ({ text }) => {
  return (
    <>
      <div className="page-header">
        <h2>{text}</h2>
      </div>
    </>
  );
};
