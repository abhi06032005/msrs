import React from 'react';
import { Users, UserCheck, Handshake, Heart, ShieldCheck } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const PTA: React.FC = () => {
  const representatives = [
    { name: "Smt. Lalitha Hebbar", location: "Belman", role: "PTA Representative" },
    { name: "Smt. Theresa D’Souza", location: "Shirva", role: "PTA Representative" },
  ];

  return (
    <>
      <Navbar2 />
      <section className="py-12 px-4 max-w-6xl mx-auto font-sans mt-30">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 rounded-full text-amber-700 text-sm font-bold border border-amber-200 mb-4">
             <Handshake size={16} />
             Building Bridges
          </div>
          <h2 className="text-5xl font-black text-purple-900 mb-4 tracking-tighter italic">
            Parent-Teacher Association
          </h2>
          <div className="h-1.5 w-32 bg-amber-500 mx-auto rounded-full mb-8"></div>
          
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            The PTA serves as a vital link between the institution and the home, ensuring the holistic development of our students through collaborative efforts and mutual support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Representatives Spotlight */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3 mb-2 border-l-4 border-purple-900 pl-4">
              <UserCheck className="text-purple-900" size={24} />
              <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wider">Representatives</h3>
            </div>
            
            {representatives.map((rep, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-amber-500 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-900 text-white p-3 rounded-full group-hover:bg-amber-500 transition-colors">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900 text-lg">{rep.name}</h4>
                    <p className="text-amber-600 text-xs font-black uppercase tracking-widest">{rep.location}</p>
                    <p className="text-gray-500 text-sm mt-1">{rep.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Association Role / Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-purple-900">
                <Users size={120} />
              </div>
              
              <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                Mission & Involvement
              </h3>
              
              <div className="space-y-6 text-gray-700 leading-relaxed relative z-10">
                <p>
                  The PTA at MSRS College is a vibrant body that actively participates in the decision-making processes regarding student welfare and campus improvements. Regular meetings are conducted to discuss academic progress, discipline, and institutional growth.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <Heart className="text-amber-500 shrink-0" size={20} />
                    <p className="text-sm font-medium italic">Supporting extracurricular and cultural initiatives for students.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <ShieldCheck className="text-amber-500 shrink-0" size={20} />
                    <p className="text-sm font-medium italic">Fostering a safe and disciplined academic environment.</p>
                  </div>
                </div>

                <p className="bg-purple-900 text-white p-6 rounded-2xl font-medium shadow-lg">
                  "Our goal is to create a nurturing ecosystem where parents and teachers work hand-in-hand to empower the next generation of leaders."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Tag */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 rounded-2xl text-white shadow-2xl">
             <Heart className="text-amber-500" />
             <p className="text-sm font-medium">Stronger Together: Advancing Excellence in Education.</p>
          </div>
        </div>

      </section>
    </>
  );
};

export default PTA;