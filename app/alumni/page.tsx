"use client"; // <--- ADD THIS LINE AT THE VERY TOP

import React from 'react';
import { Users, Camera, Heart, Globe } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const Alumni: React.FC = () => {
  const alumniImages = [
    { url: "/images/alumni/image1.jpg", caption: "Global Alumni Meet 2020 - Mumbai" },
    { url: "/images/alumni/image2.jpg", caption: "Decennial Celebration Event" },
    { url: "/images/alumni/image3.jpg", caption: "Scholarship Distribution Ceremony" },
    { url: "/images/alumni/image4.jpg", caption: "Bangalore Chapter Annual Gathering" },
    { url: "/images/alumni/image5.jpg", caption: "Shirva Old Students Reunion" },
    { url: "/images/alumni/image6.jpg", caption: "Entrepreneurship Interaction Session" },
    { url: "/images/alumni/image7.jpg", caption: "Distinguished Alumni Felicitation" },
    { url: "/images/alumni/image8.jpg", caption: "Mumbai Alumni Association Meet" },
    { url: "/images/alumni/image9.jpg", caption: "Global Alumni Meet - Cultural Night" },
    { url: "/images/alumni/image10.jpg", caption: "Alumni-Student Mentorship Program" },
    { url: "/images/alumni/image11.jpg", caption: "Inaugural Session of Alumni Network" },
    { url: "/images/alumni/image12.jpg", caption: "Alumni Contribution Recognition" }
  ];

  return (
    <>
      <Navbar2 />
      <section className="py-12 px-4 max-w-6xl mx-auto font-sans mt-30">
        
        {/* Textual Content Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 rounded-full text-purple-900 text-sm font-bold border border-purple-200 mb-4">
             <Globe size={16} className="text-amber-500" />
             Vibrant Global Network
          </div>
          <h2 className="text-5xl font-black text-purple-900 mb-4 tracking-tighter italic">
            Alumni Associations
          </h2>
          <div className="h-1.5 w-32 bg-amber-500 mx-auto rounded-full mb-8"></div>
          
          <div className="max-w-4xl mx-auto text-left bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              There are three alumni associations of Mulki Sunder Ram Shetty College, Shirva namely 
              <span className="font-bold text-purple-900"> M.S.R.S Old Students’ Association, Shirva</span>; 
              <span className="font-bold text-purple-900"> M.S.R.S Old Students’ Association, Bangalore</span> and 
              <span className="font-bold text-purple-900"> Mulki Sunder Ram Shetty College, Shirva Alumni Association, Mumbai</span>. 
              All the three alumni associations are vibrant and closely associated with college activities.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl italic text-gray-800">
              Mulki Sunder Ram Shetty College, Shirva Alumni Association, Mumbai has been sponsoring the fee of poor and meritorious students. 
              The decennial celebration of the Mumbai association was named <strong>“Global Alumni Meet-2020”</strong> and was a mega event 
              held in Mumbai on 9th February 2020. It was an amalgamation of academicians, educationists, and entrepreneurs.
            </div>
          </div>
        </div>

        {/* Image Gallery Header */}
        <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-6">
           <div className="bg-purple-900 p-3 rounded-2xl text-white shadow-lg">
             <Camera size={28} />
           </div>
           <div>
              <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Memory Lane</h3>
              <p className="text-gray-500 text-sm">Capturing the spirit of our alumni network.</p>
           </div>
        </div>

        {/* Large Image Gallery - Single Column */}
        <div className="space-y-16">
          {alumniImages.map((img, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-purple-200"
            >
              <div className="w-full aspect-video bg-gray-100 overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  // Next.js requires this component to be a "Client Component" to use this handler
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/1200x675?text=MSRS+Alumni+Event";
                  }}
                />
              </div>
              
              <div className="p-6 bg-purple-900 text-white flex justify-between items-center group-hover:bg-purple-800 transition-colors">
                <h4 className="font-bold text-xl tracking-wide">{img.caption}</h4>
                <div className="hidden sm:flex items-center gap-2 bg-amber-500 px-4 py-1.5 rounded-full text-purple-950 text-xs font-black uppercase">
                  <Users size={14} /> Alumni Meet
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-10 py-5 bg-white rounded-full text-purple-900 text-lg font-extrabold shadow-xl border border-purple-100">
            <Heart size={24} className="text-amber-500 animate-pulse" />
            Together We Grow — MSRS Alumni Network
          </div>
        </div>

      </section>
    </>
  );
};

export default Alumni;