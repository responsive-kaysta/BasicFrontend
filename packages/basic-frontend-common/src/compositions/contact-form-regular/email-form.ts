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
  apiHost: string,
  apiParcel: string
): Promise<boolean> => {
  const axios = require("axios");

  let res = await axios.post(`${apiHost}/api/Email/sendEmail`, form, {
    headers: {
      "Access-Control-Allow-Origin": true,
      parcel: apiParcel},
  });
  return res.status === 200;
};
