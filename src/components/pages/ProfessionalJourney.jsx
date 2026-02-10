import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Experience data
const experienceData = [
  {
    id: 1,
    totalYears: 'Sep 2025 - Present',
    experience: '1 mos',
    company: 'Think Design Collaborative Pvt. Ltd.',
    role: 'Senior Product Designer',
    dotColor: 'bg-neutral-400',
    delay: 0,
  },
  {
    id: 2,
    totalYears: 'May 2023 - Sep 2025',
    experience: '2 yrs 4 mos',
    company: 'AcadAlly (Avalon Ed. Tech. Pvt. Ltd.)',
    role: 'Senior Product Designer',
    dotColor: 'bg-neutral-500',
    delay: 0.1,
  },
  {
    id: 3,
    totalYears: 'Apr 2021 - May 2023',
    experience: '2 Yrs 2 Mos',
    company: 'Copper Digital Pvt. Ltd.',
    role: 'UI UX Designer',
    dotColor: 'bg-neutral-600',
    delay: 0.2,
  },
  {
    id: 4,
    totalYears: 'Feb. 2021 - Mar. 2021',
    experience: '3 Mos',
    company: 'Copper Digital Pvt. Ltd.',
    role: 'UI UX Designer Intern',
    dotColor: 'bg-neutral-700',
    delay: 0.3,
  },
];

const ProfessionalJourney = ({ containerVariants, fadeUpVariants, slideInVariants, cardVariants }) => {
  const { t } = useTranslation();

  // Stats data for the overview cards
  const stats = [
    {
      value: '3',
      label: 'Companies Worked With',
      description: 'Versatile design experience across multiple industries.',
      delay: 0,
    },
    {
      value: '5+',
      label: 'Years Professional Experience',
      description: 'Where design, strategy, and AI meet impact.',
      delay: 0.1,
    },
    {
      value: '20+',
      label: 'Projects Delivered',
      description: 'From MVPs to enterprise platforms, delivering impactful design.',
      delay: 0.2,
    },
    {
      value: '100%',
      label: 'Work Flexibility',
      description: 'Remote, onsite, or hybrid arrangements',
      delay: 0.3,
    },
  ];

  return (
    <motion.section
      className="py-12 md:py-20 bg-gradient-to-b from-neutral-900/40 to-neutral-900/60 border-t border-neutral-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl  w-full mx-auto px-4 md:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <h2 
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6"
            variants={fadeUpVariants}
          >
            From Dreams to Reality
          </h2>
          <p className="font-body text-lg font-light text-neutral-300 leading-relaxed">
            I'm passionate about creating beautiful products that empower people.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 mx-auto rounded-full mt-6"></div>
        </motion.div>



        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 border border-neutral-700 rounded-xl bg-neutral-900/50 backdrop-blur-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: stat.delay }}
            >
              <div className="text-2xl md:text-3xl font-heading font-bold text-neutral-100 mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-400 text-sm">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-500 mt-2">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>



        {/* Experience Timeline */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-800 hidden md:block" />
          
          <div className=" space-y-4 sm:space-y-8">
            {experienceData.map((exp) => (
              <motion.div
                key={exp.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInVariants}
                transition={{ delay: exp.delay }}
              >
                <div className="flex flex-col md:flex-row gap-6 relative">
                  <div className="hidden md:flex w-16 h-16 bg-neutral-800 border-2 border-neutral-600 rounded-full items-center justify-center relative z-10 flex-shrink-0">
                    <div className={`w-3 h-3 ${exp.dotColor} rounded-full`} />
                  </div>
                  <div className="flex-1">
                    <motion.div
                      className="hover:bg-neutral-800/60 border border-neutral-700 font-body font-light hover:text-neutral-100 p-3 md:p-4 hover:shadow-lg shadow-neutral-700/30 transition-all duration-700 ease-in-out group rounded-xl bg-neutral-900/40 backdrop-blur-sm"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ scale: 1.01, x: 10 }}
                    >
                      <div className="grid grid-cols-12 max-w-6xl w-full mx-auto justify-center items-center gap-2 md:gap-4">
                        <motion.div
                          className="col-span-12 sm:col-span-6 md:col-span-4 mb-2 sm:mb-0"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <h5 className="text-base md:text-lg text-neutral-400 group-hover:text-neutral-200">
                            {exp.totalYears}
                          </h5>
                          <p className="text-sm md:text-base text-neutral-400 group-hover:text-neutral-200">
                            {exp.experience}
                          </p>
                        </motion.div>
                        <motion.h5
                          className="col-span-12 sm:col-span-6 md:col-span-4 text-base md:text-lg group-hover:text-neutral-100 group-hover:font-bold transition-all duration-700 ease-in-out mb-2 sm:mb-0"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          {exp.company}
                        </motion.h5>
                        <motion.h5
                          className="col-span-12 md:col-span-4 text-sm md:text-lg font-heading group-hover:text-neutral-100 group-hover:font-bold transition-all duration-700 ease-in-out"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          {exp.role}
                        </motion.h5>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProfessionalJourney;
