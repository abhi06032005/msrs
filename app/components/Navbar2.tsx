"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  {
    name: "Institutional",
    items: [
      { label: "About Us", path: "/about-us" },
      { label: "Vision & Mission", path: "/vision-mission" },
      { label: "Policies", path: "/policies" },
      { label: "Recognition", path: "/recognition" },
      { label: "Committee", path: "/committee" },
      { label: "Management", path: "/management" },
      { label: "Principal's Desk", path: "/principal-desk" },
      { label: "Teaching Staff", path: "/teaching-staff" },
      { label: "Non-Teaching Staff", path: "/non-teaching" },
    ],
  },
  {
    name: "Courses",
    items: [
      { label: "Bachelor of Computer Applications", path: "/bca" },
      { label: "Bachelor of Commerce", path: "/bcom" },
      { label: "Bachelor of Arts", path: "/ba" },
      { label: "Admission Process", path: "/admission" },
      { label: "Calendar of Events", path: "/calendar" },
      { label: "Library", path: "/library" },
    ],
  },
  {
    name: "Campus Life",
    items: [
      { label: "Facilities", path: "/facilities" },
      { label: "NSS", path: "/nss" },
      { label: "Sports & Games", path: "/sports-games" },
      { label: "Cultural Activities", path: "/cultural-activities" },
      { label: "Rangers & Rovers", path: "/rangers-rovers" },
    ],
  },
  {
    name: "Student Corner",
    items: [
      { label: "Scholarships", path: "/scholarship" },
      { label: "Placement Cell", path: "/placement-cell" },
      { label: "Alumni", path: "/alumni" },
      { label: "PTA", path: "/pta" },
    ],
  },
   {
    name: "NAAC",
    items: [
      { label: "NAAC", path: "/naac" },
    ],
  },
];

export default function Navbar2() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Constants for the stable "Other Pages" look
  const bgColor = "bg-white";
  const textColor = "text-slate-800";
  const borderColor = "border-slate-200";

  return (
    <>
      {/* Spacer: Because the navbar is 'fixed', it will overlap content. 
          This empty div pushes the page content down so nothing is hidden.
      */}
      <div className="h-[72px] w-full" />

      <nav className={`fixed top-0 left-0 right-0 z-100 ${bgColor} border-b ${borderColor} py-3 shadow-sm`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
          
          {/* Brand */}
          <a href="/" className="flex items-center gap-3 cursor-pointer group">
            <img src="/college_logo.jpg" alt="logo" className="h-10 w-10 object-contain ring-1 ring-slate-100" />
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tight uppercase ${textColor}`}>
                MSRS <span className="text-purple-700 font-black">College</span>
              </span>
              <span className={`text-[9px] font-bold tracking-[0.3em] uppercase opacity-60 ${textColor}`}>Shirva</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            <a 
              href="/" 
              className={`px-4 py-2 text-[12px] font-bold uppercase tracking-widest rounded-sm transition-all duration-200 hover:bg-purple-700 hover:text-white ${textColor}`}
            >
              Home
            </a>
            
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(link.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button 
                  className={`flex items-center gap-1 px-4 py-2 text-[12px] font-bold uppercase tracking-widest rounded-sm transition-all duration-200 ${
                    activeMenu === link.name 
                      ? 'bg-purple-700 text-white shadow-md' 
                      : `${textColor} hover:bg-purple-700 hover:text-white`
                  }`}
                >
                  {link.name}
                  <ChevronDownIcon className={`h-3 w-3 transition-transform ${activeMenu === link.name ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-1 w-60 bg-white border border-slate-200 shadow-xl rounded-sm overflow-hidden"
                    >
                      <div className="flex flex-col p-1">
                        {link.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.path}
                            className="px-4 py-3 text-[11px] font-bold text-slate-600 uppercase tracking-widest hover:bg-purple-700 hover:text-white transition-colors duration-150 rounded-sm"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button className="px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] border-2 border-slate-900 bg-slate-900 text-white hover:bg-purple-700 hover:border-purple-700 rounded-sm transition-all active:scale-95">
              Apply Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 ${textColor}`}>
            {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              className="fixed inset-0 top-16 z-110 bg-white lg:hidden overflow-y-auto"
            >
              <div className="p-8 space-y-8">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <p className="text-purple-700 text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-50">{link.name}</p>
                    <div className="flex flex-col gap-4 border-l-2 border-slate-100 pl-4">
                      {link.items.map((item) => (
                        <a key={item.label} href={item.path} className="text-[13px] font-bold text-slate-800 uppercase tracking-wider hover:text-purple-700 transition-colors">
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}