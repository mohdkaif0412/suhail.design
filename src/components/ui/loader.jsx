'use client';
import { motion } from 'motion/react';
import React from 'react';

export const LoaderOne = () => {
  const transition = (x) => {
    return {
      duration: 1,
      repeat: Infinity,
      repeatType: 'loop',
      delay: x * 0.2,
      ease: 'easeInOut',
    };
  };
  return (
    <div className="fixed inset-0 bg-neutral-900 bg-opacity-98 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{
              y: 0,
            }}
            animate={{
              y: [0, 10, 0],
            }}
            transition={transition(0)}
            className="h-4 w-4 rounded-full border border-neutral-300 bg-gradient-to-b from-neutral-400 to-neutral-300"
          />
          <motion.div
            initial={{
              y: 0,
            }}
            animate={{
              y: [0, 10, 0],
            }}
            transition={transition(1)}
            className="h-4 w-4 rounded-full border border-neutral-300 bg-gradient-to-b from-neutral-400 to-neutral-300"
          />
          <motion.div
            initial={{
              y: 0,
            }}
            animate={{
              y: [0, 10, 0],
            }}
            transition={transition(2)}
            className="h-4 w-4 rounded-full border border-neutral-300 bg-gradient-to-b from-neutral-400 to-neutral-300"
          />
        </div>
      </div>
    </div>
  );
};
