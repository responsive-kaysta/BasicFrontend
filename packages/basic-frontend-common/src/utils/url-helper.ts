export const getUrlParameter = (name: string) => {
  name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  let results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

export const openWindow = (url: string) => {
  window.open(url);
};

export const openUrl = (url: string) => {
  window.location.href = url;
};
