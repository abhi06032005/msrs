"use client";
import React from 'react';
import { 
  FileText, 
  ClipboardCheck, 
  MapPin, 
  ExternalLink, 
  AlertCircle,
  FileCheck,
  Calendar,
  Info,
  Navigation
} from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const AdmissionProcess: React.FC = () => {
  const documents = [
    "S.S.L.C and P.U.C. Marks Card",
    "Transfer and conduct certificate (from previous institution)",
    "Migration / Eligibility Certificate (if migrating from other University)",
    "Three copies of recent passport size photographs"
  ];

  return (
    <>
    <Navbar2 />
     <div className="max-w-7xl mx-auto px-4 py-16 bg-white font-sans ">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-4 tracking-tight">Admission Portal</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Applications are invited for B.C.A , B.A. & B.Com Degree Courses. Join a tradition of excellence 
          at Mulki Sunder Ram Shetty College.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        
        {/* Left Col: Digital Application & Eligibility */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Online Admission CTA */}
          <div className="bg-linear-to-br from-purple-900 to-indigo-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <ExternalLink size={28} className="text-amber-400" /> Online Inquiry
              </h2>
              <p className="text-purple-100 mb-8 text-lg max-w-xl">
                Submit your initial details through our secure Google Form. Our admissions team 
                will review your inquiry and contact you for the next steps.
              </p>
              <a 
                href="YOUR_GOOGLE_FORM_LINK_HERE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-purple-950 font-extrabold px-10 py-4 rounded-xl transition-all transform hover:scale-105 shadow-2xl uppercase tracking-wider text-sm"
              >
                Open Google Form
              </a>
            </div>
            <div className="absolute -right-10 -bottom-10 h-64 w-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          {/* Eligibility & Guidelines */}
          <section className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <ClipboardCheck className="text-purple-600" size={28} /> Eligibility & Admission Rules
            </h2>
            <div className="prose prose-purple max-w-none text-gray-700">
              <p className="mb-6 text-lg">
                Candidates who have passed the **Pre-University examination** (Karnataka Board) or any other equivalent recognised by **Mangalore University** are eligible for admission to B.A. & B.Com Degree Courses.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8 text-sm">
                <div className="space-y-4">
                  <h3 className="font-bold text-purple-900 flex items-center gap-2">
                    <AlertCircle size={18} className="text-amber-600" /> Admission Guidelines
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-2"><span>1.</span> Applications must be complete and submitted by the specified date.</li>
                    <li className="flex gap-2"><span>2.</span> A recent passport size photo must be affixed to the application.</li>
                    <li className="flex gap-2"><span>3.</span> Admission is granted only after an interview with the candidate and parent/guardian.</li>
                    <li className="flex gap-2"><span>4.</span> Selected candidates must sign a declaration in the presence of the Principal.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-purple-900 flex items-center gap-2">
                    <Info size={18} className="text-purple-600" /> Important Terms
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-2"><span>•</span> Admissions are provisional and subject to University approval.</li>
                    <li className="flex gap-2"><span>•</span> Renewal depends on satisfactory attendance, progress, and conduct.</li>
                    <li className="flex gap-2"><span>•</span> The Principal may refuse admission without assigning any reason.</li>
                    <li className="flex gap-2"><span>•</span> Applicants must accept all current and future college regulations.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Required Documents */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileCheck className="text-purple-600" size={28} /> Documents Required
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-purple-50/50 border border-purple-100 rounded-2xl transition-all hover:bg-purple-50">
                  <div className="h-10 w-10 bg-white text-purple-600 rounded-xl shadow-sm flex items-center justify-center shrink-0 font-bold">
                    {i + 1}
                  </div>
                  <span className="text-sm font-semibold text-gray-800 leading-snug pt-1">{doc}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Col: Offline Admission & Location */}
        <div className="space-y-8">
          
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="text-amber-500" /> Offline Admissions
            </h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Visit our administrative office for the prescribed application form and prospectus.
              <br /><br />
              <span className="font-bold text-purple-900">Registration Fee: Rs 50/-</span>
            </p>
            
            {/* LOCATION BUTTON COMPONENT */}
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-200 text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <MapPin className="text-purple-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Campus Location</h3>
              <p className="text-xs text-gray-500 mb-6 italic">
                Shirva, Karnataka 574116
              </p>
              <a 
                href="https://maps.google.com/?cid=17110438050440698600&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-purple-600 hover:text-purple-600 text-gray-700 font-bold py-3 rounded-xl transition-all shadow-sm group"
              >
                <Navigation size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Get Directions
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-3">
               <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                  <Calendar size={18} className="text-purple-600" />
                  Office Hours: 9:00 AM — 5:00 PM
               </div>
            </div>
          </div>

          {/* Quick Help Card */}
          <div className="p-8 bg-purple-900 rounded-3xl text-white shadow-lg relative overflow-hidden">
             <h3 className="font-bold text-xl mb-2 relative z-10">Need Assistance?</h3>
             <p className="text-purple-200 text-sm mb-6 relative z-10">
               Have questions about eligibility or the interview process? Our help desk is ready to assist you.
             </p>
             <a 
               href="mailto:info@msrscollege.org" 
               className="relative z-10 inline-block text-amber-400 font-bold border-b-2 border-amber-400 pb-1 hover:text-white hover:border-white transition-all"
             >
               Contact Admissions Office
             </a>
             <div className="absolute -right-4 -bottom-4 opacity-10">
                <FileText size={120} />
             </div>
          </div>

        </div>

      </div>
    </div>
    </>
   
  );
};

export default AdmissionProcess;