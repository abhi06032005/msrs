"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Monitor, 
  Leaf, 
  Camera, 
  ChevronRight, 
  Play,
  ArrowRight
} from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const ExploreCampus: React.FC = () => {
  const galleryImages = [
    { url: "/lab.jpg"},
    { url: "/MUSEUM-PHOTO.jpg"},
    { url: "/image_066.jpg" },
    { url: "/gym.png"},
  ];

  return (
    <>
      <Navbar2 />
      <div className="bg-white text-gray-900 font-sans selection:bg-amber-200">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-purple-50">
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 transform translate-x-20" />
          
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-white text-purple-700 text-xs font-black tracking-widest uppercase shadow-sm"
              >
                <Leaf size={14} className="text-amber-500" /> Eco-Friendly Sanctuary
              </motion.div>
              
              <h2 className="text-6xl md:text-7xl font-black text-purple-900 leading-[0.9] tracking-tighter italic">
                Green <span className="text-amber-500">Acres</span> <br /> 
                <span className="text-amber-500 not-italic tracking-normal ">of</span> Learning.
              </h2>
              
              <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-xl border-l-4 border-amber-500 pl-6">
                Spanning across <span className="text-purple-900 font-bold underline decoration-amber-500/30">27 acres of lush greenery</span>, 
                our campus is a plastic-free zone dedicated to sustainability and academic excellence. 
              </p>

              <div className="flex gap-4">
                <button className="bg-purple-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-purple-800 transition-all shadow-xl shadow-purple-900/10">
                  Virtual Tour <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Video Reel */}
            <div className="w-full md:w-80 shrink-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-9/16 rounded-[2.5rem] overflow-hidden border-12 border-white bg-gray-100 shadow-2xl relative group"
              >
                <video 
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover"
                  src="/collegevideo.mp4" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-purple-900/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={20} fill="currentColor" className="text-purple-900 ml-1" />
                  </div>
                  <span className="text-xs font-black tracking-widest uppercase text-white">Live Reels</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- 2. FACILITIES (ZIG-ZAG) --- */}
        <main className="py-24 space-y-40 max-w-7xl mx-auto px-6">
          
          {/* Facility 1 */}
          <div className="flex flex-col md:flex-row items-center gap-20">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              className="flex-1 w-full aspect-video rounded-3xl bg-amber-50 overflow-hidden relative group"
            >
              <img src="/lab.jpg" alt="Lab" className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 border-16px border-white/20 rounded-3xl" />
            </motion.div>
            
            <div className="flex-1 space-y-6">
              <div className="w-16 h-16 bg-purple-900 text-amber-500 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-900/20">
                <Monitor size={32} />
              </div>
              <h3 className="text-4xl font-black text-purple-900 tracking-tighter">Advanced <br />Computer Labs</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Equipped with high-speed fiber connectivity and the latest workstations 
                to support software development and learning.
              </p>
              <div className="flex items-center gap-2 text-purple-900 font-black text-sm uppercase tracking-widest cursor-pointer group">
                Explore Tech Stack <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>

          {/* Facility 2 */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-20">
            <div className="flex-1 space-y-6 md:text-right flex flex-col md:items-end">
              <div className="w-16 h-16 bg-amber-500 text-purple-900 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/20">
                <BookOpen size={32} />
              </div>
              <h3 className="text-4xl font-black text-purple-900 tracking-tighter">Central <br />Library</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                A massive hub containing over  19, 579 volumes and digital resources, 
                nestled in a quiet zone for collaborative study.
              </p>
              <div className="flex items-center gap-2 text-purple-900 font-black text-sm uppercase tracking-widest cursor-pointer group">
                Browse Archive <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              className="flex-1 w-full aspect-video rounded-3xl bg-purple-50 overflow-hidden relative group"
            >
              <img src="/library.png" alt="Library" className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 border-16px border-white/20 rounded-3xl" />
            </motion.div>
          </div>
        </main>

        {/* --- 3. GALLERY SECTION --- */}
        <section className="py-24 px-6 bg-purple-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="text-amber-500 text-xs font-black tracking-[0.3em] uppercase">Visual Journey</span>
                <h2 className="text-5xl font-black text-white tracking-tighter italic">Campus Gallery</h2>
              </div>
              <Camera size={48} className="text-white/10 hidden md:block" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {galleryImages.map((img, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="aspect-3/4 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group relative"
                >
                  <img src={img.url} className="w-full h-full object-cover  group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"  />
                 
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} MSRSC Campus &bull; Sustainable Excellence
        </footer>
      </div>
    </>
  );
};

export default ExploreCampus;