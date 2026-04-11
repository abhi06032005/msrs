"use client";
import React from 'react';
import { 
  Book, 
  Clock, 
  Scale, 
  Building2, 
  Newspaper, 
  Info, 
  Languages,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const LibrarySection: React.FC = () => {
  const bookStats = [
    { label: "English", count: 1325 },
    { label: "Kannada", count: 2494 },
    { label: "History", count: 1565 },
    { label: "Political Science", count: 1502 },
    { label: "Economics", count: 2465 },
    { label: "Commerce", count: 4442 },
    { label: "Reference", count: 2491 },
    { label: "General", count: 1962 },
  ];

  const bookBanks = [
    "K.P. Ramanna Shetty & Ammani R. Shetty Trust", "K.P. Shama Shetty & Shubhavathi S. Shetty",
    "Canara Bank", "Corporation Bank", "Vijaya Bank", "Karnataka Bank Ltd.",
    "Syndicate Bank", "Jindal Trust", "Vidyarthi Grantha Sanchayini", "U.G.C."
  ];

  return (
    <>
    <Navbar2 />
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white font-sans mt-10">
      
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-12 mb-20 items-center">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
            <Book size={18} />
            <span>19,579+ Books & Rare Collections</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Our Library: A Gateway to Knowledge
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            The college library is a well-equipped sanctuary for learners, housing a diverse range of 
            academic texts, rare editions, and digital resources to support rural youth in their 
            educational journey.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
              <Clock className="text-blue-600" />
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Opening Hours</p>
                <p className="text-sm font-bold text-gray-800">9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
              <Building2 className="text-blue-600" />
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Availability</p>
                <p className="text-sm font-bold text-gray-800">Working Days & Vacations</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src="data:image/jpeg;base64,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" 
              alt="College Library" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Stats & Collection Grid */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Languages className="text-blue-600" /> Subject-wise Collection (2020-21)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bookStats.map((stat, i) => (
            <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-blue-200 transition-colors">
              <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
              <p className="text-2xl font-black text-blue-900">{stat.count.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rules & Book Bank Tabs */}
      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Library Rules */}
        <div className="bg-gray-900 text-white rounded-4xl p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-amber-400">
            <Scale size={28} /> Library Regulations
          </h2>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <CheckCircle2 className="text-amber-500 shrink-0" size={20} />
              <p className="text-gray-300 text-sm leading-relaxed">Identity Card and Borrower’s Ticket are mandatory for book issuance.</p>
            </li>
            <li className="flex gap-4">
              <CheckCircle2 className="text-amber-500 shrink-0" size={20} />
              <p className="text-gray-300 text-sm leading-relaxed">A student can possess maximum <strong>2 books</strong> at a time for a period of one week.</p>
            </li>
            <li className="flex gap-4">
              <AlertCircle className="text-red-400 shrink-0" size={20} />
              <p className="text-gray-300 text-sm leading-relaxed">Late returns attract a fine of <strong>Rs. 1 per day</strong>.</p>
            </li>
            <li className="flex gap-4 text-blue-300 italic">
              <Info flex-shrink-0 size={20} />
              <p className="text-sm">Students must maintain absolute silence in the Reading Room.</p>
            </li>
          </ul>
        </div>

        {/* Book Banks */}
        <div className="bg-blue-50 rounded-4xl p-8 md:p-12 border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
            <Building2 size={28} className="text-blue-600" /> Support: Book Banks
          </h2>
          <p className="text-blue-800 text-sm mb-6 leading-relaxed">
            Established to support students from rural and economically weaker sections:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bookBanks.map((bank, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-bold text-blue-700 bg-white p-3 rounded-xl border border-blue-100">
                <span className="h-2 w-2 bg-blue-400 rounded-full"></span>
                {bank}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Magazines & Dailies */}
      <section className="mt-20">
        <div className="bg-white border-2 border-gray-100 rounded-[2.5rem] p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Newspaper className="text-blue-600" /> Reading Room Subscriptions
            </h2>
            <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest">
              <span className="px-3 py-1 bg-gray-100 rounded-md">(W) Weekly</span>
              <span className="px-3 py-1 bg-gray-100 rounded-md">(M) Monthly</span>
              <span className="px-3 py-1 bg-gray-100 rounded-md">(F) Fortnightly</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-blue-900 font-bold mb-4 border-b pb-2 uppercase text-xs tracking-widest">Magazines Available</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600">
                <span>• Taranga</span><span>• Sudha</span><span>• The Week</span>
                <span>• Southern Economist</span><span>• Competition Success Review</span>
                <span>• Reader’s Digest</span><span>• Spardha Spoorthi</span><span>• Manjuvani</span>
              </div>
            </div>
            <div>
              <h3 className="text-blue-900 font-bold mb-4 border-b pb-2 uppercase text-xs tracking-widest">Daily Newspapers</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600">
                <span>• Udayavani</span><span>• Vijaya Karnataka</span><span>• The Hindu</span>
                <span>• Times of India</span><span>• Deccan Herald</span><span>• Business Line</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default LibrarySection;