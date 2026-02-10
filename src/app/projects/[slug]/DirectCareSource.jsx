'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../../components/pages/Footer';
const Abc6 = '/Abc6.png';

const DirectCareSource = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 md:px-12 pt-32 pb-20"
      >
        {/* <motion.div variants={itemVariants} className="text-center mb-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Direct Care Source
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Figma', 'UI/UX Design', 'Mobile App', 'User Research', 'Prototyping'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div> */}

        <motion.div variants={itemVariants} className="mb-16">
          <img
            src={Abc6}
            alt="Direct Care Source App"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-lg text-neutral-300 leading-relaxed mb-8">
            From validating a concept to establishing the business/product strategy to designing the whole user experience, 
            I help you build a successful digital product based on real user insights, while helping you to foster meaningful 
            customer relations. Together we can ensure you are building a meaningful product that will attract new customers 
            and keep churn low.
          </p>

          <h3 className="text-2xl font-bold mb-4">Key Features</h3>
          <ul className="space-y-3 text-neutral-300 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              Concept validation and market research
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              Business and product strategy development
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              Complete user experience design
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              Customer relationship management tools
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="p-4 bg-neutral-900 rounded-lg">
              <h4 className="font-semibold mb-2">Design</h4>
              <p className="text-neutral-400">Figma, UI/UX Design</p>
            </div>
            <div className="p-4 bg-neutral-900 rounded-lg">
              <h4 className="font-semibold mb-2">Research</h4>
              <p className="text-neutral-400">User Research, Prototyping</p>
            </div>
            <div className="p-4 bg-neutral-900 rounded-lg">
              <h4 className="font-semibold mb-2">Platform</h4>
              <p className="text-neutral-400">Mobile App Design</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </main>
  );
};

export default DirectCareSource;
