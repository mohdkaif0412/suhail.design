'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { HiUser, HiViewGrid, HiDocumentText, HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { Label } from '../ui/label';
import { SimpleInput } from '../ui/SimpleInput';
import { SimpleTextarea } from '../ui/SimpleTextarea';

const ContactSection = () => {
  const { t } = useTranslation();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Form status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
      setErrorMessage('');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const navLinks = [
    { title: t('nav.about'), href: '/about', icon: HiUser },
    { title: t('nav.projects'), href: '/projects', icon: HiViewGrid },
    { title: t('nav.services'), href: '/services', icon: HiDocumentText },
  ];
  
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

  const formVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      rotateY: -30,
      x: -20,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 my-12 sm:my-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Hero Section with Contact Form */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 "
        variants={containerVariants}
      >
        {/* Brand Section */}
        <motion.div
          className="flex flex-col justify-center order-2 lg:order-1"
          variants={titleVariants}
        >
          {/* Logo and Brand */}
          <motion.div
            className="flex items-center gap-4 mb-4 sm:mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="/logo/Favicon1.svg"
              alt="Mohd Suhail Logo"
              className="w-20 h-20 filter brightness-110 drop-shadow-lg"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.8 }}
            />
            <div>
              <h1 className="text-4xl font-bold text-white">Mohd. Suhail</h1>
              <p className="text-neutral-400 font-medium">UI UX & Product Designer</p>
            </div>
          </motion.div>
          {/* Tagline */}
          <motion.p
            className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-lg"
            variants={fadeUpVariants}
          >
            Let's impart our wisdom to one another. It doesn't have to be design expertise; anything will do, and we can cross-pollinate and have fun with it.
          </motion.p>
          {/* Quick Navigation */}
          <motion.div variants={fadeUpVariants}>
            <h3 className="text-lg font-semibold text-white mb-2 sm:mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 py-2"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm">{link.title}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Contact Form Section */}
        <motion.div
          className="flex flex-col justify-center order-1 lg:order-2 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border-[1px] border-neutral-700/50 p-6 sm:p-8 rounded-4xl shadow-neutral-400/50"
          variants={formVariants}
        >
          <div className="mb-8">
            <h3 className="font-heading text-4xl mb-2 text-white">Get in Touch</h3>
            <p className="text-neutral-400 mb-8">I am always looking for exciting projects to work on. Get in touch to schedule a call, or just to say hello.</p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-4">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-900/50 border border-green-700 rounded-lg"
              >
                <p className="text-green-200 text-sm">
                  ✅ Message sent successfully! I'll get back to you soon.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-900/50 border border-red-700 rounded-lg"
              >
                <p className="text-red-200 text-sm">
                  ❌ {errorMessage}
                </p>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex w-full flex-col space-y-2">
                <Label htmlFor="name">Name</Label>
                <SimpleInput
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="flex w-full flex-col space-y-2">
                <Label htmlFor="email">Email</Label>
                <SimpleInput
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div className="flex w-full flex-col space-y-2">
              <Label htmlFor="message">Message</Label>
              <SimpleTextarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="group/btn relative block h-12 w-full rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all duration-300 hover:from-neutral-600 hover:to-neutral-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
              <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
              <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
