"use client";

import { AcademicCapIcon, BookOpenIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { motion, Variants } from "framer-motion";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.13,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CollegeIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-r from-blue-50 via-white to-pink-50">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Main Heading & CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <div className="bg-linear-to-r from-pink-200 via-purple-200 to-orange-200 shadow-md  rounded-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 py-4">
            Mulki Sunder Ram Shetty College
          </h2>

          </div>
          
          <p className="text-lg md:text-xl font-semibold text-blue-700 max-w-4xl mx-auto mb-8 italic">
            A Legacy of Excellence in Higher Education
          </p>
          <div>
            <button className="px-8 py-3 bg-blue-700 text-white rounded-full shadow hover:bg-blue-900 transition-colors text-lg font-semibold">
              Admissions Open &rarr;
            </button>
          </div>
        </motion.div>

        {/* Unique Description Section */}
        <motion.div
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-16 border border-blue-100"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Key Descriptions in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-800 font-medium">
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-linear-to-br from-blue-100 to-blue-200 rounded-xl shadow-md border border-blue-300"
              variants={cardVariants}
            >
              <AcademicCapIcon className="w-14 h-14 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Established in 1980</h3>
              <p>
                Over four decades of dedicated academic excellence and nurturing future leaders.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-linear-to-br from-pink-100 to-pink-200 rounded-xl shadow-md border border-pink-300"
              variants={cardVariants}
            >
              <BookOpenIcon className="w-14 h-14 mb-4 text-pink-600" />
              <h3 className="text-xl font-semibold mb-2">Affiliated with Mangalore University</h3>
              <p>
                Providing recognized and diverse programs tailored to empower every student.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-linear-to-br from-purple-100 to-purple-200 rounded-xl shadow-md border border-purple-300"
              variants={cardVariants}
            >
              <UserGroupIcon className="w-14 h-14 mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p>
                Committed to the development and upliftment of Kaup Taluk and surrounding regions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollegeIntro;
