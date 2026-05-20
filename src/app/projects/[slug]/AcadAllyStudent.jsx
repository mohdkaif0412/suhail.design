'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../../components/pages/Footer';
import { TracingBeam } from '../../../components/ui/tracing-beam';

// Use string paths for images in Next.js
const StudentAcadally = '/student/Student-acadally.png';
const A1 = '/student/A1.png';
const A2 = '/student/A2.png';
const A3 = '/student/A3.png';
const A7 = '/student/A7.png';
const A9 = '/student/A9.png';
const A10 = '/student/A10.png';
const A11 = '/student/A11.png';
const A11a = '/student/A11a.png';
const A11b = '/student/A11b.png';
const A12 = '/student/A12.png';
const A13 = '/student/A13.png';
const A14 = '/student/A14.png';
const A15a = '/student/A15a.png';
const A15b = '/student/A15b.png';
const A15c = '/student/A15c.png';
const A15d = '/student/A15d.png';
const A15e = '/student/A15e.png';
const A15f = '/student/A15f.png';
const A15g = '/student/A15g.png';
const A15h = '/student/A15h.png';
const A15i = '/student/A15i.png';
const A15j = '/student/A15j.png';
const A16 = '/student/A16.png';
const A17 = '/student/A17.png';
const A17a = '/student/A17a.png';
const A17b = '/student/A17b.png';
const A17c = '/student/A17c.png';
const A17d = '/student/A17d.png';
const A17e = '/student/A17e.png';
const A17f = '/student/A17f.png';
const A17g = '/student/A17g.png';
const A17h = '/student/A17h.png';
const A18 = '/student/A18.png';
const A18a = '/student/A18a.png';
const A19 = '/student/A19.png';
const A19a = '/student/A19a.png';
const A20 = '/student/A20.png';
const A20a = '/student/A20a.png';
const A20b = '/student/A20b.png';
const A20c = '/student/A20c.png';
const A20d = '/student/A20d.png';
const A20e = '/student/A20e.png';
const A20f = '/student/A20f.png';
const A20g = '/student/A20g.png';
const A20h = '/student/A20h.png';
const A20i = '/student/A20i.png';
const A20j = '/student/A20j.png';
const A22 = '/student/A22.png';
const A23a = '/student/A23a.png';
const A23b = '/student/A23b.png';
const A23c = '/student/A23c.png';
const A23d = '/student/A23d.png';
const A23e = '/student/A23e.png';
const A23f = '/student/A23f.png';
const A23g = '/student/A23g.png';
const A24 = '/student/A24.png';
const A24a = '/student/A24a.png';
const A25 = '/student/A25.png';
const A26 = '/student/A26.png';


const AcadAllyStudent = () => {
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

  // Carousel state
  const images = [A23a , A23b, A23c , A23d , A23e , A23f , A23g];
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setCurrent((prev) => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrent((prev) => Math.min(images.length - visibleCount, prev + 1));
  };

  // Check if buttons should be disabled
  const isAtStart = current === 0;
  const isAtEnd = current >= images.length - visibleCount;


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
      <TracingBeam className="px-4 md:px-12">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto pt-6 sm:pt-14 pb-20"
        >
        <motion.div variants={itemVariants} className="mb-2 sm:mb-8">
          <img
            src={StudentAcadally}
            alt="AcadAlly Student App"
            className="w-full max-w-5xl mx-auto"
            data-aos="fade-up"
            data-aos-delay={100}
          />
        </motion.div>

        
        <motion.div variants={itemVariants}>
            {/* At AcadAlly Section */}
            <section className="flex flex-col-reverse md:flex-row items-center py-8 px-2 gap-4 sm:gap-8">
              <div className="md:w-1/3 flex justify-center">
                <img src={A1} alt="AcadAlly Graphic" className="w-100 h-80" data-aos="fade-up" data-aos-delay={150} />
              </div>
              <div className="md:w-2/3" data-aos="fade-up" data-aos-duration={600} data-aos-delay={200}>
                <h1 className="text-3xl font-heading font-bold mb-4 sm:mb-6">
                  At <span className="text-[#FF8A00]">AcadAlly</span>
                </h1>
                <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed mb-2">
                    <span className="text-[#FF8A00] font-semibold">AcadAlly</span> is a forward-thinking, AI tech organisation dedicated to transforming the education landscape by leveraging cutting-edge technology and data-driven analytics.
                </p>
                <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed">
                    With its innovative AI engine, <span className="text-[#FF8A00] font-semibold">AcadAlly</span> is committed to delivering personalised learning solutions that align with the National Education Policy and transcend geographical and board-related boundaries.
                </p>
              </div>
            </section>

            {/* Overview Section */}
            <section className="flex flex-col-reverse md:flex-row-reverse items-center py-8 sm:py-12 px-2 md:px-10 gap-4 sm:gap-8 bg-[#181818]">
              <div className="md:w-1/3 flex justify-center">
                <img src={A2} alt="AcadAlly App Overview" className="w-100 h-80" data-aos="fade-up" data-aos-delay={250} />
                </div>
                <div className="md:w-2/3" data-aos="fade-up" data-aos-duration={600} data-aos-delay={300}>
                <h2 className="text-[#8AB424] text-2xl font-heading font-bold mb-4 sm:mb-6">
                  OVERVIEW OF THE ACADALLY STUDENT APP
                </h2>
                <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed">
                    AcadAlly is a diagnostic app that assesses students' grasp of concepts through quick quizzes. If a learning gap is found, it delivers a personalized, adaptive assessment and engaging videos to reinforce understanding. Real-time reports inform students and educators about progress, highlighting areas for improvement or proficiency.
                </p>
              </div>
            </section>

            {/* Problem Statement Section */}
            <section className="flex flex-col-reverse md:flex-row items-center py-8 sm:py-12 px-2 gap-4 sm:gap-8">
              <div className="md:w-1/3 flex justify-center">
                <img src={A3} alt="Problem Statement Icon" className="w-100 h-80" data-aos="fade-up" data-aos-delay={300} />
                </div>
                <div className="md:w-2/3" data-aos="fade-up" data-aos-delay={350}>
                <h2 className="text-2xl font-heading font-bold mb-4 sm:mb-6">
                  <span className="border-l-4 border-[#FF8A00] pl-3">PROBLEM STATEMENT</span>
                </h2>
                <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed">
                    Students often face learning gaps in their academic journey, which frequently go unrecognized and are not addressed with appropriate remedies. These gaps tend to widen over time, leading to significant educational setbacks. The consequence is an increasing trend of student underperformance, coupled with heightened learning anxiety, societal pressures, and low self-esteem. AcadAlly aims to identify and address these learning gaps effectively, providing the support students need to improve their academic outcomes and build confidence.
                </p>
              </div>
            </section>
        </motion.div>


        <motion.div variants={itemVariants}>
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#FF8A00] pl-3">DESIGN PROCESS</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A7} alt="AcadAlly UX design process — double diamond methodology" data-aos="fade-up" data-aos-delay={350} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-center" data-aos="fade-up" data-aos-delay={200}>
            <span >Quantitative Research</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A9} alt="AcadAlly quantitative research findings — student survey data" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className=" mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-center" data-aos="fade-up" data-aos-delay={200}>
            <span >Qualitative Research</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A10} alt="AcadAlly qualitative research — user interview insights" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className=" mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading mb-4 sm:mb-6" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#FF8A00] pl-3">PERSONA</span>
          </h2>

          <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed" data-aos="fade-up" data-aos-delay={250}>
            To create student personas, we analyzed their daily routines in detail. This involved breaking down their entire day into segments and mapping out their energy levels at different times. The resulting graph provided valuable insights into their energy fluctuations, helping us better understand their behavior and needs.
          </p>

          <div className="w-full mt-6 sm:mt-12">
            <img src={A11} alt="AcadAlly student persona — daily energy level mapping" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A11a} alt="AcadAlly student persona profile 1 — Rahul, Class 9" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A11b} alt="AcadAlly student persona profile 2 — Priya, Class 10" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

         <motion.div variants={itemVariants} className=" mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#FF8A00] pl-3">EMPATHY MAPPING</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A12} alt="AcadAlly empathy map — student thoughts, feelings, and pain points" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className=" mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#FF8A00] pl-3">COMPETITIVE ANALYSIS</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A13} alt="AcadAlly competitive analysis — existing education app comparison" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className=" mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#FF8A00] pl-3">INFORMATION ARCHITECTURE</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A14} alt="AcadAlly information architecture — app navigation structure" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className=" mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#FF8A00] pl-3">DESIGN SYSTEM</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A15a} alt="AcadAlly design system — color palette and typography" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A15b} alt="AcadAlly design system — button and input components" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A15c} alt="AcadAlly design system — icon library" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A15d} alt="AcadAlly design system — card and list components" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A15e} alt="AcadAlly design system — navigation components" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A15f} alt="AcadAlly design system — form elements" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A15g} alt="AcadAlly design system — modal and overlay patterns" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A15h} alt="AcadAlly design system — gamification badge components" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A15i} alt="AcadAlly design system — progress and reward UI" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A15j} alt="AcadAlly design system — spacing and grid guidelines" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className=" mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#FF8A00] pl-3">USER FLOW</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A16} alt="AcadAlly user flow — student assessment and remediation journey" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className=" mt-8 sm:mt-16">
          
          <section className="flex flex-col-reverse md:flex-row-reverse items-center gap-4 sm:gap-8 ">
            <div className="md:w-1/3 flex justify-center hidden md:block" data-aos="fade-up" data-aos-delay={200}>
              <img src={A17} alt="AcadAlly App Overview" className="w-70 h-80 sm:w-100 sm:h-100" />
            </div>
            <div className="md:w-2/3" data-aos="fade-up" data-aos-delay={250}>
              <h2 className="text-2xl sm:text-4xl font-heading mb-6">
                <span className="border-l-4 border-[#FF8A00] pl-3">VISUAL DESIGNS</span>
              </h2>
              <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed">
                I have used <span className="text-[#FF8A00] font-semibold">Octalysis Framework</span> to design gamification on the AcadAlly app, leveraging its eight core drives to create an engaging and motivational learning experience. The app fosters a sense of Octalysis Framework <span className="text-[#FF8A00] font-semibold">purpose and accomplishment </span>through desert themed adventures, progress tracking, and rewards like badges, discovery coins, and gems. <span className="text-[#FF8A00] font-semibold">Ownership and empowerment</span> are promoted by allowing students to personalize their journey and strategically manage resources. Features like streaks and limited gems tap into <span className="text-[#FF8A00] font-semibold">scarcity and loss avoidance</span>, while surprise rewards and hidden boosters add <span className="text-[#FF8A00] font-semibold">curiosity and unpredictability</span> . Social elements, such as leaderboards, encourage <span className="text-[#FF8A00] font-semibold">collaboration and friendly competition</span>. By combining these elements, I have ensured a balanced, immersive, and rewarding experience that keeps students motivated and engaged in their learning journey.
              </p>
            </div>
          </section>
  
          <div className="w-full mt-6 sm:mt-12">
            <img src={A17a} alt="AcadAlly visual design — onboarding screens" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A17b} alt="AcadAlly visual design — diagnostic quiz screens" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A17c} alt="AcadAlly visual design — learning gap results screen" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A17d} alt="AcadAlly visual design — adaptive video content screen" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A17e} alt="AcadAlly visual design — gamified rewards and badges" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A17f} alt="AcadAlly visual design — leaderboard and social features" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A17g} alt="AcadAlly visual design — student progress dashboard" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A17h} alt="AcadAlly visual design — desert adventure gamification theme" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className=" mt-8 sm:mt-16">
          <section className="flex flex-col-reverse md:flex-row-reverse items-center gap-4 sm:gap-8 ">
            <div className="md:w-1/3 flex justify-center hidden md:block" data-aos="fade-up" data-aos-delay={200}>
              <img src={A18} alt="AcadAlly App Overview" />
            </div>
            <div className="md:w-2/3" data-aos="fade-up" data-aos-delay={250}>
              <h2 className="text-2xl sm:text-4xl font-heading mb-6">
                <span className="border-l-4 border-[#FF8A00] pl-3">ACCESSIBILITY CHECKLIST</span>
              </h2>
              <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed">
                While designing the AcadAlly Student App, I prioritized inclusivity and user experience by thoroughly following a comprehensive accessibility checklist. This ensured the app is usable and welcoming for all students, including those with disabilities.
              </p>
            </div>
          </section>
  
          <div className="w-full">
            <img src={A18a} alt="AcadAlly accessibility checklist — WCAG compliance audit" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className=" mt-8 sm:mt-16">
          <section className="flex flex-col-reverse md:flex-row-reverse items-center gap-8 ">
            <div className="md:w-1/3 flex justify-center hidden md:block" data-aos="fade-up" data-aos-delay={200}>
              <img src={A19} alt="AcadAlly App Overview" />
            </div>
            <div className="md:w-2/3" data-aos="fade-up" data-aos-delay={250}>
              <h2 className="text-2xl sm:text-4xl font-heading mb-6">
                <span className="border-l-4 border-[#FF8A00] pl-3">ACCESSIBILITY CHECKLIST</span>
              </h2>
              <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed">
                I successfully incorporated proven UX lawsâ€”such as Hickâ€™s Law, the Law of Proximity, and the Aesthetic-Usability Effectâ€”into the student app to create a more intuitive, efficient, and engaging user experience. These principles helped streamline navigation, enhance visual hierarchy, and ensure smoother user flows throughout the application.
              </p>
            </div>
          </section>
  
          <div className="w-full mt-6 sm:mt-2">
            <img src={A19a} alt="AcadAlly UX laws applied — Hick's Law, Law of Proximity, Aesthetic-Usability Effect" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className=" mt-8 sm:mt-16">
          <section className="flex flex-col-reverse md:flex-row-reverse items-center gap-8 ">
            <div className="md:w-1/3 flex justify-center hidden md:block" data-aos="fade-up" data-aos-delay={200}>
              <img src={A20} alt="AcadAlly App Overview" />
            </div>
            <div className="md:w-2/3" data-aos="fade-up" data-aos-delay={250}>
              <h2 className="text-2xl sm:text-3xl font-heading mb-6">
                <span className="border-l-4 border-[#FF8A00] pl-3">HEURISTICS EVALUATION CHECKLIST</span>
              </h2>
              <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed">
                These are the heuristic evaluation principles and usability guidelines I systematically
                followed during the design and development of our student app. By applying these
                industry-standard heuristicsâ€”such as consistency and standards, error prevention, and
                recognition rather than recallâ€”I ensured the app delivers a seamless, intuitive, and
                user-centered experience throughout the entire user journey.
              </p>
            </div>
          </section>
  
          <div className="w-full md:w-2/3 mt-6 sm:mt-2">
            <img src={A20a} alt="AcadAlly heuristic evaluation — visibility of system status" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="md:w-2/3 mt-4 sm:mt-12 ml-auto">
            <img src={A20b} alt="AcadAlly heuristic evaluation — match between system and real world" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="md:w-2/3 mt-4 sm:mt-12">
            <img src={A20c} alt="AcadAlly heuristic evaluation — user control and freedom" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="md:w-2/3 mt-4 sm:mt-12 ml-auto">
            <img src={A20d} alt="AcadAlly heuristic evaluation — consistency and standards" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="md:w-2/3 mt-4 sm:mt-12">
            <img src={A20e} alt="AcadAlly heuristic evaluation — error prevention" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="md:w-2/3 mt-4 sm:mt-12 ml-auto">
            <img src={A20f} alt="AcadAlly heuristic evaluation — recognition rather than recall" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="md:w-2/3 mt-4 sm:mt-12">
            <img src={A20g} alt="AcadAlly heuristic evaluation — flexibility and efficiency" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="md:w-2/3 mt-4 sm:mt-12 ml-auto">
            <img src={A20h} alt="AcadAlly heuristic evaluation — aesthetic and minimalist design" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="md:w-2/3 mt-4 sm:mt-12">
            <img src={A20i} alt="AcadAlly heuristic evaluation — error recovery" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="md:w-2/3 mt-4 sm:mt-12 ml-auto">
            <img src={A20j} alt="AcadAlly heuristic evaluation — help and documentation" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading mb-6" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#FF8A00] pl-3">PERFORMANCE REPORT</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A22} alt="AcadAlly performance report — usability testing results" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading mb-6" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#FF8A00] pl-3">APPSTORE PREVIEW IMAGES</span>
          </h2>
          <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay={250}>
            <button
              onClick={handlePrev}
              disabled={isAtStart}
              className={`rounded-full shadow-lg p-2 mr-4 transition-all duration-200 ${
                isAtStart 
                  ? 'bg-gray-300 cursor-not-allowed opacity-50' 
                  : 'bg-white hover:bg-gray-100 cursor-pointer'
              }`}
              aria-label="Previous"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path 
                  d="M15 6l-6 6 6 6" 
                  stroke={isAtStart ? "#9CA3AF" : "#FF8A00"} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="relative overflow-hidden w-[900px]">
              <motion.div
                className="flex gap-3"
                animate={{ x: -current * (295 + 12) }} // 295px width + 12px gap
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.5
                }}
              >
                {images.map((img, idx) => (
                  <motion.img
                    key={`${img}-${idx}`}
                    src={img}
                    alt={`App Preview ${idx + 1}`}
                    className="rounded-xl shadow-xl border border-gray-200 bg-white flex-shrink-0"
                    style={{ width: '290px', height: 'auto' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    data-aos="fade-up"
                    data-aos-delay={2750 + idx * 50}
                  />
                ))}
              </motion.div>
            </div>
            <button
              onClick={handleNext}
              disabled={isAtEnd}
              className={`rounded-full shadow-lg p-2 ml-4 transition-all duration-200 ${
                isAtEnd 
                  ? 'bg-gray-300 cursor-not-allowed opacity-50' 
                  : 'bg-white hover:bg-gray-100 cursor-pointer'
              }`}
              aria-label="Next"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path 
                  d="M9 6l6 6-6 6" 
                  stroke={isAtEnd ? "#9CA3AF" : "#FF8A00"} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>


        {/* Outcome & Impact — structured for semantic search and E-E-A-T */}
        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading mb-6" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#FF8A00] pl-3">OUTCOME & IMPACT</span>
          </h2>
          <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed mb-8" data-aos="fade-up" data-aos-delay={250}>
            The AcadAlly Student App shipped to production and was adopted across multiple schools within months of launch. Here are the measurable outcomes the design directly contributed to:
          </p>
          <div className="overflow-x-auto" data-aos="fade-up" data-aos-delay={300}>
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="py-3 pr-6 text-neutral-300 font-semibold">Metric</th>
                  <th className="py-3 pr-6 text-neutral-300 font-semibold">Result</th>
                  <th className="py-3 text-neutral-300 font-semibold">Impact</th>
                </tr>
              </thead>
              <tbody className="text-neutral-400">
                <tr className="border-b border-neutral-800">
                  <td className="py-3 pr-6">Schools onboarded</td>
                  <td className="py-3 pr-6 text-[#FF8A00] font-semibold">15+</td>
                  <td className="py-3">Institutional adoption across multiple states</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 pr-6">Students reached</td>
                  <td className="py-3 pr-6 text-[#FF8A00] font-semibold">14,500</td>
                  <td className="py-3">Personalized learning delivered at scale</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 pr-6">Teachers using the platform</td>
                  <td className="py-3 pr-6 text-[#FF8A00] font-semibold">300</td>
                  <td className="py-3">Educators equipped with real-time student insights</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 pr-6">Gamification framework</td>
                  <td className="py-3 pr-6 text-[#FF8A00] font-semibold">Octalysis (8 core drives)</td>
                  <td className="py-3">Sustained student engagement and return usage</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">Accessibility compliance</td>
                  <td className="py-3 pr-6 text-[#FF8A00] font-semibold">WCAG 2.1 AA</td>
                  <td className="py-3">Inclusive design for all student abilities</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <section className="flex flex-col md:flex-row-reverse items-center gap-8 ">
            <div className="md:w-1/3 flex justify-center hidden md:block" data-aos="fade-up" data-aos-delay={200}>
              <img src={A24} alt="AcadAlly App Overview" />
            </div>
            <div className="md:w-2/3" data-aos="fade-up" data-aos-delay={250}>
              <h2 className="text-2xl sm:text-4xl font-heading mb-6">
                <span className="border-l-4 border-[#FF8A00] pl-3">OUR CLIENTS</span>
              </h2>
              <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed">
                AcadAlly is being used in
                <span className="text-[#FF8A00] font-semibold"> 15+ schools</span>, catering to a diverse
                student base of approximately
                <span className="text-[#FF8A00] font-semibold"> 14,500 students</span> and
                <span className="text-[#FF8A00] font-semibold"> 300 teachers</span>. These schools
                leverage AcadAlly to:
              </p>
              <ul className="text-sm sm:text-lg text-neutral-400 mt-4">
                <li>
                  Identify and address learning gaps through personalized
                  assessments.
                </li>
                <li>
                  Enhance student engagement with interactive quizzes, videos,
                  and gamified rewards.
                </li>
                <li>
                  Provide teachers with actionable insights into student
                  performance.
                </li>
              </ul>
            </div>
          </section>

          <div className="w-full mt-6 sm:mt-12">
            <img src={A24a} alt="AcadAlly client schools — 15+ partner schools across India" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading mb-6" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#FF8A00] pl-3">HAPPY FACES</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={A25} alt="AcadAlly student satisfaction — happy user testimonials" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16">
          <div className="w-full">
            <img src={A26} alt="AcadAlly final app design showcase" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

      </motion.section>
      </TracingBeam>

      {/* Services CTA */}
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-12">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Work with Mohd Suhail</p>
            <h3 className="text-xl font-heading font-bold text-white mb-2">Need similar UX work for your product?</h3>
            <p className="text-neutral-400 text-sm max-w-md">From UX research to high-fidelity design systems — I help startups and enterprises create user-centered products that drive measurable outcomes.</p>
          </div>
          <Link
            href="/services"
            className="flex-shrink-0 px-6 py-3 bg-[#FF8A00] text-white font-semibold rounded-lg hover:bg-[#e07800] transition-colors duration-200 text-sm"
          >
            View Services →
          </Link>
        </div>
      </div>

      {/* Next Project Navigation */}
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-10 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-neutral-800">
        <Link href="/projects" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          All Projects
        </Link>
        <div className="text-center">
          <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Next Case Study</p>
          <Link href="/projects/acadally-teacher" className="text-lg font-heading font-bold text-white hover:text-[#FF8A00] transition-colors duration-200 flex items-center gap-2">
            AcadAlly Teacher App
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default AcadAllyStudent;
