"use client";

import React from 'react';
import { 
  FileText, 
  Download, 
  ShieldCheck, 
  Award, 
  Calendar, 
  Users, 
  BarChart3, 
  Archive,
  CheckCircle2
} from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const NAACPage: React.FC = () => {
  const sections = [
    {
      title: "IV Cycle Result Documents (2023)",
      icon: <Award className="text-amber-500" />,
      description: "Official results and detailed score sheets for the most recent NAAC cycle.",
      links: [
        { name: "Peer Team Report", url: "/naac/PEER-TEAM-REPORT.pdf" },
        { name: "Graphical Representation", url: "/naac/Graphical-Representation-based-on-QnM-&-QlM.pdf" },
        { name: "Institutional Grade Sheet", url: "/naac/Institutional_Grade_Sheet.pdf" },
        { name: "Peer Team Metric wise Score Sheet", url: "/naac/Peer-Team-Metric-wise-Score-Sheet.pdf" },
      ]
    },
     {
      title: " NAAC PEER TEAM",
      icon: <Calendar className="text-purple-900" />,
      description: "Academic and institutional planning schedules.",
      links: [
        { name: "III Cycle 2017", url: "/naac/NAAC-Peer-Team-visit.pdf" },
        { name: "IV Cycle 2023", url: "/naac/PEER-TEAM-COMPOSITION-JULY-2023.pdf" },
      ]
    },  
    {
      title: "AQAR Reports",
      icon: <FileText className="text-purple-900" />,
      description: "Annual Quality Assurance Reports submitted to NAAC.",
      links: [
        { name: "AQAR 2023 - 24", url: "/naac/AQAR-2023-24.pdf" },
        { name: "AQAR 2022 - 23", url: "/naac/AQAR-2022-23.pdf" },
        { name: "AQAR 2021 - 22", url: "/naac/AQAR-2021-22.pdf" },
        { name: "AQAR 2020 - 21", url: "/naac/AQAR-2020-21.pdf" },
        { name: "AQAR 2019 - 20", url: "/naac/AQAR-Report-2019-20.pdf" },
        { name: "AQAR 2018 - 19", url: "/naac/AQAR-Report-2018-19.pdf" },
        { name: "AQAR 2017 - 18", url: "/naac/AQAR-2017-18.pdf" },
      ]
    },
    {
      title: "IQAC Archives",
      icon: <Archive className="text-amber-500" />,
      description: "Historical Internal Quality Assurance Cell documentation.",
      links: [
        { name: "IQAC 2015 - 16", url: "/naac/IQAC-Report-2015-16.pdf" },
        { name: "IQAC 2014 - 15", url: "/naac/IQAC-Guidelines & AQAR 2014-15.pdf" },
        { name: "IQAC 2013 - 14", url: "/naac/IQACGuidelines & AQAR 2013-14.pdf" },
        { name: "IQAC 2012 - 13", url: "/naac/2012-13 IQAC Report.pdf" },
        { name: "IQAC 2011 - 12", url: "/naac/2011-12_naac_report.pdf" },
      ]
    },
    {
      title: "Calendar of Events",
      icon: <Calendar className="text-purple-900" />,
      description: "Academic and institutional planning schedules.",
      links: [
        { name: "Calendar 2023-24", url: "/naac/CALENDAR-OF-EVENTS-2023-24.pdf" },
        { name: "Calendar 2022-23", url: "/naac/CALENDAR-OF-EVENTS-2022-23.pdf" },
        { name: "Calendar 2021-22", url: "/naac/CALENDAR-OF-EVENTS-2021-22.pdf" },
        { name: "Calendar 2020-21", url: "/naac/CALENDAR-OF-EVENTS-2020-21.pdf" },
        { name: "Calendar 2019-20", url: "/naac/2019-20_calender.pdf" },
        { name: "Calendar 2018-19", url: "/naac/2018-19_calendar.pdf" },
      ]
    },
  {
      title: "Best Practices & Initiatives",
      icon: <Calendar className="text-purple-900" />,
      description: "Academic and institutional planning schedules.",
      links: [
        { name: "Best Practices 2022-23", url: "/naac/BEST_PRACTICES_2022-23.pdf" },
        { name: "Best Practices 2021-22", url: "/naac/CALENDAR-OF-EVENTS-2021-22.pdf" },
        { name: "Best Practices 2020-21", url: "/naac/CALENDAR-OF-EVENTS-2020-21.pdf" },
        { name: "Best Practices 2019-20", url: "/naac/2019-20_calender.pdf" },
        { name: "Best Practices 2018-19", url: "/naac/2018-19_calendar.pdf" },
      ]
    },
    
      {
      title: "Institutional Distinctiveness",
      icon: <Calendar className="text-purple-900" />,
      description: "Academic and institutional planning schedules.",
      links: [
        { name: "Year 2022-23", url: "/naac/institutional_distinctiveness_2022-23.pdf" },
        { name: "Year 2021-22", url: "/naac/institutional_distinctiveness_2021-22.pdf" },
        { name: "Year 2020-21", url: "/naac/institutional_distinctiveness_2020-21.pdf" },
        { name: "Year 2019-20", url: "/naac/institutional_distinctiveness_2019-20.pdf" },
        { name: "Year 2018-19", url: "/naac/institutional_distinctiveness_2018-19.pdf" },
      ]
    },
      {
      title: "Satisfaction Surveys",
      icon: <Calendar className="text-purple-900" />,
      description: "Academic and institutional planning schedules.",
      links: [
        { name: "Survey 2022-23", url: "/naac/satisfaction_survey_2022-23.pdf" },
        { name: "Survey 2021-22", url: "/naac/satisfaction_survey_2021-22.pdf" },
        { name: "Survey 2020-21", url: "/naac/satisfaction_survey_2020-21.pdf" },
        { name: "Survey 2019-20", url: "/naac/satisfaction_survey_2019-20.pdf" },
        { name: "Feedback", url: "/naac/feedback.pdf" },
      ]
    },
    {
      title: "Other Supporting Documents",
      icon: <Calendar className="text-purple-900" />,
      description: "Academic and institutional planning schedules.",
      links: [
        { name: "COMPLIANCE STATEMENT", url: "/naac/STATEMENT-COMPLIANCE-Latest-18-1-2023.pdf" },
        { name: "CRITERION 7.1.1", url: "/naac/CRITERION-7-1-1.pdf" },
        { name: "STUDENT STRENGTH RESERVATION TABLE", url: "/naac/RESERVATION-TABLE.pdf" },
        { name: "STUDENT SATISFACTION SURVEY", url: "/naac/students_satisfaction_report.pdf" },
    
      ]
    },  
  ];

  return (
    <>
      <Navbar2 />
      <section className="py-12 px-4 max-w-7xl mx-auto font-sans ">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 rounded-full text-purple-900 text-sm font-bold border border-purple-200 mb-4">
             <ShieldCheck size={16} className="text-amber-500" />
             NAAC & IQAC Repository
          </div>
          <h2 className="text-5xl font-black text-purple-900 mb-4 tracking-tighter italic">
            Quality Assurance
          </h2>
          <div className="h-1.5 w-32 bg-amber-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Highlight Section: Cycle Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-purple-900 p-8 rounded-3xl text-white flex items-center justify-between shadow-xl">
            <div>
              <p className="text-purple-300 font-bold text-sm uppercase">Previous Milestone</p>
              <h4 className="text-2xl font-black">NAAC Peer Team: III Cycle</h4>
            </div>
            <div className="text-4xl font-black text-amber-500 italic">2017</div>
          </div>
          <div className="bg-amber-500 p-8 rounded-3xl text-purple-900 flex items-center justify-between shadow-xl">
            <div>
              <p className="text-amber-900 font-bold text-sm uppercase">Current Milestone</p>
              <h4 className="text-2xl font-black">NAAC Peer Team: IV Cycle</h4>
            </div>
            <div className="text-4xl font-black text-white italic">2023</div>
          </div>
        </div>

        {/* Main Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300">
              <div className="p-6 border-b border-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gray-50 rounded-lg">{section.icon}</div>
                  <h3 className="font-bold text-lg text-purple-900">{section.title}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{section.description}</p>
              </div>
              
              <div className="p-6 space-y-3 grow">
                {section.links.map((link, lIdx) => (
                  <a 
                    key={lIdx} 
                    href={link.url}
                    className="flex items-center justify-between group p-3 rounded-xl hover:bg-purple-50 transition-colors border border-transparent hover:border-purple-100"
                  >
                    <span className="text-sm text-gray-700 group-hover:text-purple-900 font-medium">{link.name}</span>
                    <Download size={16} className="text-gray-400 group-hover:text-amber-500" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Files Section (Criterion 7.1.1) */}
        <div className="mt-16 bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BarChart3 className="text-amber-500" /> AQAR 2023-24 Focused Files
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <button className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-all text-left group">
                <FileText className="text-amber-500" />
                <div>
                  <div className="text-xs text-gray-400 uppercase">Criterion 7.1.1</div>
                  <div className="text-sm font-bold">Gender Equity Initiatives</div>
                </div>
              </button>
              <button className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-all text-left group">
                <Users className="text-amber-500" />
                <div>
                  <div className="text-xs text-gray-400 uppercase">Enrollment</div>
                  <div className="text-sm font-bold">Strength Reservation Table</div>
                </div>
              </button>
              <button className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-all text-left group">
                <CheckCircle2 className="text-amber-500" />
                <div>
                  <div className="text-xs text-gray-400 uppercase">SSS</div>
                  <div className="text-sm font-bold">Student Satisfaction Survey</div>
                </div>
              </button>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default NAACPage;