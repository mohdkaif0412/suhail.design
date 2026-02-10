import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useSpring } from 'framer-motion';
import { SparklesCore } from '../ui/SparklesCore';


const Hero = React.memo(() => {
  // Use motion values for better performance - no re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth motion
  const springX = useSpring(mouseX, { stiffness: 100, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 15 });

  // Derived motion values for text parallax
  const textX1 = useSpring(useMotionValue(0), { stiffness: 50, damping: 10 });
  const textY1 = useSpring(useMotionValue(0), { stiffness: 50, damping: 10 });
  const textX2 = useSpring(useMotionValue(0), { stiffness: 50, damping: 10 });
  const textY2 = useSpring(useMotionValue(0), { stiffness: 50, damping: 10 });
  const terminalX = useSpring(useMotionValue(0), { stiffness: 50, damping: 10 });
  const terminalY = useSpring(useMotionValue(0), { stiffness: 50, damping: 10 });
  const [currentWord, setCurrentWord] = useState(0);
  const controls = useAnimation();
  const words = ['UI/UX Designer', 'Product Designer', 'Interaction Designer', 'Visual Designer'];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []); // Optimized mouse tracking with motion values - no state updates
  const handleMouseMove = useCallback(
    (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 100;
      const y = (e.clientY - window.innerHeight / 2) / 100;

      // Direct motion value updates - much more performant
      mouseX.set(x);
      mouseY.set(y);

      // Update derived values for parallax effects
      textX1.set(x * 0.5);
      textY1.set(y * 0.5);
      textX2.set(x * -0.3);
      textY2.set(y * -0.3);
      terminalX.set(x * -0.2);
      terminalY.set(y * -0.2);
    },
    [mouseX, mouseY, textX1, textY1, textX2, textY2, terminalX, terminalY]
  );

  useEffect(() => {
    let frameId;
    let lastTime = 0;
    const throttleTime = 16; // ~60fps

    const throttledMouseMove = (e) => {
      const currentTime = Date.now();
      if (currentTime - lastTime < throttleTime) return;

      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        handleMouseMove(e);
        frameId = null;
        lastTime = currentTime;
      });
    };

    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [handleMouseMove]);

  return (
    <section className="flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            willChange: 'transform',
            x: springX,
            y: springY,
          }}
        />
      </div>

      <div className="relative text-center">
            <div className=" w-full bg-[#121212] flex flex-col items-center justify-center overflow-hidden rounded-md">
              <p
                className="font-heading text-[90px] sm:text-[124px] font-semibold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent relative z-10 leading-none"
              >
                Mohd Suhail
              </p>

              <p className="mt-1 mb-2 max-w-md mx-auto text-gray-300 text-base sm:text-lg font-light">
                Turning Complexity Into Clarity Through Design.
              </p>

              <div className="w-full sm:w-[50rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.2}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full  bg-[#121212] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
      </div>

    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
