import React from 'react';
import { BookOpen, GraduationCap, Languages, ScrollText, Library, Award } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const BADegree: React.FC = () => {
  const semesters = [
    {
      num: "1st Semester",
      batch: "SEP 2024 - 25 Batch Onwards",
      languages: [
        { code: "BASENLS101", name: "English Language" },
        { code: "BASKALS101/BASHDLS101", name: "Kannada / Hindi" }
      ],
      cores: [
        { code: "BASARCS191", name: "History and Culture of India Beginning from 700AD" },
        { code: "BASPSCS101", name: "Key Concepts in Political Science" },
        { code: "BASECCS101", name: "Foundation of Micro Economics" },
        { code: "COMCOVS101", name: "Constitutional Values (Elective Paper)" }
      ]
    },
    {
      num: "2nd Semester",
      batch: "SEP",
      languages: [
        { code: "BASENLS202", name: "English Language" },
        { code: "BASKALS202/BASHDLS202", name: "Kannada / Hindi" }
      ],
      cores: [
        { code: "BASARCS201", name: "History and Culture of India 700 to 1565AD" },
        { code: "BASPSCS201", name: "Western Political Thought" },
        { code: "BASECCES201", name: "Foundation of Micro Economics" },
        { code: "COMCOVS201", name: "Constitution/Value" }
      ]
    },
    {
        num: "3rd Semester",
        batch: "SEP",
        languages: [
          { code: "BASENLS301", name: "English Language" },
          { code: "BASKALS301/BASHDLS302", name: "Kannada / Hindi" }
        ],
        cores: [
          { code: "BASARCS301", name: "History and Culture of India 1556 -1947 AD" },
          { code: "BASECCS301", name: "Banking and Insurance" },
          { code: "BASPSCS301", name: "Indian Political Thought" },
          { code: "BASARES301", name: "Sustainable Heritage Tourism (Open Elective)" }
        ]
      },
      {
        num: "4th Semester",
        batch: "SEP",
        languages: [
          { code: "BASENLS402", name: "English Language" },
          { code: "BASKALS402/BASHDLS402", name: "Kannada / Hindi" }
        ],
        cores: [
          { code: "BASARCS401", name: "History of Karnataka A.D 1565 – 1956" },
          { code: "-", name: "Politics, Society and Economy" },
          { code: "-", name: "International Trade and Finance" },
          { code: "BASARES401", name: "Study of Ancient Indian Scripts (Skill Paper)" }
        ]
      },
      {
        num: "5th Semester",
        batch: "NEP",
        isNEP: true,
        cores: [
          { code: "BASARCN501", name: "History and Culture of India 1909 - 1947 A. D" },
          { code: "BASARCN502", name: "Archaeology: Methods and Practice" },
          { code: "BASARCN503", name: "Sustainable Heritage Tourism in India" },
          { code: "BASPSCN501", name: "International Relations: Basic Concepts" },
          { code: "BASPSCN502", name: "Comparative Government and Politics" },
          { code: "BASPSCN503", name: "Karnataka Government and Politics" },
          { code: "COMESSN501", name: "Employability Skills" }
        ]
      },
      {
        num: "6th Semester",
        batch: "NEP",
        isNEP: true,
        cores: [
          { code: "BASARCN601", name: "History of Karnataka 1565 - 1956 A.D" },
          { code: "BASARCN602", name: "Study of Archaeology: Excavated Sites" },
          { code: "BASARCN603", name: "Art and Architecture in Pre - Modern India" },
          { code: "BASPSCN601", name: "International Relations: Theoretical Aspects" },
          { code: "BASPSCN602", name: "Political Economy of India" },
          { code: "BASPSCN603", name: "Modern Indian Political Thinkers" },
          { code: "BAARPRN601", name: "Mini Project - Political Science" }
        ]
      }
  ];

  return (
    <>
      <Navbar2 />
      <section className="py-12 px-4 max-w-7xl mx-auto font-sans ">
        
        {/* Course Intro */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
             <span className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">Undergraduate Program</span>
          </div>
          <h2 className="text-5xl font-black text-purple-900 mb-4 tracking-tighter italic">
            Bachelor of Arts (B.A)
          </h2>
          <div className="h-1.5 w-32 bg-amber-500 mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-medium">
             <div className="flex items-center gap-2 bg-white shadow-sm border px-4 py-2 rounded-xl"><Library size={18} className="text-purple-900"/> Ancient History & Archaeology</div>
             <div className="flex items-center gap-2 bg-white shadow-sm border px-4 py-2 rounded-xl"><ScrollText size={18} className="text-purple-900"/> Economics</div>
             <div className="flex items-center gap-2 bg-white shadow-sm border px-4 py-2 rounded-xl"><Award size={18} className="text-purple-900"/> Political Science</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {semesters.map((sem, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:border-purple-200 transition-all">
              {/* Semester Header */}
              <div className="bg-purple-900 p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">{sem.num}</h3>
                  <p className="text-purple-300 text-xs font-mono uppercase mt-1">{sem.batch}</p>
                </div>
                {sem.isNEP && (
                  <span className="bg-amber-500 text-purple-900 text-[10px] font-black px-3 py-1 rounded-full">NEP COMPLIANT</span>
                )}
              </div>

              <div className="p-8 space-y-6">
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
                      <div key={cIdx} className="group flex justify-between items-start gap-4 p-3 rounded-xl hover:bg-purple-50 transition-colors border border-transparent hover:border-purple-100">
                        <div className="flex gap-3">
                           <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-900 group-hover:scale-125 transition-transform" />
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

        {/* Footer info */}
        <div className="mt-16 text-center">
           <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 rounded-2xl text-white shadow-2xl">
              <GraduationCap className="text-amber-500" />
              <p className="text-sm">Curriculum structure is subject to University regulations and NEP updates.</p>
           </div>
        </div>

      </section>
    </>
  );
};

export default BADegree;