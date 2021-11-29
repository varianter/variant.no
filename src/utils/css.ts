export const and = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(' ');
