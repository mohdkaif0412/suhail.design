'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/pages/Hero';
import About from '../components/pages/About';
import Projects from '../components/pages/Projects';
import Footer from '../components/pages/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function HomeClient() {
  return (
    <>
      <motion.section
        aria-label="Introduction and hero section"
        className="h-full my-auto min-h-[80vh] sm:min-h-dvh flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Hero fadeUpVariants={fadeUpVariants} containerVariants={containerVariants} />
      </motion.section>

      <motion.section
        aria-label="About me and experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05, margin: '0px 0px 100px 0px' }}
        variants={containerVariants}
      >
        <About
          containerVariants={containerVariants}
          fadeUpVariants={fadeUpVariants}
          slideInVariants={slideInVariants}
          cardVariants={cardVariants}
        />
      </motion.section>

      <motion.section
        aria-label="Portfolio projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05, margin: '0px 0px -150px 0px' }}
        variants={containerVariants}
      >
        <Projects
          containerVariants={containerVariants}
          fadeUpVariants={fadeUpVariants}
          cardVariants={cardVariants}
        />
      </motion.section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05, margin: '0px 0px -100px 0px' }}
        variants={containerVariants}
      >
        <Footer
          containerVariants={containerVariants}
          fadeUpVariants={fadeUpVariants}
          cardVariants={cardVariants}
        />
      </motion.div>
    </>
  );
}
