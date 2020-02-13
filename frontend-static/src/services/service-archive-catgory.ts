import API from "../utils/axios.api";
import { iArchiveCategory } from "../view-types";

export async function SelectArchiveCategoryById(
  categoryId: string
): Promise<iArchiveCategory> {
  const formData = new FormData();

  if (categoryId) {
    formData.append("categoryId", categoryId);
  }

  let jsonData: iArchiveCategory = null;

  await API({
    method: "post",
    url: "/api/selectArchiveCategoryById",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  }).then((res: { data: iArchiveCategory }) => {
    jsonData = res.data;
  });
  return jsonData;
}

export async function selectArchiveCategoriesToList(): Promise<
  iArchiveCategory[]
> {
  let jsonData: iArchiveCategory[] = null;

  await API({
    method: "post",
    url: "/api/selectArchiveCategoriesToList",
    headers: { "Content-Type": "multipart/form-data" }
  }).then((res: { data: iArchiveCategory[] }) => {
    jsonData = res.data;
  });
  return jsonData;
}
