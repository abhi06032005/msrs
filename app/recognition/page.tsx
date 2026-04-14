import React from 'react';
import { FileDown, Award, CheckCircle, FileText, Download } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const Recognition: React.FC = () => {
  const documents = [
    { title: "2F and 12B UPDATED", url: "/recognition_pdfs/2F-and-12B-UPDATED.pdf" },
    { title: "AFFILIATION LETTER - 25.01.2023", url: "/recognition_pdfs/AFFILIATION-LETTER-25-01-2023.pdf" },
    { title: "AISHE 2021-22 ATTESTED - 18 JAN 2023", url: "/recognition_pdfs/AISHE-2021-22-ATTESTED-18-JAN-2023.pdf" },
    { title: "NAAC 2004 CERTIFICATES", url: "/recognition_pdfs/NAAC-2004-CERTIFICATES.pdf" },
    { title: "NAAC 2010 CERTIFICATES", url: "/recognition_pdfs/NAAC-2010-CERTIFICATES.pdf" },
    { title: "NAAC 2017 CERTIFICATES", url: "/recognition_pdfs/NAAC-2017-certificates.pdf" },
    { title: "NAAC 2023 CERTIFICATES", url: "/recognition_pdfs/NAAC-2023-certificates.pdf" },
  ];

  return (
    <>
      <Navbar2 />
      <section className="py-12 px-4 max-w-5xl mx-auto font-sans ">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-purple-900 mb-4 tracking-tight">
            Recognition & Accreditation
          </h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* 1st Title: Major Achievement (Non-downloadable) */}
        <div className="bg-linear-to-r from-purple-900 to-purple-800 rounded-2xl p-8 mb-10 shadow-xl border-b-4 border-amber-500">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="bg-amber-500 p-4 rounded-full shadow-lg">
              <Award size={48} className="text-white" />
            </div>
            <div>
              <h3 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-1">Current Standing</h3>
              <p className="text-3xl md:text-4xl font-black text-white">
                NAAC 2023 - 'A+' Grade
              </p>
              <p className="text-purple-100 text-lg mt-1 font-medium italic">
                Achieved with a 3.36 CGPA
              </p>
            </div>
            <div className="md:ml-auto">
              <div className="flex items-center gap-2 bg-purple-700/50 px-4 py-2 rounded-full border border-purple-500/30 text-white text-sm">
                <CheckCircle size={16} className="text-green-400" />
                Verified Excellence
              </div>
            </div>
          </div>
        </div>

        {/* Downloadable Documents List */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gray-50 px-8 py-4 border-b border-gray-100 flex items-center justify-between">
            <h4 className="font-bold text-gray-700 uppercase tracking-wider text-sm">Official Certifications</h4>
            <span className="text-xs text-gray-500 font-medium bg-gray-200 px-2 py-1 rounded">PDF Documents</span>
          </div>
          
          <div className="divide-y divide-gray-100">
            {documents.map((doc, index) => (
              <div 
                key={index} 
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-purple-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <div className="text-purple-900 bg-purple-100 p-3 rounded-lg group-hover:bg-purple-900 group-hover:text-white transition-all">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 group-hover:text-purple-900 transition-colors">
                      {doc.title}
                    </h5>
                    <p className="text-xs text-gray-500 uppercase mt-0.5">Official Document</p>
                  </div>
                </div>

                <a
                  href={doc.url}
                  download
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <Download size={18} />
                  <span>Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Tag */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full text-gray-500 text-sm border border-gray-200">
            <FileDown size={16} className="text-purple-900" />
            Click on the download button to save a copy of the certificate.
          </div>
        </div>
      </section>
    </>
  );
};

export default Recognition;