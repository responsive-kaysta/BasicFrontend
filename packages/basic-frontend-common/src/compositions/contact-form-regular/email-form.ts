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

  let res = await axios.post(`${apiHost}/api/Email/sendEmail`, form, {
    headers: {
      "Access-Control-Allow-Origin": true,
      parcel:
        "80Muze3fQb9acFuJDzgOehjTx6DyRb0iCfiOWufHIZK7udecUndiRu8iq2Eevq3pZAPufYoUnmPf6ZTNZ9wPsTzeA/Btf41pNLLxGvmOlb57eAn5XeB552Zuslo4zBzlzB8DzZLwNNRsLa3/7+ICclj3HDxmHRimG9XgphjA+TRBtWOK64YBlK0o2O6+v/RwqdhfW0+NGWLiIrZxasiGQnVUbkbzYgFURS/P4GX0MCf4EyRn9YK34L6S8/GL3TXn",
    },
  });
  return res.status === 200;
};
