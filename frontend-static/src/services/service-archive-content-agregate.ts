import { getUserInfo } from "./AuthService";
import API from "../utils/axios.api";
import { iViewArchiveContent } from "../view-types";

export async function selectViewArchiveContentToListPaged(
  language?: string,
  sourceId?: string,
  limit?: string,
  order?: string,
  take?: string,
  skip?: string
): Promise<iViewArchiveContent[]> {
  const userInfo = await getUserInfo();

  const formData = new FormData();
  formData.append("userName", userInfo.Nickname);
  formData.append("emailAddress", userInfo.Email);
  formData.append("nameIdentifier", userInfo.AuthId);

  if (language) {
    formData.append("language", language);
  }
  if (sourceId) {
    formData.append("sourceId", sourceId);
  }
  if (limit) {
    formData.append("limit", limit);
  }
  if (order) {
    formData.append("order", order);
  }
  if (take) {
    formData.append("take", take);
  }
  if (skip) {
    formData.append("skip", skip);
  }

  let resultSet: iViewArchiveContent[] = [];

  await API({
    method: "post",
    url: "/api/selectViewArchiveContentToListPaged",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  }).then((res: { data: iViewArchiveContent[] }) => {
    resultSet = res.data;
  });
  return resultSet;
}

export async function selectViewArchiveContentById(
  contentAgregateId: string
): Promise<iViewArchiveContent> {
  const userInfo = await getUserInfo();

  const formData = new FormData();
  formData.append("userName", userInfo.Nickname);
  formData.append("emailAddress", userInfo.Email);
  formData.append("nameIdentifier", userInfo.AuthId);

  if (contentAgregateId) {
    formData.append("contentAgregateId", contentAgregateId);
  }

  let jsonData: iViewArchiveContent = null;

  await API({
    method: "post",
    url: "/api/selectViewArchiveContentById",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  }).then((res: { data: iViewArchiveContent }) => {
    jsonData = res.data;
  });
  return jsonData;
}

export async function selectViewArchiveContentToList(
  language?: string,
  sourceId?: string,
  limit?: string,
  order?: string,
  take?: string,
  skip?: string
): Promise<iViewArchiveContent[]> {
  const formData = new FormData();

  if (language) {
    formData.append("language", language);
  }
  if (sourceId) {
    formData.append("sourceId", sourceId);
  }
  if (limit) {
    formData.append("limit", limit);
  }
  if (order) {
    formData.append("order", order);
  }
  if (take) {
    formData.append("take", take);
  }
  if (skip) {
    formData.append("skip", skip);
  }

  let resultSet: iViewArchiveContent[] = [];

  await API({
    method: "post",
    url: "/api/selectViewArchiveContentToList",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  }).then((res: { data: iViewArchiveContent[] }) => {
    resultSet = res.data;
  });
  return resultSet;
}
