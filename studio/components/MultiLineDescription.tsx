import { HTMLProps } from "react";

const MultiLineDescription = ({
  lines,
  ...props
}: { lines: string[] } & HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props}>
      {lines.map((l, i) => (
        <p key={i}>{l}</p>
      ))}
    </div>
  );
};

export default MultiLineDescription;
