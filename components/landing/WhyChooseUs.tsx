import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHandshake,
  faLightbulb,
  faPuzzlePiece,
  faUsers,
  faLayerGroup,
  faCogs,
  faCommentDots,
  faLifeRing,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
const reasons = [
  //   {
  //     id: 1,
  //     title: "Reliable Provider of Integrated Technology",
  //     description:
  //       "We deliver comprehensive technology infrastructure and applications with reliability at the core.",
  //     icon: faCheckCircle,
  //   },
  {
    id: 2,
    title: "High Client Retention",
    description:
      "Our client-focused approach ensures long-term partnerships built on trust and satisfaction.",
    icon: faHandshake,
  },
  {
    id: 3,
    title: "Innovative Vision",
    description:
      "We prioritize forward-thinking strategies that empower businesses to stay ahead of the curve.",
    icon: faLightbulb,
  },
  {
    id: 4,
    title: "Tailored Solutions",
    description:
      "Each solution is customized to meet the unique needs and challenges of our clients.",
    icon: faPuzzlePiece,
  },
  {
    id: 5,
    title: "User-Centric Approach",
    description:
      "Our focus is on designing and implementing solutions that prioritize user experience.",
    icon: faUsers,
  },
  {
    id: 6,
    title: "Efficient Integration and Compatibility",
    description:
      "We ensure smooth integration of our solutions with your existing systems for seamless performance.",
    icon: faLayerGroup,
  },
  {
    id: 7,
    title: "Domain Expertise",
    description:
      "Our team has extensive knowledge and experience in various industry domains, ensuring best-fit solutions.",
    icon: faCogs,
  },
  {
    id: 8,
    title: "Transparent Communication",
    description:
      "We maintain clear, honest communication throughout every project for a collaborative experience.",
    icon: faCommentDots,
  },
  {
    id: 9,
    title: "Continuous Support and Updates",
    description:
      "We offer ongoing support and updates to ensure your solutions evolve with your business.",
    icon: faLifeRing,
  },
  {
    id: 10,
    title: "Cost-Effective Solutions",
    description:
      "Our cost-effective solutions deliver high-quality results within your budget.",
    icon: faDollarSign,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-pacifico">
          Why Clients Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center justify-center text-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="mb-4">
                <FontAwesomeIcon
                  icon={reason.icon}
                  className="text-voodoo-500 text-5xl"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
