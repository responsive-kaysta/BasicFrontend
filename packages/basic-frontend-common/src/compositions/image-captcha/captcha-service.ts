export type CaptchaResponse = {
  payload: string;
  error: any;
  meta: any;
};

export const getCaptcha = async (
  apiHost: string,
  captchaText: string
): Promise<any> => {
  const axios = require("axios");

  let res = await axios.get(
    `${apiHost}/api/Email/getCaptcha?text=${captchaText}`,
    {
      headers: {
        "Access-Control-Allow-Origin": true,
        parcel:
          "80Muze3fQb9acFuJDzgOehjTx6DyRb0iCfiOWufHIZK7udecUndiRu8iq2Eevq3pZAPufYoUnmPf6ZTNZ9wPsTzeA/Btf41pNLLxGvmOlb57eAn5XeB552Zuslo4zBzlzB8DzZLwNNRsLa3/7+ICclj3HDxmHRimG9XgphjA+TRBtWOK64YBlK0o2O6+v/RwqdhfW0+NGWLiIrZxasiGQnVUbkbzYgFURS/P4GX0MCf4EyRn9YK34L6S8/GL3TXn",
      },
    }
  );
  return res.data;
};
