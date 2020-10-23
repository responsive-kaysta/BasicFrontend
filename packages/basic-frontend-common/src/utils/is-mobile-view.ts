import { useResize } from './useResize';

export const isMobileView = (width: number) => {
  if (typeof window !== 'undefined') {
    return useResize().windowWidth <= width;
  }
  return false;
};
