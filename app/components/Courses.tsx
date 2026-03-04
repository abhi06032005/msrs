"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const courses = [
  {
    title: "Bachelor of Commerce (B.Com)",
    image: "/bcom.png", // Ensure these paths are correct in your public folder
    description:
      "Build expertise in commerce, accounting, economics, and finance for careers in business and finance sectors.",
    tag: "Finance",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    image: "/bca.png",
    description:
      "Learn programming, software development, and IT concepts to build a strong foundation in computer applications.",
    tag: "Technology",
  },
  {
    title: "Bachelor of Arts (BA)",
    image: "/ba.png",
    description:
      "Explore humanities, social sciences, and languages, preparing for versatile academic and professional paths.",
    tag: "Humanities",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-20 lg:py-12 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Academic <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">Programs</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Course Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {courses.map(({ title, image, description, tag }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <motion.img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <span className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-blue-600/90 backdrop-blur-md rounded-lg">
                  {tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                  {title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed grow">
                  {description}
                </p>
                
                <button
                  className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 bg-slate-50 text-slate-900 font-bold rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm"
                  aria-label={`Explore details about ${title}`}
                >
                  Explore Course
                  <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;