"use client";

import Navbar from "./Navbar";
import {
  ArrowRightIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ChartBarIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <div>
      <Navbar />
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center pt-16 md:pt-20 lg:pt-0 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/college.jpg"
            alt="College Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white/75 via-white/65 to-white/20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            {/* Tightened space-y from 8 to 6 */}
            <div className="space-y-5 md:space-y-6 py-2 md:py-4 animate-fade-in">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold shadow-lg">
                  <AcademicCapIcon className="h-3 w-3 md:h-4 md:w-4" />
                  NAAC A+ Accredited
                </span>
                <span className="inline-flex items-center gap-2 bg-purple-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold shadow-lg">
                  <ChartBarIcon className="h-3 w-3 md:h-4 md:w-4" />
                  Since 1980
                </span>
              </div>

              {/* Main Heading - Reduced sizes from 6xl to 5xl max */}
              <div className="space-y-2 md:space-y-3 max-w-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-gray-900 tracking-tight">
                  Empowering
                  <span className="block text-blue-600 mt-0 md:mt-1">
                    Tomorrow's Leaders
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-md">
                  Transform your potential into excellence with world-class
                  education, innovative research, and global opportunities.
                </p>
              </div>

              {/* CTA Buttons - Reduced padding from py-6 to py-4 */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <button className="bg-blue-600 text-white text-sm px-6 py-3.5 md:px-7 md:py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center w-full sm:w-auto font-bold">
                  Apply Now 2025
                  <ArrowRightIcon className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button className="bg-transparent border-2 border-blue-600 text-blue-600 text-sm px-6 py-3.5 md:px-7 md:py-4 rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center w-full sm:w-auto font-bold">
                  <BookOpenIcon className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Explore Programs
                </button>
              </div>

              {/* Stats Grid - Reduced padding and gaps */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6">
                {[
                  {
                    icon: <UserGroupIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />,
                    number: "5K+",
                    label: "Students",
                    bg: "bg-white/80"
                  },
                  {
                    icon: <BookOpenIcon className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />,
                    number: "40+",
                    label: "Years",
                    bg: "bg-white/80"
                  },
                  {
                    icon: <ChartBarIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />,
                    number: "90%",
                    label: "Placement",
                    bg: "bg-white/80"
                  }
                ].map(({ icon, number, label, bg }, index) => (
                  <div
                    key={index}
                    className={`${bg} backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg border border-gray-100 flex flex-col items-start gap-0.5`}
                  >
                    <div className="flex items-center gap-1.5">
                      {icon}
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                        {number}
                      </div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="hidden lg:block relative animate-slide-up">
              <div className="space-y-4 lg:space-y-6">
                {[
                  {
                    icon: <AcademicCapIcon className="h-6 w-6 text-blue-600" />,
                    bg: "bg-blue-50",
                    title: "Excellence in Education",
                    desc: "NAAC A+ grade with CGPA 3.36",
                    hoverColor: "hover:border-blue-500",
                    marginLeft: ""
                  },
                  {
                    icon: <UserGroupIcon className="h-6 w-6 text-purple-600" />,
                    bg: "bg-purple-50",
                    title: "Alumni Network",
                    desc: "Strong global connection and success.",
                    hoverColor: "hover:border-purple-500",
                    marginLeft: "lg:ml-12"
                  },
                  {
                    icon: <ChartBarIcon className="h-6 w-6 text-blue-600" />,
                    bg: "bg-blue-50",
                    title: "Career Success",
                    desc: "Industry partnerships for placements.",
                    hoverColor: "hover:border-blue-500",
                    marginLeft: ""
                  }
                ].map(({ icon, bg, title, desc, hoverColor, marginLeft }, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white/95 backdrop-blur-sm rounded-2xl p-5 lg:p-6 shadow-xl border border-gray-100 ${hoverColor} transition-all duration-300 hover:-translate-y-1 ${marginLeft}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                        {icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 leading-tight">{title}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="h-8 w-5 rounded-full border-2 border-blue-200 flex items-start justify-center p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
          </div>
        </div>
      </section>
    </div>
  );
}