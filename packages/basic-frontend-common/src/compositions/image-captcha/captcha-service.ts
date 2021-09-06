export type CaptchaResponse = {
  payload: string;
  error: any;
  meta: any;
};

export const getCaptcha = async (
  apiHost: string,
  captchaText: string,
  apiParcel: string
): Promise<any> => {
  const axios = require("axios");

  let res = await axios.get(
    `${apiHost}/api/Email/getCaptcha?text=${captchaText}`,
    {
      headers: {
        "Access-Control-Allow-Origin": true,
        parcel: apiParcel
      },
    }
  );
  return res.data;
};
