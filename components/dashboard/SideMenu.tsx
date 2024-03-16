import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const SideMenu = ({ isOpen, toggleSideMenu }) => {
  // Define side menu pages
  const pages = [
    { title: 'Page 1', route: '/dashboard/page1', icon: faCog },
    { title: 'Page 2', route: '/dashboard/page2', icon: faCog },
    // Add more pages here
  ];

  return (
    <div className={`fixed left-0 h-full bg-gray-200 w-${isOpen ? '64' : '12'} overflow-hidden transition-all duration-300`}>
      <div className="flex justify-between items-center p-4">
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <FontAwesomeIcon icon={isOpen ? faAngleDoubleLeft : faAngleDoubleRight} className="text-lg text-teal-500 cursor-pointer mr-2" onClick={toggleSideMenu} />
        </div>
      </div>
      <div className="px-4">
        <ul>
          {pages.map((page, index) => (
            <li key={index} className={`flex items-center ${isOpen ? '' : 'opacity-20'}`}>
              <div className={`w-full py-2 px-4 rounded-md cursor-pointer hover:bg-teal-500 hover:text-white ${isOpen ? '' : 'hidden'}`}>
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
