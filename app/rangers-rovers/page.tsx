import React from 'react';
import { Shield, User, MapPin, Camera } from 'lucide-react';

const RoversRangers = () => {
  // Add your activity images here
  const galleryImages = [
    "https://images.unsplash.com/photo-1523240715639-994ad24c88e7?q=80&w=600",
    "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600",
    "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=600",
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=600",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white mt-15">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-xl mb-4">
          <img src="https://tinyurl.com/22fhpc6s" alt="" className='w-25 h-25' />
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Rovers & Rangers Unit
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Empowering youth through character building, adventure, and selfless service 
          to the community and the nation.
        </p>
      </div>

      {/* Advisors Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {/* Rovers Advisor */}
        <div className="flex flex-col p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm transition-hover hover:shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <User className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Rovers Staff Advisor</h3>
              <p className="text-indigo-600 font-medium">Dr. Mithun Chakravarthy</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed border-l-4 border-indigo-200 pl-4 mt-2">
            Principal, <br />
            Department of English
          </p>
        </div>

        {/* Rangers Advisor */}
        <div className="flex flex-col p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm transition-hover hover:shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <User className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Rangers Staff Advisor</h3>
              <p className="text-indigo-600 font-medium">Dr. Sona H C</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed border-l-4 border-indigo-200 pl-4 mt-2">
            Assistant Professor, <br />
            Department of Commerce
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-white mb-20 shadow-xl overflow-hidden relative">
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Service Above Self</h3>
            <p className="text-indigo-100 text-lg leading-relaxed">
              The Rovers & Rangers unit of our college actively participates in state and 
              national level camps, trekking expeditions, and community development projects. 
              We focus on developing leadership skills and a spirit of brotherhood among our students.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <ul className="space-y-3">
              {["National Integration Camps", "First Aid Training", "Social Service Projects", "Adventure Activities"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 bg-indigo-500/30 px-4 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Decorative background circle */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
      </div>

      {/* Gallery Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Camera className="text-indigo-600" /> Unit Activity Gallery
            </h3>
            <p className="text-gray-500">Documenting our journey and field work</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Unit activity ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-xs font-bold uppercase tracking-wider">View Photo</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default RoversRangers;