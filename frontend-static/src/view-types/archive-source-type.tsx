export interface iArchiveSource {
  Id: number;
  SourceName: string;
  SourceLang: number;
  SourceLink: string;
  SourceDescription: string;
  SourceCreationDateTime: Date;
  SourceModifiedTimeStamp?: Date;
  SourceEncoding: string;
  SourceVersion: number;
  SourceType: number;
  SourceIsOnline: boolean;
  IsArchive: boolean;
  IsDelete: boolean;
  ReIndex: boolean;
  ArchiveCategory: number;
}
