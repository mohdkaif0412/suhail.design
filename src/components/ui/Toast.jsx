import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, SparklesIcon, ClockIcon } from '@heroicons/react/24/outline';

// Custom hook for responsive animations
const useResponsiveAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return {
    initial: {
      opacity: 0,
      x: isMobile ? 0 : 100,
      y: isMobile ? -50 : 0,
      scale: 0.95,
    },
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: {
      opacity: 0,
      x: isMobile ? 0 : 100,
      y: isMobile ? -50 : 0,
      scale: 0.95,
    },
  };
};

const Toast = ({
  isVisible,
  onClose,
  title,
  message,
  type = 'update',
  features = [],
  showSeeMore = false,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);
  const pausedTimeRef = useRef(0);
  const startTimeRef = useRef(0);
  const animations = useResponsiveAnimation();

  const TOTAL_DURATION = 8000; // 8 seconds

  useEffect(() => {
    if (isVisible) {
      startTimer();
      return () => clearTimer();
    }
  }, [isVisible]);

  useEffect(() => {
    if (isHovered) {
      pauseTimer();
    } else {
      resumeTimer();
    }
  }, [isHovered]);

  const startTimer = () => {
    startTimeRef.current = Date.now();
    pausedTimeRef.current = 0;
    timerRef.current = setTimeout(() => {
      handleClose();
    }, TOTAL_DURATION);
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      pausedTimeRef.current = Date.now() - startTimeRef.current;
    }
  };

  const resumeTimer = () => {
    if (pausedTimeRef.current > 0 && pausedTimeRef.current < TOTAL_DURATION) {
      const remainingTime = TOTAL_DURATION - pausedTimeRef.current;
      timerRef.current = setTimeout(() => {
        handleClose();
      }, remainingTime);
    }
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleClose = () => {
    clearTimer();
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  // Touch event handlers for mobile
  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };
  const getToastStyles = () => {
    // Default update styles
    return {
      background: 'bg-gradient-to-r from-neutral-900/90 via-neutral-800/90 to-neutral-700/90',
      border: 'border-neutral-500/30',
      iconColor: 'text-white',
      icon: SparklesIcon,
      accentColor: 'from-neutral-400 to-neutral-200',
    };
  };

  const styles = getToastStyles();

  return (
    <>
      {' '}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-4 left-4 right-4 sm:top-4 sm:right-4 sm:left-auto z-[9999] max-w-md w-full sm:w-auto mx-auto sm:mx-0"
            initial={animations.initial}
            animate={animations.animate}
            exit={animations.exit}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {' '}
            <div
              className={`relative p-3 sm:p-4 rounded-xl border backdrop-blur-lg shadow-2xl ${styles.background} ${styles.border}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  background: [
                    'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                    'linear-gradient(225deg, transparent, rgba(255,255,255,0.1), transparent)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />{' '}
              {/* Hover indicator */}
              {isHovered && (
                <motion.div
                  className="absolute top-2 left-2 flex items-center gap-1 bg-black/20 rounded-full px-2 py-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <ClockIcon className="w-3 h-3 text-white/60" />
                  <span className="text-xs text-white/60 hidden sm:inline">Paused</span>
                </motion.div>
              )}{' '}
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-1 rounded-full hover:bg-white/10 transition-colors duration-200 touch-manipulation"
                aria-label="Close notification"
              >
                <XMarkIcon className="w-5 h-5 sm:w-4 sm:h-4 text-white opacity-70 hover:opacity-100" />
              </button>{' '}
              {/* Content */}
              <div className="pr-6 sm:pr-8 relative">
                <div className="flex items-start gap-2 sm:gap-3">
                  {' '}
                  <motion.div
                    className="flex-shrink-0 mt-0.5 sm:mt-1"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {<styles.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${styles.iconColor}`} />}
                  </motion.div>{' '}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-sm leading-tight mb-1.5 sm:mb-2 text-white">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-90 leading-relaxed mb-2 sm:mb-3 text-white">
                      {message}
                    </p>{' '}
                    {/* Features list */}
                    {features && features.length > 0 && (
                      <div className="mb-2 sm:mb-3">
                        <div className="space-y-0.5 sm:space-y-1">
                          {' '}
                          {features.slice(0, 2).map((feature, index) => (
                            <div
                              key={index}
                              className="text-xs opacity-80 flex items-center gap-1.5 sm:gap-2 text-white"
                            >
                              <span className="w-1 h-1 bg-current rounded-full flex-shrink-0" />
                              <span className="leading-tight">{feature}</span>
                            </div>
                          ))}{' '}
                          {features.length > 2 && (
                            <div className="text-xs opacity-60 text-white pl-3 sm:pl-4">
                              +{features.length - 2} more features
                            </div>
                          )}
                        </div>
                      </div>
                    )}{' '}
                    {/* See More button */}
                    {showSeeMore && (
                      <div className="text-xs font-medium px-2.5 sm:px-3 py-1.5 bg-white/10 rounded-full text-white/70">
                        <span>Portfolio v1.0.0</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Progress bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-full"
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 8, ease: 'linear' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Toast;
