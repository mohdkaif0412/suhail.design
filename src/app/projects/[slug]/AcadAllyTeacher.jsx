'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../../components/pages/Footer';
import { TracingBeam } from '../../../components/ui/tracing-beam';
const TeacherAcadally = '/teacher/TeacherAcadally.png';
const B1 = '/teacher/B1.png';
const B2 = '/teacher/B2.png';
const B3 = '/teacher/B3.png';
const B6 = '/teacher/B6.png';
const B7 = '/teacher/B7.png';
const B8 = '/teacher/B8.png';
const B9 = '/teacher/B9.png';
const B11 = '/teacher/B11.png';
const B12 = '/teacher/B12.png';
const B13a = '/teacher/B13a.png';
const B13b = '/teacher/B13b.png';
const B14 = '/teacher/B14.png';
const B15 = '/teacher/B15.png';
const B16a = '/teacher/B16a.png';
const B16b = '/teacher/B16b.png';
const B16c = '/teacher/B16c.png';
const B16d = '/teacher/B16d.png';
const B16e = '/teacher/B16e.png';
const B16f = '/teacher/B16f.png';
const B16g = '/teacher/B16g.png';
const B17 = '/teacher/B17.png';
const B18a = '/teacher/B18a.png';
const B18b = '/teacher/B18b.png';
const B18c = '/teacher/B18c.png';
const B18d = '/teacher/B18d.png';
const B18e = '/teacher/B18e.png';
const B18f = '/teacher/B18f.png';
const B18g = '/teacher/B18g.png';
const B18h = '/teacher/B18h.png';
const B18i = '/teacher/B18i.png';
const B19 = '/teacher/B19.png';
const B19a = '/teacher/B19a.png';
const B20 = '/teacher/B20.png';
const B22a = '/teacher/B22a.png';
const B22b = '/teacher/B22b.png';
const B23 = '/teacher/B23.png';
const B24 = '/teacher/B24.png';
const B21a = '/teacher/B21a.png';
const B21b = '/teacher/B21b.png';
const B21c = '/teacher/B21c.png';
const B21d = '/teacher/B21d.png';
const B21e = '/teacher/B21e.png';
const B21f = '/teacher/B21f.png';
const B21g = '/teacher/B21g.png';



const AcadAllyTeacher = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ once: true, easing: 'ease-out' });

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
  const images = [B21a, B21b, B21c, B21d, B21e, B21f, B21g];
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
            src={TeacherAcadally}
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
                <img src={B1} alt="AcadAlly Graphic" className="w-100 h-80" data-aos="fade-up" data-aos-delay={150} />
                </div>
                <div className="md:w-2/3"  data-aos="fade-up" data-aos-delay={200}>
                <h1 className="text-3xl font-heading font-bold mb-4 sm:mb-6">
                  At <span className="text-[#6166AE]">AcadAlly</span>
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed mb-2">
                    <span className="text-[#6166AE] font-semibold">AcadAlly</span> is a forward-thinking, AI tech organisation dedicated to transforming the education landscape by leveraging cutting-edge technology and data-driven analytics.
                </p>
                <p className="text-lg text-neutral-400 leading-relaxed">
                    With its innovative AI engine, <span className="text-[#6166AE] font-semibold">AcadAlly</span> is committed to delivering personalised learning solutions that align with the National Education Policy and transcend geographical and board-related boundaries.
                </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="flex flex-col md:flex-row-reverse items-center py-8 px-2 gap-4 sm:gap-8 bg-[#181818]">
                <div className="md:w-1/3 flex justify-center">
                <img src={B2} alt="AcadAlly App Overview" className="w-100 h-80" data-aos="fade-up" data-aos-delay={200} />
                </div>
                <div className="md:w-2/3" data-aos="fade-up" data-aos-delay={250}>
                  <h2 className="text-[#8AB424] text-xl sm:text-2xl font-heading font-bold mb-4 sm:mb-6">OVERVIEW OF THE ACADALLY TEACHER APP</h2>
                  <p className="text-lg text-neutral-400 leading-relaxed">
                    The AcadAlly Teacher Application streamlines teaching by
                    identifying student learning gaps, enabling personalized plans
                    for effective remediation. It reduces assessment time, tracks
                    progress, and provides insights for refining strategies and
                    communication. With its intuitive design, AcadAlly enhances
                    efficiency and outcomes in modern classrooms.
                  </p>
                </div>
            </section>

            {/* Problem Statement Section */}
            <section className="flex flex-col-reverse md:flex-row items-center py-8 px-2 gap-4 sm:gap-8">
                <div className="md:w-1/3 flex justify-center">
                <img src={B3} alt="Problem Statement Icon" className="w-100 h-80"  data-aos="fade-up" data-aos-delay={200}/>
                </div>
                <div className="md:w-2/3"  data-aos="fade-up" data-aos-delay={250}>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4 sm:mb-6">
                      <span className="border-l-4 border-[#6166AE] pl-3">PROBLEM STATEMENT</span>
                  </h2>
                  <p className="text-lg text-neutral-400 leading-relaxed">
                    Teachers often struggle with identifying and addressing
                    individual student learning gaps effectively, which results in
                    missed opportunities for targeted interventions. Traditional
                    methods of assessment and remediation are time-consuming, lack
                    precision, and fail to provide actionable insights. This leads
                    to inefficiencies in tailoring instruction, engaging students
                    meaningfully, and tracking progress over time. These challenges
                    are compounded by the increasing demand
                  </p>
                </div>
            </section>
            <p className="text-lg text-neutral-400 leading-relaxed" data-aos="fade-up" data-aos-delay={250}>
              for personalized learning and the administrative burden of
              managing large classrooms. As a result, teachers experience
              burnout, reduced effectiveness, and difficulty in ensuring
              equitable learning outcomes for all students. AcadAlly Teacher
              Application is designed to empower teachers by streamlining
              assessments, simplifying remediation, and providing actionable
              data, enabling them to focus on impactful teaching and improving
              student success.
            </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#6166AE] pl-3">How AcadAlly works as a pain reliever?</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B6} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#6166AE] pl-3">Interactive Demonstration</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B7} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#6166AE] pl-3">Best Practices for Using AcadAlly</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B8} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#6166AE] pl-3">DESIGN PROCESS</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B9} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading font-semibold text-center" data-aos="fade-up" data-aos-delay={200}>
            <span>Quantitative Research</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B11} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading font-semibold text-center" data-aos="fade-up" data-aos-delay={200}>
            <span >Qualitative Research</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B12} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#6166AE] pl-3">PERSONA</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B13a} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B13b} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#6166AE] pl-3">EMPATHY MAPPING</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B14} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#6166AE] pl-3">COMPETITIVE ANALYSIS</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B15} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#6166AE] pl-3">DESIGN SYSTEM</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B16a} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B16b} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B16c} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B16d} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B16e} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B16f} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B16g} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#6166AE] pl-3"> USER FLOW</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B17} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#6166AE] pl-3">VISUAL DESIGNS</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B18a} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B18b} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B18c} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B18d} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B18e} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B18f} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B18g} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B18h} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B18i} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <section className="flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-8 ">
            <div className="md:w-1/3 flex justify-center hidden md:block">
              <img src={B19a} alt="AcadAlly App Overview" data-aos="fade-up" data-aos-delay={200} />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl sm:text-4xl font-heading mb-4 sm:mb-6" data-aos="fade-up" data-aos-delay={250}>
                <span className="border-l-4 border-[#6166AE] pl-3">TEST</span>
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
              To understand the user experience and identify areas for
              improvement, I conducted a feedback survey targeting students
              who actively used the app. The survey aimed to gather insights
              on the following:
              </p>
              <ul className="text-lg text-neutral-400 mt-4">
                <li>
                  <span className='text-[#6166AE] font-semibold'>Overall Experience :</span> How
                  students liked the app and its features.
                </li>
                <li>
                  <span className='text-[#6166AE] font-semibold'> Pain Points :</span> Issues or
                  challenges students faced while using the app.
                </li>
                <li>
                  <span className='text-[#6166AE] font-semibold'>Improvements :</span> Specific
                  suggestions or areas they would like to see fixed.
                </li>
                <li>
                  <span className='text-[#6166AE] font-semibold'> Recommendations :</span> Ideas from
                  students for enhancing the app’s functionality or engagement.
                </li>
              </ul>
            </div>
          </section>

          <div className="w-full mt-6 sm:mt-12">
            <img src={B19} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className=" mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#6166AE] pl-3">PERFORMANCE REPORT</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B20} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#6166AE] pl-3">APPSTORE PREVIEW IMAGES</span>
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
                  stroke={isAtStart ? "#9CA3AF" : "#6166AE"} 
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
                  stroke={isAtEnd ? "#9CA3AF" : "#6166AE"} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <section className="flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-8 ">
            <div className="md:w-1/3 flex justify-center hidden md:block" data-aos="fade-up" data-aos-delay={200}>
              <img src={B22a} alt="AcadAlly App Overview" />
            </div>
            <div className="md:w-2/3" data-aos="fade-up" data-aos-delay={250}>
              <h2 className="text-2xl sm:text-4xl font-heading mb-4 sm:mb-6">
                <span className="border-l-4 border-[#6166AE] pl-3">OUR CLIENTS</span>
              </h2>
              <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed">
                AcadAlly is being used in
                <span className="text-[#6166AE] font-semibold"> 15+ schools</span>, catering to a diverse
                student base of approximately
                <span className="text-[#6166AE] font-semibold"> 14,500 students</span> and
                <span className="text-[#6166AE] font-semibold"> 300 teachers</span>. These schools
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
            <img src={B22b} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-16">
          <h2 className="text-2xl sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay={200}>
            <span className="border-l-4 border-[#6166AE] pl-3">HAPPY FACES</span>
          </h2>
          <div className="w-full mt-6 sm:mt-12">
            <img src={B23} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16">
          <div className="w-full">
            <img src={B24} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
        </motion.div>

      </motion.section>
      </TracingBeam>

      <Footer />
    </main>
  );
};

export default AcadAllyTeacher;

