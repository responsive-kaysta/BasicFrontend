
export interface IArchiveSource {
    Id: string;
    SourceName: string;
    SourceLang: number;
    SourceLink: string;
    SourceDescription: string;
    SourceCreationDateTime: Date;
    SourceModifiedTimeStamp: Date;
    SourceVersion: number;
    SourceType: number;
    SourceIsOnline: boolean;
    IsArchive: boolean;
    IsDelete: boolean;
    SourceEncoding: string;
}

export default IArchiveSource;