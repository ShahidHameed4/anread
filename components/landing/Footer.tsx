import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-footer-color text-white py-6 mt-1">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4 font-pacifico">
            <Link href="/">
              <div className="text-gray-600 hover:text-gray-900">
                <img
                  src="https://i.ibb.co/wzqgDPY/anread-logo-01.png"
                  alt="Anread"
                  className="h-14 w-auto"
                />
              </div>
            </Link>
          </h2>
          <p className="text-sm">
            Anread is a professional consultancy firm focused on bridging the
            gap between technology, policy, and business development. Our
            expertise empowers organizations to navigate complex challenges and
            achieve sustainable growth.
          </p>
          <div className="flex items-center mt-2 lg:mt-4 space-x-4">
            {/* Social Icons */}
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-1">
          <h2 className="text-xl lg:text-xl font-bold mb-2 lg:mb-4">Company</h2>
          <ul className="text-sm">
            <li>GDPR</li>
            <li>Limited Use Policy</li>
            <li>CCPA & CalOPPA</li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-1">
          <h2 className="text-xl lg:text-xl font-bold mb-2 lg:mb-4">
            Services
          </h2>
          <ul className="text-sm">
            <li>
              <Link href="/services/policy-consulting">
                <div className="hover:underline cursor-pointer">
                  Policy Consulting
                </div>
              </Link>
            </li>
            <li>
              <Link href="/services/tech-solutions">
                <div className="hover:underline cursor-pointer">
                  Technology Solutions
                </div>
              </Link>
            </li>
            <li>
              <Link href="/services/business-consulting">
                <div className="hover:underline cursor-pointer">
                  Business Consulting
                </div>
              </Link>
            </li>
            <li>
              <Link href="/services/development">
                <div className="hover:underline cursor-pointer">
                  Development Services
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-voodoo-900 mt-6 pt-4 text-center">
      <p className="text-xs">
        123 Main Street, Suite 100, City, State, 12345 | contact@Anread.com |
        (123) 456-7890
      </p>
      <p className="text-xs mt-2">
        Made with ♥ in Virginia. Copyright Anread 2024. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
