import React from 'react';
import { User, Contact, Users, Wrench, Image as ImageIcon } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const NonTeachingStaff: React.FC = () => {
  const primaryStaff = [
    { 
      name: "Sri. Sudhir N", 
      qualification: "PUC D.Ed", 
      role: "SDC",
      image: "/images/staff/sudhir.jpg" // Replace with actual path
    },
    { 
      name: "Sri. Vinith", 
      qualification: "B.Com", 
      role: "SDC",
      image: "/images/staff/vinith.jpg" // Replace with actual path
    },
  ];

  const supportStaff = [
    { name: "Smt. Geetha Kumari", role: "Attender", image: "/images/staff/geetha.jpg" },
    { name: "Sri. Rajesh", role: "Attender", image: "/images/staff/rajesh.jpg" },
    { name: "Sri. Sitarama Acharya", role: "Peon", image: "/images/staff/sitarama.jpg" },
    { name: "Smt. Prema", role: "Sweeper", image: "/images/staff/prema.jpg" },
  ];

  return (
    <>
      <Navbar2 />
      <section className="py-12 px-4 max-w-6xl mx-auto font-sans ">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-purple-900 mb-4 tracking-tight">
            Non-Teaching Staff
          </h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Administrative Support Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-l-4 border-purple-900 pl-4">
            <Contact className="text-purple-900" size={28} />
            <h3 className="text-2xl font-bold text-gray-800 italic">Office Administration</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {primaryStaff.map((staff, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col sm:flex-row items-center hover:shadow-2xl transition-all duration-300">
                <div className="w-full sm:w-48 h-56 bg-gray-200 shrink-0 relative overflow-hidden">
                   {staff.image ? (
                        <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400"><ImageIcon size={40} /></div>
                    )}
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-purple-900">{staff.name}</h4>
                  <p className="text-amber-600 font-bold text-sm mb-2 uppercase tracking-wide">{staff.qualification}</p>
                  <div className="inline-block bg-purple-100 px-4 py-1 rounded-full text-xs font-black text-purple-900 uppercase">
                    {staff.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Services Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-l-4 border-amber-500 pl-4">
            <Wrench className="text-amber-500" size={28} />
            <h3 className="text-2xl font-bold text-gray-800 italic">Support Services</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportStaff.map((staff, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-50 overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-4/5 bg-gray-100 relative overflow-hidden">
                    {staff.image ? (
                        <img src={staff.image} alt={staff.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300"><User size={48} /></div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-bold text-gray-800 text-lg">{staff.name}</h4>
                  <p className="text-amber-600 font-bold text-xs uppercase mt-1">{staff.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professionalism Tag */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full text-gray-400 text-sm italic border border-gray-200">
            <Users size={16} className="text-amber-500" />
            Reliable support for a better learning environment.
          </div>
        </div>
      </section>
    </>
  );
};

export default NonTeachingStaff;