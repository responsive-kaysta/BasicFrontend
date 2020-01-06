import axios from "axios";

export default axios.create({
  baseURL: "https://masterarchive.api.pub.responsive-kaysta.ch/"
  // baseURL: "http://masterarchive.api.local/"
  // baseURL: "http://127.0.0.1:8080/"
});
