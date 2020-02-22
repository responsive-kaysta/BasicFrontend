import { getUserInfo } from "./AuthService";
import API from "../utils/axios.api";
import { iArchiveContent } from "../view-types";

export async function selectArchiveContentById(
  contentId: string
): Promise<iArchiveContent> {
  const userInfo = await getUserInfo();

  const formData = new FormData();
  formData.append("userName", userInfo.Nickname);
  formData.append("emailAddress", userInfo.Email);
  formData.append("nameIdentifier", userInfo.AuthId);

  if (contentId) {
    formData.append("contentId", contentId);
  }

  let jsonData: iArchiveContent = null;

  await API({
    method: "post",
    url: "/api/selectArchiveContentById",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  }).then((res: { data: iArchiveContent }) => {
    jsonData = res.data;
  });
  return jsonData;
}
