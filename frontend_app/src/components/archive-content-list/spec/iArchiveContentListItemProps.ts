import { iArchiveSourceListItemProps } from "../../archive-source-list/spec";

export interface iArchiveContentListItemProps {
  Id: number;
  ArchiveContentId: number;
  ContentTitle: string;
  ContentText: string;
  OriginDate: Date;
  CatName: string;
  CatNameShort: string;
  SourceId: number;
  SourceName: string;
  LangId: number;
  LangName: string;
  ContentLink: string;
  SourceLink: string;
  ContentType: string;
}
