import { ReactNode } from "react";

export default function Container({ children, className, ...props }: { children: ReactNode } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div className={`${className ? className : ''} $`} {...props}>{children}</div>
}
