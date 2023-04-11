export const getPreloadHeight = (container: HTMLElement | null, originWidth: number) => {
  const height = container?.clientHeight;
  const childs = container?.childElementCount ?? 4;
  const gap = 24;

  return height ? (height - gap * childs - 1) / childs / originWidth : 0;
};
