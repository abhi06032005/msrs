import React from 'react';
import { BookOpen, GraduationCap, Languages, Calculator, TrendingUp, Coins, Briefcase, ShieldCheck } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const BComDegree: React.FC = () => {
  const semesters = [
    {
      num: "1st Semester",
      batch: "SEP 2024-25 Batch Onwards",
      languages: [
        { code: "BCMENLS101", name: "English Language" },
        { code: "BCMKALS101/ BCMHDLS101", name: "Kannada / Hindi" }
      ],
      cores: [
        { code: "BCMCMCS101", name: "Quantitative Techniques – I" },
        { code: "BCMCMCS102", name: "Foundation of Commerce - I" },
        { code: "BCMCMCS103", name: "Financial Accounting – I" },
        { code: "BCMCMCS104", name: "Individual and Team Management" },
        { code: "COMCOVS101", name: "Constitutional Values (Elective Paper)" }
      ]
    },
    {
      num: "2nd Semester",
      batch: "SEP",
      languages: [
        { code: "BCMENLS201", name: "English Language" },
        { code: "BCMKALS201 / BCMHDLS201", name: "Kannada / Hindi" }
      ],
      cores: [
        { code: "BCMCMCS201", name: "Quantitative Techniques – II" },
        { code: "BCMCMCS202", name: "Foundation of Commerce - II" },
        { code: "BCMCMCS203", name: "Financial Accounting – II" },
        { code: "BCMCMCS204", name: "Fundamentals of Organizational Behaviour" }
      ]
    },
    {
      num: "3rd Semester",
      batch: "SEP",
      languages: [
        { code: "BCMENLS301", name: "English Language" },
        { code: "BCMKALS301/ BCMHDLS301", name: "Kannada / Hindi" }
      ],
      cores: [
        { code: "BCMCMCS301", name: "Cost and Management Accounting – I" },
        { code: "BCMCMCS302", name: "Corporate Accounting – I" },
        { code: "BCMCMCS303", name: "Income Tax – I" },
        { code: "BCMCMES305", name: "Strategic Marketing Management" },
        { code: "BCMCMOS309", name: "Digital Marketing" }
      ]
    },
    {
      num: "4th Semester",
      batch: "SEP",
      languages: [
        { code: "BCMENLS401", name: "English Language" },
        { code: "BCMKALS401/ BCMHDLS401", name: "Kannada / Hindi" }
      ],
      cores: [
        { code: "BCMCMCN401", name: "Advanced Corporate Accounting – II" },
        { code: "BCMCMCN402", name: "Costing Methods & Techniques– II" },
        { code: "BCMCMCN403", name: "Business Regulatory Framework" },
        { code: "COMIICN401", name: "India & Indian Constitution" },
        { code: "COMCSSN401", name: "Cyber Security" }
      ]
    },
    {
      num: "5th Semester",
      batch: "NEP",
      isNEP: true,
      cores: [
        { code: "BCMCMCN501", name: "Financial Management" },
        { code: "BCMCMCN502", name: "Income Tax Law and Practice - I" },
        { code: "BCMCMCN503", name: "Principles and Practice of Auditing" },
        { code: "BCMCCEN504", name: "Human Resources Development" },
        { code: "BCMCCEN502", name: "Financial Institutions and Markets" },
        { code: "BCMCMVN502", name: "Digital Marketing" },
        { code: "COMESSN501", name: "Employability Skills" }
      ]
    },
    {
      num: "6th Semester",
      batch: "NEP",
      isNEP: true,
      cores: [
        { code: "BCMCMCN601", name: "Advanced Financial Management" },
        { code: "BCMCMCN602", name: "Income Tax Law and Practice - II" },
        { code: "BCMCMCN603", name: "Management Accounting" },
        { code: "BCMCCEN604", name: "Cultural Diversity at Workplace" },
        { code: "BCMCMVN602", name: "E Commerce" },
        { code: "BCMCCEN602", name: "Invest Management" },
        { code: "BCMPRON601", name: "Mini Project" }
      ]
    }
  ];

  return (
    <>
      <Navbar2 />
      <section className="py-12 px-4 max-w-7xl mx-auto font-sans mt-30">
        
        {/* Course Intro */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
             <span className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">Professional Program</span>
          </div>
          <h2 className="text-5xl font-black text-purple-900 mb-4 tracking-tighter italic">
            Bachelor of Commerce (B.Com)
          </h2>
          <div className="h-1.5 w-32 bg-amber-500 mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-medium">
             <div className="flex items-center gap-2 bg-white shadow-sm border px-4 py-2 rounded-xl"><Calculator size={18} className="text-purple-900"/> Accounting & Taxation</div>
             <div className="flex items-center gap-2 bg-white shadow-sm border px-4 py-2 rounded-xl"><TrendingUp size={18} className="text-purple-900"/> Financial Management</div>
             <div className="flex items-center gap-2 bg-white shadow-sm border px-4 py-2 rounded-xl"><Briefcase size={18} className="text-purple-900"/> Digital Marketing</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {semesters.map((sem, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:border-amber-200 transition-all group">
              {/* Semester Header */}
              <div className="bg-purple-900 p-6 flex justify-between items-center group-hover:bg-purple-800 transition-colors">
                <div>
                  <h3 className="text-2xl font-bold text-white">{sem.num}</h3>
                  <p className="text-purple-300 text-xs font-mono uppercase mt-1">{sem.batch}</p>
                </div>
                {sem.isNEP ? (
                  <span className="bg-amber-500 text-purple-900 text-[10px] font-black px-3 py-1 rounded-full shadow-sm">NEP</span>
                ) : (
                  <div className="bg-purple-700 p-2 rounded-lg text-amber-400">
                    <Coins size={20} />
                  </div>
                )}
              </div>

              <div className="p-8 space-y-6 flex-grow">
                {/* Languages Section */}
                {sem.languages && (
                  <div>
                    <div className="flex items-center gap-2 text-amber-600 font-bold text-sm mb-3 uppercase tracking-wider">
                      <Languages size={16} /> <span>Languages</span>
                    </div>
                    <div className="space-y-2">
                      {sem.languages.map((lang, lIdx) => (
                        <div key={lIdx} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border-l-4 border-amber-500">
                          <span className="text-gray-800 font-semibold text-sm">{lang.name}</span>
                          <span className="text-[10px] font-mono text-gray-400">{lang.code}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Subjects Section */}
                <div>
                  <div className="flex items-center gap-2 text-purple-900 font-bold text-sm mb-3 uppercase tracking-wider">
                    <BookOpen size={16} /> <span>Core Subjects</span>
                  </div>
                  <div className="grid gap-2">
                    {sem.cores.map((core, cIdx) => (
                      <div key={cIdx} className="group flex justify-between items-start gap-4 p-3 rounded-xl hover:bg-amber-50 transition-colors border border-transparent hover:border-amber-100">
                        <div className="flex gap-3">
                           <div className="mt-1.5 w-2 h-2 rounded-sm bg-purple-900 rotate-45 group-hover:bg-amber-500 transition-colors" />
                           <span className="text-gray-700 text-sm leading-tight font-medium">{core.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-gray-400 shrink-0">{core.code}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Ethics Footer */}
        <div className="mt-16 text-center">
           <div className="inline-flex items-center gap-3 px-8 py-4 bg-purple-900 rounded-2xl text-white shadow-2xl">
              <ShieldCheck className="text-amber-500" />
              <p className="text-sm font-medium">Equipping students with analytical skills and financial expertise for the global economy.</p>
           </div>
        </div>

      </section>
    </>
  );
};

export default BComDegree;