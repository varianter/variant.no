export const setEqualHeights = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  let max = 0;
  elements.forEach((element) => {
    (element as HTMLElement).style.height = "auto";
    const height = (element as HTMLElement).offsetHeight;
    if (height > max) max = height;
  });

  elements.forEach((element) => {
    (element as HTMLElement).style.height = `${max}px`;
  });
};
