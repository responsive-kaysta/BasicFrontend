export const isMobileView = (width: number) => {
  if (typeof window !== "undefined") {
    return window.innerWidth <= width;
  }
  return false;
};
