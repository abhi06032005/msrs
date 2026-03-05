import React from 'react';
import { Eye, Target, CheckCircle2, ShieldCheck, Users, Lightbulb } from 'lucide-react';

const VisionMission: React.FC = () => {
  const visionPoints = [
    "Provide higher education to rural, poor, and backward class students at the lowest cost.",
    "Achieve academic excellence.",
    "Promote ethical and moral values among students.",
    "Create awareness of social evils and the need to eradicate them.",
    "Promote feelings of equality, fraternity, and integrity among youth."
  ];

  const missionPoints = [
    "Mould students as responsible citizens by inculcating desirable value systems.",
    "Prepare students for a successful future.",
    "Foster critical thinking, creative ability, and intellectual excellence.",
    "Develop social concern, especially for the poor and needy.",
    "Encourage intellectual, physical, aesthetic, and spiritual growth to develop the nation."
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto font-sans mt-30">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">
          Purpose & Path
        </h2>
        <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        
        {/* Vision Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
          <div className="bg-blue-900 p-6 flex items-center gap-4">
            <div className="bg-blue-800 p-3 rounded-lg text-white">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
          </div>
          
          <div className="p-8 grow">
            <ul className="space-y-5">
              {visionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <ShieldCheck className="text-amber-500 mt-1 shrink-0" size={20} />
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
          <div className="bg-amber-500 p-6 flex items-center gap-4">
            <div className="bg-amber-600 p-3 rounded-lg text-white">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
          </div>
          
          <div className="p-8 grow">
            <ul className="space-y-5">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="text-blue-900 mt-1 shrink-0" size={20} />
                  <p className="text-gray-700 leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Philosophy Footer Tag */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full text-gray-500 text-sm italic border border-gray-200">
          <Lightbulb size={16} className="text-amber-500" />
          Nurturing character and intellect for a stronger nation.
        </div>
      </div>
    </section>
  );
};

export default VisionMission;