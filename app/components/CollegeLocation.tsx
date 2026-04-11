import React from 'react';
import { MapPin, Phone, Clock, Navigation2 } from 'lucide-react'; // Using Lucide icons for a crisp look

const CollegeLocation = () => {
  return (
    <section className="relative py-16 px-4 sm:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Locate Our <span className="text-purple-700">Campus</span>
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 overflow-hidden rounded-3xl shadow-2xl bg-white border border-slate-200">
          
          {/* Left Info Panel (4 columns) */}
          <div className="lg:col-span-5 p-8 lg:p-12 bg-linear-to-br from-purple-900 to-indigo-950 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">MSRS College, Shirva</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MapPin className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-purple-200 font-semibold">Address</p>
                    <p className="text-lg">Shirva, Udupi District, Karnataka - 574116</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-purple-200 font-semibold">Contact</p>
                    <p className="text-lg">+91 820 255 4146</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Clock className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-blue-200 font-semibold">Office Hours</p>
                    <p className="text-lg">Mon - Sat: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Mulki+Sunder+Ram+Shetty+College+Shirva"
              target="_blank"
              className="mt-12 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-purple-950 font-bold py-4 px-6 rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            >
              <Navigation2 size={20} fill="currentColor" />
              Open in Google Maps
            </a>
          </div>

          {/* Right Map Panel (7 columns) */}
          <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[450px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.85175936734!2d74.8778401!3d13.2032549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca9f7856fdfb5%3A0xed747cc07bd85ae8!2sMulki%20Sunder%20Ram%20Shetty%20College!5e0!3m2!1sen!2sin!4v1700000000000"
              className="absolute inset-0 w-full h-full grayscale-20 contrast-[1.1] hover:grayscale-0 transition-all duration-500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CollegeLocation;