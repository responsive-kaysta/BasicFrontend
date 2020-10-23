export const COOKIE_KEY = 'master_cookie';

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

export const isCookieSet = () => {
  const cookie = getStorageItem(COOKIE_KEY);
  if (!cookie) {
    return false;
  }
  return true;
};

export const getLanguage = () => {
  if (typeof window !== 'undefined') {
    return navigator.language;
  }
  return null;
};

export const isAnalyticsSet = () => {
  const cookie = getStorageItem(COOKIE_KEY);
  if (!cookie) {
    return true;
  } else {
    const value = JSON.parse(cookie);
    return value.analytics === true;
  }
};
