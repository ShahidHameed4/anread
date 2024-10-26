import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import ServicesDropdown from "./ServicesDropdown";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };

  return (
    <div
      className={`fixed top-0 w-full bg-gray-100 shadow-md px-6 z-50 transition duration-300 ease-in-out ${
        isScrolled ? "bg-opacity-75 backdrop-blur-sm" : ""
      }`}
    >
      <div className="container mx-auto h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/">
            <div className="text-gray-600 hover:text-gray-900">
              <img
                src="https://i.ibb.co/ZSXGbzF/anread-logo11-01.png"
                alt="Anread"
                className="h-12 w-auto"
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="lg:hidden text-gray-600 hover:text-gray-900"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          {/* Dropdown menu for mobile */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-2 rounded-md">
              <Link href="/careers">
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  Careers
                </div>
              </Link>
              <Link href="/services/development">
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  Development
                </div>
              </Link>
              <Link href="/services/technology">
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  Tech Consulting
                </div>
              </Link>
              <Link href="/services/policy-consulting">
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  Policy Consulting
                </div>
              </Link>
              <Link href="/services/business-consultancy">
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  Business
                </div>
              </Link>
              <Link href="/contact">
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  Contact
                </div>
              </Link>
            </div>
          )}
          <nav className="hidden lg:flex space-x-4">
            <div
              className="relative group hidden lg:block"
              onMouseEnter={handleMouseEnter}
              ref={dropdownRef}
            >
              <button className="text-gray-600 hover:text-gray-900 font-bold text-lg transition duration-300 ease-in-out">
                Services
              </button>
              <ServicesDropdown isOpen={isServicesDropdownOpen} />
            </div>
            <Link href="/careers">
              <div className="text-gray-600 hover:text-gray-900 font-bold text-lg transition duration-300 ease-in-out">
                Careers
              </div>
            </Link>
            <Link href="/blog">
              <div className="text-gray-600 hover:text-gray-900 font-bold text-lg transition duration-300 ease-in-out">
                Blog
              </div>
            </Link>
          </nav>
          <Link href="/contact">
            <button className="bg-voodoo-400 hover:bg-voodoo-500 text-white px-4 py-2 mr-1 rounded-md">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
