import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faComments, faCog, faUser, faFileAlt, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const SideMenu = ({ isOpen, toggleSideMenu }) => {
  // Define side menu pages
  const pages = [
    { title: 'Chatbots', route: '/chatbots', icon: faRobot },
    { title: 'Conversations', route: '/conversations', icon: faComments },
    { title: 'Settings', route: '/settings', icon: faCog },
    { title: 'Users', route: '/users', icon: faUser },
    { title: 'Documentation', route: '/documentation', icon: faFileAlt },
  ];

  const sideMenuOpacity = isOpen ? 'opacity-100' : ''; // Adjusted opacity based on side menu state
  const sideMenuWidth = isOpen ? '64' : '24';
  const sideMenuBgColor = isOpen ? 'bg-white' : '';
  const sideMenuBorder = isOpen ? 'left-0 border-r border-gray-300' : 'left-5';

  return (
    <div className={`fixed h-full w-${sideMenuWidth} ${sideMenuBgColor} overflow-hidden transition-all duration-300  ${sideMenuBorder} ${sideMenuOpacity}`}>
      <div className="flex justify-between items-center p-4">
        <div className="absolute top-5 right-0 transform -translate-y-1/2">
          <FontAwesomeIcon icon={isOpen ? faAngleDoubleLeft : faAngleDoubleRight} className="text-2xl ml-10 text-teal-500 cursor-pointer mr-2" onClick={toggleSideMenu} />
        </div>
      </div>
      <div className={`px-4 mt-5 ${isOpen ? '' : 'hidden'}`} style={{ transition: 'background-color 0.3s' }}>
        <ul>
          {pages.map((page, index) => (
            <li key={index} className="flex items-center">
              <div className="w-full py-3 px-10 rounded-md cursor-pointer text-teal-800 hover:bg-teal-500 hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={page.icon} className="text-lg mr-2" />
                <Link href={page.route}>
                  <span>{page.title}</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
