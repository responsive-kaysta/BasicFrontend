import * as React from "react";
import { FC, ReactNode } from "react";
import { PageStyleTemplates } from "../../style-types";

interface TileSectionProps {
  children: ReactNode;
  pageStyle: PageStyleTemplates;
}

export const TileSection: FC<TileSectionProps> = ({ children, pageStyle }) => {
  return (
    <section className={pageStyle}>
      <section className="tiles">{children}</section>
    </section>
  );
};
