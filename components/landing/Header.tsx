import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`fixed top-0 w-full bg-gray-100 shadow-md px-6 z-50 ${
        isScrolled ? "bg-opacity-75" : ""
      }`}
    >
      <div className="container mx-auto h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* <Link href="/">
            <div className="text-gray-600 hover:text-gray-900">
              <img
                src="https://i.ibb.co/7X3JrjG/chatecologot.png"
                alt="BotBakery"
                className="h-12 w-auto"
              />
            </div>
          </Link> */}

          <Link href="/">
            <div className="text-gray-600 hover:text-gray-900">
              <span className="text-2xl font-bold font-pacifico text-teal-600">
                BotBakery
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex space-x-4">
            <Link href="/">
              <div className="text-gray-600 hover:text-gray-900 font-bold text-lg transition duration-300 ease-in-out">
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className="text-gray-600 hover:text-gray-900 font-bold text-lg transition duration-300 ease-in-out">
                About
              </div>
            </Link>
            <Link href="/services">
              <div className="text-gray-600 hover:text-gray-900 font-bold text-lg transition duration-300 ease-in-out">
                Services
              </div>
            </Link>
            <Link href="/contact">
              <div className="text-gray-600 hover:text-gray-900 font-bold text-lg transition duration-300 ease-in-out">
                Contact
              </div>
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          {/* Mobile menu toggle button */}
          <button
            className="lg:hidden text-gray-600 hover:text-gray-900"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          {/* Dropdown menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-2 rounded-md">
              <Link href="/">
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  Home
                </div>
              </Link>
              <Link href="/about">
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  About
                </div>
              </Link>
              <Link href="/services">
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  Services
                </div>
              </Link>
              <Link href="/contact">
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  Contact
                </div>
              </Link>
            </div>
          )}
          <Link href="/login">
            <div className="text-gray-600 hover:text-gray-900">Login</div>
          </Link>
          <Link href="/signup">
            <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 mr-1 rounded-md">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
