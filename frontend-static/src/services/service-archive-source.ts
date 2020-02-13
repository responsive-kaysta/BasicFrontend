import { getUserInfo } from "./AuthService";
import API from "../utils/axios.api";
import { iArchiveSource } from "../view-types";

export async function selectArchiveSourceById(
  sourceId: string
): Promise<iArchiveSource> {
  const userInfo = await getUserInfo();

  const formData = new FormData();
  formData.append("userName", userInfo.Nickname);
  formData.append("emailAddress", userInfo.Email);
  formData.append("nameIdentifier", userInfo.AuthId);

  if (sourceId) {
    formData.append("sourceId", sourceId);
  }

  let jsonData: iArchiveSource = null;

  await API({
    method: "post",
    url: "/api/selectArchiveSourceById",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  }).then((res: { data: iArchiveSource }) => {
    jsonData = res.data;
  });
  return jsonData;
}

export async function selectArchiveSources(
  isDelete: boolean,
  isArchive: boolean
): Promise<iArchiveSource[]> {
  const userInfo = await getUserInfo();

  const formData = new FormData();
  formData.append("userName", userInfo.Nickname);
  formData.append("emailAddress", userInfo.Email);
  formData.append("nameIdentifier", userInfo.AuthId);

  formData.append("isDelete", isDelete.toString());
  formData.append("isArchive", isArchive.toString());

  let jsonData: iArchiveSource[] = null;

  await API({
    method: "post",
    url: "/api/selectArchiveSources",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  }).then((res: { data: iArchiveSource[] }) => {
    jsonData = res.data;
  });
  return jsonData;
}

export async function updateArchiveSource(
  archiveSource: iArchiveSource
): Promise<boolean> {
  const userInfo = await getUserInfo();

  const formData = new FormData();
  formData.append("userName", userInfo.Nickname);
  formData.append("emailAddress", userInfo.Email);
  formData.append("nameIdentifier", userInfo.AuthId);

  formData.append("isDelete", archiveSource.IsDelete.toString());
  formData.append("isArchive", archiveSource.IsArchive.toString());
  formData.append("isOnline", archiveSource.SourceIsOnline.toString());
  formData.append("reIndex", archiveSource.ReIndex.toString());
  formData.append("sourceLang", archiveSource.SourceLang.toString());
  formData.append("sourceName", archiveSource.SourceName);
  formData.append("sourceDescription", archiveSource.SourceDescription);
  formData.append("sourceLink", archiveSource.SourceLink);
  formData.append("sourceEncoding", archiveSource.SourceEncoding);
  formData.append(
    "sourceCreationDateTime",
    archiveSource.SourceCreationDateTime.toISOString()
  );
  formData.append("archiveCategory", archiveSource.ArchiveCategory.toString());
  formData.append("id", archiveSource.Id.toString());
  formData.append("sourceVersion", archiveSource.SourceVersion.toString());
  formData.append("sourceType", archiveSource.SourceType.toString());

  console.log("archiveSource: ", archiveSource);

  let jsonData: boolean = true;

  await API({
    method: "post",
    url: "/api/updateArchiveSource",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  }).then((res: { data: boolean }) => {
    jsonData = res.data;
  });

  return jsonData;
}
