import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GridContainerPropsOld {
  children: ReactNode;
  className?: string;
}

export function GridContainerOld({
  children,
  className,
}: GridContainerPropsOld) {
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
