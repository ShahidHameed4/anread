import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCog,
  faBookOpen,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Development",
    link: "/services/development",
    icon: faCode,
  },
  {
    title: "Tech Consulting",
    link: "/services/technology",
    icon: faCog,
  },
  {
    title: "Policy Consulting",
    link: "/services/policy-consultancy",
    icon: faBookOpen,
  },
  {
    title: "Business",
    link: "/services/business-consultancy",
    icon: faBriefcase,
  },
];

const ServicesDropdown = ({ isOpen }) => {
  return (
    <div
      className={`absolute left-0 ${
        isOpen ? "block" : "hidden"
      } bg-white shadow-lg mt-1 rounded-md transition-transform duration-200 ease-in-out w-48`} // Increased width here
    >
      {services.map((service, index) => (
        <Link href={service.link} key={index}>
          <div className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition duration-150 ease-in-out rounded-md">
            <FontAwesomeIcon
              icon={service.icon}
              className="w-5 h-5 mr-2 text-gray-600"
            />
            <span className="font-semibold">{service.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServicesDropdown;
