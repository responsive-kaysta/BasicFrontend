export interface iArchiveContent {
  Id: number;
  ContentTitle: string;
  ContentText: string;
  ContentOriginDateTime: Date;
  ContentCreationDateTime: Date;
  ContentModifiedTimeStamp: Date;
  ContentVersion: number;
  ContentType: number;
  ContentLink: string;
  IsDelete: boolean;
  IsArchive: boolean;
  ContentLang: number;
  ContentSource: number;
}
