'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../../components/pages/Footer';
import { TracingBeam } from '../../../components/ui/tracing-beam';
const Mindfullness = '/mindfullness/Mindfullness.png';

const M1 = '/mindfullness/M1.png';
const M2 = '/mindfullness/M2.png';
const M3 = '/mindfullness/M3.png';
const M4a = '/mindfullness/M4a.png';
const M4b = '/mindfullness/M4b.png';
const M5a = '/mindfullness/M5a.png';
const M5b = '/mindfullness/M5b.png';
const M6a = '/mindfullness/M6a.png';
const M6b = '/mindfullness/M6b.png';
const M6c = '/mindfullness/M6c.png';
const M6d = '/mindfullness/M6d.png';
const M7 = '/mindfullness/M7.png';
const M8 = '/mindfullness/M8.png';
const M9a = '/mindfullness/M9a.png';
const M9b = '/mindfullness/M9b.png';
const M9c = '/mindfullness/M9c.png';
const M9d = '/mindfullness/M9d.png';
const M9e = '/mindfullness/M9e.png';
const M9f = '/mindfullness/M9f.png';
const M9g = '/mindfullness/M9g.png';
const M9h = '/mindfullness/M9h.png';
const M9i = '/mindfullness/M9i.png';
const M9j = '/mindfullness/M9j.png';


const MindfulnessStudio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 600, once: true, easing: 'ease-out' });

    const refreshAOS = () => {
      try {
        if (typeof AOS.refreshHard === 'function') AOS.refreshHard();
        else AOS.refresh();
      } catch (e) {}
    };

    const fallbackT = setTimeout(refreshAOS, 250);
    window.addEventListener('load', refreshAOS);

    const imgs = Array.from(document.querySelectorAll('img'));
    let remaining = imgs.length;
    const onImgLoad = () => {
      remaining -= 1;
      if (remaining <= 0) refreshAOS();
    };
    if (imgs.length === 0) refreshAOS();
    else imgs.forEach((img) => {
      if (img.complete) onImgLoad();
      else img.addEventListener('load', onImgLoad, { once: true });
    });

    return () => {
      clearTimeout(fallbackT);
      window.removeEventListener('load', refreshAOS);
      imgs.forEach((img) => img.removeEventListener && img.removeEventListener('load', onImgLoad));
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <TracingBeam className="px-4 md:px-12">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto pt-20 pb-20"
        >
        <motion.div variants={itemVariants} className="mb-16">
          <img
            src={Mindfullness}
            alt="Mindfulness Studio"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={100}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center items-center gap-[70px] "
        >
          <img src={M1} alt="M1" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={150} />
          <img src={M2} alt="M2" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center p-8">
          <motion.div className="text-center mb-20" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              Benefits of Meditation
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <img src={M3} alt="New Section" className="max-w-xs w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center p-8">
          <motion.div className="text-center mb-20" data-aos="fade-up" data-aos-delay={200}>
              <motion.h2
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              >
                Design Goals
              </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center gap-[50px] mb-10"
          >
            <img src={M4a} alt="M4a" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
            <img src={M4b} alt="M4b" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={250} />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center p-8">
          <motion.div className="text-center mb-20" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              Design Process
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center gap-[70px] mb-10"
          >
            <img src={M5a} alt="M5a" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
            <img src={M5b} alt="M5b" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center p-8">
          <motion.div className="text-center mb-20" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              Typography, Colors & Iconography
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center gap-[70px] mb-10"
          >
            <img src={M6a} alt="M6a" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={250} />
            <img src={M6b} alt="M6b" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
            <img src={M6c} alt="M6c" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
            <img src={M6d} alt="M6d" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center p-8">
          <motion.div className="text-center mb-20" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              Process Flow
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <img src={M7} alt="New Section" className="max-w-xs w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center p-8">
          <motion.div className="text-center mb-20" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              Wireframe
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <img src={M8} alt="New Section" className="max-w-xs w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center p-8">
          <motion.div className="text-center mb-20" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              Visual Designs
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center gap-[70px] mb-10"
          >
            <img src={M9a} alt="M6a" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={250} />
            <img src={M9b} alt="M6b" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
            <img src={M9c} alt="M6c" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
            <img src={M9d} alt="M6d" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
            <img src={M9e} alt="M6e" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
            <img src={M9f} alt="M6f" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
            <img src={M9g} alt="M6g" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
            <img src={M9h} alt="M6h" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
            <img src={M9i} alt="M6i" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
            <img src={M9j} alt="M6j" className="max-w-xs w-full" data-aos="fade-up" data-aos-delay={200} />
          </motion.div>
        </motion.div>
      </motion.section>
      </TracingBeam>

      <Footer />
    </main>
  );
};

export default MindfulnessStudio;
