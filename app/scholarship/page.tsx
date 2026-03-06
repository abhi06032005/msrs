import React from 'react';
import { GraduationCap, Landmark, ClipboardCheck, Users, Banknote, Camera } from 'lucide-react';

const Scholarships = () => {
  // Add images of scholarship distribution ceremonies here
  const galleryImages = [
    "https://images.unsplash.com/photo-1523240715639-994ad24c88e7?q=80&w=600",
    "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=600",
    "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?q=80&w=600",
  ];

  const nonGovScholarships = [
    { name: "Dr. Vinod and Chandrashekhar Shetty Foundation, Kaup", detail: "₹6,000 each for 55 students" },
    { name: "All Cargo Logistics Limited, Mumbai", detail: "₹7,000 each for 35 students" },
    { name: "MSRS College Alumni Association, Mumbai", detail: "Merit Scholarship" },
    { name: "Sri Ram Charitable Trust, Mudradi", detail: "₹3,000 each for 06 students" },
    { name: "Sulthan Chand Dropadi Devi Scholarship", detail: "Regular Beneficiaries" },
    { name: "Bunts Sangha Madikeri and Mysore", detail: "Annual Support" },
    { name: "Sitaram Jindal Foundation, Bangalore", detail: "Need-based Support" },
    { name: "Alumnus Ronald Andrade", detail: "₹5,000 each for 06 students" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white">
      
      {/* Header Section */}
      <div className="mb-16 border-l-8 border-indigo-600 pl-6">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Scholarships & Financial Aid
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-600 leading-relaxed">
          The Scholarship Committee, comprising senior faculty and the Principal, ensures the smooth 
          functioning and fair distribution of financial aid to deserving students.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-indigo-600">
            <Landmark className="w-6 h-6" />
            <h3 className="text-xl font-bold text-gray-900">Government Scholarships</h3>
          </div>
          <p className="text-gray-600">
            Various government scholarships are provided to beneficiaries. In recent years, all 
            government aid is directly credited to the beneficiaries’ bank accounts for 
            transparency and efficiency.
          </p>
        </div>

        <div className="bg-indigo-600 p-8 rounded-2xl text-white shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-indigo-200" />
            <h3 className="text-xl font-bold">Philanthropic Support</h3>
          </div>
          <p className="text-indigo-100">
            Beyond formal programs, various philanthropists and alumni provide a significant 
            number of scholarships to students on a need basis throughout the academic year.
          </p>
        </div>
      </div>

      {/* Selection Parameters */}
      <section className="mb-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <ClipboardCheck className="text-indigo-600" /> Selection Parameters & Rules
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Application", desc: "Invited at the start of every academic year." },
            { title: "Shortlisting", desc: "Committee interviews merit-based students from low-income backgrounds." },
            { title: "Renewal", desc: "Valid for 3 years if student passes all subjects annually." },
            { title: "Transparency", desc: "Acquittance is strictly maintained for all non-government disbursements." }
          ].map((item, idx) => (
            <div key={idx} className="p-5 border border-gray-100 rounded-xl bg-white shadow-sm hover:border-indigo-200 transition-colors">
              <span className="text-indigo-600 font-bold text-sm uppercase block mb-2">Step 0{idx + 1}</span>
              <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Non-Government Scholarship List */}
      <section className="mb-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <Banknote className="text-indigo-600" /> Non-Government Scholarships
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {nonGovScholarships.map((scho, idx) => (
            <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg border-l-4 border-indigo-400">
              <span className="text-gray-800 font-medium">{scho.name}</span>
              <span className="text-indigo-600 font-bold text-sm whitespace-nowrap ml-4">{scho.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pt-10 border-t border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Camera className="text-indigo-600" /> Distribution Gallery
            </h3>
            <p className="text-gray-500">Moments from our scholarship award ceremonies</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="group relative aspect-video overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
              <img 
                src={src} 
                alt={`Scholarship event ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-medium">Award Ceremony {2024 + index}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Scholarships;