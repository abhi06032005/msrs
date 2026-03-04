"use client";

import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    name: "Sri. Mulki Sunder Ram Shetty",
    role: "Founder of the College",
    image: "/sunderram.png",
  },
  {
    name: "Sri. K Muddu Shetty",
    role: "Founder President, Vidyavardhaka Sangha (R.)",
    image: "/muddushettty.png",
  },
  {
    name: "Sri. Suresh P. Shetty Gurme",
    role: "The President",
    image: "/sureshgurme.png",
  },
  {
    name: "Sri. N. Vinaya Hegde",
    role: "Former President, Vidyavardhaka Sangha (R.)",
    image: "/vinayhegde.png",
  },
  {
    name: "Sri. Sathishchandra Hegde",
    role: "Former President, Vidyavardhaka Sangha (R.)",
    image: "/satishchandra.png",
  },
];

const LeadershipSection = () => {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Our <span className="text-blue-600">Visionaries</span>
        </h2>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto">
          The pillars of MSRS College whose dedication and foresight continue to inspire our journey toward academic excellence.
        </p>
      </div>

      <div className="relative group">
        {/* Gradient Fades for Smooth Edges */}
        <div className="absolute inset-y-0 right-0 w-32 bg-lineart-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Container */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ width: "fit-content" }}
          >
            {[...cardData, ...cardData].map((card, index) => (
              <div 
                key={index} 
                className="w-72 mx-6 bg-white rounded-4xl border border-slate-100 p-4 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 group/card"
              >
                {/* Image Container */}
                <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-slate-100 mb-6">
                  <img 
                    src={card.image} 
                    alt={card.name} 
                    className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent opacity-60" />
                </div>

                {/* Text Content */}
                <div className="px-2 pb-2">
                  <h3 className="text-lg font-black text-slate-900 leading-tight mb-2">
                    {card.name}
                  </h3>
                  <p className="text-sm font-bold text-blue-600/80 leading-relaxed uppercase tracking-wider italic">
                    {card.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CSS for Pause on Hover (Tailwind variant) */}
      <style jsx>{`
        .group:hover .flex {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LeadershipSection;