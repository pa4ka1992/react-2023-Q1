export const getPreloadHeight = (container: HTMLElement | null, OriginWidth: number) => {
  const height = container?.clientHeight;
  const childs = container?.childElementCount ? container?.childElementCount : 4;
  const gap = 24;

  return height ? (height - gap * childs - 1) / childs / OriginWidth : 0;
};
