import React from 'react';
import { Music, Users, Camera, Star } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const CulturalActivities = () => {
  // Simply add your image URLs to this array to update the gallery
  const galleryImages = [
    "https://images.unsplash.com/photo-1514525253361-bee8a48740d7?q=80&w=600",
    "https://images.unsplash.com/photo-1582213713055-68cf3c2e2e99?q=80&w=600",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600",
  ];

  return (
    <>
    <Navbar2 />
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white ">
      {/* Description Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
            Our Vibrant <span className="text-indigo-600">Cultural Heritage</span>
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              At our college, culture isn't just an event—it's the heartbeat of our campus. 
              We take immense pride in celebrating the rich tapestry of our traditions 
              through year-round activities.
            </p>
            <p>
              From the soulful resonance of <strong>Folk Songs</strong> and high-energy 
              <strong> Singing Competitions</strong> to the rhythmic grace of 
              <strong> Classical and Contemporary Dance</strong>, our students showcase 
              extraordinary talent. 
            </p>
            <p>
              Our annual <strong>Traditional Day</strong> remains a highlight, where the 
              campus transforms into a kaleidoscope of ethnic attire, honoring the diverse 
              roots that make our community unique.
            </p>
          </div>
          
          {/* Feature highlights */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Music className="w-5 h-5 text-indigo-500" /> Folk & Western Music
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Users className="w-5 h-5 text-indigo-500" /> Traditional Day
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Star className="w-5 h-5 text-indigo-500" /> Dance Showcases
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Camera className="w-5 h-5 text-indigo-500" /> Art Exhibitions
            </div>
          </div>
        </div>

        {/* Hero Visual for Description */}
        <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800" 
            alt="College Culture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
            <p className="text-white font-semibold text-xl italic">"Preserving Tradition, Embracing Innovation"</p>
          </div>
        </div>
      </div>

      <hr className="border-gray-100 mb-20" />

      {/* Photo Gallery Section */}
      <section>
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900">Captured Moments</h3>
          <p className="text-gray-500 mt-2">A glimpse into our celebrations and student life</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((imageUrl, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-4/3 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={imageUrl} 
                alt={`Cultural activity ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Optional Overlay on Hover */}
              <div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default CulturalActivities;