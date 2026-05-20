'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactSection from './ContactSection';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { FaBehance, FaLinkedinIn, FaHeart, FaArrowUp } from 'react-icons/fa6';
import { SiFigma } from 'react-icons/si';
import { MdAlternateEmail } from 'react-icons/md';
import { HiUser, HiViewGrid, HiDocumentText, HiMail, HiDownload } from 'react-icons/hi';

const Footer = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  const iconBtns = [
    // {
    //   icon: <TbBrandGithubFilled size={20} />,
    //   text: 'Github',
    //   link: 'https://github.com/himanrawat',
    // },
    {
      icon: <FaLinkedinIn size={20} />,
      text: 'Linkedin',
      link: 'https://www.linkedin.com/in/suuhail01/',
    },
    {
      icon: <SiFigma size={20} />,
      text: 'Figma',
      link: 'https://www.figma.com/@suhail01',
    },
    {
      icon: <MdAlternateEmail size={20} />,
      text: 'E-mail',
      link: 'mailto:sirsuhail01@gmail.com',
    },
    {
      icon: <FaBehance size={20} />,
      text: 'Behance',
      link: 'https://www.behance.net/suuhail01',
    },
  ];

  const navLinks = [
    { title: t('nav.about'), href: '/about', icon: HiUser },
    { title: t('nav.projects'), href: '/projects', icon: HiViewGrid },
    { title: t('nav.services'), href: '/services', icon: HiDocumentText },
  ];
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants
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
  const iconButtonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <>
      {/* Brand and Contact Section */}
      <ContactSection />

      {/* Main Footer Section */}
      <motion.footer
        className="relative overflow-hidden "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl  mx-auto px-4 md:px-8 lg:px-12 pt-10 pb-8">
          {/* Social Links & Resume */}
          <motion.div
            className="border-t border-neutral-800 pt-12 mb-12"
            variants={containerVariants}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Social Links */}
              <motion.div className="flex flex-wrap gap-2 sm:gap-4" variants={fadeUpVariants}>
                {iconBtns.map((btn, index) => (
                  <motion.a
                    key={index}
                    href={btn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-2 md:gap-3 border border-neutral-700 rounded-full px-4 py-2 text-neutral-300 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-300 ease-in-out overflow-hidden"
                    custom={index}
                    variants={iconButtonVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-600/10 opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.span
                      className="inline-block relative z-10"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {btn.icon}
                    </motion.span>
                    <motion.span
                      className="italic relative z-10 text-sm md:text-base"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {btn.text}
                    </motion.span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Resume Download */}
              <motion.div variants={fadeUpVariants}>
                <motion.a
                  href="/resume/Mohd_Suhail_Resume.pdf"
                  download="Mohd_Suhail_Resume.pdf"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neutral-800 to-neutral-700 hover:from-neutral-700 hover:to-neutral-600 text-white rounded-lg border border-neutral-600 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiDownload className="w-5 h-5" />
                  <span className="font-medium">{t('nav.resume')}</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>


          {/* Bottom Section */}
          <motion.div
            className="border-t border-neutral-800 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4"
            variants={fadeUpVariants}
          >
            {/* Left side - Copyright */}
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <span>&copy; {new Date().getFullYear()} Mohd. Suhail.</span>
              <span>All rights reserved, but ideas are free.</span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to top</span>
              <FaArrowUp className="w-4 h-4" />
            </motion.button>
          </motion.div>{' '}
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
