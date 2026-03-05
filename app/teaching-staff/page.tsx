"use client";
import React, { useState } from 'react';
import { Mail, GraduationCap, UserCircle, Copy, Check } from 'lucide-react';

interface FacultyMember {
  name: string;
  qualification: string;
  designation: string;
  department: string;
  email: string;
  experience?: string;
  image: string;
}

const TeachingStaff: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const facultyData: FacultyMember[] = [
    { name: "Dr. Mithun Chakravarthy", qualification: "M.A, M.Phil, Ph.D, K-SET", designation: "Principal & HOD", department: "English", email: "chakravarty03@gmail.com", experience: "20 years", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
    { name: "Dr. Sona H C", qualification: "M. Com, Ph.D, SLET", designation: "Assistant Professor & HOD", department: "Commerce", email: "sona.coorg@gmail.com", experience: "10 years", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
    { name: "Smt. Hemalatha Shetty", qualification: "M.Com", designation: "Lecturer", department: "Commerce", email: "hemashetty18@gmail.com", experience: "14 years", image: "https://images.unsplash.com/photo-1580894732230-2847917766d9?w=400&h=400&fit=crop" },
    { name: "Smt. Sushmitha Moolya", qualification: "M.Com., KSET, NET, B. Ed", designation: "Lecturer", department: "Commerce", email: "Sushma.y920@gmail.com", experience: "10 years", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
    { name: "Mr. Suhas J G", qualification: "M. Com, KSET", designation: "Lecturer", department: "Commerce", email: "vishnubhatta01@gmail.com", experience: "2 years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "Smt. Varamahalakshmi", qualification: "M.A.", designation: "Lecturer", department: "Kannada", email: "varakannada1983@gmail.com", experience: "3 years", image: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?w=400&h=400&fit=crop" },
    { name: "Mrs. Anupama M Jogi", qualification: "B.Ed, M.A.", designation: "Lecturer", department: "Hindi", email: "anupamaudp@gmail.com", experience: "15 years", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" },
    { name: "Smt. Prashanthi", qualification: "M.A, B.Ed", designation: "Lecturer", department: "Ancient History & Archaeology", email: "s.prashasthi@gmail.com", experience: "14 years", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop" },
    { name: "Ms. Priyanka", qualification: "M.A (Political Science)", designation: "Lecturer", department: "Political Science", email: "kaverikaveri00437@gmail.com", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop" },
    { name: "Smt. Lavanya", qualification: "M.A.", designation: "Lecturer", department: "Economics", email: "lavanyadevadiga2013@gmail.com", experience: "9 years", image: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?w=400&h=400&fit=crop" },
    { name: "Ms. Anujna", qualification: "M.Sc Computer Science", designation: "Lecturer", department: "Computer Science", email: "anujnamrao@gmail.com", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop" },
    { name: "Ms. Bhavyashri", qualification: "M.Sc IT", designation: "Faculty", department: "Computer Science", email: "bhavyashreepoojary07@gmail.com", image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&h=400&fit=crop" },
    { name: "Mrs. Soumya Kumari", qualification: "M.P. Ed", designation: "Physical Education Director", department: "Physical Education", email: "kumarisoumya0955@gmail.com", experience: "8 years", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop" }
  ];

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-3">Our Faculty</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Meet Our Dedicated Educators
        </h1>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Bringing together decades of academic excellence and a passion for 
          mentoring the leaders of tomorrow.
        </p>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {facultyData.map((staff, index) => (
          <div key={index} className="group flex flex-col">
            {/* Image Box */}
            <div className="relative aspect-4/5 mb-6 overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
              <img 
                src={staff.image} 
                alt={staff.name} 
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-blue-900 rounded-full shadow-sm">
                  {staff.department}
                </span>
              </div>
            </div>

            {/* Content Box */}
            <div className="px-1 grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors leading-tight">
                {staff.name}
              </h3>
              <p className="text-sm font-medium text-blue-700 mb-3 uppercase tracking-wider">{staff.designation}</p>
              
              <div className="flex items-start gap-2 mb-6">
                <GraduationCap size={16} className="text-gray-400 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-600 leading-snug">{staff.qualification}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-auto">
                <a
                  href={`mailto:${staff.email}?subject=Inquiry from MSRSC Website`}
                  className="grow flex items-center justify-center gap-2 py-3 bg-gray-900 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest"
                >
                  <Mail size={14} />
                  Send Email
                </a>
                
                <button
                  onClick={() => handleCopyEmail(staff.email)}
                  className="px-4 py-3 bg-gray-100 text-gray-500 rounded-xl hover:bg-gray-200 transition-all active:scale-95"
                  title="Copy email"
                >
                  {copiedEmail === staff.email ? (
                    <Check size={16} className="text-green-600 animate-in zoom-in" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Encouragement */}
      <div className="mt-24 text-center py-12 border-t border-gray-100">
        <p className="text-gray-400 text-sm italic">
          Total Faculty Strength: {facultyData.length} Educators
        </p>
      </div>
    </div>
  );
};

export default TeachingStaff;