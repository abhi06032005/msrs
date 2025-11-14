import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const CollegeEvents: React.FC = () => {
  return (<>
    <Navbar />
    
    <div className="mt-27 max-w-7xl mx-auto p-6 bg-linear-to-r from-blue-100 to-white rounded-lg shadow-lg">

      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Intro text */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Training & Guidance Workshops</h1>
          <p className="text-gray-700 text-lg mb-6">
            Our workshops are designed to increase awareness and knowledge for students, providing
            hands-on training and expert guidance to prepare them for successful careers.
          </p>
          <p className="text-gray-600">
            These workshops are carefully curated to equip students with the skills and insights needed for personal and professional growth.
          </p>
        </div>

        {/* Placement Staff Coordinator */}
        <div className="w-48 flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Placement Staff Coordinator"
            className="rounded-full w-28 h-28 object-cover mb-3"
          />
          <h3 className="font-semibold text-blue-800 text-lg">Mrs. Hemalatha Shetty</h3>
          <p className="text-gray-500 text-sm">Placement Staff Coordinator</p>
        </div>
      </div>

      {/* Workshops Section */}
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {/* BCA Technical Workshops */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Technical Workshops for BCA Students</h2>
          <p className="text-gray-700 mb-6">
            These hands-on workshops help BCA students build in-demand technical skills including web development, software engineering, and database management.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>React & Next.js Development Bootcamp</li>
            <li>Node.js and Express API Development</li>
            <li>MongoDB & Database Design</li>
            <li>Cloud Deployment with Vercel and Railway</li>
          </ul>
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=70"
            alt="Technical workshop"
            className="rounded-lg shadow-md w-full object-cover h-40"
          />
        </section>

        {/* Commerce Investment Workshops */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Investment Workshops for Commerce Students</h2>
          <p className="text-gray-700 mb-6">
            These workshops introduce commerce students to essential investment concepts including stock markets, mutual funds, and financial planning.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Basics of Stock Market Investing</li>
            <li>Mutual Funds & Portfolio Diversification</li>
            <li>Financial Planning & Budgeting</li>
          </ul>
          <img
            src="https://images.unsplash.com/photo-1555529669-b83b8f0ca5e6?auto=format&fit=crop&w=600&q=70"
            alt="Investment workshop"
            className="rounded-lg shadow-md w-full object-cover h-40"
          />
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CollegeEvents;
