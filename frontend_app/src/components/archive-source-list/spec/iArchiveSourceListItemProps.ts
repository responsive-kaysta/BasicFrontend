export interface iArchiveSourceListItemProps {
  Id: number;
  SourceName: string;
  SourceDescription: string;
  SourceLang: number;
  SourceCreationDateTime: Date;
  SourceModifiedTimeStamp: Date;
  SourceLink: string;
  SourceEncoding: string;
  SourceVersion: number;
  SourceType: number;
  SourceIsOnline: boolean;
  IsDelete: boolean;
  IsArchive: boolean;
  ArchiveCategory?: number;
  ArticleCount?: number;
}
