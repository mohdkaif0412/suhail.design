'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import seoUtils from '../../utils/seoUtils';
import { GlowingEffect } from '../../components/ui/glowing-effect';
import Footer from '../../components/pages/Footer';

// Use string paths for images in Next.js
const PR1 = '/PR1.png';
const PR2 = '/PR2.png';
const PR3 = '/PR3.png';
const PR4 = '/PR4.png';
const PR5 = '/PR5.png';
const PR6 = '/PR6.png';
const PR7 = '/PR7.png';
const PR8 = '/PR8.png';
const PR9 = '/PR9.png';
const BB1 = '/BB1.png';

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');
  useEffect(() => {
    // Update SEO metadata for projects page
    const customSeoData = {
      title: `${t('projects.pageTitle')} - Mohd Suhail | UI UX & Product Design Expert`,
      description: t('projects.pageDescription'),
      canonical: 'https://www.Suhail.in/projects',
      ogTitle: `${t('projects.pageTitle')} - Mohd Suhail`,
      ogDescription: t('projects.pageDescription'),
      ogUrl: 'https://www.Suhail.in/projects',
      twitterTitle: `${t('projects.pageTitle')} - Mohd Suhail`,
      twitterDescription: t('projects.pageDescription'),
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Projects - Mohd Suhail',
        description: t('projects.pageDescription'),
        url: 'https://www.Suhail.in/projects',
        author: {
          '@type': 'Person',
          name: 'Mohd Suhail',
          url: 'https://www.Suhail.in',
        },
      },
    };

    seoUtils.updatePageSEO('projects', customSeoData);

    // Scroll to top
    window.scrollTo(0, 0);
  }, [t]);

  const projectsData = [
    {
      id: 'acadally-student',
      title: "AcadAlly (Student)",
      category: 'mobApp',
      tags: ['HTML', 'CSS', 'JavaScript'],
      description: "AcadAlly is a diagnostic app that assesses students' grasp of concepts through quick quizzes. If a learning gap is found, it delivers a personalized, adaptive assessment and engaging videos to reinforce understanding. Real-time reports inform students and educators about progress, highlighting areas for improvement or proficiency.",
      projectUrl: 'https://github.com/himanrawat/iamart',
      liveUrl: 'https://iamart-git-main-himanrawats-projects.vercel.app/',
      image: PR1,
      year: '2024',
    },
    {
      id: 'acadally-teacher',
      title: "AcadAlly (Teacher)",
      category: 'mobApp',
      tags: ['React', 'Tailwind CSS', 'Responsive Design'],
      description: "The AcadAlly Teacher Application streamlines teaching by identifying student learning gaps, enabling personalized plans for effective remediation. It reduces assessment time, tracks progress, and provides insights for refining strategies and communication. With its intuitive design, AcadAlly enhances efficiency and outcomes in modern classrooms.",
      projectUrl: 'https://github.com/himanrawat/last3feet',
      liveUrl: 'https://last3feet.Suhail.in/',
      image: PR2,
      year: '2024',
    },
    {
      id: 'mindfulness-studio',
      title: "Mindfulness Studio",
      category: 'mobApp',
      tags: ['React', 'Tailwind CSS', 'Responsive Design'],
      description: "Mindfulness Studio is a meditation app that offers personalized routines based on the time of day — morning, afternoon, and night. Users can create custom courses to manage stress, improve sleep, boost energy, or increase happiness. The app tracks progress through a user profile and sends reminder notifications to help users stay consistent with their practice.",
      projectUrl: 'https://github.com/himanrawat/last3feet',
      liveUrl: 'https://last3feet.Suhail.in/',
      image: PR3,
      year: '2024',
    },
    {
      id: 'gexa-energy',
      title: "Gexa Energy",
      category: 'mobApp',
      tags: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing'],
      description: "Gexa Energy provides an effortless way to manage your electricity needs. You can track your usage over time, view and pay bills with ease, and customize account preferences like billing options. Plan details are readily accessible, and renewals are quick and hassle-free. A smart, centralized dashboard offers an at-a-glance view of your energy usage, bills, and other essential data. Plus, the mobile app lets you control connected smart thermostats from anywhere, giving you comfort, efficiency, and convenience at your fingertips.",
      projectUrl: 'https://figma.com/wanderlust-woof-case-study',
      liveUrl: 'https://wanderlust-woof.vercel.app/',
      image: PR4,
      year: '2024',
    },
    {
      id: 'thats-my-jam',
      title: "That’s My Jam",
      category: 'mobApp',
      tags: ['Figma', 'UI/UX Design', 'Mobile App', 'User Research', 'Prototyping'],
      description: "That’s My Jam is a music discovery app that connects users with local artists and events. It features personalized playlists, event recommendations, and a social platform for sharing music tastes.",
      projectUrl:
        'https://www.behance.net/gallery/198973835/NextDoor-Your-Local-News-Right-Where-You-Are',
      liveUrl:
        'https://www.behance.net/gallery/198973835/NextDoor-Your-Local-News-Right-Where-You-Are',
      image: PR5,
      year: '2024',
    },
    {
      id: 'adaelo',
      title: "Adaelo",
      category: 'mobApp',
      tags: ['Figma', 'UI/UX Design', 'Mobile App', 'User Research', 'Prototyping'],
      description: "Adaelo Music is an application designed to revolutionize the way artists, licensees, and label owners interact and collaborate within the music industry. With a focus on simplicity, accessibility, and empowerment, Adaelo Music aims to provide a platform where users can seamlessly discover, create, and license music for various projects and endeavors.",
      projectUrl:
        'https://www.behance.net/gallery/198973835/NextDoor-Your-Local-News-Right-Where-You-Are',
      liveUrl:
        'https://www.behance.net/gallery/198973835/NextDoor-Your-Local-News-Right-Where-You-Are',
      image: PR6,
      year: '2024',
    },
    {
      id: 'direct-care-source',
      title: "Direct Care Source",
      category: 'mobApp',
      tags: ['Figma', 'UI/UX Design', 'Mobile App', 'User Research', 'Prototyping'],
      description: "From validating a concept to establishing the business/product strategy to designing the whole user experience, I help you build a successful digital product based on real user insights, while helping you to foster meaningful customer relations. Together we can ensure you are building a meaningful product that will attract new customers and keep churn low.", 
      projectUrl:
        'https://www.behance.net/gallery/198973835/NextDoor-Your-Local-News-Right-Where-You-Are',
      liveUrl:
        'https://www.behance.net/gallery/198973835/NextDoor-Your-Local-News-Right-Where-You-Are',
      image: PR7,
      year: '2024',
    },

    // {
    //   id: 'pnb-metlife',
    //   title: "PNB Metlife",
    //   category: 'webApp',
    //   tags: ['Figma', 'UI/UX Design', 'Mobile App', 'User Research', 'Prototyping'],
    //   description: "A digital platform designed to streamline and modernize the insurance sales process. The solution included features like offline access, OCR-based form auto-fill, geolocation tracking, CRM and WhatsApp integration, role-specific dashboards, and a DIY onboarding flow. It enabled field agents to operate efficiently in diverse conditions, reducing manual work and improving lead conversion.",
    //   projectUrl:
    //     'https://www.behance.net/gallery/198973835/NextDoor-Your-Local-News-Right-Where-You-Are',
    //   liveUrl:
    //     'https://www.behance.net/gallery/198973835/NextDoor-Your-Local-News-Right-Where-You-Are',
    //   image: PR7,
    //   year: '2024',
    // },


    {
      id: 'student-web',
      title: "Student Web",
      category: 'webApp',
      tags: ['Figma', 'UI/UX Design', 'Mobile App', 'User Research', 'Prototyping'],
      description: "A digital platform designed to streamline and modernize the insurance sales process. The solution included features like offline access, OCR-based form auto-fill, geolocation tracking, CRM and WhatsApp integration, role-specific dashboards, and a DIY onboarding flow. It enabled field agents to operate efficiently in diverse conditions, reducing manual work and improving lead conversion.",
      projectUrl:
        'https://www.behance.net/gallery/198973835/NextDoor-Your-Local-News-Right-Where-You-Are',
      liveUrl:
        'https://www.behance.net/gallery/198973835/NextDoor-Your-Local-News-Right-Where-You-Are',
      image: BB1,
      year: '2023',
    },


    {
      id: 'coming-soon',
      title: "Coming Soon",
      category: 'webApp',
      tags: ['React', 'Next.js', 'TypeScript', 'Innovation', 'Modern Web'],
      description: "Exciting new project in development. Stay tuned for something amazing!",
      projectUrl: '#',
      liveUrl: '#',
      image: null, // Will use interactive component instead
      year: '2025',
      isUpcoming: true,
      isInteractive: true,
    },
  ];

  // Now tabs can access projectsData
  const tabs = [
    {
      id: 'all',
      label: "All Projects",
      count: projectsData.length,
    },
    {
      id: 'mobApp',
      label: "Mobile App",
      count: projectsData.filter((p) => p.category === 'mobApp').length,
    },
    {
      id: 'webApp',
      label: "Web App",
      count: projectsData.filter((p) => p.category === 'webApp').length,
    },
  ];

  const filteredProjects =
    activeTab === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  };
  const ProjectCard = ({ project, index }) => {
    // For non-upcoming projects, wrap with glowing effect
    if (!project.isUpcoming) {
      return (
        <motion.div
          variants={projectVariants}
          layout
          className="group relative h-full flex flex-col"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* <div className="relative h-full rounded-2xl border border-neutral-800/50 p-3 overflow-hidden"> */}
          <div className="relative h-full rounded-2xl border border-neutral-800/50 p-2 md:rounded-3xl">

            <GlowingEffect
              spread={80}
              glow={true}
              disabled={false}
              proximity={120}
              inactiveZone={0.01}
              borderWidth={2}
              blur={0}
              movementDuration={1}
            />
            <div className="border-0.75 relative bg-neutral-900/50 backdrop-blur-sm rounded-xl overflow-hidden hover:border-neutral-700/50 transition-all duration-500 h-full flex flex-col">
              {/* Project Image */}
              <div className="relative h-54 overflow-hidden flex-shrink-0">
                <motion.img
                  src={project.image}
                  alt={`${project.title} - ${
                    project.category === 'mobApp'
                      ? 'mobApp Development Project'
                      : 'UI/UX Design Project'
                  } featuring ${project.tags.slice(0, 3).join(', ')} technologies`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                />
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-neutral-800/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-body text-neutral-300">{project.year}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-neutral-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-neutral-700/50">
                  <span className="text-sm font-body text-neutral-300 capitalize">
                    {project.category === 'webApp' ? 'Web App' : 'Mobile App'}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <motion.h3
                  className="text-2xl font-heading font-bold mb-3 text-neutral-100 group-hover:text-neutral-200 transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-neutral-400 font-body mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-2 py-1 bg-neutral-800/50 rounded-md text-xs font-body text-neutral-300"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(64, 64, 64, 0.8)' }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 bg-neutral-800/50 rounded-md text-xs font-body text-neutral-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 bg-neutral-200 hover:bg-white text-neutral-900 px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors duration-300 text-center flex items-center justify-center gap-2"
                  >
                    View Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 via-transparent to-neutral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </div>
          </div>
        </motion.div>
      );
    }

    // For upcoming projects, return the card with glowing effect
    return (
      <motion.div
        variants={projectVariants}
        layout
        className="group relative h-full flex flex-col"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="relative h-full rounded-2xl border border-neutral-800/50 p-2 md:rounded-3xl">
          <GlowingEffect
            spread={80}
            glow={true}
            disabled={false}
            proximity={120}
            inactiveZone={0.01}
            borderWidth={2}
            blur={0}
            movementDuration={1}
          />
          <div className="border-0.75 relative bg-black backdrop-blur-sm rounded-xl overflow-hidden hover:border-amber-400/50 transition-all duration-500 h-full flex flex-col">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden flex-shrink-0">
              {/* Interactive Coming Soon Animation */}
              <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 flex items-center justify-center relative overflow-hidden">
                {/* Animated Background Grid */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
                    {[...Array(64)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="border border-neutral-500"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [0, 0.5, 0],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.05,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Code Elements */}
                <div className="absolute inset-0">
                  {['{ }', '</>', 'npm', 'git', 'React', 'JS', 'CSS', 'HTML'].map((text, i) => (
                    <motion.div
                      key={text}
                      className="absolute text-neutral-400 font-mono text-sm"
                      style={{
                        left: `${20 + ((i * 10) % 60)}%`,
                        top: `${15 + ((i * 15) % 70)}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.7, 0.3],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      {text}
                    </motion.div>
                  ))}
                </div>

                {/* Central Icon */}
                <motion.div
                  className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <motion.svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </motion.svg>
                </motion.div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent" />

              {/* Upcoming Badge */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-amber-500/90 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/50">
                <span className="text-sm font-body text-amber-100 font-medium">
                  🚀 Coming Soon
                </span>
              </div>

              {/* Year Badge */}
              <div className="absolute top-4 right-4 bg-neutral-800/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-sm font-body text-neutral-300">{project.year}</span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              <motion.h3
                className="text-2xl font-heading font-bold mb-3 text-neutral-100 group-hover:text-neutral-200 transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-neutral-400 font-body mb-4 line-clamp-3 flex-grow">
                {project.description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 4).map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    className="px-2 py-1 bg-neutral-800/50 rounded-md text-xs font-body text-neutral-300"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(64, 64, 64, 0.8)' }}
                    transition={{ duration: 0.2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-2 py-1 bg-neutral-800/50 rounded-md text-xs font-body text-neutral-400">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <motion.div
                  className="flex-1 bg-amber-500/20 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-lg font-body text-sm font-medium text-center cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                >
                  Launching Soon
                </motion.div>
              </div>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 via-transparent to-neutral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <main className="min-h-screen overflow-hidden relative" style={{ backgroundColor: '#121212' }}>
      
      {/* Page Header */}
      <motion.section
        className="max-w-6xl  w-full mx-auto px-4 md:px-12 pt-20 pb-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-neutral-100"
            variants={fadeUpVariants}
          >
            Projects
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-400 font-body max-w-4xl mx-auto mb-6"
            variants={fadeUpVariants}
          >
            A curated collection of my mobApp development work and UI/UX design projects, showcasing modern web technologies and user-centric design principles.
          </motion.p>
        </div>

        {/* Project Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={containerVariants}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-heading font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-neutral-200 text-neutral-900 shadow-lg shadow-neutral-200/25'
                  : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/50 hover:text-neutral-300'
              }`}
              variants={tabVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {tab.label}
              <span className="ml-2 text-sm opacity-75 font-body">
                (
                {tab.id === 'all'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === tab.id).length}
                )
              </span>
            </motion.button>
          ))}
        </motion.div>
      </motion.section>



      
      {/* Projects Grid */}
      <motion.section
        className="max-w-6xl  mx-auto px-4 md:px-12 pb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {' '}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-bold text-neutral-400 mb-4">
              {t('projects.noProjectsFound')}
            </h3>
            <p className="text-neutral-500 font-body">{t('projects.noProjectsMessage')}</p>
          </motion.div>
        )}
      </motion.section>
      <Footer />
    </main>
  );
};

export default ProjectsPage;
