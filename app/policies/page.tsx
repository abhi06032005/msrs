import React from 'react';
import { 
  Utensils, 
  Briefcase, 
  GraduationCap, 
  MessageSquare, 
  Leaf, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Droplets,
  Zap,
  Recycle
} from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const Policies: React.FC = () => {
  return (
    <>
      <Navbar2 />
      <section className="py-12 px-4 max-w-6xl mx-auto font-sans ">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-purple-900 mb-4 tracking-tight">
            Institutional Policies
          </h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto italic">
            Ensuring transparency, sustainability, and student welfare through structured governance.
          </p>
        </div>

        <div className="grid gap-12">
          
          {/* 1. Mid-Day Meal Policy */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-purple-900 p-6 flex items-center gap-4">
              <div className="bg-purple-800 p-3 rounded-lg text-white">
                <Utensils size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Mid-Day Meal Policy</h3>
            </div>
            <div className="p-8">
              <p className="mb-6 text-gray-700 font-medium">Sponsored by M.S.R.S College Alumni Association, Mumbai, catering to poor and deserving students.</p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Committee includes senior faculty and student reps.",
                  "Fresh and renewal applications invited annually.",
                  "Flexible beneficiary limits to maximize reach.",
                  "Nominal fee of Rs. 5 to promote food value (optional).",
                  "Regular monitoring of hygiene and quality.",
                  "Priority redressal of grievances."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <ShieldCheck className="text-amber-500 shrink-0" size={20} />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Management Staff Service Rules */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-amber-500 p-6 flex items-center gap-4">
              <div className="bg-amber-600 p-3 rounded-lg text-white">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Service Rules for Management Staff</h3>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl border-l-4 border-purple-900">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Recruitments follow government regulations. Selection involves written tests and interviews by a committee including subject experts and management.
                  </p>
                </div>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "Weightage for NET/SLET/Ph.D qualifications.",
                    "12 days annual Casual Leave.",
                    "Provident Fund and ESI facilities provided.",
                    "Performance-based annual increments.",
                    "Maternity leave as per government norms."
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                      <CheckCircle2 className="text-purple-900 shrink-0" size={18} />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Scholarship Policy */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-purple-900 p-6 flex items-center gap-4">
                <div className="bg-purple-800 p-3 rounded-lg text-white">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Student Scholarship Policy</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 italic text-sm">Promoting academic continuity through merit-cum-means assistance.</p>
                <ul className="space-y-4">
                  {[
                    "Selection via committee interview based on poverty and merit.",
                    "Renewable for 3 years subject to passing all exams.",
                    "Direct benefit transfer for government schemes.",
                    "Strict maintenance of acquittance for disbursements."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight className="text-amber-500 mt-1 shrink-0" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-dashed border-gray-300">
              <h4 className="font-bold text-purple-900 mb-4 border-b pb-2">Key Benefactors</h4>
              <ul className="text-xs space-y-3 text-gray-600">
                <li>• Dr. Vinod & Chandrashekhar Shetty Foundation</li>
                <li>• All Cargo Logistics Limited</li>
                <li>• MSRS College Alumni Association</li>
                <li>• Sri Ram Charitable Trust</li>
                <li>• Sitaram Jindal Foundation</li>
              </ul>
            </div>
          </div>

          {/* 4. Green Policy Section */}
          <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="bg-green-600 p-4 rounded-2xl text-white shadow-lg">
                <Leaf size={40} />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-green-900">Green Campus Policy</h3>
                <p className="text-green-700">Committed to sustainability across our 27-acre campus.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Energy */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <Zap className="text-amber-500 mb-4" />
                <h4 className="font-bold text-gray-800 mb-2">Energy & Carbon</h4>
                <p className="text-sm text-gray-600">Solar panel installation at Ladies Hostel, centralized switches for energy conservation, and regular emission checks for vehicles.</p>
              </div>
              {/* Water */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <Droplets className="text-blue-500 mb-4" />
                <h4 className="font-bold text-gray-800 mb-2">Water Harvesting</h4>
                <p className="text-sm text-gray-600">Active rain water harvesting to maintain ground water levels and student awareness programs.</p>
              </div>
              {/* Waste */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <Recycle className="text-green-600 mb-4" />
                <h4 className="font-bold text-gray-800 mb-2">Waste Management</h4>
                <p className="text-sm text-gray-600">Strict ban on plastic bags, use of bio-degradable areca leaf plates, and structured E-waste disposal through auction.</p>
              </div>
            </div>
          </div>

          {/* 5. Feedback Policy */}
          <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 text-center md:text-left">
              <div className="inline-block bg-purple-900 p-4 rounded-full mb-4">
                <MessageSquare className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-purple-900">Feedback Mechanism</h3>
              <p className="text-gray-600 mt-2 text-sm">Constant dialogue with stakeholders to enhance educational quality.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Results compiled in AQAR",
                "Action via Governing Council",
                "Board of Study communication",
                "Outgoing student surveys"
              ].map((text, i) => (
                <div key={i} className="bg-white px-4 py-3 rounded-lg shadow-sm flex items-center gap-3 border-l-4 border-amber-500">
                  <span className="text-sm font-semibold text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Tag */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full text-gray-500 text-sm italic border border-gray-200">
            Professionalism • Sustainability • Empowerment
          </div>
        </div>
      </section>
    </>
  );
};

export default Policies;