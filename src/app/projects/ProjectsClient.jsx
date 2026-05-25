'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { GlowingEffect } from '../../components/ui/glowing-effect';
import Footer from '../../components/pages/Footer';

const projectsData = [
  {
    id: 'acadally-student',
    title: 'AcadAlly (Student)',
    category: 'mobApp',
    tags: ['Figma', 'UX Research', 'Prototyping', 'User Testing'],
    description:
      "AcadAlly is a diagnostic app that assesses students' grasp of concepts through quick quizzes. If a learning gap is found, it delivers a personalized, adaptive assessment and engaging videos to reinforce understanding. Real-time reports inform students and educators about progress, highlighting areas for improvement or proficiency.",
    image: '/PR1.png',
    year: '2024',
  },
  {
    id: 'acadally-teacher',
    title: 'AcadAlly (Teacher)',
    category: 'mobApp',
    tags: ['Figma', 'UI/UX Design', 'Responsive Design', 'Dashboard Design'],
    description:
      'The AcadAlly Teacher Application streamlines teaching by identifying student learning gaps, enabling personalized plans for effective remediation. It reduces assessment time, tracks progress, and provides insights for refining strategies and communication.',
    image: '/PR2.png',
    year: '2024',
  },
  {
    id: 'mindfulness-studio',
    title: 'Mindfulness Studio',
    category: 'mobApp',
    tags: ['Figma', 'Mobile UX', 'User Research', 'Interaction Design'],
    description:
      'Mindfulness Studio is a meditation app that offers personalized routines based on the time of day — morning, afternoon, and night. Users can create custom courses to manage stress, improve sleep, boost energy, or increase happiness.',
    image: '/PR3.png',
    year: '2024',
  },
  {
    id: 'gexa-energy',
    title: 'Gexa Energy',
    category: 'mobApp',
    tags: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing'],
    description:
      'Gexa Energy provides an effortless way to manage your electricity needs. Track usage over time, view and pay bills with ease, and customize account preferences. A smart, centralized dashboard offers an at-a-glance view of your energy usage, bills, and other essential data.',
    image: '/PR4.png',
    year: '2024',
  },
  {
    id: 'thats-my-jam',
    title: "That's My Jam",
    category: 'mobApp',
    tags: ['Figma', 'UI/UX Design', 'Mobile App', 'User Research', 'Prototyping'],
    description:
      "That's My Jam is a music discovery app that connects users with local artists and events. It features personalized playlists, event recommendations, and a social platform for sharing music tastes.",
    image: '/PR5.png',
    year: '2024',
  },
  {
    id: 'adaelo',
    title: 'Adaelo',
    category: 'mobApp',
    tags: ['Figma', 'UI/UX Design', 'Mobile App', 'User Research', 'Prototyping'],
    description:
      'Adaelo Music is an application designed to revolutionize the way artists, licensees, and label owners interact and collaborate within the music industry. With a focus on simplicity, accessibility, and empowerment.',
    image: '/PR6.png',
    year: '2024',
  },
  {
    id: 'direct-care-source',
    title: 'Direct Care Source',
    category: 'mobApp',
    tags: ['Figma', 'UI/UX Design', 'Mobile App', 'User Research', 'Prototyping'],
    description:
      'From validating a concept to establishing the business/product strategy to designing the whole user experience, I help you build a successful digital product based on real user insights, while helping you to foster meaningful customer relations.',
    image: '/PR7.png',
    year: '2024',
  },
  {
    id: 'student-web',
    title: 'Student Web',
    category: 'webApp',
    tags: ['Figma', 'UI/UX Design', 'Web App', 'User Research', 'Prototyping'],
    description:
      'A digital platform designed to streamline and modernize the student experience. The solution included features like offline access, OCR-based form auto-fill, role-specific dashboards, and a DIY onboarding flow.',
    image: '/BB1.png',
    year: '2023',
  },
  {
    id: 'coming-soon',
    title: 'Coming Soon',
    category: 'webApp',
    tags: ['React', 'Next.js', 'TypeScript', 'Innovation', 'Modern Web'],
    description: 'Exciting new project in development. Stay tuned for something amazing!',
    image: null,
    year: '2025',
    isUpcoming: true,
  },
];

const tabs = [
  { id: 'all',    label: 'All Projects',  count: projectsData.length },
  { id: 'mobApp', label: 'Mobile App',    count: projectsData.filter((p) => p.category === 'mobApp').length },
  { id: 'webApp', label: 'Web App',       count: projectsData.filter((p) => p.category === 'webApp').length },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const projectVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
};

function ProjectCard({ project, index }) {
  if (project.isUpcoming) {
    return (
      <motion.div
        variants={projectVariants}
        layout
        className="group relative h-full flex flex-col"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="relative h-full rounded-2xl border border-neutral-800/50 p-2 md:rounded-3xl">
          <GlowingEffect spread={80} glow proximity={120} inactiveZone={0.01} borderWidth={2} blur={0} movementDuration={1} />
          <div className="relative bg-black rounded-xl overflow-hidden h-full flex flex-col">
            <div className="relative h-64 overflow-hidden flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
              </div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-amber-500/90 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/50">
                <span className="text-sm font-body text-amber-100 font-medium">Coming Soon</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-heading font-bold mb-3 text-neutral-100">{project.title}</h3>
              <p className="text-neutral-400 font-body mb-4 line-clamp-3 flex-grow">{project.description}</p>
              <div className="flex gap-3 mt-auto">
                <div className="flex-1 bg-amber-500/20 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-lg font-body text-sm font-medium text-center cursor-not-allowed">
                  Launching Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={projectVariants}
      layout
      className="group relative h-full flex flex-col"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="relative h-full rounded-2xl border border-neutral-800/50 p-2 md:rounded-3xl">
        <GlowingEffect spread={80} glow proximity={120} inactiveZone={0.01} borderWidth={2} blur={0} movementDuration={1} />
        <div className="relative bg-neutral-900/60 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 h-full flex flex-col">

          {/* Project Image */}
          <div className="relative h-54 overflow-hidden flex-shrink-0">
            <Image
              src={project.image}
              alt={`${project.title} — ${project.category === 'mobApp' ? 'Mobile App' : 'Web App'} UI/UX Design Case Study`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={index < 3}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent" />
          </div>

          {/* Project Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-heading font-bold mb-2 text-neutral-100 group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-neutral-400 font-body text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-neutral-800/80 border border-neutral-700/60 rounded-md text-xs font-body text-neutral-400 hover:text-neutral-300 hover:border-neutral-600/60 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="px-2.5 py-1 bg-neutral-800/80 border border-neutral-700/60 rounded-md text-xs font-body text-neutral-500">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>

            <div className="flex gap-3 mt-auto">
              <Link
                href={`/projects/${project.id}`}
                className="group/btn flex-1 relative overflow-hidden bg-white text-neutral-900 px-5 py-2.5 rounded-xl font-body text-sm font-semibold transition-all duration-300 text-center flex items-center justify-center gap-2 hover:shadow-[0_0_28px_rgba(255,255,255,0.28)] hover:scale-[1.02] active:scale-[0.98]"
                aria-label={`View ${project.title} case study`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Case Study
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                {/* Shimmer sweep on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsClient() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects =
    activeTab === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <main className="min-h-screen overflow-hidden relative" style={{ backgroundColor: '#121212' }}>
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-indigo-500/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Page Header */}
      <motion.section
        className="max-w-6xl w-full mx-auto px-4 md:px-12 pt-20 pb-12 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
            variants={fadeUpVariants}
          >
            <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-neutral-400 font-body max-w-2xl mx-auto mb-6 leading-relaxed"
            variants={fadeUpVariants}
          >
            A curated collection of my UI/UX design work — showcasing user research, design systems,
            and human-centered design solutions for B2B and B2C products.
          </motion.p>
        </div>

        {/* Project Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          variants={containerVariants}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`px-6 py-2.5 rounded-full font-heading font-medium transition-all duration-300 text-sm ${
                activeTab === tab.id
                  ? 'bg-white text-neutral-900 shadow-lg shadow-white/20'
                  : 'bg-neutral-800/60 text-neutral-400 hover:bg-neutral-700/60 hover:text-neutral-200 border border-neutral-700/50'
              }`}
              variants={tabVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
              <span className={`ml-2 text-xs font-body ${activeTab === tab.id ? 'opacity-60' : 'opacity-50'}`}>
                ({tab.count})
              </span>
            </motion.button>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        className="max-w-6xl mx-auto px-4 md:px-12 pb-20 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        aria-label="Portfolio projects grid"
      >
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

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-bold text-neutral-400 mb-4">
              No projects found
            </h3>
            <p className="text-neutral-500 font-body">Try selecting a different category.</p>
          </motion.div>
        )}
      </motion.section>

      <Footer />
    </main>
  );
}
