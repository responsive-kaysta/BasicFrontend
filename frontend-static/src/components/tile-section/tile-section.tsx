import * as React from "react";
import { ePageStyleTemplates } from "../../less";
import { FC, ReactNode } from "react";

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
