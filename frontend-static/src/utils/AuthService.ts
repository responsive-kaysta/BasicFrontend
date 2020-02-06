import auth0 from "auth0-js";
import decode from "jwt-decode";
import API from "./axios.api";

// credits to: https://github.com/auth0-blog/reactjs-authentication-tutorial

export const ID_TOKEN_KEY = "id_token";
export const ACCESS_TOKEN_KEY = "access_token";
export const USER_INFO_KEY = "user_info";

export const SCOPE = "openid profile";
export const CLIENT_ID = "";
export const CLIENT_DOMAIN = "";

export const REDIRECT = "http://localhost:3000/callback";

export const AUDIENCE = "";
export const USER_INFO_API = "";

export type UserInfo = {
  Email: string;
  Nickname: string;
  AuthId: string;
};

const auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

export function login() {
  auth.authorize({
    responseType: "token id_token",
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE
  });
}

export function logout() {
  clearIdToken();
  clearAccessToken();
  window.location.href = "/";
}

export function getIdToken() {
  try {
    if (typeof window !== "undefined") {
      return localStorage.getItem(ID_TOKEN_KEY);
    }
  } catch (Error) {
    console.log(Error.name);
    return null;
  }
  return null;
}

export function getAccessToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }
  return null;
}

// Get and store access_token in local storage
export function setAccessToken() {
  if (typeof window !== "undefined") {
    let accessToken = getParameterByName("access_token");
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  }
}

// Get and store id_token in local storage
export function setIdToken() {
  if (typeof window !== "undefined") {
    let idToken = getParameterByName("id_token");
    // let accessToken = getParameterByName("access_token");
    localStorage.setItem(ID_TOKEN_KEY, idToken);
  }
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

export function isTokenExpired(token: string) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

export async function getUserInfo(): Promise<UserInfo> {
  let accessToken = getAccessToken();
  let written = false;
  let userInfo: UserInfo = { Email: "", Nickname: "", AuthId: "" };

  if (typeof window !== "undefined") {
    let checkObj = localStorage.getItem(USER_INFO_KEY);
    written = !!checkObj && checkObj.length > 0;
  }

  if (!written) {
    await API({
      method: "post",
      url: USER_INFO_API,
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${accessToken}`
      }
    }).then(res => {
      userInfo.AuthId = res.data.sub;
      userInfo.Email = res.data.name;
      userInfo.Nickname = res.data.nickname;
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
    });
  } else {
    let getUserInfo = JSON.parse(localStorage.getItem(USER_INFO_KEY));
    userInfo.AuthId = getUserInfo.AuthId;
    userInfo.Email = getUserInfo.Email;
    userInfo.Nickname = getUserInfo.Nickname;
  }

  return userInfo;
}

function clearIdToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ID_TOKEN_KEY);
  }
}

function clearAccessToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name: string) {
  let match = RegExp("[#&]" + name + "=([^&]*)").exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}

function getTokenExpirationDate(encodedToken: string) {
  const token: any = decode(encodedToken);
  if (!token.exp) {
    return null;
  }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}
