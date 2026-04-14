import React from 'react';
import { Music, Heart, Cloud, Waves, Sun, Sparkles } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const CollegePrayer: React.FC = () => {
  return (
    <>
      <Navbar2 />
      <section className="py-12 px-4 max-w-4xl mx-auto font-sans mt-30">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4 text-purple-900">
            <Music size={32} />
          </div>
          <h2 className="text-4xl font-extrabold text-purple-900 mb-4 tracking-tight">
            Our College Prayer Song
          </h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* The Source (Introduction) */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-10">
          <div className="bg-purple-900 p-6 text-center">
            <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
              <Sparkles className="text-amber-400" size={20} />
              The Source
            </h3>
          </div>
          <div className="p-8 text-center">
            <p className="text-gray-700 leading-relaxed text-lg italic">
              "Our College prayer is a small but beautiful song sprung from the heart and 
              flowed through the pen of the great Kannada poet <span className="text-purple-900 font-bold">Rastra Kavi Kuvempu</span>, 
              who envisaged the concept of <span className="text-amber-600 font-bold">Vishwa Manava</span>. 
              The poem inspires towards cosmopolitanism."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* The Body (Kannada Version) */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col">
            <div className="bg-amber-500 p-4 text-center">
              <h3 className="text-lg font-bold text-white uppercase tracking-widest">The Body</h3>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-center bg-amber-50/30">
              <blockquote className="text-2xl font-serif text-purple-900 text-center leading-loose whitespace-pre-line">
                ನಿನ್ನ ಬಾಂದಳದಂತೆ ಎನ್ನ ಮನವಿರಲಿ<br />
                ನಿನ್ನ ಸಾಗರದಂತೆ ಎನ್ನ ಎದೆಯಿರಲಿ<br />
                ನಿನ್ನ ಸುಗ್ಗಿಯ ತೆರದಿ ಎನ್ನ ಸೊಬಗಿರಲಿ<br />
                ನಿನ್ನ ಲೀಲೆಯ ತೆರದಿ ಎನ್ನ ಬಾಳಿರಲಿ<br />
                ನಿನ್ನ ಒಲವಿರುವಂತೆ ಎನ್ನ ತಿಳಿವಿರಲಿ<br />
                ನಿನ್ನೊಲುಮೆ ಇರುವಂತೆ ಎನ್ನೊಲುಮೆಯಿರಲಿ<br />
                ನಿನ್ನಾಳವೆನಗಿರಲಿ ನೀನೆ ಎನಗಿರಲಿ<br />
                ನಿನ್ನಾತ್ಮದಾನಂದ ಎನ್ನದಾಗಿರಲಿ<br />
                ನಿನ್ನೊಳಿರುವಾ ಶಾಂತಿ ಎನ್ನದೆಗೆ ಬರಲಿ
              </blockquote>
            </div>
          </div>

          {/* The Soul (English Translation) */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col">
            <div className="bg-purple-900 p-4 text-center">
              <h3 className="text-lg font-bold text-white uppercase tracking-widest">The Soul & Spirit</h3>
            </div>
            <div className="p-8 flex-grow space-y-4">
              {[
                { icon: <Cloud size={16} />, text: "May my mind be like the expanse of thy heavens" },
                { icon: <Waves size={16} />, text: "May my heart be like the stretch of thy ocean" },
                { icon: <Sun size={16} />, text: "May my loveliness be like thy vernal fruitfulness" },
                { icon: <Heart size={16} />, text: "May my life be as thy grand sport will it" },
                { icon: <Sparkles size={16} />, text: "May my awareness be as thou tend to mould it" },
                { icon: <Sparkles size={16} />, text: "May I incline toward thee as thou are toward me" },
                { icon: <Sparkles size={16} />, text: "May thy mysterious depth be mine and thou be mine" },
                { icon: <Sparkles size={16} />, text: "May the eternal bliss of thy being be mine" },
                { icon: <Sparkles size={16} />, text: "May the tranquil stillness of thy self enter my heart." }
              ].map((line, idx) => (
                <div key={idx} className="flex items-center gap-3 border-b border-gray-50 pb-2">
                  <span className="text-amber-500">{line.icon}</span>
                  <p className="text-gray-600 text-sm italic font-medium">{line.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Universal Philosophy Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-purple-900 rounded-full text-white text-sm font-semibold shadow-lg">
            <Heart size={18} className="text-amber-400" />
            Vishwa Manava — The Universal Human
          </div>
        </div>
      </section>
    </>
  );
};

export default CollegePrayer;