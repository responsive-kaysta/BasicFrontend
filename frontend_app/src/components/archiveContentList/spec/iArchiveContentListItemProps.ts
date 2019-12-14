export interface iArchiveContentListItemProps {
  Id: number;
  ContentTitle: string;
  ContentText: string;
  ContentLang: number;
  ContentOriginDateTime: Date;
  ContentCreationDateTime: Date;
  ContentModifiedTimeStamp: Date;
  ContentVersion: number;
  ContentType: number;
  ContentSource: number;
  ContentLink: string;
  IsDelete: boolean;
  IsArchive: boolean;
}

export default iArchiveContentListItemProps;
