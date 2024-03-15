import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className="bg-footer-color text-white py-6 mt-1">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4 font-pacifico">
            BotBakery
          </h2>
          <p className="text-sm">
            BotBakery is an innovative platform for chatbot generation, provided
            by Equinox Holdings, LLC. Our service is designed to empower real
            estate agents and professionals to achieve exceptional success
            through cutting-edge technology.
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
          <h2 className="text-xl lg:text-xl font-bold mb-2 lg:mb-4 font-pacifico">
            Company
          </h2>
          <ul className="text-sm">
            <li>GDPR</li>
            <li>Limited Use Policy</li>
            <li>CCPA & CalOPPA</li>
            {/* Add more legal links as needed */}
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-1">
          <h2 className="text-xl lg:text-xl font-bold mb-2 lg:mb-4 font-pacifico">
            Services
          </h2>
          <ul className="text-sm">
            <li>Consumer</li>
            <li>For Professionals</li>
            {/* Add more service links as needed */}
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-teal-900 mt-6 pt-4 text-center">
      <p className="text-xs">
        123 Main Street, Suite 100, City, State, 12345 | contact@botbakery.com |
        (123) 456-7890
      </p>
      <p className="text-xs mt-2">
        Made with ♥ in Virginia. Copyright BotBakery 2024. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
