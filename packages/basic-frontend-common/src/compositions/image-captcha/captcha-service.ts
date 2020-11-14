export const getCaptcha = async (
  apiHost: string,
  pageOrigin: string,
  captchaText: string
): Promise<string> => {
  const axios = require("axios");

  const formData = new FormData();
  formData.append("UserName", "anonymous");
  formData.append("EmailAddress", "anonymous");
  formData.append("Sub", "anonymous");

  formData.append("PageOrigin", pageOrigin);
  formData.append("CaptchaText", captchaText);

  let res = await axios.post(`${apiHost}/api/getCaptcha`, formData);
  return res.data;
};
