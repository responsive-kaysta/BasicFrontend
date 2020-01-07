export interface iFacetSearchListItemProps {
  Id: number;
  ArchiveContentId: number;
  CatName: string;
  CatNameShort: string;
  ContentLink: string;
  ContentText: string;
  ContentTitle: string;
  ContentType: string;
  LangId: number;
  LangName: string;
  OriginDate: Date;
  SourceId: number;
  SourceLink: string;
  SourceName: string;
  Boost: number;
  Score: number;
  FacetName: string;
  HitCountPerGroup: number;
  TotalHitCount: number;
}
