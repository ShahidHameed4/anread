// components/Layout.js

import { useState } from 'react';
import Header from './Header';
import SideMenu from './SideMenu';

const Layout = ({ children }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="flex">
      {/* Header and side menu content */}
      <div className="w-full">
        <Header />
        <div className="flex">
          {/* Side menu on the left */}
          <div className={`w-1/8 ${isSideMenuOpen ? '' : 'w-1/20'}`}>{/* Adjusted width when side menu is closed */}
            <SideMenu isOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
          </div>
          {/* Page content on the right */}
          <div className={`w-full ${isSideMenuOpen ? 'ml-48' : 'ml-12'}`}>{/* Adjusted ml-48 when side menu is open */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
