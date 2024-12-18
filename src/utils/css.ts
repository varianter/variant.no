export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
export function cnIf(classes: Record<string, boolean>) {
  return cn(
    ...Object.entries(classes)
      .filter(([, value]) => value)
      .map(([key]) => key),
  );
}
