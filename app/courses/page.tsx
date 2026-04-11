"use client";
import React from 'react';
import { Laptop, Briefcase, BookOpen, CheckCircle, GraduationCap } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const Courses: React.FC = () => {
  const courseList = [
    {
      title: "BCA",
      fullName: "Bachelor of Computer Applications",
      icon: <Laptop className="text-purple-600" size={32} />,
      description: "Designed for students who want to delve into the world of computer languages and information technology.",
      highlights: ["Software Development", "Database Management", "Web Technologies", "Data Structures"],
      color: "border-purple-500"
    },
    {
      title: "B.Com",
      fullName: "Bachelor of Commerce",
      icon: <Briefcase className="text-amber-600" size={32} />,
      description: "A comprehensive program focusing on accounting, finance, and business management to build corporate leaders.",
      highlights: ["Financial Accounting", "Corporate Law", "Taxation & Auditing", "Economics"],
      color: "border-amber-500"
    },
    {
      title: "B.A",
      fullName: "Bachelor of Arts",
      icon: <BookOpen className="text-emerald-600" size={32} />,
      description: "A versatile degree fostering critical thinking and cultural understanding across various humanities disciplines.",
      highlights: ["History & Archaeology", "Political Science", "Economics", "Languages"],
      color: "border-emerald-500"
    }
  ];

  return (
    <>
    <Navbar2 />
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-3">Academic Programs</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Choose Your Path</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer specialized undergraduate programs tailored to meet the evolving demands of the global job market.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courseList.map((course, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-8 shadow-sm border-t-8 ${course.color} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col`}
            >
              <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {course.icon}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{course.title}</h3>
              <p className="text-sm font-medium text-gray-500 mb-4">{course.fullName}</p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {course.description}
              </p>

              <div className="space-y-3 mb-10 grow">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Core Subjects</p>
                {course.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-gray-300" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-purple-600 transition-colors flex items-center justify-center gap-2 group">
                <GraduationCap size={18} className="group-hover:animate-bounce" />
                Admission Details
              </button>
            </div>
          ))}
        </div>

        {/* Support Note */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-full bg-purple-50 px-6 py-2 border border-purple-100">
            <p className="text-purple-800 text-sm font-medium">
              Affiliated to Mangalore University & Recognized by UGC
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Courses;