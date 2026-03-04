"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  {
    name: "Institutional",
    items: ["About Us", "Vision & Mission", "Management", "Principal's Desk", "Governing Council"],
  },
  {
    name: "Academics",
    items: ["Courses Offered", "Admission Process", "Departments", "Calendar of Events", "Library"],
  },
  {
    name: "Campus Life",
    items: ["Facilities", "NSS & NCC", "Sports & Games", "Cultural Activities", "Clubs & Associations"],
  },
  {
    name: "Student Corner",
    items: ["Scholarships", "Placement Cell", "Alumni", "Examination", "Results"],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-100 w-full border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Brand Identity */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-100 transition-transform group-hover:rotate-3">
            <span className="text-2xl font-black text-white italic">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black leading-none text-slate-900 tracking-tighter">MSRS COLLEGE</span>
            <span className="text-[11px] font-bold text-blue-600 tracking-[0.2em] uppercase mt-1">Shirva</span>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden lg:flex lg:items-center lg:gap-2">
          <a href="#" className="px-5 py-2 text-[15px] font-bold text-slate-600 hover:text-blue-600 transition-colors">Home</a>
          
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative"
              onMouseEnter={() => setActiveMenu(link.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`flex items-center gap-1.5 px-5 py-2 text-[15px] font-bold transition-all duration-300 rounded-full ${activeMenu === link.name ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:bg-slate-50'}`}>
                {link.name}
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-500 ${activeMenu === link.name ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeMenu === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "circOut" }}
                    className="absolute left-0 mt-3 w-64 overflow-hidden rounded-3xl border border-slate-100 bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                  >
                    <div className="space-y-1">
                      {link.items.map((item) => (
                        <a
                          key={item}
                          href = {`${link}`}
                          className="group flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all"
                        >
                          {item}
                          <motion.div 
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            className="h-1.5 w-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all"
                          />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Global Action */}
        <div className="hidden lg:block">
          <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-slate-900 px-7 py-3 text-[14px] font-bold text-white transition-all hover:bg-blue-600 shadow-xl shadow-slate-200">
            Apply Now
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-slate-900 bg-slate-50 rounded-xl">
          {mobileOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu - Custom Drawer style */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-20 z-50 lg:hidden bg-white px-8 py-10 overflow-y-auto"
          >
            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4">{link.name}</h4>
                  <div className="flex flex-col gap-5">
                    {link.items.map((item) => (
                      <a key={item} href="#" className="text-xl font-bold text-slate-900 active:text-blue-600">{item}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}