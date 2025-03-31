import { ReactNode } from "react";

interface GridContainerProps {
  children: ReactNode;
}

export function GridContainer({ children }: GridContainerProps) {
  return <div>{children}</div>;
}
