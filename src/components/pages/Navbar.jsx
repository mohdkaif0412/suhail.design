'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  HiUser,
  HiViewGrid,
  HiDocumentText,
  HiMail,
  HiDownload,
  HiMenu,
  HiX,
} from 'react-icons/hi';
import { HoverBorderGradient } from '../ui/hover-border-gradient';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { id: 1, title: 'My Journey', href: '/about', icon: HiUser },
    { id: 2, title: 'My Work', href: '/projects', icon: HiViewGrid },
    { id: 3, title: 'My Services', href: '/services', icon: HiDocumentText },
    // { id: 4, title: t('nav.contact'), href: '/contact', icon: HiMail },
  ];

  useEffect(() => {
    // This effect will run whenever the language changes via t function
  }, [t]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for backdrop blur effect
      setIsScrolled(currentScrollY > 10);

      // Don't hide navbar when mobile menu is open
      if (!isOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past threshold - hide navbar
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
          // Scrolling up or at top - show navbar
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // When opening mobile menu, ensure navbar is visible
    if (!isOpen) {
      setIsVisible(true);
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Animation variants
  const navbarVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      },
    },
  };

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <motion.nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? 'bg-[#121212]/85 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
        style={{
          top: '0px',
          borderBottom: isScrolled ? '1px solid rgba(64, 64, 64, 0.3)' : '1px solid transparent',
          transition:
            'border-bottom 0.3s ease-out, background-color 0.3s ease-out, backdrop-filter 0.3s ease-out',
        }}
        variants={navbarVariants}
        animate={isVisible || isOpen ? 'visible' : 'hidden'}
        initial="visible"
      >
        <div className="relative flex justify-between items-center w-full py-2 sm:py-4 px-2 sm:px-8 max-w-7xl mx-auto">
          {/* Logo/Name */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Link href="/" className="flex items-center z-10 group">
              <motion.div
                className="relative mr-2 sm:mr-4"
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <motion.img
                  src="/logo/Favicon1.svg"
                  alt="Suhail Logo"
                  className="w-12 h-10 sm:w-18 sm:h-10 filter brightness-110 drop-shadow-lg"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                />
                {/* <div className="absolute inset-0 w-18 h-18 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" /> */}
              </motion.div>
              <div className="flex flex-col justify-center">
                <motion.h1
                  className="text-lg sm:text-xl font-bold text-white group-hover:text-neutral-200 transition-colors duration-300 leading-tight tracking-tight"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Mohd. Suhail
                </motion.h1>
                <motion.p
                  className="text-xs sm:text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 font-medium tracking-wider"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  UI UX & Product Designer
                </motion.p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="gap-6 hidden lg:flex z-10 items-center">
            {navLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.div
                  key={link.id}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={index}
                >
                  <Link
                    href={link.href}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 group overflow-hidden ${
                      pathname === link.href
                        ? 'text-white font-semibold bg-gradient-to-r from-neutral-800/40 to-neutral-700/40 border border-neutral-600/50'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800/30 hover:border-neutral-600/50'
                    } ${pathname !== link.href ? 'border border-transparent' : ''}`}
                  >
                    {pathname === link.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-neutral-700/10 to-neutral-600/10 rounded-full" />
                    )}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10"
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.div>
                    <span className="text-sm font-medium relative z-10">{link.title}</span>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-neutral-400 to-neutral-300 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300" />
                  </Link>
                </motion.div>
              );
            })}

            {/* Resume Button */}
            <motion.div
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <HoverBorderGradient
                as="a"
                href="/resume/Mohd_Suhail_Resume.pdf"
                download="Mohd_Suhail_Resume.pdf"
                target="_blank"
                onClick={toggleMenu}
                containerClassName="rounded-full"
                className="flex items-center gap-2 px-6 py-2 bg-transparent text-neutral-300 hover:text-white text-sm font-medium"
                duration={2}
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.2 }}>
                  <HiDownload className="w-4 h-4" />
                </motion.div>
                <span>{t('nav.resume')}</span>
              </HoverBorderGradient>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="relative z-50 lg:hidden">
            <motion.button
              className="w-12 h-12 flex items-center justify-center focus:outline-none cursor-pointer rounded-full hover:bg-neutral-800/30 transition-colors duration-300"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={isOpen ? 'open' : 'closed'}
                className="flex flex-col items-center justify-center"
              >
                {isOpen ? (
                  <motion.div
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenu className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Separate from navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#121212]/95 backdrop-blur-md z-40 lg:hidden overflow-y-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            style={{ top: 0 }} // Ensure it starts from the very top
          >
            {/* Full screen overlay with proper top spacing */}
            <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-8">
              <div className="flex flex-col items-center space-y-6 text-white w-full max-w-sm">
                {/* Mobile Navigation Links */}
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.div key={link.id} variants={mobileItemVariants} className="w-full">
                      <Link
                        href={link.href}
                        className={`flex items-center justify-center gap-4 text-xl py-3 px-6 rounded-full transition-all duration-300 w-full ${
                          pathname === link.href
                            ? 'text-white font-semibold bg-neutral-800/30 border border-neutral-600/50'
                            : 'text-neutral-300 hover:text-white hover:bg-neutral-800/20'
                        }`}
                        onClick={toggleMenu}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="w-6 h-6" />
                        </motion.div>
                        <span>{link.title}</span>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Resume Button - Mobile */}
                <motion.div variants={mobileItemVariants} className="w-full pt-4">
                  <HoverBorderGradient
                    as="a"
                    href="/resume/Mohd_Suhail_Resume.pdf"
                    download="Mohd_Suhail_Resume.pdf"

                    containerClassName="rounded-full w-full"
                    className="flex items-center justify-center gap-4 text-xl px-8 py-3 bg-transparent w-full"
                    duration={2}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiDownload className="w-6 h-6" />
                    </motion.div>
                    <span>{t('nav.resume')}</span>
                  </HoverBorderGradient>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
