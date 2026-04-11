"use client";
import React from 'react';
import { Trophy, Move, Home, Target, Users, MapPin } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const SportsSection: React.FC = () => {
  const facilities = [
    {
      title: "15-Acre Playground",
      desc: "An exceptionally vast expanse dedicated to outdoor sports and field events.",
      icon: <Move className="text-emerald-600" size={24} />,
      stat: "15 Acres"
    },
    {
      title: "400m Athletic Track",
      desc: "A professionally laid track used by athletes for training and university-level meets.",
      icon: <Target className="text-purple-600" size={24} />,
      stat: "Standard Size"
    },
    {
      title: "Kreeda Bhavan",
      desc: "Our indoor sports complex housing facilities for Table Tennis, Carrom, and Chess.",
      icon: <Home className="text-amber-600" size={24} />,
      stat: "Indoor Hub"
    }
  ];

  return (
    <>
    <Navbar2 />
    <section className="max-w-7xl mx-auto px-4 py-20 bg-white font-sans mt-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:w-1/2 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <Trophy size={14} />
              <span>Athletic Excellence</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              College Sports <br /> 
              <span className="text-purple-700">Infrastructure</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              The Physical Education Department, led by our expert Director, ensures that every student 
              has the opportunity to excel. With some of the largest sporting grounds in the region, 
              we foster a culture of fitness and competitive spirit.
            </p>
          </div>

          <div className="grid gap-6">
            {facilities.map((item, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-purple-100 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
                </div>
                <div className="ml-auto hidden sm:block">
                  <span className="text-[10px] font-black text-gray-300 uppercase vertical-text tracking-widest">
                    {item.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-4xl overflow-hidden shadow-lg h-64">
                <img 
                  src="https://images.unsplash.com/photo-1526676023601-d558c717f0c3?w=500&h=800&fit=crop" 
                  alt="Indoor Sports" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="bg-purple-900 rounded-4xl p-8 text-white">
                <p className="text-3xl font-black mb-1">Rs. 6L+</p>
                <p className="text-xs font-bold text-purple-300 uppercase tracking-widest">Investment in Kreeda Bhavan</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-amber-500 rounded-4xl p-8 text-purple-950">
                <Users size={32} className="mb-4" />
                <p className="font-bold text-xl leading-tight">Professional Coaching & Support</p>
              </div>
              <div className="rounded-4xl overflow-hidden shadow-lg h-80">
                <img 
                  src="https://images.unsplash.com/photo-1541252260730-0412e3e2108e?w=500&h=800&fit=crop" 
                  alt="Athletic Track" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
          
          {/* Decorative Tag */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-gray-100">
            <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                <MapPin size={24} />
            </div>
            <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Location</p>
                <p className="text-sm font-bold text-gray-900">Main Campus Grounds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SportsSection;