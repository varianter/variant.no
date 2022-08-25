export interface WhichButtonPressed {
  selectedButton: string;
}

export const changeNavbarColor = (
  setNavColor: Function,
  setIsMobile: Function,
  setOffset: Function,
  offset: number,
) => {
  const scrollContainer = document.querySelector('#scrollContainer');
  if (window.matchMedia('(max-width: 900px)').matches) {
    setNavColor(true);
    setIsMobile(false);
  } else {
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', () => {
        setOffset(scrollContainer.scrollTop);
        // console.log(offset);
      });
      if (offset < 899) {
        setNavColor(false);
      } else if (
        (offset > 899 && offset < 4499) ||
        (offset > 5799 && offset < 7600)
      ) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    }
  }
  if (window.matchMedia('(min-width: 1550px)').matches) {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', onScroll);

    if (offset > 3551 || offset > 6370) {
      setNavColor(false);
    }
    if (offset > 4850 && offset < 6370) {
      setNavColor(true);
    }
  }
};
