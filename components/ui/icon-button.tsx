"use client"

import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  icon: React.ReactElement;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const IconButton = ({ icon, className, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex  items-center justify-center bg-white  border shadow-md p-2  hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
