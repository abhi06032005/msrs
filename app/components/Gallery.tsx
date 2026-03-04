"use client";

import React from "react";
import { motion } from "framer-motion";
import { CameraIcon } from "@heroicons/react/24/outline";

const images = [
  "/event1.png", "/e4.png", "/e5.png", "/e6.png", 
  "/e7.png", "/e8.png", "/e9.png", "/e3.png"
];

// Refined Bento Grid configuration
const gridConfig = [
  "md:col-span-2 md:row-span-2", // Large Featured
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-2",
  "md:col-span-2 md:row-span-2", // Bottom Highlight
];

const Gallery = () => {
  return (
    <section className="py-10 lg:py-12 bg-slate-50">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-blue-600 font-bold tracking-wider uppercase text-sm mb-3"
            >
              <CameraIcon className="w-5 h-5" />
              <span>Campus Life</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
            >
              Capturing Our <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">Memories</span>
            </motion.h2>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-white hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-sm"
          >
            View Full Gallery
          </motion.button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[180px]">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-3xl bg-slate-200 shadow-sm ${gridConfig[idx] || ""}`}
            >
              {/* Image */}
              <img
                src={src}
                alt={`College Event ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Glassmorphism Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-medium opacity-80 uppercase tracking-widest mb-1">Event</p>
                  <p className="text-lg font-bold">Annual Celebration</p>
                </div>
              </div>
              
              {/* Subtle Border Overlay */}
              <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Mobile-only See More (Visible only on small screens) */}
        <div className="mt-10 md:hidden flex justify-center">
          <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl">
            See More Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;