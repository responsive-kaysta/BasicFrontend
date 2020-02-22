import * as React from "react";
import { FC, ReactNode } from "react";
import { ePageStyleTemplates } from "../../page-types/";

interface iTileSectionProps {
  children: ReactNode;
  pageStyle: ePageStyleTemplates;
}

export const TileSection: FC<iTileSectionProps> = ({ children, pageStyle }) => {
  return (
    <section className={pageStyle}>
      <section className="tiles">{children}</section>
    </section>
  );
};
