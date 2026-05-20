import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import DesignProcessSection from './DesignProcess';

const About = ({ containerVariants, fadeUpVariants, slideInVariants, cardVariants }) => {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden">
      {/* Main About Section */}
      <section className="pt-4 md:pt-12 max-w-6xl mb-10 sm:mb-16 md:mb-24 w-full mx-auto px-4 sm:px-6 md:px-12 xl:px-0">
        {/* Stats & Impact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <motion.div
              className="text-center p-2 sm:p-6  md:p-8 border border-neutral-700 rounded-2xl bg-neutral-900/40 backdrop-blur-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <strong aria-label="5 or more years of experience" className="block text-3xl md:text-4xl font-heading font-bold text-neutral-100 mb-3 not-italic">
                5+
              </strong>
              <h3 className="text-base sm:text-lg font-heading font-semibold text-neutral-200 mb-2">
                Years of Impact
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                Blending design, strategy, and AI to create digital solutions that drive impact, scale businesses, and inspire users.
              </p>
            </motion.div>
            <motion.div
              className="text-center p-2 sm:p-6 md:p-8 border border-neutral-700 rounded-2xl bg-neutral-900/40 backdrop-blur-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ delay: 0.1 }}
            >
              <strong aria-label="20 or more projects delivered" className="block text-3xl md:text-4xl font-heading font-bold text-neutral-100 mb-3 not-italic">
                20+
              </strong>
              <h3 className="text-base sm:text-lg font-heading font-semibold text-neutral-200 mb-2">
                Projects Delivered
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                Designed and delivered digital products at every scale, from early-stage MVPs to enterprise ecosystems.
              </p>
            </motion.div>
            <motion.div
              className="text-center p-2 sm:p-6 md:p-8 border border-neutral-700 rounded-2xl bg-neutral-900/40 backdrop-blur-sm col-span-2 lg:col-span-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ delay: 0.2 }}
            >
              <strong aria-label="continuous growth mindset" className="block text-3xl md:text-4xl font-heading font-bold text-neutral-100 mb-3 not-italic" aria-hidden="true">
                ∞
              </strong>
              <h3 className="text-base sm:text-lg font-heading font-semibold text-neutral-200 mb-2">
                Growth Mindset
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                Continuously evolving with design systems, usability principles, accessibility standards, and emerging industry best practices.
              </p>
            </motion.div>
            <motion.div
              className="text-center p-2 sm:p-6 md:p-8 border border-neutral-700 rounded-2xl bg-neutral-900/40 backdrop-blur-sm col-span-2 lg:col-span-1 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ delay: 0.3 }}
            >
              <strong aria-label="100 percent work flexibility" className="block text-3xl md:text-4xl font-heading font-bold text-neutral-100 mb-3 not-italic">
                100%
              </strong>
              <h3 className="text-base sm:text-lg font-heading font-semibold text-neutral-200 mb-2">
                Work Flexibility
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                Remote, onsite, or hybrid arrangements
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="pt-4 md:pt-12 max-w-6xl mb-10 sm:mb-16 md:mb-24 w-full mx-auto px-4 sm:px-6 md:px-12 xl:px-0">
    
        {/* Technical Expertise Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-6 sm:mb-12" variants={fadeUpVariants}>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-2 sm:mb-6">
              Design Mastery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
            {/* User - Centered Design */}
            <motion.div
              className="lg:col-span-2 p-4 sm:p-6 md:p-8 border border-neutral-700 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-800/30 backdrop-blur-sm"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-neutral-100 mb-6">
                UX Design Skills
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <h4 className="text-neutral-200 font-semibold mb-1 sm:mb-3 font-heading">
                    User-Centered Design
                  </h4>
                  <p className="text-sm text-neutral-400">
                    Wireframing • Prototyping • Information Architecture • Design Systems • User Flows
                  </p>
                </div>

                <div>
                   <h4 className="text-neutral-200 font-semibold mb-1 sm:mb-3 font-heading">
                  Visual & Interaction Design
                  </h4>
                  <p className="text-sm text-neutral-400">
                  UI Design • Micro-interactions • Iconography • Responsive Design
                  </p>
                </div>

                <div>
                   <h4 className="text-neutral-200 font-semibold mb-1 sm:mb-3 font-heading">
                  Research & Strategy
                  </h4>
                  <p className="text-sm text-neutral-400">
                  User Research • Usability Testing • Journey Mapping • Persona Creation • A/B Testing
                  </p>
                </div>

                <div>
                  <h4 className="text-neutral-200 font-semibold mb-1 sm:mb-3 font-heading">
                    Industry & Product Expertise
                  </h4>
                  <p className="text-sm text-neutral-400">
                    B2B Platforms • B2C Applications • SaaS Products • Enterprise Dashboards • Consumer Mobile Apps
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-700">
                <h4 className="text-neutral-200 font-semibold mb-1 sm:mb-3 font-heading">
                  Tools & Platforms
                </h4>
                <p className="text-sm text-neutral-400">
                  Figma • Adobe XD • Sketch • Miro • Notion • Photoshop • Illustrator
                </p>
              </div>
            </motion.div>

            {/* Specialization Areas */}
            <div className="space-y-6">
              <motion.div
                className="p-6 border border-neutral-700 rounded-2xl bg-neutral-900/40 backdrop-blur-sm"
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-neutral-100 mb-6">
                  Accessibility & Inclusivity
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                WCAG Guidelines • Contrast & Color Accessibility • Keyboard Navigation • Inclusive Design Practices
                </p>
                <div className="text-xs text-neutral-500">
                Collaboration & Workflow
                </div>
              </motion.div>

              <motion.div
                className="p-6 border border-neutral-700 rounded-2xl bg-neutral-900/40 backdrop-blur-sm"
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-neutral-100 mb-6">
                  Collaboration & Workflow
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                  Design Handoff (Zeplin, Figma Inspect) • Agile & Scrum • Cross-functional Collaboration • Design Documentation
                </p>
                <div className="text-xs text-neutral-500">
                  Streamlined processes for quality and efficiency
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>{' '}

      </section>


      <DesignProcessSection
        containerVariants={containerVariants}
        fadeUpVariants={fadeUpVariants}
        slideInVariants={slideInVariants}
        cardVariants={cardVariants}
      />
    </div>
  );
};

export default About;
