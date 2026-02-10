'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/pages/Footer';
import Meteors from '../../components/ui/Meteors';
import { updatePageSEO } from '../../utils/seoUtils';

const ServicesPage = () => {
  const { t } = useTranslation();

  // SEO and page setup
  useEffect(() => {
    updatePageSEO('services', {
      title: 'Services - Suhail | UI/UX Design & Digital Product Strategy',
      description: 'Professional UI/UX design services, user research, product strategy, and frontend development. Specializing in human-centered design and digital product development.',
      keywords: 'UI UX design, user experience, product strategy, frontend development, digital product design, user research',
      ogTitle: 'Services - Suhail | UI/UX Design & Digital Product Strategy',
      ogDescription: 'Professional UI/UX design services, user research, product strategy, and frontend development.',
      twitterTitle: 'Services - Suhail | UI/UX Design & Digital Product Strategy',
      twitterDescription: 'Professional UI/UX design services, user research, product strategy, and frontend development.',
    });

    // Add structured data for services
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Suhail - UI/UX Design Services",
      "description": "Professional UI/UX design services, user research, product strategy, and frontend development",
      "provider": {
        "@type": "Person",
        "name": "Suhail",
        "jobTitle": "UI/UX Designer"
      },
      "serviceType": [
        "UI/UX Design",
        "User Research",
        "Product Strategy", 
        "Frontend Development"
      ]
    };

    // Inject structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.text.includes('ProfessionalService')) {
          script.remove();
        }
      });
    };
  }, []);

  const bespokeOffers = [
    {
      id: 1,
      package: 'Package 1',
      title: 'Assess Landscape',
      type: 'content',
      description: 'Comprehensive competitive analysis and market positioning.',
      details: [
        'Make a competitive analysis outlining necessary user views',
        "Evaluate what you stand out from your business and what doesn't",
      ],
      goodFor: '',
      position: { column: 'right', style: 'white' },
    },
    {
      id: 2,
      package: 'Package 2',
      title: 'Research',
      type: 'content',
      description:
        'Use various research methods to define user needs and business product objectives.',
      details: [],
      goodFor:
        'Any stage company that wants to learn more about their audience so they can make the business more grounded and understand what business use satisfaction and therefore increase sales.',
      position: { column: 'left', style: 'white' },
    },
    {
      id: 3,
      package: 'Package 3',
      title: 'Business / Product Strategy',
      type: 'content',
      description:
        'Deep research findings and matching them into strategic goals and creating business definition.',
      details: [],
      goodFor:
        'Any stage company user research done and needs to translate this into business strategy and product strategy.',
      position: { column: 'right', style: 'white' },
    },
    {
      id: 4,
      package: 'Package 4',
      title: 'UX Design',
      type: 'content',
      description: 'Low to Medium-to Design Prototyping: the iterative lifecycle Plan.',
      details: [],
      goodFor:
        'Anyone who has done the user research, built a business and business strategy, understand they need designing our comprehensive solutions and want to test and iterate these solutions and solutions in prototyping that will create confidence from potential customers and developers.',

      position: { column: 'left', style: 'white' },
    },
    {
      id: 5,
      package: 'Package 5',
      title: 'The Total Package',
      type: 'content',
      description: 'If you need it all.',
      details: [
        'Early stage start-ups that know they need someone to design their digital or mobile experiences',
        "Existing companies that know they need to pivot but don't know in which direction",
      ],
      goodFor: '',
      position: { column: 'right', style: 'white' },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Hero Section */}

      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl  mx-auto px-4 md:px-12 py-12 sm:py-20"
      >
        <motion.div variants={itemVariants} className="text-center max-w-6xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-neutral-100"
          >
            Digital Product Specialization
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-lg text-neutral-400 font-body max-w-5xl mx-auto mb-6"
          >
            I'm a UI/UX Designer with 4+ years of experience, driven by a passion for understanding
            human needs and behaviors. I specialize in translating these insights into innovative
            and ethical design solutions. A strong advocate for human-centered design, I strive to
            balance user needs with business objectives in every project I undertake.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="text-sm md:text-lg text-neutral-400 font-body max-w-5xl mx-auto mb-6"
          >
            <p>
              With a background in Graphic and Web Design, my journey took an exciting turn when I
              discovered UX design. It seamlessly combines my love for design with my desire to
              solve real-world problems through research and thoughtful implementation. Since then,
              I've been actively working on diverse projects, honing my skills by integrating the
              principles of Human-Centered Design and the Design Council's Double Diamond framework.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="py-12 sm:py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl  mx-auto">
          <motion.div className="text-center mb-2 sm:mb-6 sm:mb-12" variants={containerVariants}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
              variants={itemVariants}
            >
              Process
            </motion.h2>
            <motion.div className="max-w-4xl mx-auto mb-3" variants={itemVariants}>
              <p className="font-body text-lg font-light text-neutral-300 leading-relaxed">
                I go into more detail of each step below in my various offerings
              </p>
            </motion.div>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          {/*  process image  */}

          <div className="flex justify-center mb-12">
            <img
              src="./digital_page_top_icon.svg"
              alt="Process illustration"
              className="max-w-full h-auto"
              style={{ maxHeight: 320 }}
            />
          </div>
        </div>
      </motion.section>

      {/* Bespoke Offers Section */}
      <motion.section
        className="py-12 sm:py-20 px-4 bg-neutral-950/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" variants={containerVariants}>
            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-2 sm:mb-6"
              variants={itemVariants}
            >
              Bespoke Offers
            </motion.h2>
            <motion.div className="max-w-4xl mx-auto mb-3" variants={itemVariants}>
              <p className="font-body text-lg font-light text-neutral-300 leading-relaxed">
                In this free discovery call, we can discuss precise price quotes and the best way
                ForwardFast would suit your needs.
              </p>
            </motion.div>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {bespokeOffers.map((offer, index) => {
                // Show black cards on left (odd indexes) and white content cards on left (even indexes)
                const isBlackCard = index % 2 === 0;

                if (isBlackCard) {
                  // Black placeholder card
                  return (
                    <motion.div
                      key={`left-${offer.id}`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 h-[300px] flex  flex-col justify-center transition-all duration-300 transition-all duration-300 overflow-hidden"
                    >
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white">{offer.package}</h3>
                      </div>
                      {/* Meteor animated background */}
                      <Meteors number={10} containerClass="opacity-40" />
                    </motion.div>
                  );
                } else {
                  // White content card
                  return (
                    <motion.div
                      key={`left-${offer.id}`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white border border-neutral-300 rounded-2xl p-8 h-[300px] flex flex-col justify-center transition-all duration-300 hover:border-neutral-400 shadow-lg"
                    >
                      <div>
                        <h3 className="text-2xl font-heading font-semibold text-neutral-600 mb-2 sm:mb-4">
                          {offer.title}
                        </h3>
                        {/* <p className="text-black text-sm mb-4"> */}
                        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-3">
                          {offer.description}
                        </p>

                        {offer.goodFor && (
                          <>
                            <h4 className="text-lg sm:text-xl font-heading font-semibold text-neutral-600 mb-2">
                              Good for:
                            </h4>
                            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                              {offer.goodFor}
                            </p>
                          </>
                        )}
                      </div>
                    </motion.div>
                  );
                }
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {bespokeOffers.map((offer, index) => {
                // Show white content cards on right (odd indexes) and black cards on right (even indexes)
                const isWhiteCard = index % 2 === 0;

                if (isWhiteCard) {
                  // White content card
                  return (
                    <motion.div
                      key={`right-${offer.id}`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white border border-neutral-300 rounded-2xl p-8 h-[300px] flex flex-col justify-center transition-all duration-300 hover:border-neutral-400 shadow-lg"
                    >
                      <div>
                        <h3 className="text-2xl font-heading font-semibold text-neutral-600 mb-4">
                          {offer.title}
                        </h3>
                        <p className="text-base text-neutral-600 leading-relaxed mb-3">
                          {offer.description}
                        </p>

                        {offer.details.length > 0 && (
                          <div className="space-y-3 mb-4">
                            <h4 className="text-xl font-heading font-semibold text-neutral-600 mb-2">
                              Good for:
                            </h4>

                            {offer.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <p className="text-base text-neutral-600 leading-relaxed">
                                  {detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {offer.goodFor && (
                          <>
                            <h4 className="text-xl font-heading font-semibold text-neutral-600 mb-2">
                              Good for:
                            </h4>
                            {offer.id === 5 ? (
                              <div className="space-y-2">
                                {offer.details.map((detail, detailIndex) => (
                                  <div key={detailIndex} className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-base text-neutral-600 leading-relaxed">
                                      {detail}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-base text-neutral-600 leading-relaxed">
                                {offer.goodFor}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    </motion.div>
                  );
                } else {
                  // Black placeholder card
                  return (
                    <motion.div
                      key={`right-${offer.id}`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 h-[300px] flex  flex-col justify-center transition-all duration-300 transition-all duration-300 overflow-hidden"
                    >
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white">{offer.package}</h3>
                      </div>
                      <Meteors number={8} containerClass="opacity-30" />
                    </motion.div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
