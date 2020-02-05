import { iViewArchiveSearch } from "../page-types";
import { getUserInfo } from "./AuthService";
import API from "./axios.api";

export async function searchFulltextViewArchiveContent(
  searchTerm: string,
  limit: number,
  order: string,
  language?: string
): Promise<iViewArchiveSearch[]> {
  let resultSet: iViewArchiveSearch[] = [];

  const formData = new FormData();
  formData.append("searchTerm", searchTerm);
  formData.append("limit", limit.toString());

  if (order) {
    formData.append("order", order);
  }
  if (language) {
    formData.append("language", language);
  }

  await API({
    method: "post",
    url: "api/searchFulltextViewArchiveContent",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  }).then((res: { data: iViewArchiveSearch[] }) => {
    resultSet = res.data;
  });
  return resultSet;
}

export async function searchLikeViewArchiveContent(
  searchTerm: string,
  searchType: string,
  order?: string,
  language?: string
): Promise<iViewArchiveSearch[]> {
  let searchField = "";
  let resultSet: iViewArchiveSearch[] = [];

  switch (searchType) {
    case "1":
      searchField = "OriginDate";
      break;
  }

  const userInfo = await getUserInfo();

  const formData = new FormData();
  formData.append("userName", userInfo.Nickname);
  formData.append("emailAddress", userInfo.Email);
  formData.append("nameIdentifier", userInfo.AuthId);

  formData.append("searchTerm", searchTerm);

  if (language) {
    formData.append("langId", language);
  }
  if (order) {
    formData.append("order", order);
  }
  if (searchField) {
    formData.append("fieldLike", searchField);
  }

  await API({
    method: "post",
    url: "api/searchLikeViewArchiveContent",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  }).then((res: { data: iViewArchiveSearch[] }) => {
    resultSet = res.data;
  });
  return resultSet;
}
