'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../../components/pages/Footer';
// import { TracingBeam } from '../../../components/ui/tracing-beam';
import { MyJam, D1, D2a, D2b, D3, D4, D5, D6, D8, D9, D10, D11, D12a, D12b, D13a, D13b, D14a, D14b, D14c, D14d, D14e, D15, D16a, D16b, D16c, D16d, D16e, D16f, D16g, D16h, D17, D18 } from '../../../data/caseStudyImage';
import AOS from 'aos';
import 'aos/dist/aos.css';




const ThatsMyJam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 400, once: true, easing: 'ease-out' });
    const refreshAOS = () => {
      try {
        // full recalculation when available
        if (typeof AOS.refreshHard === 'function') AOS.refreshHard();
        else AOS.refresh();
      } catch (e) {
        // ignore
      }
    };

    // refresh once shortly after mount (fallback)
    const fallbackT = setTimeout(refreshAOS, 250);
    window.addEventListener('load', refreshAOS);
    const imgs = Array.from(document.querySelectorAll('img'));
    let remaining = imgs.length;
    const onImgLoad = () => {
      remaining -= 1;
      if (remaining <= 0) refreshAOS();
    };
    if (imgs.length === 0) {
      // no images — ensure at least one refresh
      refreshAOS();
    } else {
      imgs.forEach((img) => {
        if (img.complete) onImgLoad();
        else img.addEventListener('load', onImgLoad, { once: true });
      });
    }

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
      {/* <TracingBeam className="px-4 md:px-12"> */}
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto pt-32 pb-20"
        >
        <motion.div variants={itemVariants} className="mb-16">
          <img
            src={MyJam}
            alt="That's My Jam App"
            className="w-full"
            data-aos="fade-up"
            data-aos-delay={100}
          />
        </motion.div>

        
        <motion.div variants={itemVariants} className=" mt-16">
          <h1 className="text-3xl font-heading font-bold mb-6" data-aos="fade-up" data-aos-duration={400} data-aos-delay={150}>
            OVERVIEW
          </h1>
          <section className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <img src={D1} alt="AcadAlly Graphic" className="w-100 h-100" data-aos="fade-up" data-aos-delay={100} data-aos-duration={400}/>
              </div>
              <div className="md:w-2/3" data-aos="fade-up" data-aos-delay={150} >
                <p className="text-lg text-neutral-400 leading-relaxed mb-2">
                  "That's My Jam" music event app designed to connect music enthusiasts with <span className="text-[#EE05F2] font-semibold"> live </span> concerts, festivals, and events. The app provides users with a seamless experience to discover, attend, and engage with music events happening around them.
                </p>
                <p className="text-lg text-neutral-400 leading-relaxed">
                  It serves as a one-stop platform for artists and fans, where user can <span className="text-[#EE05F2] font-semibold"> bid live</span> on their favourite song and the one with the higher bid will get chance to listen their favourite music played by artists.
                </p>
              </div>
          </section>
        </motion.div>


        <motion.div variants={itemVariants} className=" mt-16">
          <h1 className="text-3xl font-heading font-bold mb-6" data-aos="fade-up" data-aos-delay={200}>
            There are two module of app:
          </h1> 
            <div className="w-full mt-12">
            <img src={D2a} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={D2b} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className="flex flex-col items-center p-8">
          <motion.div className="text-center mb-12"  data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              PROJECT TIMELINE
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <img src={D5} alt="New Section" className="w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>


        <motion.div variants={itemVariants} className="flex flex-col items-center p-8">
          <motion.div className="text-center mb-12" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              DESIGN PROCESS
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <img src={D6} alt="New Section" className="w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={300} />
        </motion.div>


        <motion.div variants={itemVariants} className=" mt-16">
          <h2 className="text-4xl font-heading font-bold mb-6 text-center" data-aos="fade-up" data-aos-delay={200}>
            <span >Quantitative Research</span>
          </h2>
            <div className="w-full mt-12">
            <img src={D8} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className=" mt-16">
          <h2 className="text-4xl font-heading font-bold mb-6 text-center" data-aos="fade-up" data-aos-delay={200}>
            <span >Quantitative Research</span>
          </h2>
            <div className="w-full mt-12">
            <img src={D9} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>


        <motion.div variants={itemVariants} className="flex flex-col items-center p-8">
          <motion.div className="text-center mb-12" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              USER PERSONA
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <img src={D10} alt="New Section" className="w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>


        <motion.div variants={itemVariants} className="flex flex-col items-center p-8">
          <motion.div className="text-center mb-12" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              EMPATHY MAPPING
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
          <img src={D11} alt="New Section" className="w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={250} />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center p-8">
          <motion.div className="text-center mb-12" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              USER FLOW
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <div>
            <motion.div className="text-center" data-aos="fade-up" data-aos-delay={250}>
              <h3 className="font-heading text-4xl font-extrabold">
                <span className="text-[#EE05F2] mr-2">USER</span>
                <span className="text-white">APP</span>
              </h3>
            </motion.div>
              <div>
                <img src={D12a} alt="New Section" className="w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={300} />
              </div>
          </div>

          <div>
            <motion.div className="mt-12 text-center" data-aos="fade-up" data-aos-delay={200}>
              <h3 className="font-heading text-4xl font-extrabold">
                <span className="text-[#05AFF2] mr-2">MDB</span>
                <span className="text-white">APP</span>
              </h3>
            </motion.div>
            <div >
              <img src={D12b} alt="New Section" className="w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={250} />
            </div>
          </div>
        </motion.div>



        <motion.div variants={itemVariants} className="flex flex-col items-center p-8">
          <motion.div className="text-center mb-12"  data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              INFORMATION ARCHITECTURE
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <div>
            <motion.div className="text-center" data-aos="fade-up" data-aos-delay={250}>
              <h3 className="font-heading text-4xl font-extrabold">
                <span className="text-[#EE05F2] mr-2">USER</span>
                <span className="text-white">APP</span>
              </h3>
            </motion.div>
            <div>
              <img src={D13a} alt="New Section" className="w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={300} />
            </div>
          </div>

          <div>
            <motion.div className="mt-12 text-center" data-aos="fade-up" data-aos-delay={200}>
              <h3 className="font-heading text-4xl font-extrabold">
                <span className="text-[#05AFF2] mr-2">MDB</span>
                <span className="text-white">APP</span>
              </h3>
            </motion.div>
            <div>
              <img src={D13b} alt="New Section" className="w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={250} />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className=" mt-16">
          <motion.div className="text-center mb-12" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              STYLE GUIDE
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

            <div className="w-full mt-12">
            <img src={D14a} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={D14b} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={D14c} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={D14d} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={D14e} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className=" mt-16">
          <motion.div className="text-center mb-12" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              VISUAL DESIGNS
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
            <div className="w-full mt-12">
            <img src={D15} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className=" mt-16">
          <motion.div className="text-center mb-12" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              VISUAL DESIGNS
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
            <div className="w-full mt-12">
            <img src={D16a} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={D16b} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={D16c} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={D16d} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={D16e} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={D16f} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={D16g} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
          <div className="w-full mt-12">
            <img src={D16h} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className=" mt-16">
          <motion.div className="text-center mb-12" data-aos="fade-up" data-aos-delay={200}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            >
              MDB APP DESIGN
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>
            <div className="w-full mt-12">
              <img src={D17} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
            </div>

          <div className="w-full mt-30">
            <img src={D18} alt="Design Process" data-aos="fade-up" data-aos-delay={250} />
          </div>
        </motion.div>

      </motion.section>
      {/* </TracingBeam> */}

      {/* Next Project Navigation */}
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-10 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-neutral-800">
        <Link href="/projects" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          All Projects
        </Link>
        <div className="text-center">
          <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Next Case Study</p>
          <Link href="/projects/adaelo" className="text-lg font-heading font-bold text-white hover:text-[#FF8A00] transition-colors duration-200 flex items-center gap-2">
            Adaelo Music Licensing
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ThatsMyJam;
