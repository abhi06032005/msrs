"use client";

import React, { useState, useEffect } from "react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItem {
  name: string;
  href: string;
  dropdown?: {
    title: string;
    items: { name: string; href: string; description?: string }[];
  };
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Events",
    href: "/events",
    dropdown: {
      title: "List of all Events",
      items: [
        { name: "All Events", href: "/events", description: "View all upcoming events" },
        { name: "Workshops", href: "/events/workshops", description: "Technical workshops and seminars" },
        { name: "Cultural Fest", href: "/events/cultural", description: "Annual cultural festival" },
        { name: "Sports Day", href: "/events/sports", description: "Inter-college sports competition" },
        {name: "NSS" ,href:"/events/nss" , description:"Events held by NSS"},
      ],
    },
  },
  {
    name: "Facilities",
    href: "/facilities",
    dropdown: {
      title: "Our Facilities",
      items: [
        { name: "Library", href: "/facilities/library", description: "State-of-the-art library" },
        { name: "Computer Lab", href: "/facilities/labs", description: "Modern research labs" },
        { name: "Girls Hostel", href: "/facilities/hostel", description: "Comfortable accommodation" },
        { name: "Sports Complex", href: "/facilities/sports", description: "World-class sports facilities" },
        { name: "Cafeteria", href: "/facilities/cafeteria", description: "Healthy dining options" },
      ],
    },
  },
  {
    name: "About",
    href: "/about",
    dropdown: {
      title: "About Us",
      items: [
        { name: "Our Story", href: "/about/story", description: "History and mission" },
        { name: "Vision & Mission", href: "/about/vision", description: "Our goals and values" },
        { name: "Leadership", href: "/about/leadership", description: "Meet our leadership team" },
        { name: "Awards & Recognition", href: "/about/awards", description: "Our achievements" },
      ],
    },
  },
  {
    name: "Faculty",
    href: "/faculty",
    dropdown: {
      title: "Our Faculty",
      items: [
        
        { name: "Teaching Staff", href: "/faculty/heads", description: "Department leadership" },
        { name: "Staff", href: "/faculty/research", description: "Non-Teaching Staff" }
      ],
    },
  },
  {
    name: "Courses",
    href: "/courses",
    dropdown: {
      title: "Academic Programs",
      items: [
        { name: "B.C.A", href: "/courses/undergraduate", description: "Bachelor's of Computer Applications" },
        { name: "B.Com", href: "/courses/postgraduate", description: "Bachelor's in Commmerce" },
        { name: "B.A", href: "/courses/doctoral", description: "Bachleor's in Arts" },
      ],
    },
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl pl-4 sm:pl-6">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo and College Name */}
          <div className="flex items-center space-x-3 shrink-0">
            <div className="h-12 w-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-xl">MSRS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                M.S.R.S College
              </h1>
             
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center ">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownToggle(item.name)}
                onMouseLeave={closeDropdown}
              >
                <a
                  href={item.href}
                  className="px-4 py-2 text-md  font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDownIcon className="inline-block ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-4 bg-linear-to-r from-blue-50 to-purple-50 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900">{item.dropdown.title}</h3>
                    </div>
                    <div className="py-2">
                      {item.dropdown.items.map((dropdownItem, idx) => (
                        <a
                          key={idx}
                          href={dropdownItem.href}
                          className="block px-4 py-3 hover:bg-blue-50 transition-colors duration-150 group"
                          onClick={closeDropdown}
                        >
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {dropdownItem.name}
                          </div>
                          {dropdownItem.description && (
                            <div className="text-sm text-gray-500 mt-1">{dropdownItem.description}</div>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-0">
                <div className="flex items-center justify-between py-3">
                  <a
                    href={item.href}
                    className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform duration-200 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.dropdown && openDropdown === item.name && (
                  <div className="pl-4 pb-3 space-y-2 animate-in slide-in-from-top duration-200">
                    {item.dropdown.items.map((dropdownItem, idx) => (
                      <a
                        key={idx}
                        href={dropdownItem.href}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <a
                href="/apply"
                className="block w-full text-center px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Apply Now Button - Extreme Right */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 pr-4 sm:pr-6">
        <a
          href="/apply"
          className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:from-blue-700 hover:to-purple-700"
        >
          Apply Now
        </a>
      </div>
    </nav>
  );
}

