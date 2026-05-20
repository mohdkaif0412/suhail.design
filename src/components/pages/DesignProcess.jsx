import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { WobbleCard } from '../ui/wobble-card';

const DesignProcessSection = ({
  containerVariants,
  fadeUpVariants,
  cardVariants,
}) => {
  const { t } = useTranslation();

  return (
    <motion.section 
      className="py-12 md:py-20 bg-gradient-to-b from-neutral-900/40 to-neutral-900/60 border-t border-neutral-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="pt-4 md:pt-12 max-w-6xl mb-10 sm:mb-16 md:mb-24 w-full mx-auto px-4 sm:px-6 md:px-12 xl:px-0">
       
        <motion.div
          className="text-center mb-8 sm:mb-12"
          variants={fadeUpVariants}
        >
          <motion.h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-2 sm:mb-6"
            variants={fadeUpVariants}
          >
            My Design Process
          </motion.h2>
          <motion.div className="max-w-4xl mx-auto mb-3" variants={fadeUpVariants}>
            <p className="font-body text  sm:text-lg font-light text-neutral-300 leading-relaxed">
              Built on Research, Refined by Collaboration, Powered by Design.
            </p>
          </motion.div>
          <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
        </motion.div>


        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Research Card - spans 2 columns on desktop (left side of top row) */}
          <motion.div
            className="col-span-1 lg:col-span-2"
            variants={cardVariants}
            transition={{ delay: 0.1 }}
          >
            <WobbleCard
              containerClassName="h-full !bg-pink-800 "
              className="[&>*]:!bg-transparent"
            >
              <div className="max-w-sm">
                <h3 className="font-heading text-3xl font-bold text-neutral-100 mb-2">
                  Research
                </h3>
                <p className="font-body text-base leading-relaxed">
                  Understanding users should be one of the first goals of any product team, which is why
                  user research methods are designed to be used early on in the product development
                  cycle.
                </p>
                <p className="font-body text-base leading-relaxed">
                  I speak with users to figure out what problems they have. This involves both
                  quantitative and qualitative analysis.
                </p>
              </div>
              <img
                src="/FirstDesign.svg"
                alt="Mohd Suhail design process illustration"
                className="w-64 h-64 absolute -right-6 lg:-right-[2%] grayscale filter -bottom-15 object-contain rounded-2xl hidden md:block"
              />
            </WobbleCard>
          </motion.div>

          {/* Design Card - spans 1 column on desktop (right side of top row) */}
          <motion.div
            className="col-span-1"
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <WobbleCard
              containerClassName="h-full !bg-neutral-800"
              className="[&>*]:!bg-transparent"
            >
              <h3 className="font-heading text-3xl font-bold text-neutral-100 mb-2">
                Design
              </h3>
              <p className="font-body text-base leading-relaxed">
                I create solutions to the problems uncovered by research.
              </p>
              <p className="font-body text-base leading-relaxed">
                I design wireframes, prototypes and pixel perfect UI.
              </p>
            </WobbleCard>
          </motion.div>

          {/* Validate Card - spans full width (3 columns) on desktop (bottom row) */}
          <motion.div
            className="col-span-1 lg:col-span-3"
            variants={cardVariants}
            transition={{ delay: 0.3 }}
          >
            <WobbleCard
              containerClassName="!bg-blue-900 h-full"
              className="[&>*]:!bg-transparent"
            >
              <div className="max-w-xl">
                <h3 className="font-heading text-3xl font-bold text-neutral-100 mb-2">
                  Validate
                </h3>
                <p className="mt-6 font-body text-base leading-relaxed">
                  I check how effective the designs are.
                </p>
                <p className="mt-6 font-body text-base leading-relaxed">
                  It involves continuous testing.
                </p>
                <p className="mt-6 font-body text-baseleading-relaxed">
                  Validating the designs is a great way to solve problems before they reach a product
                  development team.
                </p>
              </div>
              <img
                src="/SecondDesign.svg"
                alt="Mohd Suhail design process illustration"
                className="w-96 h-96 absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-5 object-contain rounded-2xl hidden md:block"
              />
            </WobbleCard>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DesignProcessSection;
