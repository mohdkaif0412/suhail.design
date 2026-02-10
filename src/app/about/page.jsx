'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/pages/Footer';
import ProfessionalJourney from '../../components/pages/ProfessionalJourney';
import { updatePageSEO, injectAboutPageSchemas } from '../../utils/seoUtils';


const journeyData = [
  {
    id: 1,
    year: '',
    badge: '',
    badgeColor: 'bg-neutral-700',
    title: 'This is my story — alongside some flicks from my recent trip.',
    description: '',
    image: '/jr1.png',
    alt: 'Journey moment 2019',
    layout: 'left',
    animation: { x: -50 },
  },
  {
    id: 2,
    year: '2010',
    badge: '2010',
    badgeColor: 'bg-neutral-700',
    title: 'The Early Days of "Designing" (More Like Clicking Random Buttons in Photoshop)',
    description:
      'My design journey began in 2010 when, at 14, after my 10th board exams, my father enrolled me in a computer institute during a three-month break. There, I was introduced to design tools like Photoshop, Corel Draw and Adobe PageMaker. quickly found myself engrossed in creating web pages, logos, and posters.\n\nBy the age of 16, I had an epiphany – design was my true calling. Driven by this realization, I expanded my skills to include HTML and CSS, laying the foundation for my future in product design.',
    image: '/jr2.png',
    alt: 'Journey moment 2021',
    layout: 'right',
    animation: { x: 50 },
  },
  {
    id: 3,
    year: '2015',
    badge: '2015',
    badgeColor: 'bg-neutral-700',
    title: 'Bachelor of Arts – The “Let’s Figure Out What’s Next” Chapter',
    description: "When I finished 12th grade, I found myself at a fork in the road. I knew I loved design, but there was no 'Bachelor's in UI/UX Design' course at my fingertips, and mentors? I didn’t even know such people existed! So, I took the safe route and pursued a Bachelor's degree in Arts.\n\nThe decision was more of a stopgap, a way to keep exploring while figuring out what I truly wanted. Though it wasn’t directly linked to design, it gave me time to understand my aspirations and, most importantly, develop a strong appreciation for the bigger picture in creativity.",
    image: '/jr3.png',
    alt: 'Journey moment 2022',
    layout: 'left',
    animation: { x: -50 },
  },
  {
    id: 4,
    year: '2019',
    badge: '2019',
    badgeColor: 'bg-neutral-700',
    title: 'Diploma in Graphic and Web Design – Time to Get Serious!',
    description:'After graduating, I hit another crossroads. My interest in design was no longer just a hobby – it was now a full-blown obsession. I realized it was time to go pro. So, I took a leap of faith and enrolled in Arena Animation’s diploma program for Graphic and Web Design and Development. \n\nThis was my official foray into structured design education. It was here that I refined my craft, learning the nitty-gritty of design and development. This wasn’t just a course—it was my launchpad.',
    image: '/jr4.png',
    alt: 'Journey moment 2023',
    layout: 'right',
    animation: { x: 50 },
  },
  {
    id: 5,
    year: '2020',
    badge: '2020',
    badgeColor: 'bg-neutral-700',
    animate: true,
    title: 'Masters in Computer Application – Because Why Not Combine Art with Science?',
    description: 'While I was designing away, I had a realization: to stand out in the UI/UX world, I needed to understand the technical side of things, too. So, I jumped into a Master’s program in Computer Applications, where I delved into tech wizardry and decoded the science behind design. \n\nThis wasn’t just about bagging a degree. It was a calculated move to blend my creative skills with technical expertise. By the end of the program, I felt like a UI/UX designer with a superpower—a fusion of art and code.',
    image: '/jr5.png',
    alt: 'Journey moment 2024',
    layout: 'left',
    animation: { y: 50 },
  },
  {
    id: 6,
    year: '2021',
    badge: '2021',
    badgeColor: 'bg-neutral-700',
    title: 'Internship at Copper Digital – The “Big Break” (And the Coffee Runs)',
    description: `The pivotal moment came when I joined Copper Digital as a UI/UX intern. I expected to be a spectator, fetching coffee and taking notes, but within 25 days, I found myself working on a live project! Turns out, they trusted me with real-world challenges faster than I could down my first cappuccino.

    Over the next 2.5 years, I got to work on more than 15 different products, spanning industries I had only read about in business magazines. My experience at Copper Digital was like a design bootcamp on steroids. I got to:
    * Test my theories in the wild.
    * Experiment with new design tools (and break a few prototypes).
    * Juggle multiple projects, all while becoming a human sponge soaking up industry knowledge.

      It was an exhilarating ride that armed me with a portfolio of live, impactful projects and an unshakeable confidence in my abilities.`,
    image: '/jr6.png',
    alt: 'First freelance project',
    layout: 'right',
    animation: { x: 50 },
  },
  {
    id: 7,
    year: '2023',
    badge: '2023',
    badgeColor: 'bg-neutral-700',
    title: 'Leveling Up',
    description:'After that i have joined acadally as a product designer where i have shaped my UI UX designer process and learned and enhanced my UX Skills.',
    image: '/jr7.png',
    alt: 'Portfolio building journey',
    layout: 'left',
    animation: { x: -50 },
  },
];

// Friends Data
const friendsData = [
  {
    id: 1,
    name: 'Paras Mani',
    role: 'UI UX Design Lead',
    image: '/frnd1.png',
    socialPlatform: 'Instagram',
    socialLink: '#',
    delay: 0.1,
  },
  {
    id: 2,
    name: 'Atul Dogra',
    role: 'Sr. UI UX Designer',
    image: '/frnd2.png',
    socialPlatform: 'LinkedIn',
    socialLink: '#',
    delay: 0.2,
  },
  {
    id: 3,
    name: 'Pramod Kumar',
    role: 'Sr. UI UX Designer',
    image: '/frnd3.png',
    socialPlatform: 'LinkedIn',
    socialLink: '#',
    delay: 0.3,
  },
  {
    id: 4,
    name: 'Rajat Thakur',
    role: 'Sr. UI UX Designer',
    image: '/frnd4.png',
    socialPlatform: 'LinkedIn',
    socialLink: '#',
    delay: 0.4,
  },
  {
    id: 5,
    name: 'P. V. Dinesh',
    role: 'Product Owner',
    image: '/frnd5.png',
    socialPlatform: 'LinkedIn',
    socialLink: '#',
    delay: 0.5,
  },
  {
    id: 6,
    name: 'Prabhu Yadav',
    role: 'Product Manager',
    image: '/frnd6.png',
    socialPlatform: 'LinkedIn',
    socialLink: '#',
    delay: 0.6,
  },
  {
    id: 7,
    name: 'Mridul Sachdeva',
    role: 'Product Manager',
    image: '/frnd7.png',
    socialPlatform: 'LinkedIn',
    socialLink: '#',
    delay: 0.7,
    isCenter: true,
  },
];

const AboutPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    // Enhanced SEO optimization for about page
    updatePageSEO('about', {
      title: `About Mohd Suhail - Senior UI/UX Designer | Professional Journey & Skills`,
      description:
        'Learn about Mohd Suhail, a Senior UI/UX Designer with 3+ years of experience in creating user-centered designs. Discover his professional journey, technical skills, project expertise, and passion for crafting exceptional user experiences.',
      canonical: 'https://www.Suhail.in/about',
      ogTitle:
        'About Mohd Suhail - Senior UI/UX Designer | Professional Background & Skills',
      ogDescription:
        'Learn about Mohd Suhail, Senior UI/UX Designer with 3+ years experience in creating user-centered designs. Professional journey, skills, and expertise.',
      ogUrl: 'https://www.Suhail.in/about',
      twitterTitle: 'About Mohd Suhail - Senior UI/UX Designer',
      twitterDescription:
        'Professional background and skills of Mohd Suhail, Senior UI/UX Designer specializing in user-centered design and modern design methodologies.',
    });
  }, [t]);

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
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl w-full mx-auto px-4 md:px-12 pt-20  pb-8 sm:pb-12"
      >
        <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-2 sm:mb-6 leading-tight text-neutral-100"
          >
            My Journey
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-xl text-neutral-400 font-body max-w-4xl mx-auto mb-6"
          >
            I'm passionate about creating beautiful products that empower people.
          </motion.h2>
        </motion.div>
      </motion.section>

      {/* ===================================================== */}
      {/* =====================journey ========================= */}

      {/* Journey Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="max-w-6xl  mx-auto px-4 md:px-12 py-8 sm:py-20 space-y-12 sm:space-y-20"
      >
        {/* Journey Timeline */}
        
          {journeyData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, ...item.animation }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-50px' }}
              className={`flex flex-col ${
                item.layout === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-4 md:gap-8`}
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: item.layout === 'right' ? -1 : 1 }}
                transition={{ duration: 0.3 }}
                className="lg:w-1/2"
              >
                <div className="relative overflow-hidden rounded-3xl border border-neutral-700 bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm  px-2 py-2">
                  <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="lg:w-1/2 space-y-6">
                <div
                  className={`inline-block px-3 py-1 text-xs font-mono text-white mb-2 ${
                    item.badgeColor
                  } rounded-full ${item.animate ? 'animate-pulse' : ''}`}
                >
                  {item.badge}
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-neutral-100 mb-4">{item.title}</h3>
                {item.description.split('\n\n').map((para, idx) => {
                  const lines = para.split('\n');
                  const bulletLines = lines.filter(line => line.trim().startsWith('*'));
                  if (bulletLines.length > 0) {
                    return (
                      <React.Fragment key={idx}>
                        {lines.map((line, i) => {
                          if (line.trim().startsWith('*')) {
                            return null;
                          } else if (line.trim() !== '') {
                            return (
                              <p key={i} className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                                {line}
                              </p>
                            );
                          } else {
                            return null;
                          }
                        })}
                        <ul className="list-disc pl-6 text-sm sm:text-base text-neutral-400 leading-relaxed">
                          {bulletLines.map((line, i) => (
                            <li key={i}>{line.replace(/^\*\s*/, '').replace(/^\*+\s*/, '')}</li>
                          ))}
                        </ul>
                      </React.Fragment>
                    );
                  }
                  // Normal paragraph
                  return (
                    <p key={idx} className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                      {para}
                    </p>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
      </motion.section>







      {/* ==================================================================== */}
      {/* ===================== Professional journey ========================= */}

      <ProfessionalJourney 
        containerVariants={containerVariants}
        fadeUpVariants={itemVariants}
        slideInVariants={itemVariants}
        cardVariants={itemVariants}
      />

      {/* ----------------- Friends -------------------- */}

      {/* Friends Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="max-w-6xl  mx-auto px-4 md:px-12 py-12 sm:py-20"
      >
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
        >
          <motion.h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            variants={itemVariants}
          >
             Friends I've Made Along The Way
          </motion.h2>
          <motion.div className="max-w-4xl mx-auto mb-3" variants={itemVariants}>
            <p className="font-body text-lg font-light text-neutral-300 leading-relaxed">
              Designers / Manager who helped me become the designer I am today.
            </p>
          </motion.div>
          <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Friends Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {friendsData.map((friend) => (
            <motion.div
              key={friend.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: friend.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group`}
            >
              <div className="relative p-6 bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 rounded-xl border border-neutral-700 hover:border-neutral-500 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <img
                      src={friend.image}
                      alt={friend.name}
                      className="w-24 h-24 rounded-xl object-cover border-2 border-neutral-600 group-hover:border-neutral-400 transition-colors duration-300"
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neutral-100 transition-colors duration-300">
                      {friend.name}
                    </h3>
                    <p className="text-neutral-400 text-sm font-medium mb-3 group-hover:text-neutral-300 transition-colors duration-300">
                      {friend.role}
                    </p>
                    <motion.a
                      href={friend.socialLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-700 hover:bg-neutral-600 text-white text-xs font-medium rounded-lg transition-colors duration-300"
                    >
                      <span>{friend.socialPlatform}</span>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <Footer />
    </main>
  );
};

export default AboutPage;
