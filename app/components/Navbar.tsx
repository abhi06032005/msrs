"use client";

import React, { useState, useEffect } from "react";
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


export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "text-slate-800" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
        scrolled 
          ? "bg-white border-b border-slate-200 py-2 shadow-md" 
          : "bg-black/20 backdrop-blur-md py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <img src="/college_logo.jpg" alt="logo" className="h-10 w-10 object-contain ring-1 ring-slate-200/50" />
          <div className="flex flex-col">
            <span className={`text-lg font-bold tracking-tight uppercase ${textColor}`}>
              MSRS <span className="text-purple-700 font-black">College</span>
            </span>
            <span className={`text-[9px] font-bold tracking-[0.3em] uppercase opacity-70 ${textColor}`}>Shirva</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          <a 
            href="/" 
            className={`px-4 py-2 text-[13px] font-bold uppercase tracking-wide rounded-sm transition-all duration-200 hover:bg-purple-700 hover:text-white ${textColor}`}
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
                className={`flex items-center gap-1 px-4 py-2 text-[13px] font-bold uppercase tracking-wide rounded-sm transition-all duration-200 ${
                  activeMenu === link.name 
                    ? 'bg-purple-700 text-white shadow-lg' 
                    : `${textColor} hover:bg-purple-700 hover:text-white`
                }`}
              >
                {link.name}
                <ChevronDownIcon className={`h-3 w-3 transition-transform ${activeMenu === link.name ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeMenu === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-1 w-60 bg-white border border-slate-200 shadow-xl rounded-sm overflow-hidden"
                  >
                    <div className="flex flex-col p-1">
                      {link.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.path}
                          className="px-4 py-3 text-[12px] font-bold text-slate-700 uppercase tracking-wider hover:bg-purple-700 hover:text-white transition-colors duration-150 rounded-sm"
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
          <button className={`px-6 py-2.5 text-[12px] font-black uppercase tracking-widest border-2 rounded-sm transition-all ${
            scrolled 
              ? "border-slate-900 bg-slate-900 text-white hover:bg-purple-700 hover:border-purple-700" 
              : "border-white text-white hover:bg-white hover:text-slate-900"
          }`}>
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-[60px] z-110 bg-white lg:hidden overflow-y-auto"
          >
            <div className="p-6 space-y-6">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-slate-100 pb-4">
                  <p className="text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{link.name}</p>
                  <div className="grid grid-cols-1 gap-2">
                    {link.items.map((item) => (
                      <a key={item.label} href={item.path} className="text-sm font-bold text-slate-800 uppercase py-2 hover:text-purple-700">
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
  );
}