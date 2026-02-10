"use client";
import * as React from "react";
import { cn } from "../../lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = React.useCallback(({ currentTarget, clientX, clientY }) => {
      // Only update mouse position if not focused to prevent interference with typing
      if (!isFocused) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    }, [isFocused, mouseX, mouseY]);

    const handleMouseEnter = React.useCallback(() => {
      if (!isFocused) {
        setVisible(true);
      }
    }, [isFocused]);

    const handleMouseLeave = React.useCallback(() => {
      if (!isFocused) {
        setVisible(false);
      }
    }, [isFocused]);

    const handleFocus = React.useCallback((e) => {
      setIsFocused(true);
      setVisible(false); // Disable hover effect when focused
      if (props.onFocus) {
        props.onFocus(e);
      }
    }, [props.onFocus]);

    const handleBlur = React.useCallback((e) => {
      setIsFocused(false);
      if (props.onBlur) {
        props.onBlur(e);
      }
    }, [props.onBlur]);

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #3b82f6,
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <input
          type={type}
          className={cn(
            `flex h-10 w-full rounded-md border-none bg-neutral-800 px-3 py-2 text-sm text-white transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 shadow-[0px_0px_1px_1px_#404040] focus-visible:ring-neutral-600`,
            className,
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </motion.div>
    );
  },
);
Input.displayName = "Input";

export { Input };
