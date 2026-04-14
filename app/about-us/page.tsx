import React from 'react';
import { Award, BookOpen, MapPin, Trophy } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const HistorySection: React.FC = () => {
  const accreditationData = [
    { year: '2004', grade: 'B', details: 'Accredited (70-75 marks)' },
    { year: '2010', grade: 'B', details: 'Reaccredited (CGPA 2.33)' },
    { year: '2017', grade: 'B++', details: '3rd Cycle Reaccreditation (CGPA 2.77)' },
    { year: '2023', grade: 'A+', details: '4th Cycle Reaccreditation (CGPA 3.36)' },
  ];

  return (
    <>
    <Navbar2 />
    <section className="max-w-5xl mx-auto p-6 md:p-12 bg-white text-gray-800 ">
      {/* Header & Philosophy */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">Our History</h2>
        <p className="text-lg leading-relaxed mb-8 italic text-gray-600">
          "Vidyavardhaka Sangha" – Aimed at spreading education among the rural people who are the backbone of the country.
        </p>
        
        <div className="bg-purple-50 border-l-4 border-purple-900 p-6 rounded-r-lg shadow-sm">
          <blockquote className="text-xl font-medium text-purple-950">
            “When Wealth is lost, nothing is lost; <br />
            When Health is lost, something is lost; <br />
            When Character is lost, everything is lost.”
          </blockquote>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        {/* Founding Details */}
        <div>
          <h3 className="flex items-center text-2xl font-semibold mb-4 text-purple-800">
            <BookOpen className="mr-2" /> Foundation
          </h3>
          <p className="mb-4">
            The new college building was inaugurated on <strong>March 10, 1990</strong> by 
            His Holiness Sri. Sri. Vibudhesha Tirtha Swamiji of Admar Mutt, 
            under the presidentship of Sri K. Amarnath Shetty.
          </p>
          <p>
            The institution is recognized by the <strong>U.G.C., New Delhi</strong> (sections 2(F) and 12(b)) 
            and holds Permanent Affiliation with Mangalore University.
          </p>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="flex items-center text-2xl font-semibold mb-4 text-purple-800">
            <Trophy className="mr-2" /> Infrastructure
          </h3>
          <p className="mb-4">
            Our <strong>15-acre campus</strong> provides an ideal atmosphere for learning, 
            nestled in peaceful and serene surroundings.
          </p>
          <p>
            <strong>Kreeda Bhavan:</strong> A dedicated sports wing with indoor facilities 
            designed to promote physical excellence for students and the community.
          </p>
        </div>
      </div>

      {/* Accreditation Timeline */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-inner">
        <h3 className="flex items-center text-2xl font-semibold mb-8 text-purple-800">
          <Award className="mr-2" /> NAAC Accreditation Journey
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {accreditationData.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-purple-500">
              <span className="text-sm font-bold text-purple-500">{item.year}</span>
              <div className="text-2xl font-bold text-gray-900 my-1">Grade {item.grade}</div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{item.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Milestone Footer */}
      <div className="mt-12 text-center border-t pt-8">
        <div className="flex justify-center items-center text-gray-600">
          <MapPin className="mr-2 h-5 w-5" />
          <span>40+ Years of Excellence | Silver Jubilee celebrated in 2004-05</span>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default HistorySection;