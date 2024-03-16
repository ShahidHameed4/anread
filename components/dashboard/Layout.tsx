import { useState } from 'react';
import Header from './Header';
import SideMenu from './SideMenu';

const Layout = ({ children }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const sideMenuWidth = isSideMenuOpen ? '1/6' : '0'; // Adjusted width based on side menu state

  return (
    <div className="flex relative"> {/* Make the container relative */}
      {/* Header and side menu content */}
      <div className="w-full">
        <Header />
        <div className="flex relative"> {/* Make this container relative */}
          {/* Side menu on the left */}
          <div className={`w-${sideMenuWidth} absolute top-0 left-0 overflow-hidden transition-width`}>
            <SideMenu isOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
          </div>
          {/* Page content */}
          <div className={`w-full ${isSideMenuOpen ? 'ml-5' : ''}`}>{/* Adjusted ml-48 when side menu is open */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
