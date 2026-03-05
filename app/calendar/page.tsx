"use client";
import React from 'react';
import { 
  Trophy, 
  Palette, 
  Music, 
  UtensilsCrossed, 
  Mic2, 
  Search, 
  Sparkles, 
  Users 
} from 'lucide-react';

const EventCategories: React.FC = () => {
  const activityGroups = [
    {
      category: "Cultural & Arts",
      icon: <Palette className="text-pink-600" size={28} />,
      bg: "bg-pink-50",
      items: [
        { name: "Talents Day", desc: "A stage to showcase individual artistic abilities." },
        { name: "Art & Drawing", desc: "Fine arts competitions including sketching and painting." },
        { name: "Dance & Music", desc: "Solo and group performances in classical and folk styles." }
      ]
    },
    {
      category: "Sports & Fitness",
      icon: <Trophy className="text-amber-600" size={28} />,
      bg: "bg-amber-50",
      items: [
        { name: "Cricket Tournament", desc: "Inter-departmental matches on the college grounds." },
        { name: "Volleyball", desc: "Traditional power sport of the Mangalore region." },
        { name: "Athletics Meet", desc: "Annual track and field events for all students." }
      ]
    },
    {
      category: "Academic & Literacy",
      icon: <Search className="text-blue-600" size={28} />,
      bg: "bg-blue-50",
      items: [
        { name: "Spell Bee", desc: "Testing linguistic precision and vocabulary." },
        { name: "Cooking Without Fire", desc: "Creative culinary competition focusing on health." },
        { name: "Quiz & Debates", desc: "Intellectual battles on current affairs and logic." }
      ]
    },
    {
      category: "Grand Celebrations",
      icon: <Sparkles className="text-indigo-600" size={28} />,
      bg: "bg-indigo-50",
      items: [
        { name: "College Day", desc: "The mega annual finale celebrating academic and co-curricular success." },
        { name: "Traditional Day", desc: "Celebrating our heritage through ethnic wear and rituals." },
        { name: "Graduation Day", desc: "Honoring our outgoing batch of students." }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">Co-Curricular Excellence</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Vibrant Campus Life
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Beyond the classroom, we provide a platform for every student to discover their 
            hidden potential through a diverse range of competitions and celebrations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {activityGroups.map((group, idx) => (
            <div key={idx} className={`${group.bg} rounded-[2.5rem] p-8 md:p-12 transition-transform hover:scale-[1.02] duration-300`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{group.category}</h3>
              </div>

              <div className="space-y-6">
                {group.items.map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Annual Events", value: "25+" },
            { label: "Sports Trophies", value: "50+" },
            { label: "Student Clubs", value: "10+" },
            { label: "Skill Workshops", value: "15+" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 border-r border-gray-100 last:border-0">
              <div className="text-3xl font-extrabold text-blue-900 mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventCategories;