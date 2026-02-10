'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../../components/pages/Footer';
import { TracingBeam } from '../../../components/ui/tracing-beam';
const MyJam = '/myjam/MyJam.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const D1 = '/myjam/D1.png';
const D2a = '/myjam/D2a.png';
const D2b = '/myjam/D2b.png';
const D3 = '/myjam/D3.png';
const D4 = '/myjam/D4.png';
const D5 = '/myjam/D5.png';
const D6 = '/myjam/D6.png';
const D8 = '/myjam/D8.png';
const D9 = '/myjam/D9.png';
const D10 = '/myjam/D10.png';
const D11 = '/myjam/D11.png';
const D12a = '/myjam/D12a.png';
const D12b = '/myjam/D12b.png';
const D13a = '/myjam/D13a.png';
const D13b = '/myjam/D13b.png';
const D14a = '/myjam/D14a.png';
const D14b = '/myjam/D14b.png';
const D14c = '/myjam/D14c.png';
const D14d = '/myjam/D14d.png';
const D14e = '/myjam/D14e.png';
const D15 = '/myjam/D15.png';
const D16a = '/myjam/D16a.png';
const D16b = '/myjam/D16b.png';
const D16c = '/myjam/D16c.png';
const D16d = '/myjam/D16d.png';
const D16e = '/myjam/D16e.png';
const D16f = '/myjam/D16f.png';
const D16g = '/myjam/D16g.png';
const D16h = '/myjam/D16h.png';
const D17 = '/myjam/D17.png';
const D18 = '/myjam/D18.png';





const ThatsMyJam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Ensure page is at top and initialize AOS.
    // Also refresh AOS after window load and after images have finished loading
    // so that AOS measures elements correctly (images can change layout).
    AOS.init({ duration: 400, once: true, easing: 'ease-out' });

    // Small, aggressive refresh strategy to handle delayed image loads
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

    // refresh when the window 'load' event fires (images/fonts done)
    window.addEventListener('load', refreshAOS);

    // also wait for all images inside this component to load and then refresh
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
      <TracingBeam className="px-4 md:px-12">
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
          <img src={D5} alt="New Section" className="max-w-xs w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={250} />
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
          <img src={D6} alt="New Section" className="max-w-xs w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={300} />
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
          <img src={D10} alt="New Section" className="max-w-xs w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={250} />
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
          <img src={D11} alt="New Section" className="max-w-xs w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={250} />
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
                <img src={D12a} alt="New Section" className="max-w-xs w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={300} />
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
              <img src={D12b} alt="New Section" className="max-w-xs w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={250} />
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
              <img src={D13a} alt="New Section" className="max-w-xs w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={300} />
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
              <img src={D13b} alt="New Section" className="max-w-xs w-full rounded-xl shadow" data-aos="fade-up" data-aos-delay={250} />
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
      </TracingBeam>

      <Footer />
    </main>
  );
};

export default ThatsMyJam;
