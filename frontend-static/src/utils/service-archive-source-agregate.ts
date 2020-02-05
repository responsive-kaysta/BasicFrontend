import API from "./axios.api";
import { iViewArchiveSource } from "../page-types";

export async function selectViewArchiveSources(
  langId?: string
): Promise<iViewArchiveSource[]> {
  let resultSet: iViewArchiveSource[] = [];

  let formData: FormData;

  if (langId && langId !== "0") {
    formData = new FormData();
    formData.append("langId", langId);
  }

  await API({
    data: formData ? formData : null,
    method: "post",
    url: formData
      ? "/api/selectViewArchiveSourcesByLanguage"
      : "/api/selectViewArchiveSources",
    headers: { "Content-Type": "multipart/form-data" }
  }).then((res: { data: iViewArchiveSource[] }) => {
    resultSet = res.data;
  });
  return resultSet;
}
