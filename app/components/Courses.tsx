"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const courses = [
  {
    title: "Bachelor of Commerce",
    abbr: "B.Com",
    image: "/bcom.png",
    description: "Build expertise in accounting, economics, and global finance for the modern business sector.",
    tag: "Finance & Accounting",
  },
  {
    title: "Computer Applications",
    abbr: "BCA",
    image: "/bca.png",
    description: "Master software engineering, cloud computing, and full-stack development concepts.",
    tag: "Technology & Systems",
  },
  {
    title: "Bachelor of Arts",
    abbr: "BA",
    image: "/ba.png",
    description: "A versatile exploration of humanities and social sciences for the leaders of tomorrow.",
    tag: "Humanities & Arts",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-purple-600 font-black text-[11px] uppercase tracking-[0.4em] mb-4 block"
            >
              Academic Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight"
            >
              Undergraduate <span className="text-purple-600">Programs</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block h-px flex-1 bg-slate-100 mx-10 mb-4"
          />
          <button className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-purple-600 transition-colors">
            View All Courses
          </button>
        </div>

        {/* Professional Course Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map(({ title, abbr, image, description, tag }) => (
            <motion.div
              key={abbr}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-purple-600/30 transition-all duration-300 flex flex-col"
            >
              {/* Image with Darker Professional Overlay */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-purple-900/0 transition-colors duration-500 z-10" />
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute bottom-4 left-4 z-20 flex flex-col">
                    <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white bg-purple-600 rounded-sm inline-block w-fit mb-1">
                    {abbr}
                    </span>
                    <span className="text-white text-[12px] font-medium opacity-90 drop-shadow-md">{tag}</span>
                </div>
              </div>

              {/* Precise Content Section */}
              <div className="p-8 flex flex-col grow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-purple-600 transition-colors">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed grow font-medium">
                  {description}
                </p>
                
                <button
                  className="mt-8 flex items-center justify-between w-full px-6 py-4 bg-slate-50 text-slate-900 font-bold text-[11px] uppercase tracking-[0.2em] rounded-sm group-hover:bg-purple-600 group-hover:text-white transition-all duration-300"
                >
                  Explore Curriculum
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>

              {/* Hover Decorative Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;