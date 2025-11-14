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
      <section className="relative min-h-screen flex flex-col md:flex-row items-center pt-20 md:pt-24 lg:pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/college.jpg"
            alt="College Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/75 to-white/60"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 py-4 md:py-6 animate-fade-in">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-lg">
                  <AcademicCapIcon className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="hidden sm:inline">NAAC A+ Accredited</span>
                  <span className="sm:hidden">A+ Accredited</span>
                </span>
                <span className="inline-flex items-center gap-2 bg-purple-600 text-white px-3 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-lg">
                  <ChartBarIcon className="h-3 w-3 md:h-4 md:w-4" />
                  Since 1980
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3 md:space-y-4 max-w-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Empowering
                  <span className="block text-blue-600 mt-1 md:mt-2">
                    Tomorrow's Leaders
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-600">
                  Transform your potential into excellence with world-class
                  education, innovative research, and global opportunities.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4">
                <button className="bg-blue-600 text-white text-sm md:text-base px-6 py-4 md:px-8 md:py-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center w-full sm:w-auto">
                  Apply Now 2025
                  <ArrowRightIcon className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button className="bg-transparent border-2 border-blue-600 text-blue-600 text-sm md:text-base px-6 py-4 md:px-8 md:py-6 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center w-full sm:w-auto">
                  <BookOpenIcon className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Explore Programs
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 pt-6 md:pt-8">
                {[{
                  icon: <UserGroupIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />,
                  number: "5K+",
                  label: "Students",
                  bg: "bg-white/80"
                }, {
                  icon: <BookOpenIcon className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />,
                  number: "40+",
                  label: "Years",
                  bg: "bg-white/80"
                }, {
                  icon: <ChartBarIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />,
                  number: "90%",
                  label: "Placement",
                  bg: "bg-white/80"
                }].map(({ icon, number, label, bg }, index) => (
                  <div
                    key={index}
                    className={`${bg} backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 flex flex-col items-start gap-1`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {icon}
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700">
                        {number}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-800 font-medium">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="hidden lg:block relative animate-slide-up">
              <div className="space-y-6 lg:space-y-8">
                {[{
                  icon: <AcademicCapIcon className="h-7 w-7 text-blue-600" />,
                  bg: "bg-blue-100",
                  title: "Excellence in Education",
                  desc: "NAAC A+ grade with CGPA 3.36 in 2023",
                  borderColor: "border-blue-500",
                  hoverColor: "hover:border-blue-500",
                  marginLeft: ""
                }, {
                  icon: <UserGroupIcon className="h-7 w-7 text-purple-600" />,
                  bg: "bg-purple-100",
                  title: "Alumni Network",
                  desc: "A strong alumni network driving connection and success.",
                  borderColor: "border-purple-500",
                  hoverColor: "hover:border-purple-500",
                  marginLeft: "lg:ml-12"
                }, {
                  icon: <ChartBarIcon className="h-7 w-7 text-blue-600" />,
                  bg: "bg-blue-100",
                  title: "Career Success",
                  desc: "Industry partnerships ensuring exceptional placement and career growth",
                  borderColor: "border-blue-500",
                  hoverColor: "hover:border-blue-500",
                  marginLeft: ""
                }].map(({ icon, bg, title, desc, borderColor, hoverColor, marginLeft }, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border-2 border-gray-200 ${hoverColor} transition-all duration-300 hover:-translate-y-2 ${marginLeft}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`h-14 w-14 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                        {icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                        <p className="text-sm text-gray-600">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-8 w-5 md:h-10 md:w-6 rounded-full border-2 border-blue-300 flex items-start justify-center p-1">
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-600 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
