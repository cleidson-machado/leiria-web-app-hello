import { Button as AgoraButton } from "@ama-pt/agora-design-system";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ className, children, onClick, ...props }: ButtonProps) => {
  return (
    <AgoraButton
      className={twMerge("default-styles", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </AgoraButton>
  );
};

export { Button };
