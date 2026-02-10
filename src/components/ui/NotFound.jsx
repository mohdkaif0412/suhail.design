'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-neutral-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p
          className="text-lg text-neutral-400 mb-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-100 transition-colors duration-200"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
