"use client";

import { AcademicCapIcon, BookOpenIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.8,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CollegeIntro = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-white">
      {/* Background Architectural Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-100/30 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto max-w-7xl px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-purple-600" />
              <span className="text-sm font-black tracking-[0.3em] text-purple-600 uppercase">
                Established 1980
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight"
            >
              Mulki Sunder Ram <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-500">
                Shetty College
              </span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-xl mb-12 leading-relaxed border-l-4 border-purple-100 pl-6"
            >
              A Legacy of Excellence in Higher Education. We are dedicated to nurturing intellect and character, shaping the next generation of innovators for a global stage.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-purple-700 text-white font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-purple-800 transition-all shadow-xl shadow-purple-100 active:scale-95">
                Join Our Legacy
              </button>
              <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold text-sm uppercase tracking-widest rounded-sm hover:border-purple-600 hover:text-purple-600 transition-all">
                View Courses
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side: Visual Feature Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -5, borderColor: "rgb(126, 34, 206)" }}
                className={`p-8 bg-white border border-slate-100 rounded-sm shadow-sm transition-all duration-300 ${idx === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-50 text-purple-700 mb-6 rounded-sm">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Legacy of Excellence",
    description: "Four decades of academic distinction and leadership development.",
    icon: AcademicCapIcon,
  },
  {
    title: "University Standards",
    description: "Affiliated with Mangalore University with globally recognized programs.",
    icon: BookOpenIcon,
  },
  {
    title: "Strategic Community Growth",
    description: "Driving academic development and socio-economic upliftment across the Kaup Taluk region through innovative learning and local engagement.",
    icon: UserGroupIcon,
  },
];

export default CollegeIntro;