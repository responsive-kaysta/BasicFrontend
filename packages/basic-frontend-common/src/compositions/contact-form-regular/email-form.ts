export type EmailForm = {
  Origin?: string;
  FirstName?: string;
  SurName?: string;
  EmailAddress?: string;
  Street?: string;
  Number?: string;
  City?: string;
  PostCode?: string;
  Country?: string;
  Reason?: string;
  Message?: string;
  Version?: string;
};

export const sendEmail = async (
  form: EmailForm,
  apiHost: string
): Promise<boolean> => {
  const axios = require("axios");

  const formData = new FormData();
  formData.append("UserName", "anonymous");
  formData.append("EmailAddress", "anonymous");
  formData.append("Sub", "anonymous");

  formData.append("PageOrigin", form.Origin);
  formData.append("FirstName", form.FirstName);
  formData.append("SurName", form.SurName);
  formData.append("EmailAddress", form.EmailAddress);
  formData.append("Street", form.Street ? form.Street : "");
  formData.append("Number", form.Number ? form.Number : "");
  formData.append("City", form.City ? form.City : "");
  formData.append("PostCode", form.PostCode ? form.PostCode : "");
  formData.append("Country", form.Country ? form.Country : "");
  formData.append("Reason", form.Reason);
  formData.append("Message", form.Message);
  formData.append("Version", form.Version ? form.Version : "");

  let res = await axios.post(`${apiHost}/api/sendEmail`, formData);
  return res.status === 200;
};
