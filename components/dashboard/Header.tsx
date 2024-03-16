import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const DashboardHeader = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    // Close settings menu if open
    setIsSettingsMenuOpen(false);
  };

  const toggleSettingsMenu = () => {
    setIsSettingsMenuOpen(!isSettingsMenuOpen);
    // Close profile menu if open
    setIsProfileMenuOpen(false);
  };

  return (
    <div className="bg-gray-100 shadow-md px-6">
      <div className="container mx-auto h-20 flex items-center justify-between">
        {/* Logo or App Name on the Left */}
        <Link href="/dashboard">
          <div className="text-gray-600 hover:text-gray-900">
            <span className="text-2xl font-bold font-pacifico text-teal-600">
              BotBakery
            </span>
          </div>
        </Link>
        
        {/* User Profile and Settings on the Right */}
        <div className="flex items-center gap-6">
          {/* User Profile */}
          <div className="text-gray-600 hover:text-gray-900 relative">
            <FontAwesomeIcon icon={faUser} onClick={toggleProfileMenu} />
            {/* Profile Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <Link href="/profile">
                  <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                    Profile
                  </div>
                </Link>
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  Settings
                </div>
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span className="ml-2">Logout</span>
                </div>
              </div>
            )}
          </div>
          {/* Settings */}
          <div className="text-gray-600 hover:text-gray-900 relative">
            <FontAwesomeIcon icon={faCog} onClick={toggleSettingsMenu} />
            {/* Settings Menu */}
            {isSettingsMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  Account Settings
                </div>
                <div className="block px-4 py-2 text-gray-600 hover:text-gray-900">
                  Security
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
