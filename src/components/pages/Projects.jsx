'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Projects = () => {
  const router = useRouter();
  
  // Use string paths for images in Next.js
  const PR1 = '/PR1.png';
  const PR2 = '/PR2.png';
  const PR3 = '/PR3.png';
  // Projects data with enhanced structure
  const projectsData = [
    {
      id: 'acadally-student',
      title: 'AcadAlly (Student) ',
      subtitle: 'Case Study · Ed. Tech · Mobile / Web App · 2024',
      description: 'AcadAlly is a diagnostic app that assesses students grasp of concepts through quick quizzes. If a learning gap is found, it delivers a personalized, adaptive assessment and engaging videos to reinforce understanding. Real-time reports inform students and educators about progress, highlighting areas for improvement or proficiency.',
      // features: ['Interactive Animations', 'Smooth Scrolling', 'Responsive Design'],
      technologies: ['Product Design', 'User Research', 'Prototyping', 'Figma', 'Adobe CC'],
      category: 'Mobile App Design',
      year: '2024',
      status: 'Completed',
      image: PR1,
       liveUrl: '/projects/acadally-student',
      githubUrl: 'https://github.com/himanrawat/iamart',
      featured: true,
    },
    {
      id: 'acadally-teacher',
      title: 'AcadAlly (Teacher) ',
      subtitle: 'Case study · Ed. Tech · Mobile / Web app · 2024',
      description: 'The AcadAlly Teacher Application streamlines teaching by identifying student learning gaps, enabling personalized plans for effective remediation. It reduces assessment time, tracks progress, and provides insights for refining strategies and communication. With its intuitive design, AcadAlly enhances efficiency and outcomes in modern classrooms.',
      // features: ['Community Feed', 'Local News', 'Event Discovery'],
      technologies: ['Product Design', 'User Research', 'Prototyping', 'Figma', 'Adobe CC'],
      category: 'Mobile App Design',
      year: '2024',
      status: 'Case Study',
      image: PR2,
      liveUrl: '/projects/acadally-teacher',
      featured: false,
    },
    {
      id: 'mindfulness-studio',
      title: 'Mindfulness Studio',
      subtitle: 'Case study · Mindfulness · Mobile app · 2023',
      description: 'Mindfulness Studio is a meditation app that offers personalized routines based on the time of day — morning, afternoon, and night. Users can create custom courses to manage stress, improve sleep, boost energy, or increase happiness. The app tracks progress through a user profile and sends reminder notifications to help users stay consistent with their practice.',
      // features: ['Location Discovery', 'Travel Planning', 'Community Reviews'],
      technologies: ['Product Design', 'User Research', 'Prototyping', 'Figma', 'Adobe CC'],
      category: 'Mobile App Design',
      year: '2024',
      status: 'Case Study',
      image: PR3,
      liveUrl: '/projects/mindfulness-studio',
      githubUrl: 'https://github.com/himanrawat/wanderlust-woof',
      featured: false,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 30,
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

  const slideInVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;
    return (
      <motion.div
        className={`grid lg:grid-cols-2 gap-4 sm:gap-8 md:gap-12 items-center ${
          !isEven ? 'lg:grid-flow-col-dense' : ''
        }`}
        variants={cardVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Project Image */}
        <motion.div
          className={`relative group ${!isEven ? 'lg:order-2' : ''}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent z-10" />
            {/* Project image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />{' '}
            {/* Status badge */}
            <div className="absolute top-3 md:top-4 left-3 md:left-4 z-20">
              <span className="px-2 md:px-3 py-1 rounded-full text-xs font-medium bg-neutral-800/80 text-neutral-200 border border-neutral-600">
                {project.status}
              </span>
            </div>
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-3 md:top-4 right-3 md:right-4 z-20">
                <span className="px-2 md:px-3 py-1 bg-neutral-800/80 text-neutral-200 rounded-full text-xs font-medium border border-neutral-600">
                  Featured
                </span>
              </div>
            )}{' '}
            {/* Action buttons overlay */}
            <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center justify-center gap-3 md:gap-4">
              <motion.a
                href={project.liveUrl}
                className="px-4 md:px-6 py-2 md:py-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 hover:border-neutral-500 rounded-full text-neutral-200 font-medium transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {' '}
                <svg
                  className="w-3 md:w-4 h-3 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span className="hidden sm:inline">View Case Study</span>
                <span className="sm:hidden">Case Study</span>
              </motion.a>{' '}
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`space-y-2 md:space-y-4 ${!isEven ? 'lg:order-1' : ''}`}
          variants={staggerContainerVariants}
        >
         
          <motion.div className="flex items-center gap-3 md:gap-4" variants={fadeUpVariants}>
            <span className="text-xs md:text-sm font-medium text-neutral-400">
              {project.category}
            </span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
            <span className="text-xs md:text-sm font-medium text-neutral-400">{project.year}</span>
          </motion.div>
          
          <motion.div variants={fadeUpVariants}>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-100 mb-2">
              {project.title}
            </h3>
            <p className="text-lg md:text-xl text-neutral-300 font-light">{project.subtitle}</p>
          </motion.div>
          
          <motion.p
            className="font-body text-sm md:text-base text-neutral-400 leading-relaxed"
            variants={fadeUpVariants}
          >
            {project.description}
          </motion.p>{' '}
          <motion.div variants={fadeUpVariants}>
            <h4 className="font-heading font-semibold text-neutral-200 mb-2 md:mb-3 text-sm md:text-base">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1 md:gap-2">
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="px-2 md:px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-xs font-medium text-neutral-300 hover:bg-neutral-700/50 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  variants={fadeUpVariants}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <motion.div
        className="relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {' '}
        {/* Subtle geometric background pattern */}
        <div className="absolute inset-0 opacity-3 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-neutral-700 rounded-full" />
          <div className="absolute top-40 right-10 w-16 h-16 border border-neutral-800 rotate-45" />
          <div className="absolute bottom-40 left-40 w-24 h-24 border border-neutral-700 rounded-full" />
          <div className="absolute bottom-20 right-20 w-12 h-12 border border-neutral-800" />
        </div>{' '}




        {/* Main Projects Section */}
        <section className="pt-8 md:pt-12 pb-12 md:pb-16 max-w-6xl  w-full mx-auto px-4 sm:px-6 md:px-12 xl:px-0">
          <motion.div className="mb-12 sm:mb-16 md:mb-20 text-center" variants={containerVariants}>
            <motion.div variants={fadeUpVariants}>
              <motion.div
                className="text-center mb-8 sm:mb-12"
                variants={fadeUpVariants}
              >
                <motion.h2
                  className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-2 sm:mb-6"
                  variants={fadeUpVariants}
                >
                  Featured Projects
                </motion.h2>
                <motion.div className="max-w-4xl mx-auto mb-3" variants={fadeUpVariants}>
                  <p className="font-body text-base sm:text-lg font-light text-neutral-300 leading-relaxed">
                    Discover my latest work featuring innovative web applications, creative designs, and technical solutions that showcase modern development practices.
                  </p>
                </motion.div>
                <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
              </motion.div>

              {/* Project Statistics */}
              <motion.div
                className="max-w-4xl mx-auto p-6 md:p-8 border border-neutral-700 rounded-2xl bg-gradient-to-r from-neutral-900/60 to-neutral-800/40 backdrop-blur-sm"
                variants={fadeUpVariants}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-neutral-100 mb-1 md:mb-2">
                      10+
                    </div>{' '}
                    <div className="text-xs md:text-sm text-neutral-400 font-medium">
                    Industries Experience
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">
                      AI, Ed.Tech, Fintech, Healthcare & More
                    </div>
                  </div>
                  <div className="text-center border-t sm:border-t-0 sm:border-x border-neutral-700 pt-6 sm:pt-0">
                    <div className="text-2xl md:text-3xl font-bold text-neutral-100 mb-1 md:mb-2">
                      20+
                    </div>
                    <div className="text-xs md:text-sm text-neutral-400 font-medium">
                      Happy Clients
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">
                      Satisfied with Results
                    </div>
                  </div>
                  <div className="text-center border-t sm:border-t-0 border-neutral-700 pt-6 sm:pt-0">
                    <div className="text-2xl md:text-3xl font-bold text-neutral-100 mb-1 md:mb-2">
                      20+
                    </div>
                    <div className="text-xs md:text-sm text-neutral-400 font-medium">
                      Projects Delivered
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">
                      Successfully Completed
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>




          {/* Projects Grid */}
          <motion.div className="space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-32" variants={containerVariants}>
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>{' '}


          {/* View More Projects CTA Card */}
          <motion.div
            className="mt-16 md:mt-24 relative group"
            variants={cardVariants}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="relative overflow-hidden border border-neutral-700 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 backdrop-blur-sm">
              {' '}
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-6 md:top-10 left-6 md:left-10 w-24 md:w-32 h-24 md:h-32 border border-neutral-600 rounded-full" />
                <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 w-16 md:w-24 h-16 md:h-24 border border-neutral-600" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 md:w-40 h-32 md:h-40 border border-neutral-600 rounded-full" />
              </div>
              {/* Content */}
              <div className="relative p-8 md:p-12 lg:p-16 text-center">
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-100 mb-3 md:mb-4">
                  Interested in More Work?
                </h3>
                <p className="font-body text-base sm:text-lg md:text-xl text-neutral-300 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed">
                  Explore my complete portfolio to see more projects, experiments, and case studies that demonstrate my expertise in modern web development.
                </p>{' '}
                {/* Statistics */}{' '}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6 md:mb-8 text-xs md:text-sm text-neutral-400">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-neutral-500" />
                    <span>15+ Live Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-neutral-500" />
                    <span>Open Source</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-neutral-500" />
                    <span>Case Studies</span>
                  </div>
                </div>{' '}
                {/* CTA Button */}
                <motion.div className="inline-block">
                  <button
                    onClick={() => {
                      console.log('Navigating to /projects');
                      router.push('/projects');
                    }}
                    className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-neutral-200 to-neutral-100 text-neutral-900 font-semibold rounded-xl hover:from-neutral-100 hover:to-neutral-50 transition-all duration-300 group cursor-pointer relative z-10 text-sm md:text-base"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 md:gap-3"
                    >
                      <span>View All Projects</span>
                      <motion.svg
                        className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </motion.svg>
                    </motion.div>
                  </button>
                </motion.div>
              </div>{' '}
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/10 to-neutral-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>
        </section>
      </motion.div>
    </main>
  );
};

export default Projects;
