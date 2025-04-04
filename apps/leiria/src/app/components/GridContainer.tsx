import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

export function GridContainer({ children, className }: GridContainerProps) {
  return (
    <div
      className={twMerge(
        "w-full px-3 mx-auto max-w-customContainer px-3",
        className
      )}
    >
      {children}
    </div>
  );
}
