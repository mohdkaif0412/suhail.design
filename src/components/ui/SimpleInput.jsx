"use client";
import * as React from "react";
import { cn } from "../../lib/utils";

const SimpleInput = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full rounded-md border-[1px] border-neutral-600 bg-neutral-800 px-3 py-2 text-sm text-white transition-colors duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus:border-neutral-400 focus:ring-[2px] focus:ring-neutral-400/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
SimpleInput.displayName = "SimpleInput";

export { SimpleInput };