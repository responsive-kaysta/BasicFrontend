import { iArchiveSource } from "../page-types/";
import { getUserInfo } from "./AuthService";
import API from "./axios.api";

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
