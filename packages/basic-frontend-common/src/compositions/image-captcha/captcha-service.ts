export const getCaptcha = async (apiHost: string): Promise<string> => {
  const axios = require("axios");

  const formData = new FormData();
  formData.append("UserName", "anonymous");
  formData.append("EmailAddress", "anonymous");
  formData.append("Sub", "anonymous");

  //   formData.append("PageOrigin", form.Origin);
  //   formData.append("FirstName", form.FirstName);
  //   formData.append("SurName", form.SurName);
  //   formData.append("EmailAddress", form.EmailAddress);
  //   formData.append("Street", form.Street);
  //   formData.append("Number", form.Number);
  //   formData.append("City", form.City);
  //   formData.append("PostCode", form.PostCode);
  //   formData.append("Country", form.Country);
  //   formData.append("Reason", form.Reason);
  //   formData.append("Message", form.Message);

  let res = await axios.post(`${apiHost}/api/getCaptcha`, formData);
  console.log("res.body: ", res.data);
  return res.data;
};
