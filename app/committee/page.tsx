"use client";
import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  Scale, 
  GraduationCap, 
  HeartHandshake, 
  AlertTriangle,
  FileText,
  Search,
  BookOpen,
  Globe
} from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const CommitteesDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'internal' | 'statutory' | 'cells'>('internal');

  const internalCommittees = [
    { id: 1, name: "College Development Council", chair: "Dr. Mithun Chakravarthy", convener: "Dr. Sona H.C.", members: ["Mrs. Hemalatha Shetty"] },
    { id: 2, name: "Admission Committee", heads: "Smt. Prashanthi (Humanities), Dr. Sona H.C. (Commerce), Ms. Anujna (BCA)", note: "Stream-wise specialized admission guidance." },
    { id: 3, name: "IQAC / NAAC / AICTE", coordinator: "Dr. Sona H.C.", members: ["Smt. Hemalatha Shetty", "Smt. Prashanthi", "Ms. Anujna", "Ms. Bhavyashree"] },
    { id: 4, name: "Examination & Time-Table", convener: "Smt. Prashanthi", members: ["Smt. Rashmi", "Ms. Anujna", "Smt. Deekshitha"] },
    { id: 5, name: "Placement & Career Guidance", convener: "Smt. Hemalatha Shetty", members: ["Smt. Rashmi", "Ms. Kaveri", "Ms. Deekshitha"] },
    { id: 6, name: "Grievance Redressal", convener: "Smt. Prashanthi", members: ["Smt. Varamahalaxmi", "Ms. Anujna"] },
    { id: 7, name: "Anti-Drug Awareness", convener: "Smt. Rashmi", members: ["Ms. Bhavyashree", "Smt. Varamahalaxmi"] },
  ];

  const statutoryCommittees = [
    { name: "NSS & Youth Red Cross", head: "Dr. Sona H. C.", member: "Smt. Prashanthi" },
    { name: "Cultural Association", head: "Smt. Rashmi", member: "Smt. Varamahalakshmi" },
    { name: "Literary Association", head: "Smt. Varamahalakshmi", member: "Smt. Anupama" },
    { name: "Electoral Literacy Club", head: "Smt. Soumya Kumari", role: "Democratic awareness" },
    { name: "Rovers & Rangers", head: "Smt. Soumya Kumari", role: "Scouting and discipline" },
    { name: "Anti-Ragging Cell", chair: "Principal", note: "Zero-tolerance campus policy." },
  ];

  const specialCells = [
    { 
      title: "SC/ST Committee", 
      quota: "15% SC / 3% ST", 
      focus: "Scholarship awareness, career counseling, and remedial support.",
      icon: <Scale className="text-purple-600" />
    },
    { 
      title: "Minority Cell", 
      quota: "5% Reservation", 
      focus: "Maintains communal harmony (Sadbhavana Day) and assists Christian, Muslim, and Jain students.",
      icon: <Globe className="text-emerald-600" />
    },
    { 
      title: "OBC Cell", 
      quota: "27% Reservation", 
      focus: "Ensures statutory compliance and educational support for OBC candidates.",
      icon: <Users className="text-amber-600" />
    },
    { 
      title: "Pro-active Mentoring", 
      ratio: "1:20 (Faculty-Student)", 
      focus: "Weekly face-to-face interaction for first-generation rural learners.",
      icon: <HeartHandshake className="text-pink-600" />
    }
  ];

  return (
    <>
    <Navbar2 />
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white font-sans mt-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Governance & Student Support</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Our college operates through various specialized committees and statutory cells to ensure 
          academic excellence, discipline, and equal opportunity for all.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          onClick={() => setActiveTab('internal')}
          className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeTab === 'internal' ? 'bg-purple-900 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          Internal Committees
        </button>
        <button 
          onClick={() => setActiveTab('statutory')}
          className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeTab === 'statutory' ? 'bg-purple-900 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          Statutory (Kannada/English)
        </button>
        <button 
          onClick={() => setActiveTab('cells')}
          className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeTab === 'cells' ? 'bg-purple-900 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          Student Welfare Cells
        </button>
      </div>

      {/* Tab Content: Internal Committees */}
      {activeTab === 'internal' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4">
          {internalCommittees.map((comm) => (
            <div key={comm.id} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-50 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 leading-tight">{comm.name}</h3>
              <div className="space-y-1 text-xs text-gray-500">
                {comm.chair && <p><span className="font-bold text-gray-700">Chair:</span> {comm.chair}</p>}
                {comm.convener && <p><span className="font-bold text-gray-700">Convener:</span> {comm.convener}</p>}
                {comm.coordinator && <p><span className="font-bold text-gray-700">Coordinator:</span> {comm.coordinator}</p>}
                {comm.members && <p><span className="font-bold text-gray-700">Members:</span> {comm.members.join(", ")}</p>}
                {comm.heads && <p className="italic">{comm.heads}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab Content: Statutory */}
      {activeTab === 'statutory' && (
        <div className="overflow-hidden bg-white border border-gray-100 rounded-3xl shadow-sm animate-in fade-in">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-600 text-xs uppercase tracking-widest font-bold">
              <tr>
                <th className="px-6 py-4">Association / Unit</th>
                <th className="px-6 py-4">In-Charge (ಮುಖಸ್ಥರು)</th>
                <th className="px-6 py-4">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {statutoryCommittees.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-purple-900">{item.name}</td>
                  <td className="px-6 py-4 text-gray-700">{item.head || item.chair}</td>
                  <td className="px-6 py-4 text-gray-500">{item.role || "Institutional"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab Content: Support Cells */}
      {activeTab === 'cells' && (
        <div className="space-y-8 animate-in fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            {specialCells.map((cell, i) => (
              <div key={i} className="flex gap-6 p-8 bg-gray-50 rounded-4xl border border-gray-200">
                <div className="h-14 w-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  {cell.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cell.title}</h3>
                  {cell.quota && <span className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-[10px] font-black uppercase text-gray-500 mb-3">{cell.quota}</span>}
                  {cell.ratio && <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-[10px] font-black uppercase mb-3">Ratio {cell.ratio}</span>}
                  <p className="text-sm text-gray-600 leading-relaxed">{cell.focus}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Grievance Table Summary */}
          <div className="bg-purple-900 rounded-[2.5rem] p-10 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="text-amber-400" /> Grievance Redressal Mechanism
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
              <div className="space-y-2">
                <p className="font-bold text-purple-300 uppercase tracking-widest text-[10px]">Low Performance</p>
                <p>Remedial classes, personal counseling, and face-to-face interaction.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-purple-300 uppercase tracking-widest text-[10px]">Scholarship Issues</p>
                <p>Dedicated committee refers cases to concerned departments for rapid processing.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-purple-300 uppercase tracking-widest text-[10px]">Student Welfare</p>
                <p>Bi-weekly suggestion box reviews by SWO and Principal for campus matters.</p>
              </div>
            </div>
          </div>
        </div>
      )}
  </div>
  </>
  );
};

export default CommitteesDashboard;