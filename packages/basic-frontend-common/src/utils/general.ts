export const COOKIE_KEY = "master_cookie";

export const sleep = (milliseconds: number) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};

export const setStorageItem = (key: string, data: any) => {
  localStorage.setItem(key, data);
};

export const getStorageItem = (key: string) => {
  return localStorage.getItem(key);
};

export const removeStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const isCookieSet = (cookieKey?: string) => {
  const key = cookieKey ? cookieKey : COOKIE_KEY;
  const cookie = getStorageItem(key);
  if (!cookie) {
    return false;
  }
  return true;
};

export const getLanguage = () => {
  if (typeof window !== "undefined") {
    return navigator.language;
  }
  return null;
};

export const isAnalyticsSet = (cookieKey?: string) => {
  const key = cookieKey ? cookieKey : COOKIE_KEY;
  const cookie = getStorageItem(key);
  if (!cookie) {
    return true;
  } else {
    const value = JSON.parse(cookie);
    return value.analytics === true;
  }
};

export const randomString = (length: number) => {
  // Declare all characters
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Pick characers randomly
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return str;
};
