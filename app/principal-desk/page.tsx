import React from 'react';
import { Mail, GraduationCap, Clock, Quote, Award } from 'lucide-react';

const PrincipalProfile: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto my-12 p-1 px-4 font-sans mt-30">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
        
        {/* Left Side: Profile Image & Info */}
        <div className="bg-blue-900 md:w-1/3 p-10 text-white flex flex-col justify-center items-center text-center">
          
          {/* principal image */}
          <div className="relative mb-6">
            {/* White border-ring for the image */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-700 shadow-inner"></div>
            
            <img 
              src="/principal.png" 
              alt="Dr. Mithun Chakravarthy"
              className="w-40 h-40 rounded-full object-cover border-8 border-blue-800 shadow-xl"
            />
          </div>

          <h2 className="text-2xl font-bold mb-1">Dr. Mithun Chakravarthy</h2>
          <p className="text-blue-200 text-sm mb-4">M.A, M.Phil, Ph.D, K-SET</p>
          
          <div className="space-y-4 mt-6 w-full">
            <div className="flex items-center justify-center gap-2 bg-blue-800/50 py-2.5 px-4 rounded-full">
              <Clock size={18} className="text-amber-400" />
              <span className="text-sm font-medium">20 Years Experience</span>
            </div>
            
            <a 
              href="mailto:chakravarty03@gmail.com" 
              className="flex items-center justify-center gap-2 text-sm hover:text-amber-300 transition-colors"
            >
              <Mail size={18} />
              chakravarty03@gmail.com
            </a>
          </div>
        </div>

        {/* Right Side: Message & Leadership Style */}
        <div className="md:w-2/3 p-10 md:p-14 relative flex items-center">
          {/* Decorative background quote icon */}
          <Quote className="absolute top-10 right-10 text-gray-100 h-28 w-28 z-0" />
          
          <div className="relative z-10">
            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-3 flex items-center">
              <Award size={16} className="mr-2" /> From the Principal's Desk
            </h3>
            
            <h4 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-7 tracking-tight">
              A Vision of Academic Empowerment
            </h4>
            
            <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
              <p>
                With over two decades of dedicated service in higher education, I believe that 
                effective college management is built on the pillars of **integrity, empathy, and innovation**. 
                My approach focuses on creating an ecosystem where academic rigor meets holistic development.
              </p>
              
              <p>
                Leading this institution is not just about administrative oversight; it is about 
                **fostering a culture of encouragement**. I am committed to empowering our students 
                to look beyond the classroom, challenging them to become critical thinkers and 
                compassionate leaders of tomorrow.
              </p>
              
              <p className="font-medium italic text-blue-900 border-l-4 border-amber-400 pl-4 py-1">
                "Our goal is to ensure that every student who walks through these doors leaves 
                not just with a degree, but with the character to change the world."
              </p>
            </div>

            <div className="mt-10 pt-7 border-t border-gray-100 flex items-center gap-4">
              <div className="h-14 w-1.5 bg-amber-500 rounded-full"></div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Dr. Mithun Chakravarthy</p>
                <p className="text-sm text-gray-500">Principal & Academic Visionary</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrincipalProfile;