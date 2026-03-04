"use client";

import { AcademicCapIcon, BookOpenIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CollegeIntro = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-100/50 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full"
          >
            Since 1980
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Mulki Sunder Ram <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">Shetty College</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A Legacy of Excellence in Higher Education, dedicated to shaping the next generation of global leaders and innovators.
          </motion.p>

          <motion.div variants={itemVariants}>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-95">
              Admissions Open
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-2xl mb-6 ${feature.bgColor}`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Established Excellence",
    description: "Over four decades of dedicated academic excellence and nurturing future leaders since 1980.",
    icon: AcademicCapIcon,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "University Affiliated",
    description: "Affiliated with Mangalore University, providing recognized programs tailored to empower students.",
    icon: BookOpenIcon,
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "Community Impact",
    description: "Deeply committed to the upliftment and academic development of Kaup Taluk and surrounding regions.",
    icon: UserGroupIcon,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export default CollegeIntro;