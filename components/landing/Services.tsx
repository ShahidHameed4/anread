import React from "react";
import PropTypes from "prop-types";

const OfferingsSection = ({
  title,
  description,
  services,
  leftColumnHeading,
  leftColumnDescription,
}) => {
  return (
    <section className="offerings-section py-10 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="left-column md:w-1/2 relative">
          <div className="sticky-content sticky top-20 text-center md:text-left md:ml-8">
            <h2 className="lg:section-title text-lg font-bold text-voodoo-600 mb-6 mt-10">
              {leftColumnHeading}
            </h2>
            <p className="section-description lg:text-5xl text-gray-700 mb-4 sm:px-4 text-gradient">
              {leftColumnDescription}
            </p>
          </div>
        </div>
        <div className=" md:w-1/2">
          <div className="services-list space-y-4 p-8">
            {services.map((service, index) => (
              <div key={index}>
                <div className="service-card bg-white rounded-lg p-6">
                  <h3 className="service-title text-2xl font-light text-voodoo-600 mb-2">
                    {service.title}
                  </h3>
                  <p className="service-description text-gray-700 mb-4">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="service-link text-voodoo-600 hover:text-voodoo-700 transition"
                  >
                    Learn More
                  </a>
                </div>
                {index < services.length - 1 && (
                  <hr className="border-gray-300 my-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .offerings-section {
          /* Section styling */
        }

        .left-column {
          /* Left column styling */
        }

        .sticky-content {
          /* Make the content sticky */
        }

        .right-column {
          /* Right column styling */
          max-height: calc(100vh - 160px); /* Adjust height for scrolling */
          overflow-y: auto; /* Allow vertical scrolling */
        }

        .right-column::-webkit-scrollbar {
          width: 0; /* Hide scrollbar for Chrome, Safari, and Opera */
        }

        .right-column {
          -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
        }

        .section-title {
          /* Title styling */
        }

        .section-description {
          /* Description styling */
        }

        .cta-button {
          /* Button styling */
          text-decoration: none; /* Remove underline */
        }

        .services-list {
          /* Services list styling */
        }

        .service-card {
          /* Individual service card styling */
        }

        .service-title {
          /* Service title styling */
        }

        .service-description {
          /* Service description styling */
        }

        .service-link {
          /* Link styling */
          text-decoration: none; /* Remove underline */
          display: inline-block; /* To ensure spacing */
          margin-top: 8px; /* Space above the link */
        }

        .service-link:hover {
          text-decoration: underline; /* Underline on hover */
        }
      `}</style>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .text-gradient {
          background: linear-gradient(
            270deg,
            #3e1f3d,
            #6c4a68,
            #b683a7,
            #e0c2d2,
            #8b3a5e
          );
          background-size: 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-animation 6s ease infinite;
          display: inline-block;
        }

        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};
OfferingsSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  leftColumnHeading: PropTypes.string,
  leftColumnDescription: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
OfferingsSection.defaultProps = {
  leftColumnHeading: "Services",
  leftColumnDescription:
    "Tailored technology and strategic consulting services that drive growth and efficiency. Harness innovation to unlock your organization’s full potential.",
  services: [
    {
      title: "Technology Solutions",
      description:
        "Innovative tech solutions designed to elevate your business operations and performance.",
      link: "#",
    },
    {
      title: "Business Consultancy",
      description:
        "Strategic insights that empower you to navigate the complexities of today’s market effectively.",
      link: "#",
    },
    {
      title: "Development Services",
      description:
        "Custom development tailored to optimize your workflow and enhance productivity.",
      link: "#",
    },
    {
      title: "Policy Consulting",
      description:
        "Expert policy guidance to help you stay ahead in a constantly evolving regulatory landscape.",
      link: "#",
    },
  ],
};

export default OfferingsSection;
