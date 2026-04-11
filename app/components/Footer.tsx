"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-14 px-6 md:px-20 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div>
          <h3 className="font-bold text-xl mb-4">About Us</h3>
          <p className="text-sm text-purple-300 mb-6 max-w-sm">
            Mulki Sunder Ram Shetty College is dedicated to academic excellence and
            community development. Established in 1980, we strive to nurture future leaders.
          </p>
          {/* Social Media */}
          <div className="flex space-x-5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-purple-400 transition-colors"
            >
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-purple-400 transition-colors"
            >
              <FaInstagram size={30} />
            </a>
            
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-purple-400 transition-colors"
            >
              <FaYoutube size={30} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-3 text-purple-300 text-sm">
            <li>
              <a href="/careers" className="hover:text-purple-400 transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-purple-400 transition-colors">
                Events
              </a>
            </li>
            <li>
              <a href="/history" className="hover:text-purple-400 transition-colors">
                Our History
              </a>
            </li>
          </ul>
        </div>

        {/* Administration Section */}
        <div>
          <h3 className="font-bold text-xl mb-4">Administration</h3>
          <ul className="space-y-3 text-purple-300 text-sm">
            <li>
              <a href="/principal" className="hover:text-purple-400 transition-colors">
                Principal
              </a>
            </li>
            <li>
              <a href="/teachers" className="hover:text-purple-400 transition-colors">
                Teachers
              </a>
            </li>
            <li>
              <a href="/head-of-departments" className="hover:text-purple-400 transition-colors">
                Head of Departments
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Other Info Section */}
        <div>
          <h3 className="font-bold text-xl mb-4">Contact</h3>
          <p className="text-purple-300 text-sm mb-2">1234 College Rd, Shirva, Udupi District</p>
          <p className="text-purple-300 text-sm mb-2">Phone: +91 12345 67890</p>
          <p className="text-purple-300 text-sm mb-4">Email: info@mulki.edu.in</p>
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>
          <p className="text-purple-300 text-sm italic">Stay connected for updates and news.</p>
        </div>
      </div>

      <div className="border-t border-purple-800 mt-12 pt-6 text-center text-purple-400 text-xs select-none">
        &copy; {new Date().getFullYear()} Mulki Sunder Ram Shetty College. All rights reserved.
      </div>
      <div className="text-center text-purple-400 text-sm mt-8 select-none">
            Made with <span className="text-red-500">♥</span> by JeetTechnologies
        </div>

    </footer>
  );
};

export default Footer;
