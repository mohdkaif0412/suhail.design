"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { cn } from "../../lib/utils.ts";
 
export const TracingBeam = ({
  children,
  className,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
 
  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);
 
  const updateHeight = () => {
    if (contentRef.current) {
      const newHeight = contentRef.current.offsetHeight;
      setSvgHeight(newHeight);
    }
  };

  useEffect(() => {
    updateHeight();
  }, []);

  useEffect(() => {
    // Update height when content changes
    updateHeight();
    
    // Set up observer for content changes
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        updateHeight();
      });
      
      resizeObserver.observe(contentRef.current);
      
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [children]);

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      updateHeight();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Handle image load events
    const handleImageLoad = () => {
      setTimeout(updateHeight, 100); // Small delay to ensure layout is updated
    };
    
    // Listen for all image load events in the content
    const images = contentRef.current?.querySelectorAll('img') || [];
    images.forEach(img => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    });
    
    // Also listen for window load event
    window.addEventListener('load', handleImageLoad);
    
    // Periodic check for height changes (fallback)
    const interval = setInterval(updateHeight, 1000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleImageLoad);
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
      });
      clearInterval(interval);
    };
  }, []);

  // Additional effect to handle dynamic content changes
  useEffect(() => {
    const timeouts = [
      setTimeout(updateHeight, 100),
      setTimeout(updateHeight, 500),
      setTimeout(updateHeight, 1000),
      setTimeout(updateHeight, 2000)
    ];
    
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);
 
  // Gradient that moves with scroll - head follows scroll direction
  const gradientStart = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight - 150]),
    {
      stiffness: 400,
      damping: 40,
    },
  );
  const gradientEnd = useSpring(
    useTransform(scrollYProgress, [0, 1], [150, svgHeight]),
    {
      stiffness: 400,
      damping: 40,
    },
  );
 
  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-6xl", className)}
    >
      <div className="absolute top-3 -left-8">
        {/* Fixed circle indicator at top */}
        <motion.div
          transition={{
            duration: 0.1,
            delay: 0,
          }}
          className="border-neutral-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm bg-white relative z-10"
        >
          <motion.div
            transition={{
              duration: 0.1,
              delay: 0,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0.05 ? "white" : "#6b7280",
              borderColor: scrollYProgress.get() > 0.05 ? "white" : "#6b7280",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >

          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={gradientStart} // gradient start (head position)
              y2={gradientEnd} // gradient end (tail position)
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.5" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};