'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../../components/pages/Footer';
import RelatedWork from '../../../components/RelatedWork';
import { Gexa, GexaVS, G1, G2, G3, G4, G5, G6, G7, G8, G9a, G9b, G9c, G9d, G9e, G10, G11, G12, G13} from '../../../data/caseStudyImage';


const GexaEnergy = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <main className="min-h-screen bg-[#121212] text-white">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto pt-32 pb-20"
        >
        <motion.div variants={itemVariants} className="mb-16">
          <img
            src={Gexa}
            alt="Gexa Energy App"
            className="w-full mx-auto rounded-2xl shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={100}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          {/* Key Highlights Section */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-100 mb-6" data-aos="fade-up" data-aos-delay={150}>Key Highlights</h2>
            <ul className="space-y-1.5 md:space-y-2"  data-aos="fade-up" data-aos-delay={120}>
              <motion.li
                className="flex items-start gap-2 md:gap-3 text-neutral-400"
                variants={fadeUpVariants}
              >
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-blue-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                <span className="text-xs md:text-sm leading-relaxed">Track your electricity usage over time</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-2 md:gap-3 text-neutral-400"
                variants={fadeUpVariants}
              >
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-blue-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                <span className="text-xs md:text-sm leading-relaxed">View your bill and manage your payments</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-2 md:gap-3 text-neutral-400"
                variants={fadeUpVariants}
              >
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-blue-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                <span className="text-xs md:text-sm leading-relaxed">Change your account preferences</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-2 md:gap-3 text-neutral-400"
                variants={fadeUpVariants}
              >
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-blue-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                <span className="text-xs md:text-sm leading-relaxed">Review your plan details and renew with ease</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-2 md:gap-3 text-neutral-400"
                variants={fadeUpVariants}
              >
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-blue-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                <span className="text-xs md:text-sm leading-relaxed">Quickly view data on your smart devices, bill, and other important metrics aglance and all in one place.</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-2 md:gap-3 text-neutral-400"
                variants={fadeUpVariants}
              >
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-blue-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                <span className="text-xs md:text-sm leading-relaxed">Control your connected smart thermostat(s) from anywhere, anytime using the mobile app</span>
              </motion.li>
            </ul>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t-2 border-neutral-700" data-aos="fade-up" data-aos-delay={250}>
              <div>
                <h4 className="text-lg font-semibold mb-2">Duration</h4>
                <p className="text-neutral-400">12 Months</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">App Screens</h4>
                <p className="text-neutral-400">1000+</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Tools</h4>
                <p className="text-neutral-400">Figma, Photoshop, Illustrator, Google docs</p>
              </div>
            </div>



            <div className="mt-10 pt-8 border-t-2 border-neutral-700">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-100 mb-6" data-aos="fade-up" data-aos-delay={200}>MY ROLE</h2>
              <p className="text-neutral-300 mb-4" data-aos="fade-up" data-aos-delay={250}>As a UI UX designer I was responsible for:</p>
              <ul className="space-y-1.5 md:space-y-2" data-aos="fade-up" data-aos-delay={250}>
                <motion.li
                  className="flex items-start gap-2 md:gap-3 text-neutral-400"
                  variants={fadeUpVariants}
                >
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-green-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <span className="text-xs md:text-sm leading-relaxed">Secondary and competitive research</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2 md:gap-3 text-neutral-400"
                  variants={fadeUpVariants}
                >
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-green-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <span className="text-xs md:text-sm leading-relaxed">Process Flow</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2 md:gap-3 text-neutral-400"
                  variants={fadeUpVariants}
                >
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-green-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <span className="text-xs md:text-sm leading-relaxed">Design System (Style Guide)</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2 md:gap-3 text-neutral-400"
                  variants={fadeUpVariants}
                >
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-green-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <span className="text-xs md:text-sm leading-relaxed">Interaction design</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2 md:gap-3 text-neutral-400"
                  variants={fadeUpVariants}
                >
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-green-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <span className="text-xs md:text-sm leading-relaxed">UI design</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2 md:gap-3 text-neutral-400"
                  variants={fadeUpVariants}
                >
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-green-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <span className="text-xs md:text-sm leading-relaxed">Wireframes</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2 md:gap-3 text-neutral-400"
                  variants={fadeUpVariants}
                >
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-green-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <span className="text-xs md:text-sm leading-relaxed">Prototyping</span>
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>


        <motion.div variants={itemVariants}>
          <div className="bg-[#1a1a1a] rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-flex-start">
              {/* Problem Statement */}
              <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay={200}>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-[#36A629] mb-4 uppercase tracking-wide">
                  PROBLEM STATEMENT
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  We already have a website that allows users to view their consumption history, pay bills, and manage their energy usage, however, user feedback suggests that the flow and navigation of the website is not meeting their expectations. To address these concerns and enhance the user experience, users are asking for a mobile application with improved flow and navigation. This will provide users with a more convenient and user-friendly solution for managing their energy consumption and payments.
                </p>
              </div>

              {/* VS Lightning Bolt */}
              <div className="lg:col-span-1 flex justify-center" data-aos="fade-up" data-aos-delay={250}>
                <img src={GexaVS} alt="VS" className="w-18" />
              </div>

              {/* Possible Solution */}
              <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay={300}>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-[#36A629] mb-4 uppercase tracking-wide">
                  POSSIBLE SOLUTION
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Native mobile applications with all the features which are easy to use and navigate with the help user interviews and discovery so that product can be as user needs and if needed any additional features to make the mobile application more smoother and user friendly.
                </p>
              </div>
            </div>
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className="mt-16">
          <motion.div className="text-center mb-16" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              >
                MY DESIGN PROCESS
              </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
            <img src={G1} alt="New Section" className="w-full " data-aos="fade-up" data-aos-delay={250} />
        </motion.div>


        <motion.div variants={itemVariants} className="mt-16">
          <motion.div className="text-center mb-8" data-aos="fade-up" data-aos-delay={200}>
              <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              USER INTERVIEW QUESTIONS
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <p className="text-lg text-neutral-400 leading-relaxed" data-aos="fade-up" data-aos-delay={250}>
            After carefully reviewing the creative brief for the project and conducting stakeholders interviews, we have crafted a series of questions to gain a deeper understanding of the desired features and existing plans. To gather insights from our target audience, we conducted user interviews and asked the following questions to better inform the development of our project.
          </p>

          <img src={G2} alt="New Section" className="w-full mt-10" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>


        <motion.div variants={itemVariants} className="mt-16">
          <motion.div className="text-center mb-8" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              >
                COMPETITIVE ANALYSIS
              </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <p className="text-lg text-neutral-400 leading-relaxed" data-aos="fade-up" data-aos-delay={250}>
            Competitive analysis is the process of identifying competitors and evaluating their strategies in order to determine their weaknesses and strengths in order to better your own company. I did a research looking for similar products and compared few websites.
          </p>

          <img src={G3} alt="New Section" className="w-full mt-10" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>


        <motion.div variants={itemVariants} className="mt-16">
          <motion.div className="text-center mb-8" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              variants={fadeUpVariants}
            >
              COMPETITIVE ANALYSIS
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <p className="text-lg text-neutral-400 leading-relaxed" data-aos="fade-up" data-aos-delay={250}>
            Competitive analysis is the process of identifying competitors and evaluating their strategies in order to determine their weaknesses and strengths in order to better your own company. I did a research looking for similar products and compared few websites.
          </p>

          <img src={G3} alt="New Section" className="w-full mt-10" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>


        <motion.div variants={itemVariants} className="mt-16">
          <motion.div className="text-center mb-8" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              >
                USER PERSONAS
              </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <p className="text-lg text-neutral-400 leading-relaxed" data-aos="fade-up" data-aos-delay={250}>
            To ensure that our product design efforts were centered around the needs and preferences of our target user group, I created comprehensive user personas. The personas were created based on the results of extensive research and analysis of the target user group's demographics, motivations, pain points, and goals. By creating these personas, I was able to synthesize the information gathered from the research into a visual representation of our target user, which was used to guide all product design decisions.
          </p>

          <img src={G4} alt="New Section" className="w-full mt-10" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>


        <motion.div variants={itemVariants} className="mt-16">
          <motion.div className="text-center mb-8" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              >
                EMPATHY MAP
              </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <p className="text-lg text-neutral-400 leading-relaxed" data-aos="fade-up" data-aos-delay={250}>
          The empathy mapping method allowed me to gain a thorough understanding of the user's thoughts, feelings, needs, and motivations, which helped me to better understand their decision-making processes and behaviors. This approach helped me to develop a deep connection with the user and provided me with valuable insights that were critical to creating a more user-centered product.
          </p>

          <img src={G5} alt="New Section" className="w-full mt-10" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>


        <motion.div variants={itemVariants} className="mt-16">
          <motion.div className="text-center mb-8" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              >
                INFORMATION ARCHITECTURE
              </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <p className="text-lg text-neutral-400 leading-relaxed" data-aos="fade-up" data-aos-delay={250}>
            After conducting thorough research and engaging in collaborative discussions with the team and stakeholders, we have arrived at a comprehensive list of key features and sub-features for our project. These features were carefully selected based on their relevance and impact on our target audience, and will play a crucial role in delivering a successful and effective solution.
          </p>

          <img src={G6} alt="New Section" className="w-full mt-10" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>


        <motion.div variants={itemVariants} className="mt-16">
          <motion.div className="text-center mb-8" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              >
                PROCESS FLOW
              </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <p className="text-lg text-neutral-400 leading-relaxed" data-aos="fade-up" data-aos-delay={250}>
            The detailed user journey, end-to-end use cases, and business logic for each scenario are thoroughly documented in the process flow. This comprehensive flowchart outlines the steps involved in using the application, including the interactions between the user, the application, and the system. This will provide a clear understanding of the entire user experience and help ensure a smooth and seamless implementation of the solution.
          </p>

          <img src={G7} alt="New Section" className="w-full mt-10" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>


        <motion.div variants={itemVariants} className="mt-16">
          <motion.div className="text-center mb-8" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              >
                WIREFRAME
              </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <p className="text-lg text-neutral-400 leading-relaxed" data-aos="fade-up" data-aos-delay={250}>
            The detailed user journey, end-to-end use cases, and business logic for each scenario are thoroughly documented in the process flow. This comprehensive flowchart outlines the steps involved in using the application, including the interactions between the user, the application, and the system. This will provide a clear understanding of the entire user experience and help ensure a smooth and seamless implementation of the solution.
          </p>

          <img src={G8} alt="New Section" className="w-full mt-10" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>


        <motion.div variants={itemVariants} className="mt-16">
          <motion.div className="text-center mb-16" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              >
                STYLE GUIDE
              </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <img src={G9a} alt="New Section" className="w-full " data-aos="fade-up" data-aos-delay={200} />

          <img src={G9b} alt="New Section" className="w-full mt-10" data-aos="fade-up" data-aos-delay={200} />

          <img src={G9c} alt="New Section" className="w-full mt-10" data-aos="fade-up" data-aos-delay={200} />

          <img src={G9d} alt="New Section" className="w-full mt-10" data-aos="fade-up" data-aos-delay={200} />
  
          <img src={G9e} alt="New Section" className="w-full mt-10" data-aos="fade-up" data-aos-delay={200} />

        </motion.div>


        <motion.div variants={itemVariants} className="mt-16">
          <motion.div className="text-center mb-16" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              >
                VISUAL DESIGNS
              </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <img src={G10} alt="New Section" className="w-full " data-aos="fade-up" data-aos-delay={250} />
        </motion.div>


        <motion.div variants={itemVariants} className="mt-16">
          <motion.div className="text-center mb-16" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              >
                APP STORE PREVIEW SCREENS - 6.5 INCH SCREENSHOTS
              </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
            <img src={G11} alt="New Section" className="w-full " data-aos="fade-up" data-aos-delay={200} />
            <img src={G12} alt="New Section" className="w-full mt-10" data-aos="fade-up" data-aos-delay={200} />
            <img src={G13} alt="New Section" className="w-full mt-30" data-aos="fade-up" data-aos-delay={200} />
        </motion.div>


      </motion.section>

      {/* Next Project Navigation */}
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-10 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-neutral-800">
        <Link href="/projects" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          All Projects
        </Link>
        <div className="text-center">
          <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Next Case Study</p>
          <Link href="/projects/thats-my-jam" className="text-lg font-heading font-bold text-white hover:text-[#FF8A00] transition-colors duration-200 flex items-center gap-2">
            That&apos;s My Jam
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>

      <RelatedWork currentSlug="gexa-energy" />

      <Footer />
    </main>
  );
};

export default GexaEnergy;
