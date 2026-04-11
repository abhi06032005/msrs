import React from 'react';
import { User, Briefcase, MapPin, Star } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

interface Member {
  slNo?: number;
  name: string;
  address: string;
  designation: string;
  occupation: string;
}

const Management: React.FC = () => {
  const coreManagement: Member[] = [
    { slNo: 1, name: "Sri. N. Vinaya Hegde", address: "Nitte Education Trust (R), Ram Bhavan Complex, 7th Floor, Kodialbail, MANGALORE.", designation: "President", occupation: "Industrialist & Educationist" },
    { slNo: 2, name: "Sri. V. Subbayya Hegde", address: "“Sri Krishna”, Srinivasa Nagar, Kunjibettu Post, UDUPI.", designation: "Correspondent", occupation: "Agriculturist" },
    { slNo: 3, name: "Sri. Dinesh Shetty", address: "Proprietor, Vishwanath Saw Mill, SHIRVA.", designation: "Treasurer", occupation: "Businessman" },
  ];

  const members: Member[] = [
    { slNo: 4, name: "Prof.(Dr.) M. Shantharam Shetty", address: "Pro-chancellor, Nitte University, Deralakatte, MANGALORE - 575018.", designation: "Member", occupation: "Service" },
    { slNo: 5, name: "Dr. K.R. Shetty", address: "Neurologist, A-4 Kadri Parkview Apts., Kadri Hills, MANGALORE - 575004.", designation: "Member", occupation: "Service" },
    { slNo: 6, name: "Sri. B. Srinath Hegde", address: "“Sri Priya” Upper Bendor, Near S.C.S. Hospital, MANGALORE - 575002.", designation: "Member", occupation: "Industrialist" },
    { slNo: 7, name: "Sri. Vishal Hegde", address: "Trustee, Nitte Education Trust, Kodialbail MANGALORE - 575003.", designation: "Member", occupation: "Educationalist" },
    { slNo: 8, name: "Sri. Suresh P. Shetty", address: "‘Padmasri’ Kalathur Gurme Kalathur Post UDUPI DIST.", designation: "Member", occupation: "Industrialist" },
    { slNo: 9, name: "Sri. K. Nithyananda Hegde", address: "Vishnu Enterprises SHIRVA.", designation: "Member", occupation: "Businessman" },
    { slNo: 10, name: "Sri. Mattar Rathnakar Hegde", address: "Advocate. UDUPI.", designation: "Member", occupation: "Advocate" },
    { slNo: 11, name: "Sri. Jagadeesha Arasa", address: "Nihal Complex, Main Road, SHIRVA.", designation: "Member", occupation: "Businessman" },
    { slNo: 12, name: "Sri. Uday Sundar Shetty", address: "Hotel Sai Palace, Chakala, M.I.D.C. Road, Anderi(East), MUMBAI-93.", designation: "Member", occupation: "Businessman" },
  ];

  const specialInvitees: Member[] = [
    { name: "Sri. K. Ravindra Shetty", address: "‘Sangamithra’, Kollabettu, SHIRVA-574 116.", designation: "Special Invitee", occupation: "Businessman" },
    { name: "Sri. Karunakar Shetty", address: "Majalabettu Beedu, Post: Halasinakatte, Pilar Village - 574 113", designation: "Special Invitee", occupation: "Businessman" },
    { name: "Dr. A. Ravindranath Shetty", address: "Saraswathi Clinic, KATAPADI.", designation: "Special Invitee", occupation: "Service" },
    { name: "Sri. Umesh Shetty Kalathur", address: "Advocate, Vishwas Towers, 1st Floor, Behind Court, UDUPI.", designation: "Special Invitee", occupation: "Advocate" },
  ];

  const TableHeader = () => (
    <thead className="bg-purple-900 text-white hidden md:table-header-group">
      <tr>
        <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Name & Address</th>
        <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Designation</th>
        <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Occupation</th>
      </tr>
    </thead>
  );

  const Row = ({ member }: { member: Member }) => (
    <tr className="hover:bg-purple-50 transition-colors border-b border-gray-200 block md:table-row">
      <td className="px-6 py-4 block md:table-cell">
        <div className="flex flex-col">
          <span className="font-bold text-purple-900 text-lg md:text-base">{member.name}</span>
          <span className="text-gray-500 text-sm flex items-start mt-1">
            <MapPin size={14} className="mr-1 mt-1 shrink-0" />
            {member.address}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 block md:table-cell">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 md:bg-transparent md:p-0 md:text-gray-700 md:text-sm italic">
          {member.designation}
        </span>
      </td>
      <td className="px-6 py-4 block md:table-cell">
        <div className="flex items-center text-sm text-gray-600">
          <Briefcase size={14} className="mr-2 hidden md:block" />
          {member.occupation}
        </div>
      </td>
    </tr>
  );

  return (
    <>
    <Navbar2 />
    <div className="max-w-6xl mx-auto px-4 py-12 mt-20">
      <div className="flex items-center justify-center mb-10 space-x-4">
        <div className="h-px bg-gray-300 w-16 md:w-32"></div>
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Management Committee</h2>
        <div className="h-px bg-gray-300 w-16 md:w-32"></div>
      </div>

      <div className="overflow-hidden bg-white shadow-2xl rounded-xl border border-gray-100">
        <table className="min-w-full block md:table">
          <TableHeader />
          
          <tbody className="block md:table-row-group">
            {/* Core Executive Section */}
            {coreManagement.map((m, i) => <Row key={i} member={m} />)}
            
            {/* Administrative Officer Note */}
            <tr className="bg-gray-50 border-y-2 border-gray-200">
              <td colSpan={3} className="px-6 py-4 italic font-semibold text-purple-800 text-center">
                Prof. Y Bhaskar Shetty — Administrative Officer, 'Anughraha', Main Road, Shirva
              </td>
            </tr>

            {/* General Members */}
            {members.map((m, i) => <Row key={i + 3} member={m} />)}

            {/* Special Invitees Header */}
            <tr className="bg-amber-50">
              <td colSpan={3} className="px-6 py-4">
                <div className="flex items-center text-amber-800 font-bold uppercase tracking-widest text-sm">
                  <Star size={16} className="mr-2 fill-current" /> Special Invitees
                </div>
              </td>
            </tr>
            {specialInvitees.map((m, i) => <Row key={i + 20} member={m} />)}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Management;