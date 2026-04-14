import React from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  Globe, 
  Layers, 
  GraduationCap, 
  Languages, 
  BookOpen,
  FlaskConical,
  Smartphone
} from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const BCADegree: React.FC = () => {
  const semesters = [
    {
      num: "I Semester",
      batch: "SEP 2024-25 Batch Onwards",
      languages: [
        { code: "BCAENLS101", name: "English Language" },
        { code: "BASKALS101/ BCAHDLS101", name: "Kannada / Hindi" }
      ],
      cores: [
        { code: "BCACACS101", name: "Foundations of Computers" },
        { code: "BCACACS102", name: "Programming in C" },
        { code: "BCACACS103", name: "Discrete Mathematics for Computer Applications" },
        { code: "AECCCV01", name: "Constitutional Values" }
      ],
      labs: [
        { code: "BCACAPS104", name: "Information Technology - Lab" },
        { code: "BCACAPS105", name: "C Programming - Lab" }
      ]
    },
    {
      num: "II Semester",
      batch: "SEP",
      languages: [
        { code: "BCAENLS201", name: "English Language" },
        { code: "BCAKALS201/ BCAHDLS201", name: "Kannada / Hindi" }
      ],
      cores: [
        { code: "BCACACS201", name: "Data Structures" },
        { code: "BCACACS202", name: "Object Oriented Programming Using Java" },
        { code: "BCACACS203", name: "Computational Mathematics" },
        { code: "COMCOVS201", name: "Constitutional Values" }
      ],
      labs: [
        { code: "BCACAPS204", name: "Data Structures - Lab" },
        { code: "BCACAPS205", name: "Object Oriented Programming Using Java - Lab" }
      ]
    },
    {
      num: "III Semester",
      batch: "SEP",
      languages: [
        { code: "BCAENLS301", name: "English Language" },
        { code: "BCAKALS301/ BCAHDLS301", name: "Kannada / Hindi" }
      ],
      cores: [
        { code: "BCACACS301", name: "Database Management System" },
        { code: "BCACACS302", name: "C SHARP and Dotnet Framework" },
        { code: "BCACACS303", name: "Computer Networks" },
        { code: "BCACAES301", name: "Open Source Tools" }
      ],
      labs: [
        { code: "BCACAPS304", name: "Database Management System - Lab" },
        { code: "BCACAPS305", name: "C SHARP and Dotnet Framework - Lab" }
      ]
    },
    {
      num: "IV Semester",
      batch: "SEP",
      languages: [
        { code: "BCAENLS401", name: "English Language" },
        { code: "BCAKALS401/ BCAHDLS401", name: "Kannada / Hindi" }
      ],
      cores: [
        { code: "BCACACS401", name: "Python Programming" },
        { code: "BCACACS402", name: "Advanced Java and J2EE" },
        { code: "BCACACS403", name: "Operating Systems Concepts" },
        { code: "BCACASS401", name: "Basic Web Designing Skills" },
        { code: "BCACAES401", name: "Digital Image Processing" }
      ],
      labs: [
        { code: "BCACAPS404", name: "Python Programming - Lab" },
        { code: "BCACAPS405", name: "Advanced Java and J2EE - Lab" }
      ]
    },
    {
      num: "V Semester",
      batch: "NEP",
      isNEP: true,
      cores: [
        { code: "BCACACN501", name: "Design and Analysis of Algorithms" },
        { code: "BCACACN502", name: "Statistical Computing and R Programming" },
        { code: "BCACACN503", name: "Software Engineering" },
        { code: "BCACAEN501", name: "Cloud Computing" },
        { code: "BCACAVN501", name: "Digital Marketing" },
        { code: "COMESSN501", name: "Employability Skill" }
      ],
      labs: [
        { code: "BCACAPN504", name: "Design and Analysis of Algorithms - Lab" },
        { code: "BCACAPN505", name: "Statistical Computing and R Programming - Lab" }
      ]
    },
    {
      num: "VI Semester",
      batch: "NEP",
      isNEP: true,
      cores: [
        { code: "BCACACN601", name: "PHP and MYSQL" },
        { code: "BCACACN602", name: "Advanced Java and J2EE" },
        { code: "BCACACN603", name: "Artificial Intelligence and Mobile Applications" },
        { code: "BCACAVN601", name: "Web Content Management Systems" },
        { code: "BCACAEN602", name: "Mobile Application Development" },
        { code: "BCAPRON601", name: "Mini Project (Final)" }
      ],
      labs: [
        { code: "BCACAPN604", name: "PHP and MYSQL - Lab" },
        { code: "BCACAPN605", name: "Advanced Java and J2EE - Lab" }
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
             <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase border border-purple-200">Tech & Innovation</span>
          </div>
          <h2 className="text-5xl font-black text-purple-900 mb-4 tracking-tighter italic">
            B.C.A Degree
          </h2>
          <div className="h-1.5 w-32 bg-amber-500 mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-medium">
             <div className="flex items-center gap-2 bg-white shadow-sm border px-4 py-2 rounded-xl"><Terminal size={18} className="text-purple-900"/> Software Development</div>
             <div className="flex items-center gap-2 bg-white shadow-sm border px-4 py-2 rounded-xl"><Database size={18} className="text-purple-900"/> Data Management</div>
             <div className="flex items-center gap-2 bg-white shadow-sm border px-4 py-2 rounded-xl"><Smartphone size={18} className="text-purple-900"/> Mobile Apps</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {semesters.map((sem, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300">
              {/* Semester Header */}
              <div className="bg-purple-900 p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">{sem.num}</h3>
                  <p className="text-purple-300 text-xs font-mono uppercase mt-1">{sem.batch}</p>
                </div>
                <div className="bg-amber-500 p-2 rounded-lg text-purple-900">
                  <Code2 size={24} />
                </div>
              </div>

              <div className="p-8 space-y-6">
                {/* Languages Section */}
                {sem.languages && (
                  <div>
                    <div className="flex items-center gap-2 text-amber-600 font-bold text-sm mb-3 uppercase tracking-wider">
                      <Languages size={16} /> <span>Language Foundation</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {sem.languages.map((lang, lIdx) => (
                        <div key={lIdx} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border-l-4 border-amber-500">
                          <span className="text-gray-800 font-semibold text-sm">{lang.name}</span>
                          <span className="text-[10px] font-mono text-gray-400">{lang.code}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Tech Subjects */}
                <div>
                  <div className="flex items-center gap-2 text-purple-900 font-bold text-sm mb-3 uppercase tracking-wider">
                    <Layers size={16} /> <span>Core Curriculum</span>
                  </div>
                  <div className="space-y-2">
                    {sem.cores.map((core, cIdx) => (
                      <div key={cIdx} className="flex justify-between items-start gap-4 p-3 rounded-xl hover:bg-purple-50 transition-colors border border-transparent hover:border-purple-100">
                        <div className="flex gap-3">
                           <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-900" />
                           <span className="text-gray-700 text-sm leading-tight font-medium">{core.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-gray-400 shrink-0">{core.code}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Labs */}
                <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm mb-3 uppercase tracking-wider">
                    <FlaskConical size={16} /> <span>Practical Labs</span>
                  </div>
                  <div className="grid gap-2">
                    {sem.labs.map((lab, labIdx) => (
                      <div key={labIdx} className="flex justify-between items-center bg-white/60 p-2 px-3 rounded-lg border border-amber-200 shadow-sm">
                        <span className="text-gray-800 text-xs font-bold">{lab.name}</span>
                        <span className="text-[9px] font-mono text-amber-600 font-bold">{lab.code}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {sem.isNEP && (
                <div className="bg-gray-900 py-2 text-center">
                   <span className="text-[10px] text-amber-400 font-black tracking-widest uppercase">NEP Framework Compliant</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Career Outcome Footer */}
        <div className="mt-16 text-center">
           <div className="inline-flex items-center gap-3 px-8 py-4 bg-purple-900 rounded-2xl text-white shadow-2xl">
              <Cpu className="text-amber-500" />
              <p className="text-sm font-medium">Developing logic and coding proficiency for the next generation of IT leaders.</p>
           </div>
        </div>

      </section>
    </>
  );
};

export default BCADegree;