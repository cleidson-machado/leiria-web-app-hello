import { Button as AgoraButton } from "@ama-pt/agora-design-system";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <AgoraButton className={twMerge("default-styles", className)} {...props}>
      {children}
    </AgoraButton>
  );
}
