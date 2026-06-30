'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../../components/pages/Footer';
import RelatedWork from '../../../components/RelatedWork';





import { Adaelo as AdaeloImg, Ad1, Ad2a, Ad2b, Ad3, Ad4, Ad4a, Ad4b, Ad4c, Ad4d, Ad4e, Ad4f, Ad4g, Ad4h, Ad5a, Ad5b, Ad5c, Ad6a, Ad6b, Ad6c, Ad6d, Ad7a, Ad7b, Ad7c, Ad7d, Ad7e, Ad7f, Ad7g, Ad7h, Ad7i , Ad8 } from '../../../data/caseStudyImage';


const Adaelo = () => {
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
            src={AdaeloImg}
            alt="Adaelo Music App"
            className="w-full mx-auto rounded-2xl shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={100}
          />
        </motion.div>

      
        <motion.div variants={itemVariants} className=" mt-16">
          <div className="w-full mt-12">
            <img src={Ad1} alt="Design Process" data-aos="fade-up" data-aos-delay={150} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className=" mt-16">
          <motion.div className="text-center mb-20" variants={fadeUpVariants}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              variants={fadeUpVariants}
              data-aos="fade-up"
              data-aos-duration={600}
              data-aos-delay={200}
            >
              PROJECT OBJECTIVES
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="w-full mt-12">
            <img src={Ad2a} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad2b} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className=" mt-16">
          <motion.div className="text-center mb-20" data-aos="fade-up" data-aos-delay={200} >
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              PROBLEM & SOLUTION
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="w-full mt-12">
            <img src={Ad3} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className=" mt-16">
          <motion.div className="text-center mb-20" data-aos="fade-up" data-aos-delay={200} >
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              COMPETITOR ANALYSIS
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="w-full mt-12">
            <img src={Ad4a} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad4b} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad4c} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad4d} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad4e} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad4f} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad4g} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad4h} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>




        <motion.div variants={itemVariants} className=" mt-16">
          <motion.div className="text-center mb-20" data-aos="fade-up" data-aos-delay={200} >
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              PROJECT OBJECTIVES
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div className=" mt-16" >
            <motion.div className="mb-12" data-aos="fade-up" data-aos-delay={200} >
              <div className="flex flex-col items-start gap-6">
                <div className="text-6xl text-neutral-600 font-semibold">1</div>
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold" data-aos="fade-up" data-aos-delay={950}>Artist</h3>
              </div>
            </motion.div>
            <div className="w-full mt-12">
              <img src={Ad5a} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
            </div>
          </motion.div>

          <motion.div className=" mt-16" >
            <motion.div className="mb-12" data-aos="fade-up" data-aos-delay={200} >
              <div className="flex flex-col items-start gap-6">
                <div className="text-6xl text-neutral-600 font-semibold">2</div>
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold">Licensee</h3>
              </div>
            </motion.div>
            <div className="w-full mt-12">
              <img src={Ad5b} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
            </div>
          </motion.div>

          <motion.div className=" mt-16" >
            <motion.div className="mb-12" data-aos="fade-up" data-aos-delay={200}>
              <div className="flex flex-col items-start gap-6">
                <div className="text-6xl text-neutral-600 font-semibold">3</div>
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold" data-aos="fade-up" data-aos-delay={250}>Label Owner</h3>
              </div>
            </motion.div>
            <div className="w-full mt-12">
              <img src={Ad5c} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
            </div>
          </motion.div>
        </motion.div>


        <motion.div variants={itemVariants} className=" mt-16">
          <motion.div className="text-center mb-20" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              WIREFRAMES
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="w-full mt-12">
            <img src={Ad6a} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad6b} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad6c} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad6d} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
        </motion.div>



        <motion.div variants={itemVariants} className=" mt-16">
          <motion.div className="text-center mb-20" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              VISUAL DESIGNS
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="w-full mt-12">
            <img src={Ad7a} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad7b} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad7c} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>

          <motion.div className=" mt-12" >
            <motion.div className="mb-12" data-aos="fade-up" data-aos-delay={200}>
              <div className="flex flex-col items-start gap-6">
                <div className="text-6xl text-neutral-600 font-semibold">1</div>
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold" data-aos="fade-up" data-aos-delay={1700}>Artist</h3>
              </div>
            </motion.div>
            <div className="w-full mt-12">
              <img src={Ad7d} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
            </div>
          </motion.div>

          <div className="w-full mt-12">
            <img src={Ad7e} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad7f} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <div className="w-full mt-12">
            <img src={Ad7g} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>
          <motion.div className=" mt-12" >
            <motion.div className="mb-12" data-aos="fade-up" data-aos-delay={200} >
              <div className="flex flex-col items-start gap-6">
                <div className="text-6xl text-neutral-600 font-semibold">2</div>
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold">Licensee</h3>
              </div>
            </motion.div>
            <div className="w-full mt-12">
              <img src={Ad7h} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
            </div>
          </motion.div>
          <div className="w-full mt-12">
            <img src={Ad7i} alt="Design Process" data-aos="fade-up" data-aos-delay={200} />
          </div>

          <img src={Ad8} alt="New Section" className="w-full mt-30" data-aos="fade-up" data-aos-delay={200} />
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
          <Link href="/projects/direct-care-source" className="text-lg font-heading font-bold text-white hover:text-[#FF8A00] transition-colors duration-200 flex items-center gap-2">
            Direct Care Source
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>

      <RelatedWork currentSlug="adaelo" />

      <Footer />

    </main>
  );
};

export default Adaelo;
