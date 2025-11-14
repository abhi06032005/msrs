"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const courses = [
  {
    title: "Bachelor of Commerce (B.Com)",
    image: "/bcom.png",
    description:
      "Build expertise in commerce, accounting, economics, and finance for careers in business and finance sectors.",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    image: "/bca.png",
    description:
      "Learn programming, software development, and IT concepts to build a strong foundation in computer applications.",
  },
  {
    title: "Bachelor of Arts (BA)",
    image: "/ba.png",
    description:
      "Explore humanities, social sciences, and languages, preparing for versatile academic and professional paths.",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-[1240px] px-4">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-gray-900 text-center mb-14 tracking-tight"
        >
          COURSES
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {courses.map(({ title, image, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer transition-shadow duration-300 flex flex-col"
            >
              <img src={image} alt={title} className="w-full h-52 object-cover" />
              <div className="p-6 flex flex-col grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">{title}</h3>
                <p className="text-gray-800 text-base leading-relaxed grow">{description}</p>
                <button
                  className="mt-6 inline-block px-5 py-2 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors"
                  aria-label={`Explore details about ${title}`}
                >
                  Explore
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
