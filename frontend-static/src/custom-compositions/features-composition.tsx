import * as React from "react";
import { FC } from "react";

interface FeaturesCompositionProps {
  text: string;
}

export const FeaturesComposition: FC<FeaturesCompositionProps> = ({ text }) => {
  return (
    <>
      <div className="page-header">
        <h2>{text}</h2>
      </div>
    </>
  );
};
