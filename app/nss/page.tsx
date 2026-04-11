"use client";
import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  Sparkles, 
  MapPin, 
  ChevronDown, 
  Calendar, 
  CheckCircle2, 
  Flag,
  Globe
} from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const NSSSection: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string | null>("2021-22");

  const nssData = [
    {
      year: "2021-22",
      activities: [
        { name: "Azadi ka Amrit Mahotsav", outcome: "Developing national integration and honoring freedom fighters." },
        { name: "Digital Fluency Workshop", outcome: "Increased employability through modern technical skills." },
        { name: "Atidonji Dina", outcome: "Encouraging students to learn and preserve Tulu tradition." },
        { name: "Grama Panchayat Survey", outcome: "Identified deprived families in Belman for basic requirements." }
      ]
    },
    {
      year: "2020-21",
      activities: [
        { name: "Covid-19 Relief", outcome: "Distributed masks, sanitizers, and grocery kits to needy families." },
        { name: "Monument Protection", outcome: "Excavations at Teggarse & Nandalike to study our past." },
        { name: "Solar Light Contribution", outcome: "Catered to basic needs of a needy family." }
      ]
    },
    {
      year: "2019-20",
      activities: [
        { name: "Flood Relief Fund", outcome: "Supported victims in Madikeri and Kundageri village." },
        { name: "Electoral Literacy", outcome: "Educated students on the importance of voting in a democracy." },
        { name: "Rain Water Harvesting", outcome: "Created awareness about water preservation." }
      ]
    },
    {
      year: "2018-19",
      activities: [
        { name: "Anti-Drug Awareness", outcome: "Promoted a healthy, addiction-free society." },
        { name: "Road Safety Programme", outcome: "Instilled civic responsibility and traffic awareness." }
      ]
    },
    {
      year: "2017-18",
      activities: [
        { name: "Namma Shirva", outcome: "Cleanliness drive (Swaccha Shirva) for a cleaner town." },
        { name: "Save Heritage", outcome: "Created awareness for historical preservation." }
      ]
    }
  ];

  return (
    <>
    <Navbar2 />
    <div className="max-w-6xl mx-auto px-4 py-16 bg-white font-sans mt-10">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <div className="bg-red-50 p-4 rounded-full">
            <img src="https://msrscollege.org/images/nss.jpg" alt="NSS logo" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          National Service Scheme (N.S.S)
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg italic">
          "Not Me, But You" — Moulding personality through community service.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left: Introduction & Special Camp */}
        <div className="lg:col-span-1 space-y-8">
          <section className="bg-purple-900 text-white p-8 rounded-4xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Globe className="text-purple-300" /> About NSS
            </h2>
            <p className="text-purple-100 text-sm leading-relaxed mb-6">
              Sponsored by the Ministry of Education & Culture, Govt. of India, our unit has been 
              active since the college's inception, motivating students toward social responsibility.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400" size={20} />
                <span className="text-sm font-medium">Leadership Skills</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400" size={20} />
                <span className="text-sm font-medium">National Integration</span>
              </div>
            </div>
          </section>

          <section className="bg-amber-50 border border-amber-200 p-8 rounded-4xl">
            <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <Flag className="text-amber-600" /> Annual Special Camp
            </h2>
            <p className="text-amber-800 text-sm leading-relaxed">
              Every year, a 7-day residential camp is held. Volunteers carry out projects like 
              school playground leveling, compound wall construction, and road laying.
            </p>
            <div className="mt-6 pt-6 border-t border-amber-200">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase">
                    <MapPin size={14} /> Recent Host: MSRS College Shirva
                </div>
            </div>
          </section>
        </div>

        {/* Right: Activity Timeline */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Sparkles className="text-purple-600" /> Extension & Outreach Timeline
          </h2>
          
          <div className="space-y-4">
            {nssData.map((group) => (
              <div key={group.year} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveYear(activeYear === group.year ? null : group.year)}
                  className={`w-full flex justify-between items-center p-6 transition-all ${activeYear === group.year ? 'bg-purple-50 text-purple-900' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  <div className="flex items-center gap-4">
                    <Calendar size={20} />
                    <span className="text-xl font-bold italic">Academic Year {group.year}</span>
                  </div>
                  <ChevronDown className={`transition-transform duration-300 ${activeYear === group.year ? 'rotate-180' : ''}`} />
                </button>
                
                {activeYear === group.year && (
                  <div className="p-6 bg-white space-y-4 animate-in fade-in slide-in-from-top-2">
                    {group.activities.map((act, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row md:items-start border-b border-gray-50 last:border-0 pb-4">
                        <div className="md:w-1/3 font-bold text-purple-700 text-sm mb-1 md:mb-0">
                          {act.name}
                        </div>
                        <div className="md:w-2/3 text-gray-600 text-sm">
                          <span className="font-semibold text-gray-400 mr-2">— Outcome:</span>
                          {act.outcome}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Visual Indicator of Impact */}
      <div className="mt-16 bg-gray-50 p-8 rounded-3xl flex flex-wrap justify-around gap-8 text-center border border-gray-100">
        <div>
          <p className="text-3xl font-black text-purple-900">100+</p>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Volunteers</p>
        </div>
        <div>
          <p className="text-3xl font-black text-purple-900">500+</p>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Trees Planted</p>
        </div>
        <div>
          <p className="text-3xl font-black text-purple-900">20+</p>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Blood Units Donated</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default NSSSection;