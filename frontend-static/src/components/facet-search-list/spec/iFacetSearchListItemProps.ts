export interface iFacetSearchListItemProps {
  Id: number;
  ContentTitle: string;
  ContentText: string;
  ContentType: number;
  ContentLink: string;
  ContentLang: number;
  ContentSource: number;
  Boost: number;
  Score: number;
  FacetName: string;
  TotalHits: number;
  HitsPerFacet: number;
  HitCount: number;
}
